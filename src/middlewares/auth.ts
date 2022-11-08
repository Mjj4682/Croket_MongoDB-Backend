import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { errorConstructor } from "../middlewares/errorConstructor";

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      throw new errorConstructor(401, "토큰이 없습니다.");
    }
    if (!process.env.SECRETKEY) {
      throw new errorConstructor(400, "잘못된 접근입니다.");
    }
    const decoded = jwt.verify(token, process.env.SECRETKEY);
    (<any>req).decoded = decoded;
    if (decoded) {
      next();
    }
  } catch {
    res.status(401).json({ message: "Invalid Access Token" });
  }
};

export default validateToken;
