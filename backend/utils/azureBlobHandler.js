const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");


exports.azureBlobHandler = async (req,containerName) => {
  try {
    const AZURE_STORAGE_ACCOUNT_NAME = process.env.AZURE_STORAGE_ACCOUNT_NAME;
    const AZURE_STORAGE_ACCOUNT_KEY = process.env.AZURE_STORAGE_ACCOUNT_KEY;

    // const containerName = "product-images";

    const sharedKeyCredential = new StorageSharedKeyCredential(
      AZURE_STORAGE_ACCOUNT_NAME,
      AZURE_STORAGE_ACCOUNT_KEY
    );

    const blobServiceClient = new BlobServiceClient(
      `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net`,
      sharedKeyCredential
    );

    const containerClient = blobServiceClient.getContainerClient(containerName);

    // Generate BASE_URL for Azure Blob Storage
    const BASE_URL = `https://${AZURE_STORAGE_ACCOUNT_NAME}.blob.core.windows.net/${containerName}`;

    const images = []; // Declare images array within the function scope

    if (req?.files?.length > 0) {
      await Promise.all(
        req.files.map(async (file) => {
          const blobName = `${uuidv4()}-${file.originalname}`;
          const blobClient = containerClient.getBlobClient(blobName);

          const stream = fs.createReadStream(file.path);
          const uploadBlobResponse = await blobClient.uploadStream(
            stream,
            4 * 1024 * 1024,
            20,
            {
              blobHTTPHeaders: {
                blobContentType: file.mimetype,
              },
            }
          );

          // Construct image URL
          const imageUrl = `${BASE_URL}/${blobName}`;
          images.push({ image: imageUrl });
        })
      );
    }

    return images; // Return images array after processing files

  } catch (e) {
    console.log(e);
  }
};