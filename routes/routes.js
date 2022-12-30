const express = require("express");
const { upload } = require("../config/fileUtils");
const { getData, saveData } = require("../controllers/user.controller");
const router = express.Router();

router.route("/").get(getData).post(upload.single("profileImg"), saveData);

module.exports = router;
