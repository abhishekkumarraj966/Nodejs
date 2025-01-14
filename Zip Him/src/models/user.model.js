// Importing necessary libraries and modules
import mongoose, { Schema } from "mongoose"; // MongoDB object modeling tool
import jwt from "jsonwebtoken"; // Library for generating JSON Web Tokens
import bcrypt from "bcrypt"; // Library for hashing passwords

// Defining the schema for the User model
const userSchema = new Schema(
  {
    // Username field
    username: {
      type: String, // Data type: String
      required: true, // Field is mandatory
      unique: true, // Must be unique across all users
      lowercase: true, // Automatically converts value to lowercase
      trim: true, // Removes whitespace around the string
      index: true, // Improves search performance
    },
    // Email field
    email: {
      type: String, // Data type: String
      required: true, // Field is mandatory
      unique: true, // Must be unique across all users
      lowercase: true, // Automatically converts value to lowercase
      trim: true, // Removes whitespace around the string
    },
    // Full name field
    fullname: {
      type: String, // Data type: String
      required: true, // Field is mandatory
      trim: true, // Removes whitespace around the string
      index: true, // Improves search performance
    },
    // Avatar field
    avatar: {
      type: String, // Data type: String (e.g., Cloudinary URL)
      required: true, // Field is mandatory
    },
    // Cover image field (optional)
    coverImage: {
      type: String, // Data type: String
    },
    // Watch history field (array of references to Video documents)
    watchHistory: [
      {
        type: Schema.Types.ObjectId, // References an ObjectId
        ref: "Video", // Links to the "Video" model
      },
    ],
    // Password field
    password: {
      type: String, // Data type: String
      required: [true, "Password is required"], // Field is mandatory with a custom error message
    },
    // Refresh token field (optional)
    refreshToken: {
      type: String, // Data type: String
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Middleware to hash the password before saving a document
userSchema.pre("save", async function (next) {
  // Check if the password field has been modified
  if (!this.isModified("password")) return next();

  // Hash the password with a salt of 10 rounds
  this.password = await bcrypt.hash(this.password, 10);
  next(); // Proceed to the next middleware or save operation
});

// Instance method to compare entered password with the stored hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); // Returns true/false
};

// Instance method to generate an access token
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id, // User ID
      email: this.email, // User email
      username: this.username, // Username
      fullName: this.fullName, // Full name
    },
    process.env.ACCESS_TOKEN_SECRET, // Secret key for signing the token
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRATION, // Token expiration duration
    }
  );
};

// Instance method to generate a refresh token
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id, // User ID
    },
    process.env.REFRESH_TOKEN_SECRET, // Secret key for signing the refresh token
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRATION, // Token expiration duration
    }
  );
};

// Export the User model for use in other parts of the application
export const User = mongoose.model("User", userSchema);
