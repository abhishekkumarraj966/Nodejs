import mongoose from "mongoose";

const productScame = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    Stock: {
      default: 0,
      type: Number,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Categorys",
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

  },
  { timestamps: true }
);

export const Product = mongoose.model("Products", productScame);
