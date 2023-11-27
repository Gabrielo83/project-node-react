import { createContext, useContext, useState } from "react";
import {
  createTaskReq,
  getTaskReq,
  deleteTaskReq,
  getTaskByIdReq,
  updateTaskReq,
} from "../api/task";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("Error en el contexto de las tareas");
  return context;
};

export const TaskProvider = ({ children }) => {
  //generamos las tareas y sus estados para exportar en el provider
  const [task, setTask] = useState([]);

  //1) Crear
  const createTask = async (task) => {
    // console.log(task);
    const res = await createTaskReq(task);
    // console.log(res);
  };

  //2) Buscar
  const getAllTask = async () => {
    const res = await getTaskReq();
    // console.log(res);
    try {
      setTask(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  //3) Eliminar
  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskReq(id);
      // console.log(res);
      if (res.status === 200) setTask(task.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //4) Buscar por Id
  const getTaskById = async (id) => {
    try {
      const res = await getTaskByIdReq(id);
      // console.log(res);
      //retornamos para que lo pueda ver en el taskFormPage
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  //5) Actualizar
  const updateTask = async (id, task) => {
    try {
      const res = await updateTaskReq(id, task);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        createTask,
        getAllTask,
        deleteTask,
        getTaskById,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
