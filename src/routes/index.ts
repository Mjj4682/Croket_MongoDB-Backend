import express, { Router } from "express";
import userRouter from "./userRouter";
import productRouter from "./productRouter";

const router: Router = express.Router();

router.use("/user", userRouter);

router.use("/product", productRouter);

export default router;
