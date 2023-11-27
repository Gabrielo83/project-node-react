import mongoose from "mongoose";
import { settingDotEnvDB } from "../config/dotenv.js";

const { db } = settingDotEnvDB();

export const connectMongo = async () => {
  try {
    await mongoose.connect(db.localhost);
    console.log("Base de Datos conectada");
  } catch (error) {
    console.log("Error al conectarse a la Base de Datos");
  }
};
