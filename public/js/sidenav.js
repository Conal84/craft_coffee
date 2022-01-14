let burger = document.querySelector(".nav__burger");
let sidenav = document.querySelector(".nav__sidenav");

burger.addEventListener("click", function () {
  sidenav.classList.toggle("hide");
});
