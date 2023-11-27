import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from "../controllers/task.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";

const routes = Router();

routes.get("/task", authRequired, getAllTasks);
routes.get("/task/:id", authRequired, getTaskById);
routes.post("/task", authRequired, createTask);
routes.delete("/task/:id", authRequired, deleteTask);
routes.put("/task/:id", authRequired, updateTask);

export default routes;
