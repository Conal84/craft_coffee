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
  let filter;
  let products;

  // 1) Check the url parameter
  // /shop/all
  if (req.params.filter == "all") {
    // 2) Get bestsellers
    products = await Product.find().sort({ ordered: "desc" }).limit(8);
    filter = "Bestsellers";
  }

  //shop/roast?level=desc
  //shop/roast?level=asc
  if (req.params.filter == "roast") {
    // 2) Get by roast level high to low
    const level = req.query.level;

    products = await Product.find().sort({ roast: level });
    filter = "Roast Level";
  }

  if (req.params.filter == "latest") {
    // 2) Get by latest added
    products = await Product.find().sort({ dateAdded: "desc" });
    filter = "Latest Added";
  }

  // Render the template using bestseller data
  res.status(200).render("shop", {
    title: "Shop",
    filter,
    products,
  });
});

// exports.getProducts = (req, res, next) => {
//   if (req.method === "POST") {
//     console.log(req.body);
//     res.send("Done");
//   } else {
//     res.status(200).json({
//       status: "success",
//       results: products.length,
//       data: {
//         products,
//       },
//     });
//   }
// };

// Render basket page
exports.getBasket = (req, res, next) => {
  res.status(200).render("basket", {
    title: "Basket",
  });
};
