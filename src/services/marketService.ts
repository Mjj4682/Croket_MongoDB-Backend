import Market from "../models/Market";
import { IMarket, updateMarket, getMarket } from "../models/IMarket";

const registerMarket = async (marketData: IMarket) => {
  const market = new Market(marketData);
  await market.save();
};

const updateMarket = async (marketData: updateMarket) => {
  const _id = marketData._id;
  await Market.updateOne({ _id }, { $set: marketData });
};

const getMarket = async (condition: getMarket) => {
  const { category } = condition;
  const { country } = condition;
  const { search } = condition;
  const { sort } = condition;
  return await Market.find({ category, country }).populate({
    path: "productId",
    match: { isDeleted: false },
  });
};

export { registerMarket, updateMarket, getMarket };
