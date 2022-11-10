import Market from "../models/Market";
import { IMarket } from "../models/IMarket";

const registerMarket = async (marketData: IMarket) => {
  const market = new Market(marketData);
  await market.save();
};

export { registerMarket };
