import * as productModel from "../models/productModel.js";

export function getProductsController(req, res) {
  res.json(productModel.getProducts());
}

export function getProductByIdController(req, res) {
  const product = productModel.getProductById(parseInt(req.params.id));
  res.json(product);
}

export function addProductController(req, res) {
  const newProduct = productModel.addProduct(req.body);
  res.json(productModel.getProducts());
}

export function deleteProductByIdController(req, res) {
  productModel.deleteProductById(parseInt(req.params.id));
  res.json(productModel.getProducts());
}
