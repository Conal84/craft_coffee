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
// value == asc / desc
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

// Get by variant Id
//router.get("/variant/:value, productController.getByVariantId);
exports.getByVariantId = catchAsync(async (req, res, next) => {
  const { value } = req.params;

  const docs = await Product.find(
    { "variants._id": value },
    { _id: 0, "variants.$": 1 }
  );

  const variant = docs[0].variants[0];

  res.status(200).json({
    status: "success",
    variant,
  });
});

// Get bestsellers
//router.get("/bestsellers, productController.getBestsellers);
exports.getBestsellers = catchAsync(async (req, res, next) => {
  const docs = await Product.find().sort({ ordered: "desc" }).limit(4);

  res.status(200).json({
    status: "success",
    results: docs.length,
    data: {
      data: docs,
    },
  });
});

// Get by best brew method
//router.get("/brew-method/:value, productController.getByBrewMethod);
exports.getByBrewMethod = catchAsync(async (req, res, next) => {
  const { value } = req.params;

  const docs = await Product.find({ bestBrew: value });

  res.status(200).json({
    status: "success",
    results: docs.length,
    data: {
      data: docs,
    },
  });
});
