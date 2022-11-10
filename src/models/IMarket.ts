import mongoose from "mongoose";

export interface IMarket {
  category: string;
  country: string;
  productId: mongoose.Schema.Types.ObjectId;
}

export interface updateMarket {
  _id?: string;
  category?: string;
  country?: string;
}
