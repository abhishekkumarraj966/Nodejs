// Importing required modules
import mongoose, { Schema } from "mongoose"; // MongoDB object modeling tool
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; // Pagination plugin for aggregations

// Defining the schema for the Video model
const videoSchema = new Schema(
  {
    // File path or URL of the video file
    videoFile: {
      type: String, // Data type: String
      required: true, // Field is mandatory
    },
    // File path or URL of the video's thumbnail image
    thumbnail: {
      type: String, // Data type: String
      required: true, // Field is mandatory
    },
    // Title of the video
    title: {
      type: String, // Data type: String
      required: true, // Field is mandatory
    },
    // Description of the video
    description: {
      type: String, // Data type: String
      required: true, // Field is mandatory
    },
    // Duration of the video in seconds
    duration: {
      type: Number, // Data type: Number
      required: true, // Field is mandatory
    },
    // Number of views the video has received
    views: {
      type: Number, // Data type: Number
      default: 0, // Default value is 0
    },
    // Publication status of the video
    isPublished: {
      type: Boolean, // Data type: Boolean
      default: true, // Default value is `true` (published)
    },
    // Reference to the user who owns the video
    owner: {
      type: Schema.Types.ObjectId, // References an ObjectId
      ref: "User", // Links to the "User" model
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Adding the pagination plugin for aggregation queries
videoSchema.plugin(mongooseAggregatePaginate);

// Exporting the Video model for use in other parts of the application
export const Video = mongoose.model("Video", videoSchema);
