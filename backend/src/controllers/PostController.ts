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

//Get all posts
export const getAllPosts = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const posts = await Post.find().populate("user", "name profilePicture");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Get All Posts Error:", error);
    res.status(500).json({ error: "Failed to get posts" });
  }
};

//getPost of currunt user
export const getUserPosts = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const posts = await Post.find({ user: req.user!.id }).populate("user", "name profilePicture");
    res.status(200).json(posts);
  } catch (error) {
    console.error("Get User Posts Error:", error);
    res.status(500).json({ error: "Failed to get user posts" });
  }
};
