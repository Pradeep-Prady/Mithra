const catchAsyncError = require("../middlewares/catchAsyncError");
const {
  addData,
  getAllDatas,
  getById,
  UpdateById,
  deleteById,
} = require("../services/productServices");

const Product = require("../models/productModel");
const SubCategory = require("../models/subCategoryModel");
const ErrorHandler = require("../utils/errorHandler");
const {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} = require("firebase/storage");
const { storage } = require("../utils/firebaseConfig");

// exports.createProduct = catchAsyncError(async (req, res, next) => {
//   try {
//     let images = [];

//     let BASE_URL = process.env.BACKEND_URL;

//     if (process.env.NODE_ENV === "production") {
//       BASE_URL = `${req.protocol}://${req.get("host")}`;
//     }

//     if (req?.files?.length > 0) {
//       req.files.forEach(async (file) => {

//         console.log(file)
//         const storageRef = ref(storage, `product/${file.originalname}`);

//         const metadata = {
//           contentType: file.mimetype,
//         };

//         const snapshot = await uploadBytesResumable(
//           storageRef,
//           file.buffer,
//           metadata
//         );

//         let url = await getDownloadURL(snapshot.ref);

//         images.push({ image: url });
//       });
//     }

//     req.body.images = images;

//     console.log(images);

//     const product = await addData(req.body);

//     if (!product) {
//       return next(new ErrorHandler("Product Not Created", 400));
//     }

//     res.status(201).json({
//       success: true,
//       product,
//     });
//   } catch (err) {
//     console.log(err);
//     return next(new ErrorHandler("Product not Created", 400));
//   }
// });

exports.createProduct = catchAsyncError(async (req, res, next) => {
  try {
    let images = [];
    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req?.files?.length > 0) {
      for (const file of req.files) {
        // Log the filename to ensure it's unique
        console.log("Filename:", file.originalname);

        // Log the file buffer to ensure it contains the correct image data
        console.log("File Buffer:", file.buffer);

        const storageRef = ref(storage, `product/${file.originalname}`);
        const metadata = { contentType: file.mimetype };

        const snapshot = await uploadBytesResumable(
          storageRef,
          file.buffer,
          metadata
        );
        const url = await getDownloadURL(snapshot.ref);

        images.push({ image: url });

        // Log the uploaded image URL
        console.log("Uploaded Image URL:", url);
      }
    }

    req.body.images = images;

    console.log("Images:", images);

    const product = await addData(req.body);

    if (!product) {
      return next(new ErrorHandler("Product Not Created", 400));
    }

    res.status(201).json({ success: true, product });
  } catch (err) {
    console.error(err);
    return next(new ErrorHandler("Product not Created", 400));
  }
});

// exports.createProduct = catchAsyncError(async (req, res, next) => {
//   try {
//     req.body.images = await azureBlobHandler(req, "product");

//     const product = await addData(req.body);

//     if (!product) {
//       return next(new ErrorHandler("Product Not Created", 400));
//     }

//     res.status(201).json({
//       success: true,
//       product,
//     });
//   } catch (err) {
//     console.log(err);
//     return next(new ErrorHandler("Product not Created", 400));
//   }
// });

exports.getProducts = catchAsyncError(async (req, res, next) => {
  try {
    const { subCategoryId } = req.params;
    const subCategory = await SubCategory.findById({ _id: subCategoryId });
    const products = await getAllDatas(subCategoryId);
    return res.status(200).json({
      success: true,
      name: subCategory?.name,
      products,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Products Not Available", 400));
  }
});

exports.getSingleProduct = catchAsyncError(async (req, res, next) => {
  try {
    const product = await getById(req.params.id);
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Product Not Available", 400));
  }
});

// exports.updateProduct = catchAsyncError(async (req, res, next) => {
//   try {
//     let data = await Product.findById(req.params.id);

//     let images = [];

//     if (req.body.imagesCleared === "false") {
//       images = data.images;
//     }

//     if (req?.files?.length > 0) {
//       for (const file of req.files) {
//         const storageRef = ref(storage, `product/${file.originalname}`);
//         const metadata = { contentType: file.mimetype };

//         const snapshot = await uploadBytesResumable(
//           storageRef,
//           file.buffer,
//           metadata
//         );
//         const url = await getDownloadURL(snapshot.ref);

//         images.push({ image: url });
//       }
//     }

//     req.body.images = images;

//     const product = await UpdateById(req.params.id, req.body);
//     return res.status(200).json({
//       success: true,
//       product,
//     });
//   } catch (err) {
//     console.log(err);
//     return next(new ErrorHandler("Product Not Updated", 400));
//   }
// });
 
exports.updateProduct = catchAsyncError(async (req, res, next) => {
  try {
    const productId = req.params.id;

    let data = await Product.findById(productId);
    if (!data) {
      return next(new ErrorHandler(404, "Product Not Found"));
    }

    let images = [];

    if (req.body.imagesCleared === "false") {
      images = data.images;
    } else {
      // If imagesCleared is true, delete the old images
      for (const image of data.images) {
        const oldImageUrl = image.image;
        if (oldImageUrl) {
          const oldFileName = decodeURIComponent(
            oldImageUrl.split('/').pop().split('#')[0].split('?')[0]
          );
          const oldImageRef = ref(storage, ` ${oldFileName}`);


          console.log(oldImageRef)
          // Delete the old image from Firebase Storage
          try {
            await deleteObject(oldImageRef);
            console.log(`Deleted old image: ${oldFileName}`);
          } catch (error) {
            if (error.code === 'storage/object-not-found') {
              console.log("Old image not found, skipping deletion");
            } else {
              console.log("Error deleting old image: ", error);
              return next(new ErrorHandler(500, "Error deleting old image"));
            }
          }
        }
      }
    }

    if (req?.files?.length > 0) {
      for (const file of req.files) {
        const storageRef = ref(storage, `product/${file.originalname}`);
        const metadata = { contentType: file.mimetype };

        const snapshot = await uploadBytesResumable(
          storageRef,
          file.buffer,
          metadata
        );
        const url = await getDownloadURL(snapshot.ref);

        images.push({ image: url });
      }
    }

    req.body.images = images;

    const product = await UpdateById(productId, req.body);
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Product Not Updated", 400));
  }
});

 

exports.deleteProduct = catchAsyncError(async (req, res, next) => {
  try {
    const product = await deleteById(req.params.id);

    if (product) {
      return res.status(200).json({
        success: true,
        product,
      });
    } else {
      return next(new ErrorHandler("Product Not Available", 400));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Product Not Deleted", 400));
  }
});
