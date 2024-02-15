const User = require("../models/index");

const getUser = async (req, res) => {
  return res.send("moye started");
};
const createUser = async (req, res) => {
  const jsonData = User(req.body);
  console.log(jsonData);
  await jsonData.save();
  return res.status(201).json({ status: "User created successfully" });
};
module.exports = {
  getUser,
  createUser,
};
