import express from "express";
import { createPost, getAllPosts, getUserPosts } from "../controllers/PostController";
import { authenticate } from "../middlewares/AuthMiddleware";
import multer from "multer";
import path from "path";
import fs from "fs";

const router = express.Router();

// Save uploads in project root folder: /uploads
const uploadDir = path.join(process.cwd(), "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Route: POST /api/v1/posts
router.post("/create", authenticate, upload.single("image"), createPost);

// Route: GET /api/v1/posts
router.get("/get", authenticate, getAllPosts);
router.get("/user-posts", authenticate, getUserPosts);

export default router;
