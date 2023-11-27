import dotenv from "dotenv";

dotenv.config();

export const settingDotEnvDB = () => {
  return {
    port: process.env.PORT,
    db: {
      localhost: process.env.DB_LOCALHOST,
    },
  };
};

export const SECRET_TOKEN = () => {
  return {
    secret: process.env.SECRET_KEY,
  };
};
