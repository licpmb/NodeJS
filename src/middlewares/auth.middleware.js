// import "dotenv/config";
// import jwt from "jsonwebtoken";
// const secret_key = process.env.JWT_SECRET_KEY;
// // Middleware para verificar el token JWT
// export const auth = (req, res, next) => {
//   const token = req.headers["authorization"]?.split(" ")[1];
//   console.log("Token received:", token); // Debug log
//   if (!token) return res.sendStatus(401);
//   jwt.verify(token, secret_key, (err) => {
//     if (err) {
//       console.error("JWT verification error:", err.message); // Log the error
//       return res.sendStatus(403);
//     }
//     next();
//   });
// };



// import "dotenv/config";
// import jwt from "jsonwebtoken";
// const secret_key = process.env.JWT_SECRET_KEY;

// export const auth = (req, res, next) => {
//   console.log("JWT_SECRET_KEY:", secret_key); // Debug secret key
//   const authHeader = req.headers["authorization"];
//   console.log("Authorization header:", authHeader); // Debug header
//   const token = authHeader?.split(" ")[1];
//   if (!token) {
//     console.log("No token provided");
//     return res.sendStatus(401);
//   }
//   jwt.verify(token, secret_key, (err, decoded) => {
//     if (err) {
//       console.error("JWT verification error:", err.message);
//       return res.sendStatus(403);
//     }
//     console.log("Decoded token:", decoded); // Debug decoded payload
//     req.user = decoded; // Optional: Attach decoded payload to request
//     next();
//   });
// };



import "dotenv/config";
import jwt from "jsonwebtoken";
const secret_key = process.env.JWT_SECRET_KEY;

export const auth = (req, res, next) => {
  console.log("JWT_SECRET_KEY:", secret_key); // Debug
  const authHeader = req.headers["authorization"];
  console.log("Authorization Header:", authHeader);
  const token = authHeader?.split(" ")[1];
  console.log("Token:", token);
  if (!token) {
    console.log("No token provided");
    return res.sendStatus(401);
  }
  if (!secret_key) {
    console.error("JWT_SECRET_KEY is undefined");
    return res.status(500).json({ error: "Server configuration error" });
  }
  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) {
      console.error("JWT Verification Error:", err.message);
      return res.sendStatus(403);
    }
    console.log("Decoded Token:", decoded);
    next();
  });
};