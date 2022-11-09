import Product from "../models/Product";
import { createProduct } from "../models/IProduct";

const createProduct = async (productData: createProduct) => {
  const product = new Product(productData);
  await product.save();
};

export { createProduct };
