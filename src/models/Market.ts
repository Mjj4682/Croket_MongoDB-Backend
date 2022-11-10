import mongoose from "mongoose";
import { IMarket } from "./IMarket";

const MarketSchema = new mongoose.Schema({
  category: { type: String, required: true },
  country: { type: String, required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

export default mongoose.model<IMarket & mongoose.Document>(
  "Market",
  MarketSchema
);
