//============== Button burger-menu ============================//
const toggeSwitch = document.querySelector(".header__toggle");
const burgerMenu = document.querySelector(".header__burger-menu");

const navBar = document.querySelector(".header__nav");

toggeSwitch.addEventListener("click", function() {
    burgerMenu.classList.toggle("header__burger-menu--active");
    navBar.classList.toggle("header__nav--active");
});

// //============== Nav-bar fixed ============================//
const header = document.querySelector(".header");

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        header.classList.add("header--fixed");
    } else {
        header.classList.remove("header--fixed");
    }
};

//============== Window-modal pop-up ============================//
const windowOpen = document.querySelector(".window-open");
const windowClose = document.querySelector(".window-close");
const windowModal = document.querySelector(".intro__window-modal");

windowOpen.onclick = function addClass() {
    windowModal.classList.add("intro__window-modal");
    windowModal.style.display = "block";
};

windowClose.onclick = function() {
    windowModal.classList.remove("intro__window-modal");
    windowModal.style.display = "none";
};

// //============== ScrollIntoView ============================//
const headerLink = document.querySelectorAll('a[href*="#')

for (let clickLink of headerLink) {
    clickLink.addEventListener('click', function (e) {
        e.preventDefault();
        var blockID = clickLink.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

