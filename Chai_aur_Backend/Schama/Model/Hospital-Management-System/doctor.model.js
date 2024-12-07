import mongoose from "mongoose";

const doctoreScame = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    exprienceInYears: {
      type: Number,
      default: 0,
    },
    workInHospitels: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "hospital",
      },
    ],
    
  },
  { timestamp: true }
);

export const doctore = mongoose.model("doctore", doctoreScame);
