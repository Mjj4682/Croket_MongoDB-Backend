import { Request, Response } from "express";
import { IMarket, updateMarket, getMarket } from "../models/IMarket";
import * as marketService from "../services/marketService";

const registerMarket = async (req: Request, res: Response) => {
  const { category, country, productId }: IMarket = req.body;
  await marketService.registerMarket({ category, country, productId });
  res.status(201).json({ message: "registered market" });
};

const updateMarket = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { category, country }: updateMarket = req.body;
  await marketService.updateMarket({
    _id,
    category,
    country,
  });
  res.status(201).json({ message: "updated market" });
};

const getMarket = async (req: Request, res: Response) => {
  const { category, country, search, sort }: getMarket = req.query;
  const marketList = await marketService.getMarket({
    category,
    country,
    search,
    sort,
  });
  res.status(200).json({ marketList });
};

export { registerMarket, updateMarket, getMarket };
