function toggleMenu() {
    let menuToggle = document.querySelector(".toggle");
    let menu = document.querySelector(".menu");
    let logo = document.querySelector("section .logo");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
    logo.classList.toggle("active");
}