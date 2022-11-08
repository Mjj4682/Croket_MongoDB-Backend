import express, { Router } from "express";
import * as userController from "../controllers/userController";
import asyncHandler from "../middlewares/asyncHandler";
import validateToken from "../middlewares/auth";

const router: Router = express.Router();

router.post("/", asyncHandler(userController.createUser));

router.post("/login", asyncHandler(userController.login));

router.patch("/seller", validateToken, asyncHandler(userController.regSeller));

export default router;
