import { Router } from "express";
const router = Router();
import { model } from "mongoose";
const User = model("user");
import { sign } from "jsonwebtoken";
import { compare } from "bcryptjs";
require("dotenv").config();

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add email or password" });
  }
  const savedUser = await User.findOne({ email: email });
  if (!savedUser) {
    return res.status(422).json({ error: "Invalid email or password" });
  }
  try {
    compare(password, savedUser.password, (err, result) => {
      if (result) {
        console.log("password matched 😊");
        const token = sign({ userId: User._id }, process.env.JWT_SECRET);
        res.send({ token });
      } else {
        return res.status(422).json({ error: "Invalid email or password" });
      }
    });
  } catch (err) {
    return res.status(422).json({ error: "Invalid email or password" });
  }
};

export default Login;
