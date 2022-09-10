const fs = require("fs");
const Product = require("../models/productModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

// Render homepage
exports.getHome = catchAsync(async (req, res, next) => {
  // 1) Get bestsellers
  const bestsellers = await Product.find().sort({ ordered: "desc" }).limit(4);

  // 2) Get latest additions
  const additions = await Product.find().sort({ dateAdded: "desc" }).limit(4);

  // 3) Render template using data from above
  res.status(200).render("home", {
    title: "Homepage",
    bestsellers,
    additions,
  });
});

// Render individual product page
exports.getProduct = catchAsync(async (req, res, next) => {
  // 1) Get the individual product
  const product = await Product.findById(req.params.id);

  // 2) Handle any product search errors
  if (!product) {
    return next(new AppError("There is no product with that name", 404));
  }

  // 3) Render the template using product data
  res.status(200).render("product", {
    title: product.name,
    product,
  });
});

// Render shop page
exports.getShop = catchAsync(async (req, res, next) => {
  // /shop?sort=-ordered&roast=3
  let query = Product.find(req.query);
  let currentSort = req.query.sort;

  // 1) Sort
  const sortBy = req.query.sort.split(",").join(" ");
  query = query.sort(sortBy);

  // Execute the query
  const products = await query;

  let heading;
  let reqType = req.query.sort;

  switch (reqType) {
    case "-ordered":
      heading = "Bestsellers";
      break;
    case "-roast,-ordered":
      heading = "Roast High to Low";
      break;
    case "roast,-ordered":
      heading = "Roast Low to High";
      break;
    case "-dateAdded":
      heading = "Latest Added";
  }

  let filter;
  if (req.query.roast) {
    filter = `Roast level - ${req.query.roast}`;
  }

  if (req.query.bestBrew) {
    filter = `Brew method - ${req.query.bestBrew}`;
  }

  // Render the template using data
  res.status(200).render("shop", {
    title: "Shop",
    products,
    currentSort,
    heading,
    filter,
  });
});

// Render basket page
exports.getBasket = (req, res, next) => {
  res.status(200).render("basket", {
    title: "Basket",
  });
};
