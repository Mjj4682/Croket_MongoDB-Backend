import { Request, Response } from "express";
import { createProduct, updateProduct } from "../models/IProduct";
import * as productService from "../services/productService";

interface CustomRequest extends Request {
  decoded: any;
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

const updateProduct = async (req: Request, res: Response) => {
  const _id = req.params.id;
  const {
    name,
    description,
    img,
    price,
    category,
    country,
    deadline,
  }: updateProduct = req.body;
  await productService.updateProduct({
    _id,
    name,
    description,
    img,
    price,
    category,
    country,
    deadline,
  });
  res.status(201).json({ message: "updated product" });
};

export { createProduct, updateProduct };
