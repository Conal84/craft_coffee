const express = require("express");
const viewController = require("../controllers/viewsController");
const basketController = require("../controllers/basketController");
//const authController = require("../controllers/authController");
//const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get("/", viewController.getHome);
router.get("/product/:id", viewController.getProduct);
//router.get("/shop", viewController.getShop);
router.get("/basket", viewController.getBasket);

module.exports = router;
