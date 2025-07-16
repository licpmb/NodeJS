import fetch from "node-fetch";
import { fileURLToPath } from "url";
import path from "path";
import { Axios } from "axios";
import "dotenv/config";
import express from "express";
import cors from "cors";
import authRouter from "./src/routes/auth.routes.js";
import bodyParser from 'body-parser';
import { authentication } from "./src/middlewares/authentication.js";
import {getAllProducts, getProductById, createProduct} from "./src/controllers/products.controller.js";
import router from "./src/routes/products.router.js";


const app = express();

// app.use((req, res, next) => {
//   res.json({ message: "En mantenimiento" });
// });

app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(bodyParser.json());
// Routers

router.get("/products", authentication, getAllProducts);
router.get("/products/:id", authentication, getProductById);
router.post("/products", authentication, createProduct);

app.use('/auth', authRouter);

app.get("/", (req, res) => {
  res.json({ message: "API Rest en Node.js" });
});



app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
