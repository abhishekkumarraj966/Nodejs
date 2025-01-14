import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initialize express app
const app = express();

// CORS middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000", // Default to localhost if not defined
    credentials: true, // Allow cookies and other credentials to be included in requests
  })
);

// Middleware for handling JSON requests with a limit of 16KB
app.use(express.json({ limit: "16kb" }));

// Middleware for handling URL-encoded requests with a limit of 16KB
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Middleware to parse cookies
app.use(cookieParser());


// routes
// import userRouter from "./routes/User.routes.js"



// app.use("/users", userRouter)

// Export the app to be used in the main file (e.g., server.js)
export { app };
