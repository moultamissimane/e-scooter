import { Router } from "express";
const router = Router();
import { model } from "mongoose";
const User = model("user");
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs";
require("dotenv").config();

const Register = async (req, res) => {
  const { name, email, password, address } = req.body;
  try {
    const user = new User({ name, email, password, address });
    await user.save();
    const token = sign({ userId: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }

  User.findOne({ email }).then((savedUser) => {
    if (savedUser) {
      return res
        .status(422)
        .json({ error: "User already exists with that email" });
    }

    const user = new User({
      name,
      email,
      password,
      address,
    });
    user
      .save()
      .then((user) => {
        res.json({ message: "saved successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default Register;
