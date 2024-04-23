
const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const {
  createCategoty,
  getCategories,
  singleCategoty,
  updateCategory,
  deleteCategory,
  getCategoriesForNav,
} = require("../controller/categoryController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/category"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.route("/admin/categories").get(getCategories);
router.route("/admin/category/:id").get(singleCategoty);

router.route("/admin/categories/nav").get(getCategoriesForNav);

// admin

router
  .route("/admin/create-category")
  .post(isAuthenticatedUser, upload.single("image"), createCategoty);

router
  .route("/admin/category/update/:id")
  .put(isAuthenticatedUser, upload.single("image"), updateCategory);
router
  .route("/admin/category/delete/:id")
  .delete(isAuthenticatedUser, deleteCategory);

module.exports = router;
