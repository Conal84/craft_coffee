exports.getHome = (req, res, next) => {
  // 3) Render template using tour data from step 1)
  res.status(200).render("home", {
    title: "Homepage",
  });
};

exports.getShop = (req, res, next) => {
  // 3) Render template using tour data from step 1)
  res.status(200).render("shop", {
    title: "Shop",
  });
};
