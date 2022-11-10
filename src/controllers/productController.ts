import { Request, Response } from "express";
import { createProduct, updateProduct } from "../models/IProduct";
import * as productService from "../services/productService";

interface CustomRequest extends Request {
  decoded: any;
}

const createProduct = async (req: CustomRequest, res: Response) => {
  const { sellerId } = req.decoded;
  const { name, description, img, price, deadline }: createProduct = req.body;
  await productService.createProduct({
    name,
    description,
    img,
    price,
    deadline,
    sellerId,
  });
  res.status(201).json({ message: "created product" });
};

const updateProduct = async (req: Request, res: Response) => {
  const _id = req.params.id;
  const { name, description, img, price, deadline }: updateProduct = req.body;
  await productService.updateProduct({
    _id,
    name,
    description,
    img,
    price,
    deadline,
  });
  res.status(201).json({ message: "updated product" });
};

const deleteProduct = async (req: Request, res: Response) => {
  const _id = req.params.id;
  await productService.deleteProduct(_id);
  res.status(204).json();
};

const getProduct = async (req: Request, res: Response) => {
  const _id = req.params.id;
  const productInfo = await productService.getProduct(_id);
  res.status(200).json({ productInfo });
};

export { createProduct, updateProduct, deleteProduct, getProduct };
