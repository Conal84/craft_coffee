const Product = require("../models/productModel");
const factory = require("./handlerFactory");
const catchAsync = require("../utils/catchAsync");
const { getProducts } = require("./viewsController");

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

// Get all product variants
exports.getAllVariants = catchAsync(async (req, res, next) => {
  const docs = await Product.find({}, { variants: 1 });

  res.status(200).json({
    status: "success",
    data: {
      data: docs,
    },
  });
});

// Get all by roast value, 1, 2, 3, 4 or 5
// Roast value = desc => high to low
// Roast value = asc => low to high
// router.get("/roast-level/:value", productController.getByRoastValue);
exports.getByRoastValue = catchAsync(async (req, res, next) => {
  const { value } = req.params;
  let docs;

  if (value === "desc") {
    docs = await Product.find().sort({ roast: value });
  } else if (value === "asc") {
    docs = await Product.find().sort({ roast: value });
  } else {
    docs = await Product.find({ roast: value });
  }

  res.status(200).json({
    status: "success",
    results: docs.length,
    data: {
      data: docs,
    },
  });
});

// Get all by size ascending / descending
//router.get("/size/:value", productController.getBySize);
exports.getBySize = catchAsync(async (req, res, next) => {
  const { value } = req.params;

  // const docs = await Product.find().sort({ size: value });
  // const docs = await Product.find({}, { variants: 1 }).sort({ size: value });
  const docs = await Product.find({ "variants.size": value });

  res.status(200).json({
    status: "success",
    value: value,
    results: docs.length,
    data: {
      data: docs,
    },
  });
});

// Get all by date added ascending / descending
//router.get("/date/:value", productController.getByDate);
exports.getByDate = catchAsync(async (req, res, next) => {
  const { value } = req.params;

  const docs = await Product.find().sort({ dateAdded: value });

  res.status(200).json({
    status: "success",
    value: value,
    results: docs.length,
    data: {
      data: docs,
    },
  });
});
