import createApp from "./app";
import dotenv from "dotenv";
dotenv.config();

const startServer = async () => {
  const app = createApp();
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
  });
};

startServer();
