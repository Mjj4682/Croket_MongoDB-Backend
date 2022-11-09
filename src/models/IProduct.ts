import mongoose from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  img: string;
  price: mongoose.Types.Decimal128;
  category: string;
  country: string;
  deadline: Date;
  createdAt: Date;
  isDeleted: Boolean;
  sellerId: mongoose.Schema.Types.ObjectId;
}

export interface createProduct {
  name: string;
  description: string;
  img: string;
  price: mongoose.Types.Decimal128;
  category: string;
  country: string;
  deadline: Date;
  sellerId?: mongoose.Schema.Types.ObjectId;
}
