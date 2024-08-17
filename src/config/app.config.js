import dotenv from "dotenv";
dotenv.config();

const appConfig = {
  port: process.env.PORT || 3003,
  host: process.env.HOST,
};

export default appConfig;
