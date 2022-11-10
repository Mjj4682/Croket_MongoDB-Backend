import mongoose from "mongoose";

export interface IProduct {
  name: string;
  description: string;
  img: string;
  price: mongoose.Types.Decimal128;
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
  deadline: Date;
  sellerId?: mongoose.Schema.Types.ObjectId;
}

export interface updateProduct {
  _id?: string;
  name?: string;
  description?: string;
  img?: string;
  price?: mongoose.Types.Decimal128;
  deadline?: Date;
}
