let burger = document.querySelector(".nav__burger");
let sidenav = document.querySelector(".sidenav");
let learn = document.querySelector(".sidenav__list__item__text");
let learn_dropdown = document.querySelector(".sidenav__list__item__drop");

burger.addEventListener("click", function () {
  sidenav.classList.toggle("hide");
});

learn.addEventListener("click", function (e) {
  learn_dropdown.classList.toggle("hide");
  e.stopPropagation();
});
