import { useForm } from "react-hook-form";
//---tiene que estar DESCOMENTADO para probar el Register. COMENTAR PARA MANDAR AL AUTHCONTEXT 111
// import { registerReq } from "../api/auth";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //utilización del useAuth: probamos el user con el console.log
  const { signup, isAuth, errors: authErrors } = useAuth();
  // console.log(user);

  //usamos este hook para redireccionar a otra pagina

  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) navigate("/task");
  }, [isAuth]);

  //Esta función es la que mandamos al contexto para obtener los valores del usuario y registrarlo
  const onSubmit = handleSubmit(async (values) => {
    //---tiene que estar DESCOMENTADO para probar el Register. COMENTAR PARA MANDAR AL AUTHCONTEXT 111
    // console.log(values);
    // const res = await registerReq(values);
    // console.log(res);
    signup(values);
  });
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-900 max-w-md p-8 rounded-md">
        {/* 1) FORMULARIO */}
        <h1 className="text-3xl text-center font-semibold mb-5">Register</h1>
        {authErrors.map((err, i) => (
          <div key={i} className="bg-red-800 text-white">
            {err}
          </div>
        ))}
        <form
          //cuando presionamos el boton register hacemos la consulta
          onSubmit={onSubmit}
        >
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-400">El Username es requerido</p>
          )}
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
            className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white my-3"
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <p className="flex justify-between mt-10">
          ¿Tienes cuenta?{" "}
          <Link
            to="/login"
            className=" px-3 font-semibold rounded-md bg-green-500 text-white "
          >
            Loguearse
          </Link>
        </p>
      </div>
    </div>
  );
};
