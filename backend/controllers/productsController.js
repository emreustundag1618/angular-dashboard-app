import * as productModel from "../models/productModel.js";

export function getProductsController(req, res) {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  const sortField = req.query.sort || "id"; // Default sorting field is 'id'
  const sortOrder = req.query.order === "desc" ? -1 : 1; // Default order is ascending

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const sortedData = productModel.getProducts().slice().sort((a, b) => {
    if (a[sortField] < b[sortField]) {
      return -1 * sortOrder;
    }
    if (a[sortField] > b[sortField]) {
      return 1 * sortOrder;
    }
    return 0;
  });

  const paginatedData = sortedData.slice(startIndex, endIndex);

  res.json({
    page,
    pageSize,
    totalItems: productModel.getProducts().length,
    currentItems: paginatedData,
  });
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
