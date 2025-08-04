import express from "express";
import { login, ProfileID, register } from "../controller/authController.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/profile/:id",ProfileID);

export default router;