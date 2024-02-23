const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
});
const loginUser = mongoose.model("loginUser", schema);
module.exports = loginUser;
