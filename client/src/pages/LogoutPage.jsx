import { useAuth } from "../context/AuthContext";

export const LogoutPage = () => {
  const { signout, isAuth } = useAuth();

  return <h1>Muchas Gracias!</h1>;
};
