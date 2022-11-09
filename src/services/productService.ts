import Product from "../models/Product";
import { createProduct, updateProduct } from "../models/IProduct";

const createProduct = async (productData: createProduct) => {
  const product = new Product(productData);
  await product.save();
};

const updateProduct = async (productData: updateProduct) => {
  const _id = productData._id;
  await Product.updateOne({ _id }, { $set: productData });
};

export { createProduct, updateProduct };
