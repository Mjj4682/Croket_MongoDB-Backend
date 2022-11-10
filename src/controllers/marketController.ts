import { Request, Response } from "express";
import { IMarket } from "../models/IMarket";
import * as marketService from "../services/marketService";

const registerMarket = async (req: Request, res: Response) => {
  const { category, country, productId }: IMarket = req.body;
  await marketService.registerMarket({ category, country, productId });
  res.status(201).json({ message: "registered market" });
};

export { registerMarket };
