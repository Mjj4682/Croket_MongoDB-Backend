import express, { Router } from "express";
import * as productController from "../controllers/productController";
import asyncHandler from "../middlewares/asyncHandler";
import validateToken from "../middlewares/auth";

const router: Router = express.Router();

router.post("/", validateToken, asyncHandler(productController.createProduct));

router.patch(
  "/:id",
  validateToken,
  asyncHandler(productController.updateProduct)
);

router.delete(
  "/:id",
  validateToken,
  asyncHandler(productController.deleteProduct)
);

export default router;
