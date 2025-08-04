import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { createPost, getAllPost, postByUserId } from "../controller/postController.js";

const router = express.Router();

router.post("/",authMiddleware,createPost);
router.get("/",getAllPost);
router.get("/user/:id",postByUserId);



export default router;