const express = require('express');

const router = express.Router();

const { processPayment } = require('../controllers/paymentControllers');
const { protect } = require('../middleware/authMiddleware');

router.post("/order", createdOrder);
router.post("/verify", verifyPayment);
