import { Router } from "express";
import Login from "../controllers/LoginController";
import Register from "../controllers/RegisterController";
const router = Router();

router.post("/signup", Register);
router.post("/login", Login);

export default router;
