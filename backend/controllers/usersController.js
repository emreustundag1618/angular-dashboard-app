import * as userModel from "../models/userModel.js";

export function getUsersController(req, res) {
  res.json(userModel.getUsers());
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
