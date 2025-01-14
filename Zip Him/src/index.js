// Import necessary dependencies
import dotenv from "dotenv"; // Used to load environment variables from .env file
import connectDB from "./db/index.js"; // Import the MongoDB connection function
import express from "express"; // Import express for creating a server

// Load environment variables from the specified .env file
dotenv.config({
  path: "./env", // Path to the environment file
});

// Create an Express app instance
const app = express();

// Call the function to connect to MongoDB
connectDB()
  .then(() => {
    // This block will execute if the database connection is successful
    const DefPort = 8000; // Default port if process.env.PORT is not defined

    // Start the Express server
    app.listen(process.env.PORT || DefPort, () => {
      console.log(`Server is running on port ${process.env.PORT || DefPort}`);
    });
  })
  .catch((err) => {
    // This block will execute if the database connection fails
    console.log("MongoDB connection failed!!!", err);
  });


/*
-------------------------------------------------------
Alternative Code (Async IIFE Approach)
-------------------------------------------------------

An Immediately Invoked Function Expression (IIFE) is used here to wrap 
asynchronous code and immediately execute it.

*/

// Import necessary modules
// import express from "express";
// import { DB_NAME } from "./constants"; // Import database name constant

/*
(async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

    // Handle errors on the Express app instance
    app.on("error", (error) => {
      console.log("Error", error);
      throw error; // Re-throw the error for debugging
    });

    // Start the server after successful database connection
    app.listen(process.env.PORT, () => {
      console.log(`App is running on this port ${process.env.PORT}`);
    });

  } catch (error) {
    // Catch block to log any errors during connection or server start
    console.log("Error", error);
  }
})();
*/

