const catchAsyncError = require("../middlewares/catchAsyncError");
const {
  add,
  update,
  getCategorybyId,
  getCategoriesService,
  deleteCategory,
} = require("../services/categoryServices");
const ErrorHandler = require("../utils/errorHandler");
const SubCategory = require("../models/subCategoryModel");
const Product = require("../models/productModel");
const { getSubCategoriesService } = require("../services/subCategoryServices");
const { UploadImage } = require("../utils/CloudinaryUpload");
const { UploadImageFireBase, storage } = require("../utils/firebaseConfig");
const {
  uploadBytesResumable,
  getDownloadURL,
  ref,
} = require("firebase/storage");

exports.createCategoty = catchAsyncError(async (req, res, next) => {
  try {
    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req.file) {
      // image = `${BASE_URL}/uploads/category/${req.file.originalname}`;
      // image =await UploadImageFireBase(req, res);

      const storageRef = ref(storage, `category/${req.file.originalname}`);

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

    // UploadImage(req.file)

    // const imageUrl = UploadImageFireBase(req, res)

    // console.log("imageUrl", image);

    req.body.image = image;

    // console.log(req.body)
    const category = await add(req.body);

    res.status(201).json({
      success: true,
      category,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("Category not Created", 400));
  }
});

exports.getCategories = catchAsyncError(async (req, res, next) => {
  try {
    const categories = await getCategoriesService();
    return res.status(200).json({
      success: true,
      categories,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "Category Not Available"));
  }
});

exports.singleCategoty = catchAsyncError(async (req, res, next) => {
  try {
    const category = await getCategorybyId(req.params.id);
    return res.status(200).json({
      success: true,
      category,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "Category Not Available"));
  }
});

exports.updateCategory = catchAsyncError(async (req, res, next) => {
  try {
    let categoryData = {
      name: req.body.name,
      description: req.body.description,
    };

    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req.file) {
      
      // image = `${BASE_URL}/uploads/category/${req.file.originalname}`;

      const storageRef = ref(storage, `category/${req.file.originalname}`);

      const metadata = {
        contentType: req.file.mimetype,
      };

      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );

      image = await getDownloadURL(snapshot.ref);

      categoryData = { ...categoryData, image };
    }

    const category = await update(req.params.id, categoryData);
    return res.status(200).json({
      success: true,
      category,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "Category Not Available"));
  }
});

exports.deleteCategory = catchAsyncError(async (req, res, next) => {
  try {
    const categoryId = req.params.id;

    const subcategories = await SubCategory.find({ category: categoryId });

    for (const subcategory of subcategories) {
      await Product.deleteMany({ subCategory: subcategory._id });
    }

    await SubCategory.deleteMany({ category: categoryId });

    const result = await deleteCategory(categoryId);

    if (result) {
      return res.status(200).json({
        success: true,
        message:
          "Category and associated subcategories and products deleted successfully",
      });
    } else {
      return next(new ErrorHandler(400, "Category Not Available"));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "Category Deletion Failed"));
  }
});

// exports.getCategories = catchAsyncError(async (req, res, next) => {
//   try {
//     const categories = await getCategoriesService();

//     const { categoryId } = req.params;

//     const category = await Category.findById({ _id: categoryId });
//     const subCategories = await getSubCategoriesService(categoryId);

//     return res.status(200).json({
//       success: true,
//       categories,
//     });
//   } catch (err) {
//     console.log(err);
//     return next(new ErrorHandler(400, "Category Not Available"));
//   }
// });

exports.getCategoriesForNav = catchAsyncError(async (req, res, next) => {
  try {
    // Fetch all categories and populate their subcategories
    const categories = await getCategoriesService();
    const subCategories = await SubCategory.find();

    let data = [];

    for (const category of categories) {
      // Find subcategories for the current category
      const categorySubCategories = subCategories.filter(
        (sub) => sub.category.toString() === category._id.toString()
      );

      // Push category data along with its subcategories to the data array
      data.push({
        category: category.name,
        subCategories: categorySubCategories,
      });
    }

    return res.status(200).json({
      success: true,
      // categories,
      // subCategories,
      data,
    });
  } catch (err) {
    console.error(err);
    return next(new ErrorHandler(400, "Categories Not Available"));
  }
});
