const express = require("express");
const router = express.Router();

const apiController = require("../modules/api/pay/pay.controller");

router.post("/pay", apiController.initiatePayment);

module.exports = router;
