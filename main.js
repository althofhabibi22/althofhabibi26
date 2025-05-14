// MENU TOGGLE
const menuBtn = document.getElementById("toggle");
const menuNav = document.getElementById("menunav");
const menuClose = document.getElementById("close")

menuBtn.addEventListener("click", () => {
    menuNav.classList.add("show");
});
menuClose.addEventListener("click", () => {
    menuNav.classList.remove("show")
})