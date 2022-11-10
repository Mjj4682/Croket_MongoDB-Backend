import mongoose from "mongoose";

export interface IMarket {
  category: string;
  country: string;
  productId: mongoose.Schema.Types.ObjectId;
}
