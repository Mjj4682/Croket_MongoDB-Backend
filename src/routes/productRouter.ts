import express, { Router } from "express";
import * as productController from "../controllers/productController";
import asyncHandler from "../middlewares/asyncHandler";
import validateToken from "../middlewares/auth";

const router: Router = express.Router();

router.post("/", validateToken, asyncHandler(productController.createProduct));

router.patch(
  "/:_id",
  validateToken,
  asyncHandler(productController.updateProduct)
);

router.delete(
  "/:_id",
  validateToken,
  asyncHandler(productController.deleteProduct)
);

router.get("/:_id", validateToken, asyncHandler(productController.getProduct));

export default router;
