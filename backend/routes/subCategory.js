const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const {
  createSubCategoty,
  singleSubCategoty,
  updateSubCategory,
  deleteSubCategory,
  getSubCategories,
} = require("../controller/subCategoryController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/subCategory"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.route("/admin/:categoryId/subcategories").get(getSubCategories);
router.route("/admin/subcategory/:id").get(singleSubCategoty);

// admin
router
  .route("/admin/create-subcategory")
  .post(isAuthenticatedUser, upload.single("image"), createSubCategoty);

router
  .route("/admin/subcategory/update/:id")
  .put(isAuthenticatedUser, upload.single("image"), updateSubCategory);
router
  .route("/admin/subcategory/delete/:id")
  .delete(isAuthenticatedUser, deleteSubCategory);

module.exports = router;
