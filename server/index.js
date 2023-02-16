import express from "express";
const app = express();
import { json } from "body-parser";
const PORT = process.env.PORT || 5000;
import connectDB from "./config/Db";
import "./models/User";
import AuthRoutes from "./Routes/AuthRoutes";
import requireToken from "./middlewares/VerifyJwt";

connectDB();

app.use(json());

app.use(AuthRoutes);

app.get("/", requireToken, (req, res) => {
  console.log(req.user);
  res.send("user_id:" + req.user);
});

app.listen(PORT, () => {
  console.log(`listening on PORT: ${PORT} successfully ✨`);
});
