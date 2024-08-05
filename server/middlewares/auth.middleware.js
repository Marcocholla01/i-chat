const jwt = require(`jsonwebtoken`);

const { JWT_SECRET_KEY } = require("../config/config");
const { userModel } = require("../models/user.model");

exports.isAuthenticated = async (req, res, next) => {
  // console.log(req.headers);
  const token =
    req.cookies.i_chat_token ||
    req.header(`cookie`)?.replace("i_chat_token=", "") ||
    req.header(`Authorization`)?.replace("Bearer ", "");
  try {
    if (!token)
      return res
        .status(401)
        .json({ success: false, message: `unathorized - No token provided` });

    const decoded = await jwt.verify(token, JWT_SECRET_KEY);
    if (!decoded)
      return res
        .status(403)
        .json({ success: false, message: `unathorized - Invalid token` });

    const user = await userModel.findById(decoded.userId).select(`-password`);
    if (!user)
      return res
        .status(404)
        .json({ success: false, message: `unauthorized - user not found` });

    req.auth = user;

    next();
  } catch (error) {
    console.log(`Error in isAuthenticated middleware : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};
