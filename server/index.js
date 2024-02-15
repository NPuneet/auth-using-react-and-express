const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// const express = require ("e")
const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/react")
  .then(() => console.log("Mongoose connected"));

app.use(cors());
app.use(express.json());

const userRouter = require("./routes/index");
app.use("/user", userRouter);

app.listen(3000, () => console.log("server running"));
