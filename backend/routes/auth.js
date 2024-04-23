const express = require("express");
const {
  loginAdmin,
  getUserProfile,
  logoutUser,
  getDashboardDetails,
} = require("../controller/authController");

const { isAuthenticatedUser } = require("../middlewares/authenticate");

const router = express.Router();

router.route("/admin/login").post(loginAdmin);
router.route(`/admin/me`).get(isAuthenticatedUser, getUserProfile);
router.route("/admin/dashboard").get(isAuthenticatedUser, getDashboardDetails);
router.route(`/admin/logout`).get(logoutUser);

module.exports = router;
