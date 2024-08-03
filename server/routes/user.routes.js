const {
  getUsersForSidebar,
  getUser,
} = require("../controllers/user.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");

const router = require(`express`).Router();

router.get(`/`, isAuthenticated, getUsersForSidebar);
router.get(`/find`, isAuthenticated, getUser);
module.exports = router;
