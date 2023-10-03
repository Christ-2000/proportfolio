'use strict'
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
}
//darkmode/light mode
let darkmode = document.querySelector("#darkmode");

darkmode.addEventListener('click', onclick = () => {
    if (darkmode.classList.container("fa-moon")) {
        darkmode.classList.replace("fa-moon", "fa-sun");
        document.body.classList.add("active");
    } else {
        darkmode.classList.replace("fa-sun", "fa-moon");
        document.body.classList.remove("active");
    }
})