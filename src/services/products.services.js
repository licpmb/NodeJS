import * as model from "../models/products.model.js";

export const getAllProducts = async () => {
  return await model.getAllProducts();
};

export const getProductById = async (id) => {
  return await model.getProductById(id);
};

export const createProduct = async (newProduct) => {
  return await model.createProduct(newProduct);
};

export const updateProduct = async (id, updatedProductData) => {
  return await model.updateProduct(id, updatedProductData);
};

export const deleteProduct = async (id) => {
  return await model.deleteProduct(id);
};
