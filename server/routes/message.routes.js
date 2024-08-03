const {
  sendMessage,
  getMessages,
} = require("../controllers/message.controller");
const { isAuthenticated } = require("../middlewares/auth.middleware");

const router = require(`express`).Router();

router.get(`/:conversationId`, isAuthenticated, getMessages);
router.post(`/send/:recieverId`, isAuthenticated, sendMessage);

module.exports = router;
