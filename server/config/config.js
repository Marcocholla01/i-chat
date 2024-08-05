const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({
    path: "server/config/.env",
  });
}

exports.PORT = process.env.PORT;
exports.MONGOBD_URI = process.env.MONGOBD_URI;
exports.FRONTEND_URL = process.env.FRONTEND_URL;

exports.ACTIVATION_SECRET_KEY = process.env.ACTIVATION_SECRET_KEY;
exports.ACTIVATION_EXPIRES_IN = process.env.ACTIVATION_EXPIRES_IN;
exports.COOKIE_EXPIRES_IN = process.env.COOKIE_EXPIRES_IN;
exports.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
