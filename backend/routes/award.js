const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const {
  createAward,
  getAwards,
  getSingleAward,
  updateAward,
  deleteAward,
} = require("../controller/awardsController");
const { isAuthenticatedUser } = require("../middlewares/authenticate");

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "..", "uploads/awards"));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

router.route("/admin/awards").get(getAwards);
router.route("/admin/award/:id").get(getSingleAward);

// admin

router
  .route("/admin/create-award")
  .post(isAuthenticatedUser, upload.single("image"), createAward);

router
  .route("/admin/award/update/:id")
  .put(isAuthenticatedUser, upload.single("image"), updateAward);
router
  .route("/admin/award/delete/:id")
  .delete(isAuthenticatedUser, deleteAward);

module.exports = router;
