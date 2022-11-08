import User from "../models/User";
import { createUser, login } from "../models/IUser";
import { errorConstructor } from "../middlewares/errorConstructor";
import jwt from "jsonwebtoken";

const createUser = async (userData: createUser) => {
  const user = new User(userData);
  user.save();
};

const login = async (loginData: login) => {
  const secretKey = process.env.SECRETKEY;
  const email = loginData.email;
  const password = loginData.password;
  const checkLogin = await User.exists({ email, password });
  if (!checkLogin) {
    throw new errorConstructor(400, "이메일 혹은 비밀번호가 틀렸습니다.");
  }
  if (!secretKey) {
    throw new errorConstructor(400, "잘못된 접근입니다.");
  }
  const payLoad = { email };
  const token = jwt.sign(payLoad, secretKey);
  return token;
};

export { createUser, login };
