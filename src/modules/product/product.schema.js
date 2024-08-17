import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: Object,
    cost: {
      type: String,
    },
    count: {
      type: String,
    },
    categoryId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"categories"
    }
  },
  {
    _id: true,
    timestamps: true,
    collection: "products",
  }
);

export const product = mongoose.model("products", productSchema);
