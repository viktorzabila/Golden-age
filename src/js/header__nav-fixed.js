// //============== Nav-bar fixed ============================//
const header = document.querySelector(".header");

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add("header--fixed");
    } else {
        header.classList.remove("header--fixed");
    }
};
