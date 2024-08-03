const { userModel } = require("../models/user.model");

exports.getUsersForSidebar = async (req, res) => {
  const { _id: userId } = req.auth;
  try {
    // retuns all user eliminating the already logged in user
    const allUsers = await userModel
      .find({ _id: { $ne: userId } })
      .sort({ createdAt: -1 })
      .select("-password");

    if (!allUsers) return res.status(200).json({ success: true, users: [] });
    res.status(200).json({ success: true, users: allUsers });
  } catch (error) {
    console.log(`Error in getUsersForSidebar controller : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};

// Get single user
exports.getUser = async (req, res) => {
  const { _id } = req.auth;
  try {
    const user = await userModel.findById({ _id }).select("-password");

    if (!user)
      return res
        .status(404)
        .json({ success: true, message: `User does not exists` });
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(`Error in getUser controller : ${error.message}`);
    return res.status(500).json({ success: true, message: error.message });
  }
};
