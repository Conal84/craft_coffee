const fs = require("fs");

exports.getHome = (req, res, next) => {
  // Render homepage
  res.status(200).render("home", {
    title: "Homepage",
  });
};

exports.getShop = (req, res, next) => {
  // Render shop page
  res.status(200).render("shop", {
    title: "Shop",
  });
};

exports.getProduct = (req, res, next) => {
  // Render product page
  res.status(200).render("product", {
    title: "Product",
  });
};

const products = JSON.parse(
  fs.readFileSync(
    `/Users/conalwalsh/Code/Craft Coffee/dev-data/data/products.json`
  )
);

exports.getProducts = (req, res, next) => {
  if (req.method === "POST") {
    console.log(req.body);
    res.send("Done");
  } else {
    res.status(200).json({
      status: "success",
      results: products.length,
      data: {
        products,
      },
    });
  }
};

exports.getBasket = (req, res, next) => {
  // Render basket page
  res.status(200).render("basket", {
    title: "Basket",
  });
};
