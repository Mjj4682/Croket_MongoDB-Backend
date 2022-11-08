import mongoose from "mongoose";
import { IUser } from "./IUser";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Seoul");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: {
    type: String,
    default: moment().format("YYYY-MM-DD HH:mm:ss"),
  },
});

export default mongoose.model<IUser & mongoose.Document>("User", UserSchema);
