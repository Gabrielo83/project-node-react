import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();

  const { task, createTask, getTaskById, updateTask } = useTasks();
  // console.log(task);
  // console.log(createTask);

  //carga la aplicación lea ese parametro de la url
  const params = useParams();
  useEffect(() => {
    // console.log(params);
    async function loadTask() {
      if (params.id) {
        const task = await getTaskById(params.id);
        //el setValue del useForm
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }
    loadTask();
  }, []);

  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    // console.log(data);
    //A) esto es para probar para crear tarea
    // createTask(data);
    // navigate("/task");

    //B) en caso de que actualicemos tenemos que hacer la condicional
    if (params.id) {
      updateTask(params.id, data);
    } else {
      createTask(data);
    }
    navigate("/task");
  });
  return (
    <div>
      <Navbar />
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            type="text"
            placeholder="Titulo"
            {...register("title")}
            autoFocus
          />
          <textarea
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            rows="3"
            placeholder="Descripción"
            {...register("description")}
          ></textarea>

          <label>Completado</label>
          <input type="checkbox" {...register("completed")} />
          <button
            className="flex h-10 px-6 font-semibold rounded-md bg-green-900 text-white my-5"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};
