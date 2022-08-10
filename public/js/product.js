function basketAdd() {
  let productId = document.querySelector(".product__info").dataset.productid;
  let checked = document.querySelector('input[name="size"]:checked');
  let variantId = checked.dataset.variantid;
  let size = checked.value;
  let price = checked.dataset.price;
  let grind = document.querySelector('input[name="grind"]:checked').value;
  let qty = document.querySelector("#quantity").value;

  // Create item object
  let item = {
    productId: productId,
    variantId: variantId,
    size: size,
    price: price,
    grind: grind,
    qty: qty,
  };

  // 1) Check if basket exists in local storage
  if (localStorage.getItem("basket")) {
    // 2) If exists pull it down
    let oldBasket = localStorage.getItem("basket");
    let JSONBasket = JSON.parse(oldBasket);

    // 3) Add new item to basket
    let basket = Object.assign({}, JSONBasket, item);

    // 4) Push it up to local storage again
    localStorage.setItem("basket", JSON.stringify(basket));
  } else {
    // 5) Else create basket and populate with item
    localStorage.setItem("basket", JSON.stringify(item));
  }
}
