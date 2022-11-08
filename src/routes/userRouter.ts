import express, { Router } from "express";
import * as userController from "../controllers/userController";
import asyncHandler from "../middlewares/asyncHandler";

const router: Router = express.Router();

router.post("/", asyncHandler(userController.createUser));

router.post("/login", asyncHandler(userController.login));

export default router;
