import jwt from "jsonwebtoken";
import { SECRET_TOKEN } from "../config/dotenv.js";

const { secret } = SECRET_TOKEN();

export const createAccessToken = (payload) => {
  //generamos una promesa para utilizar el await al invocar esta funcion
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { expiresIn: "10h" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
