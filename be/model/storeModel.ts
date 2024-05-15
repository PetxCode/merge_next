import { Document, Schema, model } from "mongoose";
import { iProps } from "../utils/interfaces";

interface iPropsData extends iProps, Document {}

const storeModel = new Schema<iPropsData>(
  {
    price: {
      type: Number,
    },
    splashPrice: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    category: {
      type: [],
    },
  },
  { timestamps: true }
);

export default model<iPropsData>("stores", storeModel);
