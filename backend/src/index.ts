import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import postRoutes from "./routes/PostRoutes";
import path from "path";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB(process.env.MONGO_URI || "");

const PORT = process.env.PORT || 5000;
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/posts", postRoutes);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/",(_,res)=>res.send("API is running"));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
