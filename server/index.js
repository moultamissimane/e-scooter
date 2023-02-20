// import express from "express";
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const startServer = require("./Config/Db").startServer; 
const json = require("express").json;
const User  = require("./Models/UserModel");
const AuthRoutes = require("./Routes/UserRoutes");
const requireToken = require("./middleware/AuthMiddleware");

app.use(json());

app.use(AuthRoutes);

app.get("/", requireToken, (req, res) => {
  console.log(req.user);
  res.send("user_id:" + req.user);
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT} successfully ✨`);
});

startServer();

