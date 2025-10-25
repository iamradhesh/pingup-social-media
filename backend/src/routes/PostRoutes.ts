import express from "express";
import { createPost } from "../controllers/PostController";
import { authenticate } from "../middlewares/AuthMiddleware";

const router = express.Router();

router.post("/posts", authenticate, createPost); // ✅ authenticate first

export default router;
