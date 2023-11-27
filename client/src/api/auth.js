import axios from "./setCredentialsAxios";

//pedidos al servidor con axios

//creamos registerReq con un user por atributo y vamos a pasarle a la petición con ese user
export const registerReq = (user) => axios.post(`/register`, user);

//creamos el loginRequest
export const loginRequest = (user) => axios.post(`/login`, user);

//creamos la verificación del token desde el fron
export const verifyToken = () => axios.get(`/verifyToken`);
