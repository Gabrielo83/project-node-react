import axios from "./setCredentialsAxios";

export const getTaskReq = () => axios.get("/task");

export const getTaskByIdReq = (id) => axios.get(`/task/${id}`);

export const createTaskReq = (task) => axios.post("/task", task);

export const updateTaskReq = (id, task) => axios.put(`/task/${id}`, task);

export const deleteTaskReq = (id) => axios.delete(`/task/${id}`);
