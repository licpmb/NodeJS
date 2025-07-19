import * as model from "../models/products.model.js";

// Trae todos los productos
export const getAllProducts = async (req, res) => {
  try { const products = await model.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Buscar productos por nombre
export const searchProduct = async (req, res) => {
  const { name = "" } = req.query; // Default to empty string if name is undefined
  const products = await model.getAllProducts();
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(filteredProducts);
};

// Buscar productos por ID
export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await model.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.json(product);
};

// Crea productos
export const createProduct = async (req, res) => {
  const { name, price, categories } = req.body;
  const newProduct = await model.createProduct({ name, price, categories });
  res.status(201).json(newProduct);
};

// Actualiza un producto por ID
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, categories } = req.body;
  try {
    if (!name || !price || !categories) {
      return res.status(400).json({ error: "Faltan campos obligatorios: name, price, categories" });
    }
    const updatedProduct = await model.updateProduct(id, { name, price, categories });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    console.log(`El producto con ID ${id} ha sido actualizado`);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(`Error al actualizar el producto con ID ${id}:`, error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

// Elimina un producto por ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await model.deleteProduct(id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    console.log(`El producto con ID ${id} ha sido eliminado`);
    res.status(204).send();
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${id}:`, error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};