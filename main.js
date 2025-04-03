const menuHamburguer = document.querySelector(".menuHamburguer");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menuHamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    main.classList.toggle("active");
});

// Fecha o menu se o usuário clicar fora
document.addEventListener("click", (event) => {
    if (!menu.contains(event.target) && !menuHamburguer.contains(event.target) && !aside.contains(event.target)) {
        menu.classList.remove("active");
        main.classList.remove("active");
        aside.classList.remove("active");
    }
});


// Carrossel
let currentIndex = 0;
const cards = document.querySelector('.cards');
const totalCards = document.querySelectorAll('.Card').length;
let currentIndexFoto = 0;
const cardsFoto = document.querySelector('.cardsFoto');
const totalCardsFoto = document.querySelectorAll('.CardFoto').length;

document.getElementById('next').addEventListener('click', () => {
    if (currentIndex < totalCards - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para o primeiro card
    }
    updateCarousel();
});
document.getElementById('nextFoto').addEventListener('click', () => {
    if (currentIndexFoto < totalCardsFoto - 1) {
        currentIndexFoto++;
    } else {
        currentIndexFoto = 0; // Volta para o primeiro card
    }
    updateCarouselFoto();
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalCards - 1; // Vai para o último card
    }
    updateCarousel();
});
document.getElementById('prevFoto').addEventListener('click', () => {
    if (currentIndexFoto > 0) {
        currentIndexFoto--;
    } else {
        currentIndexFoto = totalCards - 1; // Vai para o último card
    }
    updateCarouselFoto();
});

function updateCarousel() {
    const offset = -currentIndex * 100; // Cada card ocupa 100% da largura
    cards.style.transform = `translateX(${offset}%)`;
}
function updateCarouselFoto() {
    const offsetFoto = -currentIndexFoto * 100; // Cada card ocupa 100% da largura
    cardsFoto.style.transform = `translateX(${offsetFoto}%)`;
}