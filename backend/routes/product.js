const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  getSingleProduct,
} = require("../controller/productController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/product"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.route("/admin/:subCategoryId/products").get(getProducts);

router.route("/admin/product/:id").get(getSingleProduct);

// admin
router
  .route("/admin/create-product")
  .post(isAuthenticatedUser, upload.array("images"), createProduct);

router
  .route("/admin/product/update/:id")
  .put(isAuthenticatedUser, upload.array("images"), updateProduct);
router
  .route("/admin/product/delete/:id")
  .delete(isAuthenticatedUser, deleteProduct);

module.exports = router;
