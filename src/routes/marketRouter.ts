import express, { Router } from "express";
import * as marketController from "../controllers/marketController";
import asyncHandler from "../middlewares/asyncHandler";
import validateToken from "../middlewares/auth";

const router: Router = express.Router();

router.post("/", validateToken, asyncHandler(marketController.registerMarket));

router.patch(
  "/:_id",
  validateToken,
  asyncHandler(marketController.updateMarket)
);

export default router;
