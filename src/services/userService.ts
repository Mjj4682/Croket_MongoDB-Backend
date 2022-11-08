import User from "../models/User";
import { createUser } from "../models/IUser";

const createUser = async (userData: createUser) => {
  const user = new User(userData);
  return user.save();
};

export { createUser };
