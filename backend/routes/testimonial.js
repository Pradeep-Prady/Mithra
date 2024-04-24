const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const {
  createTestimonial,
  getTestimonials,
  getSingleTestimonial,
  updateTestimonial,
  deleteTestimonial,
} = require("../controller/testimonialController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, "..", "uploads/testimonial"));
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname);
//     },
//   }),
// });

const upload = multer({
  storage: multer.memoryStorage(),
});

router.route("/admin/testimonials").get(getTestimonials);
router.route("/admin/testimonial/:id").get(getSingleTestimonial);

// admin

router
  .route("/admin/create-testimonial")
  .post(isAuthenticatedUser, upload.single("image"), createTestimonial);

router
  .route("/admin/testimonial/update/:id")
  .put(isAuthenticatedUser, upload.single("image"), updateTestimonial);
router
  .route("/admin/testimonial/delete/:id")
  .delete(isAuthenticatedUser, deleteTestimonial);

module.exports = router;
