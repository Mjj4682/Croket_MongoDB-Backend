import mongoose from "mongoose";
import { IProduct } from "./IProduct";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Seoul");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: mongoose.Types.Decimal128, required: true },
  deadline: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: moment().format("YYYY-MM-DD HH:mm:ss"),
  },
  isDeleted: { type: Boolean, default: false },
  sellerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export default mongoose.model<IProduct & mongoose.Document>(
  "Product",
  ProductSchema
);
