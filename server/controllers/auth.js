const loginUser = require("../models/login");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();

const login = (req, res) => {
  let { email, password } = req.body;
  loginUser
    .findOne({ email })
    .then(async (result) => {
      let validate = await bcrypt.compare(password, result.password);
      console.log("validate:", result);
      if (validate) {
        const token = jwt.sign({ id: result._id }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ token: token });
      } else {
        res.status(200).json({ message: "invalid username/password" });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json({ message: "server error" });
    });
};

const register = async (req, res) => {
  let { email, password } = req.body;
  password = await bcrypt.hash(password, 10);
  console.log("hashed password", password);
  const newObj = new loginUser({ email, password });
  newObj
    .save()
    .then((result) => {
      return res.status(200).json({ message: "success" });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ message: "Failed to register user" });
    });
};
module.exports = {
  login,
  register,
};
