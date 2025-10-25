import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type multer from "multer";

export interface JWTPayload {
  id: string;
  email: string;
}

// Extend Express Request to include user and optional file
export interface AuthRequest extends Request {
  user?: JWTPayload;
  file?: Express.Multer.File; // for multer file uploads
}

export const authenticate = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Response | void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: Token missing" });
    }

    const token = authHeader.split(" ")[1];

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined");
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;

    // Attach user to request
    req.user = decoded;

    next(); // continue to controller
  } catch (error: any) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
