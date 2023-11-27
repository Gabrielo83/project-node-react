import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  //   console.log(task);
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-semibold text-white">{task.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              //   console.log(task._id);
              deleteTask(task._id);
            }}
          >
            eliminar
          </button>
          <Link to={`/task/${task._id}`}>editar</Link>
        </div>
      </header>
      <p className="">{task.description}</p>
      <p className="text-2xl font-bold">
        {new Date(task.date).toLocaleDateString()}
      </p>
    </div>
  );
};
