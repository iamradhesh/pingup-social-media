import mongoose from "mongoose";

const connectDB = async (mongoURI: string) => {
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

export default connectDB;
