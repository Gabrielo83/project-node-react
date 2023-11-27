import express from "express";
import { settingDotEnvDB } from "./config/dotenv.js";
import cors from "cors";
import morgan from "morgan";
import { connectMongo } from "./database/db.js";
import authroutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cookieParser from "cookie-parser";

const app = express();
connectMongo();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(authroutes);
app.use(taskRoutes);
const PORT = settingDotEnvDB().port || 5000;

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
