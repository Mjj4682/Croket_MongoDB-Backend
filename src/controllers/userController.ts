import { Request, Response } from "express";
import * as userService from "../services/userService";
import { createUser, login, regSeller } from "../models/IUser";

interface CustomRequest extends Request {
  decoded: any;
}

const createUser = async (req: Request, res: Response) => {
  const { name, email, password }: createUser = req.body;
  await userService.createUser({ name, email, password });
  res.status(201).json({ message: "created user" });
};

const login = async (req: Request, res: Response) => {
  const { email, password }: login = req.body;
  const token = await userService.login({ email, password });
  res.status(201).json({ token });
};

const regSeller = async (req: CustomRequest, res: Response) => {
  const userEmail: regSeller = req.decoded.email;
  await userService.regSeller(userEmail);
  res.status(201).json({ message: "registered seller" });
};

export { createUser, login, regSeller };
