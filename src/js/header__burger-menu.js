//============== Button burger-menu ============================//
const toggeSwitch = document.querySelector(".header__toggle");
const burgerMenu = document.querySelector(".header__burger-menu");

const navBar = document.querySelector(".header__nav");

toggeSwitch.addEventListener("click", function() {
    burgerMenu.classList.toggle("header__burger-menu--active");
    navBar.classList.toggle("header__nav--active");
});
