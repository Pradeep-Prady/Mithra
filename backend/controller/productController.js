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
const { azureBlobHandler } = require("../utils/azureBlobHandler");

exports.createProduct = catchAsyncError(async (req, res, next) => {
  try {
    let images = [];

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req?.files?.length > 0) {
      req.files.forEach((file) => {
        let url = `${BASE_URL}/uploads/product/${file.filename}`;
        images.push({ image: url });
      });
    }

    req.body.images = images;

    const product = await addData(req.body);

    if (!product) {
      return next(new ErrorHandler("Product Not Created", 400));
    }

    res.status(201).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
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

exports.updateProduct = catchAsyncError(async (req, res, next) => {
  try {
    let data = await Product.findById(req.params.id);

    let images = [];

    if (req.body.imagesCleared === "false") {
      images = data.images;
    }
    if (req.files && req.files.length > 0) {
      req.files.forEach((file) => {
        let url = `${process.env.BACKEND_URL}/uploads/product/${file.originalname}`;
        images.push({ image: url });
      });
    }

    req.body.images = images;

    const product = await UpdateById(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      product,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Product Not Updated", 400));
  }
});

// exports.updateProduct = catchAsyncError(async (req, res, next) => {
//   try {
//     let data = await Product.findById(req.params.id);

//     let images = [];

//     console.log(req.body);

//     if (req.body.imagesCleared === "false") {
//       images = data.images;
//     } else {
//       images = await azureBlobHandler(req, "product");
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
