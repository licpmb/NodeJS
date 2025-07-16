import * as model from "../models/products.model.js";

export const getAllProducts = async (req, res) => { 
  res.json(await model.getAllProducts());
};

export const searchProduct = async (req, res) => {
  const { name } = req.query;

  const products = await model.getAllProducts();

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(filteredProducts);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  const product = await model.getProductById(id);

  if (!product) {
    res.status(404).json({ error: "No existe el producto" });
  }

  res.json(product);
};

export const createProduct =  async (req, res) => {
  const { name, price } = req.body;

  const newProduct = await model.createProduct({ name, price });

  res.status(201).json(newProduct);
};

export const deleteProduct = async (req, res) => {
  const productId = parseInt(req.params.id, 10);

  const product = model.deleteProduct(productId);

  if (!product) {
    return await res.status(404).json({ error: "Producto no encontrado" });
  }

  res.status(204).send();
};
