import mongoose from "mongoose";

// Define a Mongoose schema for the medical record
const medicalRecordSchema = new mongoose.Schema(
  {
    patientName: {
      type: String,
      required: true,
      trim: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
    medicalHistory: {
      type: String,
      required: true,
    },
    allergies: {
      type: String,
      default: "None",
    },
    currentMedications: {
      type: String,
      default: "None",
    },
    diagnosis: {
      type: String,
      required: true,
    },
    treatmentPlan: {
      type: String,
      required: true,
    },
    doctorNotes: {
      type: String,
      default: "No notes",
    },
    appointmentDate: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the model from the schema
export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
