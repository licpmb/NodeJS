import fetch from "node-fetch";
import { fileURLToPath } from 'url';
import path from 'path';
import { Axios } from "axios";
import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();

// app.use((req, res, next) => {
//   res.json({ message: "En mantenimiento" });
// });

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js" });
});

import productsRouter from "./src/routes/products.router.js";
app.use("/api", productsRouter);

app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
