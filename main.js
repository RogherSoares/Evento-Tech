const menuHamburguer = document.querySelector(".menuHamburguer"); 
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menuHamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    main.classList.toggle("active"); 
});

    