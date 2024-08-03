const bcrypt = require(`bcryptjs`);

const { userModel } = require("../models/user.model");
const { generateTokenAndSetCookie } = require("../utils/generateToken");

exports.createUser = async (req, res) => {
  const { fullName, userName, password, confirmPassword, gender, email } =
    req.body;
  if (!fullName || !userName || !password || !confirmPassword || !gender)
    return res
      .status(400)
      .json({ success: false, message: `Please fill all the fileds` });

  if (confirmPassword !== password)
    return res
      .status(400)
      .json({ sucess: false, message: `Passwords do not match` });

  try {
    const existingUsername = await userModel.findOne({ userName });
    if (existingUsername)
      return res.status(409).json({
        success: false,
        message: `User with username: ${userName}  already exists`,
      });

    const existingEmail = await userModel.findOne({ email });
    if (existingEmail)
      return res.status(409).json({
        success: false,
        message: `User with email: ${email}  already exists`,
      });

    // hashpassword
    const hashpassword = bcrypt.hashSync(password, 10);

    // Generate avatar
    const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = userModel({
      fullName,
      email,
      password: hashpassword,
      userName,
      gender,
      avatar: gender === "male" ? boyAvatar : girlAvatar,
    });

    await newUser.save();
    // TODO SEND MAIL

    res.status(201).json({
      success: true,
      message: `Account created successfully`,
      user: {
        userId: newUser._id,
        email: newUser.email,
        avatar: newUser.avatar,
        fullName: newUser.fullName,
      },
    });
  } catch (error) {
    console.log(`Error in createUser controller : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};

//
exports.loginUser = async (req, res) => {
  const { identifier, password } = req.body;

  if (!identifier || !password)
    return res
      .status(400)
      .json({ success: false, message: `Please fill all the fileds` });

  try {
    const existingUser =
      (await userModel.findOne({ email: identifier }).select(`+password`)) ||
      (await userModel.findOne({ userName: identifier }).select(`+password`));
    // console.log(existingUser.password);

    if (!existingUser)
      return res.status(404).json({
        succcess: false,
        message: `${identifier} user account does not exists`,
      });

    const matchedPassword = bcrypt.compare(password, existingUser.password);
    if (!matchedPassword)
      return res
        .status(403)
        .json({ success: false, message: `Invalid credentials` });

    generateTokenAndSetCookie(existingUser._id, res);

    res.status(200).json({
      success: true,
      message: `Login successfully`,
      user: {
        userId: existingUser._id,
        email: existingUser.email,
        avatar: existingUser.avatar,
        fullName: existingUser.fullName,
      },
    });
  } catch (error) {
    console.log(`Error in loginUser controller : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};

exports.logoutUser = async (req, res) => {
  try {
    res.cookie("i-chat-token", "", null);
    res
      .status(200)
      .json({ success: true, message: `You have successfully logout` });
  } catch (error) {
    console.log(`Error in logoutUser controller : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};
exports.verifyUser = async (req, res) => {};
exports.forgotPassword = async (req, res) => {};
exports.resetPassword = async (req, res) => {};
