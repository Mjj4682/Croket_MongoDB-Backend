import Product from "../models/Product";
import Market from "../models/Market";
import { createProduct, updateProduct } from "../models/IProduct";

const createProduct = async (productData: createProduct) => {
  const product = new Product(productData);
  await product.save();
};

const updateProduct = async (productData: updateProduct) => {
  const _id = productData._id;
  await Product.updateOne({ _id }, { $set: productData });
};

const deleteProduct = async (_id: string) => {
  await Product.updateOne({ _id }, { $set: { isDeleted: true } });
  await Market.deleteOne({ sellerId: _id });
};

const getProduct = async (_id: string) => {
  return await Product.findById({ _id });
};

export { createProduct, updateProduct, deleteProduct, getProduct };
