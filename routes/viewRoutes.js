const express = require("express");
const viewController = require("../controllers/viewsController");
const basketController = require("../controllers/basketController");
//const authController = require("../controllers/authController");
//const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.get("/", viewController.getHome);
router.get("/shop", viewController.getShop);
router.get("/product", viewController.getProduct);
//router.get("/products", viewController.getProducts);
//router.post("/products", viewController.getProducts);
router.get("/basket", viewController.getBasket);

module.exports = router;
