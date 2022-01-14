let burger = document.querySelector(".nav__burger");
let sidenav = document.querySelector(".nav__sidenav");

sidenav.style.display = "none";

burger.addEventListener("click", function () {
  sidenav.style.display === "none"
    ? (sidenav.style.display = "block")
    : (sidenav.style.display = "none");
});
