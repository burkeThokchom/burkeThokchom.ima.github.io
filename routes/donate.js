const express = require("express");
const router = express.Router();

const donateController = require("../modules/donate/donate.controller");

router.get("/", donateController.donate);

module.exports = router;
