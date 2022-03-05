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

exports.getBasket = (req, res, next) => {
  // Render basket page
  res.status(200).render("basket", {
    title: "Basket",
  });
};
