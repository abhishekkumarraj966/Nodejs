import mongoose from "mongoose";

const hospitalScama = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    pinCode: {
      type: String,
      required: true,
    },
    spicializedIn: [
      {
        type: String,
      },
    ],
  },
  { timestamp: true }
);

export const hospital = mongoose.model("hospital", hospitalScama);
