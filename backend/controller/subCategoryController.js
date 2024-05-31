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
const {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} = require("firebase/storage");
const { storage } = require("../utils/firebaseConfig");
const { getCategorybyId } = require("../services/categoryServices");

exports.createSubCategoty = catchAsyncError(async (req, res, next) => {
  try {
    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req.file) {
      // image = `${BASE_URL}/uploads/subCategory/${req.file.originalname}`;

      const storageRef = ref(storage, `subCategory/${req.file.originalname}`);

      const metadata = {
        contentType: req.file.mimetype,
      };

      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );

      image = await getDownloadURL(snapshot.ref);
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

    if (!categoryId) {
      return next(new ErrorHandler("categoryId is required", 400));
    }

    const category = await getCategorybyId({ _id: categoryId });
    const subCategories = await getSubCategoriesService(categoryId);
8
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

    const existingSubCategory = await getSubCategorybyId(req.params.id);

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
    const oldImageUrl = existingSubCategory.image;

    if (oldImageUrl) {
      const oldFileName = decodeURIComponent(
        oldImageUrl.split("/").pop().split("#")[0].split("?")[0]
      );
      const oldImageRef = ref(storage, `${oldFileName}`);

      // Delete the old image from Firebase Storage
      try {
        // console.log(`Attempting to delete old image: ${oldImageRef}`);
        await deleteObject(oldImageRef);
        // .then(() => {
        //   console.log("Old image deleted successfully");
        // })
        // .catch((error) => {
        //   console.log("Error deleting old image: ", error);
        // });

        // console.log("Old image deleted successfully");
      } catch (error) {
        if (error.code === "storage/object-not-found") {
          console.log("Old image not found, proceeding with update");
        } else {
          console.log("Error deleting old image: ", error);
          return next(new ErrorHandler(500, "Error deleting old image"));
        }
      }
    }

    if (req.file) {
      // image = `${BASE_URL}/uploads/subCategory/${req.file.originalname}`;

      const storageRef = ref(storage, `subCategory/${req.file.originalname}`);

      const metadata = {
        contentType: req.file.mimetype,
      };

      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );

      image = await getDownloadURL(snapshot.ref);
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
