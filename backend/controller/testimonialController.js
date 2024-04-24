const { ref, uploadBytesResumable, getDownloadURL } = require("firebase/storage");
const catchAsyncError = require("../middlewares/catchAsyncError");

const {
  addData,
  getAllDatas,
  getById,
  UpdateById,
  deleteById,
} = require("../services/testimonialService");

const ErrorHandler = require("../utils/errorHandler");
const { storage } = require("../utils/firebaseConfig");

exports.createTestimonial = catchAsyncError(async (req, res, next) => {
  try {
    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req.file) {
      // image = `${BASE_URL}/uploads/testimonial/${req.file.originalname}`;
      const storageRef = ref(storage, `testimonial/${req.file.originalname}`);

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

    const award = await addData(req.body);

    res.status(201).json({
      success: true,
      award,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("testimonial not Created", 400));
  }
});

exports.getTestimonials = catchAsyncError(async (req, res, next) => {
  try {
    const testimonials = await getAllDatas();
    return res.status(200).json({
      success: true,
      testimonials,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("testimonial Not Available", 400));
  }
});

exports.getSingleTestimonial = catchAsyncError(async (req, res, next) => {
  try {
    const testimonial = await getById(req.params.id);
    return res.status(200).json({
      success: true,
      testimonial,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("testimonial Not Available", 400));
  }
});

exports.updateTestimonial = catchAsyncError(async (req, res, next) => {
  try {
    let categoryData = {
      name: req.body.name,
      review: req.body.review,
      role: req.body.role,
    };

    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;
    }

    if (req.file) {
      // image = `${BASE_URL}/uploads/testimonial/${req.file.originalname}`;

      const storageRef = ref(storage, `testimonial/${req.file.originalname}`);

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

    const testimonial = await UpdateById(req.params.id, categoryData);
    return res.status(200).json({
      success: true,
      testimonial,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("testimonial Not Available", 400));
  }
});

exports.deleteTestimonial = catchAsyncError(async (req, res, next) => {
  try {
    const testimonial = await deleteById(req.params.id);

    if (testimonial) {
      return res.status(200).json({
        success: true,
        testimonial,
      });
    } else {
      return next(new ErrorHandler("testimonial Not Available", 400));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler("testimonial Not Available", 400));
  }
});
