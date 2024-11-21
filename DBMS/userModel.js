const mongoose = require("mongoose");

// Define a schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Create a model
const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
