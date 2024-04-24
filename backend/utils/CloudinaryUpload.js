const { v2 } = require("cloudinary");

v2.config({
  cloud_name: "dzmjojnm7",
  api_key: "136575873782649",
  api_secret: "pB6cIW-2cHlR3Ety8V18YiKptqw",
});

exports.UploadImage = (image) => {
    
  return new Promise((resolve, reject) => {
    v2.uploader.upload(
      image,
      { public_id: "olympic_flag" },
      (error, result) => {
        if (error) {
          console.error("Error uploading image to Cloudinary:", error);
          reject('upload',error);
        } else {
          console.log("Image uploaded successfully:", result);
          resolve(result.secure_url);  
        }
      }
    );
  });
};
