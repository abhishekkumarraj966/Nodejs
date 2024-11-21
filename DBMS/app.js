const express = require("express");
const mongoose = require("mongoose");
const app = express();
const UserModel = require("./userModel");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/my_database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Correct route handler
app.get("/", (req, res) => {
  res.send("Hey");
});

// Create user
app.get("/create", async (req, res) => {
  try {
    let user = await UserModel.create({
      name: "Abhishek",
      username: "abhishekkumar",
      email: "abhishekkumarraj620@gmail.com",
    });
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
