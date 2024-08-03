const jwt = require(`jsonwebtoken`);
const {
  JWT_SECRET_KEY,
  JWT_EXPIRES_IN,
  COOKIE_EXPIRES_IN,
} = require("../config/config");

exports.generateTokenAndSetCookie = (userId, res) => {
  const jwtToken = jwt.sign({ userId }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES_IN,
  });

  // Cookie options
  const options = {
    path: "/",
    secure: true,
    httpOnly: true, // To Prevent XSS (Cross-site Scripting ) attacks
    sameSite: "none", // To prevent CSRF (Cross-site Request forgery) attacks
    maxAge: Date.now() + parseInt(COOKIE_EXPIRES_IN),
  };

  res.cookie("i-chat-token", jwtToken, options);
};
