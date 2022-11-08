import express, { Router } from "express";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.post("/", userController.createUser);

export default router;
