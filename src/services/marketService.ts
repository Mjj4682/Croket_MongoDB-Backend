import Market from "../models/Market";
import { IMarket, updateMarket } from "../models/IMarket";

const registerMarket = async (marketData: IMarket) => {
  const market = new Market(marketData);
  await market.save();
};

const updateMarket = async (marketData: updateMarket) => {
  const _id = marketData._id;
  await Market.updateOne({ _id }, { $set: marketData });
};

export { registerMarket, updateMarket };
