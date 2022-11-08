import asyncHandler from "express-async-handler";
import { errorConstructor } from "../middlewares/errorConstructor";
import * as userService from "../services/userService";
import { createUser } from "../models/IUser";

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password }: createUser = req.body;
  if (!name || !email || !password) {
    throw new errorConstructor(400, "필수값이 없습니다.");
  }
  await userService.createUser({ name, email, password });
  res.status(201).json({ message: "created user" });
});

export { createUser };
