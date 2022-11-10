import express, { Router } from "express";
import userRouter from "./userRouter";
import productRouter from "./productRouter";
import marketRouter from "./marketRouter";

const router: Router = express.Router();

router.use("/user", userRouter);

router.use("/product", productRouter);

router.use("/market", marketRouter);

export default router;
