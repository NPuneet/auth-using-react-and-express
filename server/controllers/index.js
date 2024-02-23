const User = require("../models/index");

const getUser = (req, res) => {
  User.find({})
    .then((result) => {
      console.log("records fetched: ", result);
      res.json(result);
    })
    .catch((err) => {
      res.json({ message: "error fetching records" });
    });
};
const getUserById = async (req, res) => {
  res.json({ message: `Welcome to the profile of ${req.params.username}` });
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
  getUserById,
};
