const express = require("express");
const productController = require("../controllers/productController");
//const authController = require("../controllers/authController");
//const bookingController = require('../controllers/bookingController');

const router = express.Router();

// Create product
router.post("/", productController.createProduct);

// Read all products
router.get("/", productController.getAllProducts);

// Read one product by Id
router.get("/:id", productController.getProduct);

// Update one product by Id
router.patch("/:id", productController.updateProduct);

// Delete one product by Id
router.delete("/:id", productController.deleteProduct);

// Read all products by roast level, 1, 2, 3, 4 or 5
router.get("/roast-level/:value", productController.getByRoastValue);

module.exports = router;
