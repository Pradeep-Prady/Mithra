const { Types, default: mongoose } = require("mongoose");
const catchAsyncError = require("../middlewares/catchAsyncError");
const {
  addSubCategory,
  getSubCategoriesService,
  getSubCategorybyId,
  deleteSubCategory,
  update,
} = require("../services/subCategoryServices");
const Category = require("../models/categoryModel");
const ErrorHandler = require("../utils/errorHandler");

exports.createSubCategoty = catchAsyncError(async (req, res, next) => {
  try {
    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req.file) {
      image = `${BASE_URL}/uploads/subCategory/${req.file.originalname}`;
    }

    req.body.image = image;

    const subCategory = await addSubCategory(req.body);

    res.status(201).json({
      success: true,
      subCategory,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Sub Category not Created", 400));
  }
});

exports.getSubCategories = catchAsyncError(async (req, res, next) => {
  try {
    const { categoryId } = req.params;

    const category = await Category.findById({ _id: categoryId });
    const subCategories = await getSubCategoriesService(categoryId);

    return res.status(200).json({
      success: true,
      name: category?.name,

      subCategories,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("subCategories Not Available", 400));
  }
});

exports.singleSubCategoty = catchAsyncError(async (req, res, next) => {
  try {
    const subCategory = await getSubCategorybyId(req.params.id);
    return res.status(200).json({
      success: true,
      subCategory,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("subCategory Not Available", 400));
  }
});

exports.updateSubCategory = catchAsyncError(async (req, res, next) => {
  try {
    const categoryId = req.body.category;
    const isValidObjectId = Types.ObjectId.isValid(categoryId);

    if (!isValidObjectId) {
      return next(new ErrorHandler("Invalid ObjectId for category", 400));
    }

    let subCategoryData = {
      name: req.body.name,
      description: req.body.description,
      category: categoryId,
    };
    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req.file) {
      image = `${BASE_URL}/uploads/subCategory/${req.file.originalname}`;
      subCategoryData = { ...subCategoryData, image };
    }

    const subCategory = await update(req.params.id, subCategoryData);
    return res.status(200).json({
      success: true,
      subCategory,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Category Not Available", 400));
  }
});

exports.deleteSubCategory = catchAsyncError(async (req, res, next) => {
  try {
    const subCategory = await deleteSubCategory(req.params.id);

    if (subCategory) {
      return res.status(200).json({
        success: true,
        subCategory,
      });
    } else {
      return next(new ErrorHandler("Category Not Available", 400));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Category Not Available", 400));
  }
});
