const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const verifyToken = require("./middlewares/auth");
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/react")
  .then(() => console.log("Mongoose connected"));

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/user", verifyToken, userRouter);
app.use("/auth", authRouter);

app.listen(3000, () => console.log("server running"));
