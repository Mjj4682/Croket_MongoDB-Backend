import express, { Router } from "express";
import * as productController from "../controllers/productController";
import asyncHandler from "../middlewares/asyncHandler";
import validateToken from "../middlewares/auth";

const router: Router = express.Router();

router.post("/", validateToken, asyncHandler(productController.createProduct));

export default router;
