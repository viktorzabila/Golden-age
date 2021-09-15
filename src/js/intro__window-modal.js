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
