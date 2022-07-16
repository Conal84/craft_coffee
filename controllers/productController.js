const Product = require("../models/productModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");

// Create a product
exports.createProduct = factory.createOne(Product);

// Get all products
exports.getAllProducts = factory.getAll(Product);

// Get one product by Id
exports.getProduct = factory.getOneById(Product);

// Update a product
exports.updateProduct = factory.updateOne(Product);

// Delete a product
exports.deleteProduct = factory.deleteOne(Product);

// Get all by roast value, 1, 2, 3, 4 or 5
// router.get("/roast-level/:value", productController.getByRoastValue);
exports.getByRoastValue = catchAsync(async (req, res, next) => {
  const { value } = req.params;
  const docs = await Product.find({ roast: value });

  res.status(200).json({
    status: "success",
    results: docs.length,
    data: {
      data: docs,
    },
  });
});
