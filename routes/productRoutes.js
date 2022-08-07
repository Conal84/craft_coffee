const express = require("express");
const productController = require("../controllers/productController");
//const authController = require("../controllers/authController");
//const bookingController = require('../controllers/bookingController');

const router = express.Router();

// Create product
router.post("/", productController.createProduct);

// Read all products
router.get("/", productController.getAllProducts);

// Read all products and sort by descending ordered number (Bestsellers)
router.get("/bestsellers", productController.getBestsellers);

// Read one product by Id
router.get("/:id", productController.getProduct);

// Update one product by Id
router.patch("/:id", productController.updateProduct);

// Delete one product by Id
router.delete("/:id", productController.deleteProduct);

// Read all products by roast level, 1, 2, 3, 4 or 5
// Read products and sort by ascending or descending order
router.get("/roast-level/:value", productController.getByRoastValue);

// Read all products and sort by ascending / descending size
router.get("/size/:value", productController.getBySize);

// Read all products and sort by ascending / descending date added
router.get("/date/:value", productController.getByDate);

// Read all products and sort by ascending / descending date added
router.get("/variant/:value", productController.getByVariantId);

// Read all products and sort by ascending / descending date added
router.get("/brew-method/:value", productController.getByBrewMethod);

module.exports = router;
