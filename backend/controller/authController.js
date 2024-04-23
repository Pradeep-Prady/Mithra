const catchAsyncError = require("../middlewares/catchAsyncError");
const path = require("path");
const dotenv = require("dotenv");
const Category = require("../models/categoryModel");
const SubCategory = require("../models/subCategoryModel");
const Product = require("../models/productModel");

const jwt = require("jsonwebtoken");


dotenv.config({ path: path.join(__dirname, "config/config.env") });

const ErrorHandler = require("../utils/errorHandler");

exports.loginAdmin = catchAsyncError(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(
      new ErrorHandler("Please enter a valid username and password", 400)
    );
  }

  if (username === process.env.USERID && password === process.env.PASSWORD) {
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_TIME, // Specify token expiration time
    });

    const options = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    res.status(200).cookie("token", token, options).json({
      success: true,
      token,
      user: true,
    });
  } else {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
});

exports.getUserProfile = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first to assess this resource", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    res.status(200).json({
      success: true,
      user: true,
    });
  } catch (error) {
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
});

exports.logoutUser = (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    status: "success",
    message: "User logged out",
  });
};

exports.getDashboardDetails = catchAsyncError(async (req, res, next) => {
  try {
    const products = await Product.find();
    const subCategory = await SubCategory.find();
    const category = await Category.find();

    res.status(200).json({
      success: true,
      products: products.length,
      subCategory: subCategory.length,
      category: category.length,
    });
  } catch (err) {
    console.log(err);
  }
});
