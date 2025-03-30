const menuHamburguer = document.querySelector(".menuHamburguer");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");
const aside = document.querySelector("aside")

menuHamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
    main.classList.toggle("active");
    aside.classList.toggle("active");
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
let currentIndex = 1; // Começamos no segundo card (1), pois vamos duplicar o primeiro
const cards = document.querySelectorAll('.Card');
const totalCards = cards.length;
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const cardsContainer = document.querySelector('.cards');

// Ajuste a largura do carrossel dinamicamente com base no número de cards
cardsContainer.style.width = `${(totalCards + 2) * 100}%`; // Adiciona 2 para duplicar os cards
cards.forEach(card => card.style.width = `100%`); // Cada card ocupa 100% da largura do container

// Adiciona os primeiros e últimos cards para o efeito infinito
const firstCard = cards[0].cloneNode(true);
const lastCard = cards[cards.length - 1].cloneNode(true);
cardsContainer.appendChild(firstCard); // Duplicando o primeiro card no final
cardsContainer.insertBefore(lastCard, cards[0]); // Duplicando o último card no começo

// Atualiza o carrossel movendo-o para o slide correto
function updateCarousel() {
    const offset = currentIndex * 100; // Move um card por vez
    cardsContainer.style.transition = "transform 0.5s ease"; // Transição suave
    cardsContainer.style.transform = `translateX(-${offset}%)`; // Mover o carrossel para o slide correto
}

// Lógica para rolar para o próximo slide
nextButton.addEventListener('click', () => {
    if (currentIndex < totalCards + 1) { 
        currentIndex++;
        updateCarousel();
    }
    if (currentIndex === totalCards + 1) {
        setTimeout(() => {
            currentIndex = 1; // Volta para o segundo card
            cardsContainer.style.transition = "none"; // Remove a transição temporariamente
            cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Ajusta a posição
        }, 500); // Espera a transição acabar
    }
});

// Lógica para rolar para o slide anterior
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
    if (currentIndex === 0) {
        setTimeout(() => {
            currentIndex = totalCards;
            cardsContainer.style.transition = "none"; // Remove a transição temporariamente
            cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Ajusta a posição
        }, 500); // Espera a transição acabar
    }
});
// Função para resetar a transição do carrossel
function resetCarouselTransition() {
    cardsContainer.style.transition = "none";
    cardsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    setTimeout(() => {
        cardsContainer.style.transition = "transform 0.5s ease";
    }, 50); // Reativa a transição após um curto delay
}

// Inicializa o carrossel
updateCarousel();
// Adiciona os primeiros e últimos cards para o efeito infinito
function addLoopCards() {
    const firstCard = cards[0].cloneNode(true);
    const lastCard = cards[cards.length - 1].cloneNode(true);
    cardsContainer.appendChild(firstCard);
    cardsContainer.insertBefore(lastCard, cards[0]);
}

addLoopCards(); // Chama a função ao inicializar

