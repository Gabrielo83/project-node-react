import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";
import { TaskCard } from "../components/TaskCard";

export const TaskPage = () => {
  // const { user } = useAuth();
  const { getAllTask, task } = useTasks();

  //useEffect para traer las tareas cuando se ejecuta esta pagina
  useEffect(() => {
    getAllTask();
  }, []);

  if (task.length === 0)
    return (
      <>
        <Navbar />
        <h1>No Tiene Tareas</h1>
      </>
    );

  return (
    <>
      <Navbar />
      <h1>Tareas</h1>
      {/* PRUEBA 1 */}
      {/* {JSON.stringify(user, null, 3)} */}

      {/* PRUEBA 2 */}
      {/* 
      {task.map((tas, i) => (
        <div key={i}>
          <h1>{tas.title}</h1>
          <p>{tas.description}</p>
        </div>
      ))} */}

      {/* PRUEBA 3 CON TASKCARD */}

      <div className="grid grid-cols-3 gap-2">
        {task.map((task, i) => (
          <TaskCard task={task} key={i} />
        ))}
      </div>
    </>
  );
};
