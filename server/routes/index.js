const express = require("express");
const router = express.Router();
const { getUser, createUser, getUserById } = require("../controllers/index");
router.route("/").get(getUser).post(createUser);
router.route("/profile/:username").get(getUserById);

module.exports = router;
