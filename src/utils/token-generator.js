import "dotenv/config";
import jwt from "jsonwebtoken";

const secret_key = process.env.JWT_SECRET_KEY; // Función para generar un token JWT
export const generateToken = (userData) => {
  const user = { id: userData.id, email: userData.email };
  const payload = {id: user.id};
  const expiration = { expiresIn: "1h" };
  return jwt.sign(user, secret_key, expiration, payload);
};
