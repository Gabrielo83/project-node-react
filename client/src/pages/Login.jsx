import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, isAuth, errors: loginErrors } = useAuth();

  //usamos este hook para redireccionar a otra pagina

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/task");
  }, [isAuth]);

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-900 max-w-md p-10 rounded-md">
        <h1 className="text-3xl text-center font-semibold mb-10">Login</h1>
        {loginErrors.map((err, i) => (
          <div key={i} className="bg-red-800 text-white">
            {err}
          </div>
        ))}
        <form
          //cuando presionamos el boton register hacemos la consulta
          onSubmit={onSubmit}
        >
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-400">El Email es requerido</p>
          )}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-400">El Password es requerido</p>
          )}
          <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="flex justify-between mt-10">
          ¿No tienes cuenta aún?{" "}
          <Link
            to="/register"
            className=" px-3 font-semibold rounded-md bg-green-500 text-white "
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
};
