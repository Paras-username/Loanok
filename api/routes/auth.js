import express from "express";
import { login, register, forgotPassword, resetPassword } from "../controllers/auth.js";

const router = express.Router();

// Auth routes
router.post("/register", register);
router.post("/login", login);

// Password reset routes
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
