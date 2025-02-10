import express from "express";
import { signup, login, getUserDetails, verifyToken } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/user/:id", verifyToken, getUserDetails);

export default router;
