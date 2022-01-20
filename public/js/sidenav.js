let burger = document.querySelector(".nav__burger");
let sidenav = document.querySelector(".sidenav");
let caret = document.querySelector(".sidenav__caret");
let learn_dropdown = document.querySelector(".sidenav__list__item__drop");
let sidenav_search = document.querySelector(".sidenav__form--container");

burger.addEventListener("click", function () {
  sidenav.classList.toggle("sidenav__active");
});

caret.addEventListener("click", function (e) {
  learn_dropdown.classList.toggle("sidenav__list__item__drop__active");
  caret.classList.toggle("sidenav__caret--rotate");
  e.stopPropagation();
});

sidenav_search.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
});
