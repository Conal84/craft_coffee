const express = require("express");
const basketController = require("../controllers/basketController");
//const authController = require("../controllers/authController");
//const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.post("/add", basketController.addToBasket);

module.exports = router;
