const ErrorHandler = require("../utils/errorHandler");
const catchAsyncError = require("./catchAsyncError");

const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Login first to assess this resource", 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  
    next();
  } catch (error) {
  
    return next(new ErrorHandler("Invalid or expired token", 401));
  }
});
