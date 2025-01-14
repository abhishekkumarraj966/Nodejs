import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    // Try connecting to the MongoDB instance
    const connections = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connection established! DB Host: ${connections.connection.host}`
    );
  } catch (error) { 
    // Log the error message when connection fails
    console.error("MongoDB connection FAILED:", error.message);
    process.exit(1); // Exit the process if DB connection fails
  }
};

export default connectDB;
