const {
  createUser,
  loginUser,
  logoutUser,
  verifyUser,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth.controller");

const router = require(`express`).Router();

router.post(`/create-user`, createUser);
router.post(`/login-user`, loginUser);
router.post(`/logout-user`, logoutUser);
router.post(`/verify-user`, verifyUser);
router.post(`/forgot-password`, forgotPassword);
router.post(`/reset-password`, resetPassword);

module.exports = router;
