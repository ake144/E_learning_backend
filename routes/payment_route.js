// routes/payment_route.js
const express = require('express');
const router = express.Router();
const paymentController = require('../controller/payment_controller');
const { checkError } = require('../utils/error_checker');

router.post('/', checkError(paymentController.chappaPay));

module.exports = router;
