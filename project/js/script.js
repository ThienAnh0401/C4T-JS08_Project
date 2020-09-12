function createCard(word, definition, spelling, img) {
    const card = document.createElement('div');
    card.classList.add('flashcard-box');
    card.classList.add('show-word');
    card.classList.add('hidden');

    const wordSide = document.createElement('div');
    wordSide.classList.add('flashcard');
    wordSide.classList.add('word');
    wordSide.textContent = word;

    const definitionSide = document.createElement('div');
    definitionSide.classList.add('flashcard');
    definitionSide.classList.add('definition');
    // definitionSide.textContent = definition;

    card.appendChild(wordSide);

    let meaningTag = document.createElement('p');
    let spellingTag = document.createElement('p');
    let imgTag = document.createElement('img');
    meaningTag.textContent=definition;
    spellingTag.textContent=spelling;
    imgTag.setAttribute('src', img);

    definitionSide.appendChild(meaningTag);
    definitionSide.appendChild(spellingTag);
    definitionSide.appendChild(imgTag);

    card.appendChild(definitionSide);

    return card;
};

function flipCard() {
    card.classList.toggle('show-word');
    document.getElementById('card').play();
};

function prevCard() {
    const prevCard = card.previousElementSibling;

    if (prevCard) {
        card.classList.add('hidden');
        prevCard.classList.remove('hidden');
        currentIndex--;
        statusIndex.textContent = currentIndex;
        document.getElementById('btnsfx').play();
        card = prevCard;
    }
};

function nextCard() {
    const nextCard = card.nextElementSibling;

    if (nextCard) {
        card.classList.add('hidden');
        nextCard.classList.remove('hidden');
        currentIndex++;
        statusIndex.textContent = currentIndex;
        document.getElementById('btnsfx').play();
        card = nextCard;
    }
};

function navigateCards(event) {
    const key = event.key;
    if (key === 'ArrowLeft') {
        prevCard();
    } else if (key === 'ArrowRight') {
        nextCard();
    } else if (key === 'ArrowUp') {
        flipCard();
    }
};

