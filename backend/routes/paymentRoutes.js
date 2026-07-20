const express = require('express');

const router = express.Router();

const { createdOrder, verifyPayment } = require('../controllers/paymentControllers');

router.post("/order", createdOrder);
router.post("/verify", verifyPayment);

module.exports = router;
