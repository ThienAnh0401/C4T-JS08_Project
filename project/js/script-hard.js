const cardContainer = document.querySelector('#flashcard-container');

let numOfWords = 0;
for (let i = 0; i < HARDDATA.length; i++) {
    const card = createCard(HARDDATA[i].word, HARDDATA[i].definition, HARDDATA[i].spelling, HARDDATA[i].img);

    card.addEventListener('click', flipCard);

    cardContainer.appendChild(card);
    numOfWords++;
}

let card = cardContainer.querySelector('.flashcard-box');
card.classList.remove('hidden');

let currentIndex = 1;
const statusIndex = document.querySelector('.bar strong');

statusIndex.textContent = currentIndex;
const statusTotal = document.querySelector('.bar span');

statusTotal.textContent = numOfWords;

const btnPrev = document.querySelector('#back-arrow');
btnPrev.addEventListener('click', prevCard);

const btnNext = document.querySelector('#next-arrow');
btnNext.addEventListener('click', nextCard);

document.addEventListener('keydown', navigateCards);
