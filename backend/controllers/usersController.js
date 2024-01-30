import * as userModel from "../models/userModel.js";

export function getUsersController(req, res) {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;

  const sortField = req.query.sort || "id"; // Default sorting field is 'id'
  const sortOrder = req.query.order === "desc" ? -1 : 1; // Default order is ascending

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const sortedData = userModel.getUsers().slice().sort((a, b) => {
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
    totalItems: userModel.getUsers().length,
    currentItems: paginatedData
  });
}

export function getUserByIdController(req, res) {
  const user = userModel.getUserById(parseInt(req.params.id));
  res.json(user);
}

export function addUserController(req, res) {
  userModel.addUser(req.body);
  res.json(userModel.getUsers());
}

export function deleteUserByIdController(req, res) {
  userModel.deleteUserById(parseInt(req.params.id));
  res.json(userModel.getUsers());
}
