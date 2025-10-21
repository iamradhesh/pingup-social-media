import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { Types } from "mongoose";

// Request body interfaces
interface SignupRequestBody {
  name: string;
  email: string;
  password: string;
}

interface SigninRequestBody {
  email: string;
  password: string;
}

// Response interfaces
interface ErrorResponse {
  message: string;
}

interface SignupSuccessResponse {
  message: string;
}

interface SigninSuccessResponse {
  message: string;
  token: string;
  user: UserResponse;
}

// User response type (without sensitive data)
interface UserResponse {
  _id: string;
  name: string;
  email: string;
  profilePic?: string;
  bio?: string;
}

// JWT Payload interface
interface JWTPayload {
  id: string;
  email: string;
}

// Signup Controller
const signup = async (
  req: Request<{}, {}, SignupRequestBody>,
  res: Response<SignupSuccessResponse | ErrorResponse>
): Promise<Response> => {
  try {
    const { name, email, password } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user (password will be hashed automatically by pre-save middleware)
    const newUser = new User({ name, email, password });
    await newUser.save();

    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Signin Controller
const signin = async (
  req: Request<{}, {}, SigninRequestBody>,
  res: Response<SigninSuccessResponse | ErrorResponse>
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const user: IUser | null = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Check if JWT_SECRET exists
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    // Generate token
    const payload: JWTPayload = {
      id: user._id.toString(),
      email: user.email,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // Return response without sensitive data
    const userResponse: UserResponse = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      profilePic: user.profilePic,
      bio: user.bio,
    };

    return res.status(200).json({
      message: "Signin successful",
      token,
      user: userResponse,
    });
  } catch (error) {
    console.error("Signin error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { signup, signin };
