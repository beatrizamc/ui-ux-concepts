const cards = document.querySelectorAll('.card');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-prox');
let currentIndex = 0;

function showCard(index) {
    cards.forEach(card => card.classList.remove('card-ativo'));
    cards[index].classList.add('card-ativo');
}

btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
});

btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
});