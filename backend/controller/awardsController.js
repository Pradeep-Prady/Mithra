const { ref, uploadBytesResumable, getDownloadURL } = require("firebase/storage");
const catchAsyncError = require("../middlewares/catchAsyncError");
const {
  addData,
  getAllDatas,
  getById,
  UpdateById,
  deleteById,
} = require("../services/awardsService");
const ErrorHandler = require("../utils/errorHandler");

exports.createAward = catchAsyncError(async (req, res, next) => {
  try {
    let image;

    let BASE_URL = process.env.BACKEND_URL;

    if (process.env.NODE_ENV === "production") {
      BASE_URL = `${req.protocol}://${req.get("host")}`;

      
    }

    if (req.file) {
      // image = `${BASE_URL}/uploads/awards/${req.file.originalname}`;

      const storageRef = ref(storage, `awards/${req.file.originalname}`);

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
    return next(new ErrorHandler(400, "award not Created"));
  }
});

exports.getAwards = catchAsyncError(async (req, res, next) => {
  try {
    const awards = await getAllDatas();
    return res.status(200).json({
      success: true,
      awards,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "award Not Available"));
  }
});

exports.getSingleAward = catchAsyncError(async (req, res, next) => {
  try {
    const award = await getById(req.params.id);
    return res.status(200).json({
      success: true,
      award,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "award Not Available"));
  }
});

exports.updateAward = catchAsyncError(async (req, res, next) => {
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
      // image = `${BASE_URL}/uploads/awards/${req.file.originalname}`;

      const storageRef = ref(storage, `awards/${req.file.originalname}`);

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

    const award = await UpdateById(req.params.id, categoryData);
    return res.status(200).json({
      success: true,
      award,
    });
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "award Not Available"));
  }
});

exports.deleteAward = catchAsyncError(async (req, res, next) => {
  try {
    const award = await deleteById(req.params.id);

    if (award) {
      return res.status(200).json({
        success: true,
        award,
      });
    } else {
      return next(new ErrorHandler(400, "award Not Available"));
    }
  } catch (err) {
    console.log(err);
    return next(new ErrorHandler(400, "award Not Available"));
  }
});
