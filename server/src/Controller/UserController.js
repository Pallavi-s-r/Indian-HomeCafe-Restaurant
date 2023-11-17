const userModel = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const data = req.body;

    const oldUser = await userModel.findOne({ phone: req.body.phone });
    if (oldUser) {
      return res.status(200).send({
        success: true,
        message: "You are already registered",
      });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the salt rounds

    // Updating the password in the request body with the hashed one
    data.password = hashedPassword;

    const user = await userModel.create(data);
    return res.status(200).send({ success: true, message: "successfully registered", data: user });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ success: false, message: "Register first" });
    }

    // Comparing the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).send({ success: false, message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, "RestroLogin");
    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}

module.exports = { register, login };
