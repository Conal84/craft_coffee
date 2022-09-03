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
  console.log(JSON.stringify(req.query));

  // 1) Filtering
  let query = Product.find(req.query);

  // 2) Sorting
  if (req.query.sort) {
    query = query.sort(req.query.sort);
  }

  // Execute the query
  const products = await query;

  // let heading;
  // console.log(req.query);

  // let reqType = Object.keys(req.query)[0];

  // switch (reqType) {
  //   case "ordered":
  //     products = await Product.find().sort(req.query).limit(6);
  //     heading = "Bestsellers";
  //     break;
  //   case "roast":
  //     products = await Product.find().sort(req.query);
  //     heading = "Roast Level";
  //     break;
  //   case "dateAdded":
  //     products = await Product.find().sort(req.query).limit(6);
  //     heading = "Latest Added";
  // }

  // Render the template using data
  res.status(200).render("shop", {
    title: "Shop",
    products,
  });
});

// Render basket page
exports.getBasket = (req, res, next) => {
  res.status(200).render("basket", {
    title: "Basket",
  });
};
