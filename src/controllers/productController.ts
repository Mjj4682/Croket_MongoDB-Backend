import { Request, Response } from "express";
import { createProduct } from "../models/IProduct";
import * as productService from "../services/productService";

interface CustomRequest extends Request {
  decoded: any;
  sellerId: any;
}

const createProduct = async (req: CustomRequest, res: Response) => {
  const { sellerId } = req.decoded;
  const {
    name,
    description,
    img,
    price,
    category,
    country,
    deadline,
  }: createProduct = req.body;
  await productService.createProduct({
    name,
    description,
    img,
    price,
    category,
    country,
    deadline,
    sellerId,
  });
  res.status(201).json({ message: "created product" });
};

export { createProduct };
