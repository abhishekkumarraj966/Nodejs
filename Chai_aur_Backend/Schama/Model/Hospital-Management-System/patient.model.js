import mongoose from "mongoose";

const patientScama = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedwith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hospital",
    },
    
  },
  { timestamp: true }
);

export const patient = mongoose.model("patient", { patientScama });
