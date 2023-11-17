const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"]
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "phone number is required"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email number is required"],
    },
     password: {
      type: String, 
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema); 