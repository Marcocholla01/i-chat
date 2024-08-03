const mongoose = require(`mongoose`);

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    avatar: { type: String, default: "" },
  },
  { timestamps: true }
);

exports.userModel = mongoose.model("User", userSchema);
