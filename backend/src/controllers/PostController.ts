import { Response } from "express";
import Post from "../models/Post";
import { AuthRequest } from "../middlewares/AuthMiddleware";

// Create Post with image upload
export const createPost = async (req: AuthRequest, res: Response) => {
  try {
    const { content, hashtags } = req.body;
    const file = req.file;

    // Validate required fields
    if (!content || !file) {
      return res.status(400).json({ message: "Content and image are required." });
    }

    // File path to save in DB
    const imageUrl = `/uploads/${file.filename}`;

    // Parse hashtags if sent as JSON string
    let parsedHashtags: string[] = [];
    if (hashtags) {
      try {
        parsedHashtags = JSON.parse(hashtags);
      } catch (err) {
        // If not JSON, treat as single string
        parsedHashtags = [hashtags];
      }
    }

    // Create post
    const newPost = new Post({
      user: req.user!.id, // from authenticate middleware
      content,
      image: imageUrl,
      hashtags: parsedHashtags,
    });

    await newPost.save();

    return res.status(201).json(newPost);
  } catch (error) {
    console.error("Create Post Error:", error);
    return res.status(500).json({ error: "Failed to create post" });
  }
};
