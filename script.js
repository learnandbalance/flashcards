let vocabularyData = [];  // This will hold your vocabulary JSON data.
let currentIndex = 0;
let isFlipped = false;

// Fetch the JSON file and initialize the flashcards
fetch('vocabulary01.json')
    .then(response => response.json())
    .then(data => {
        vocabularyData = data;
        showFlashcard(currentIndex);
    })
    .catch(error => console.error('Error loading vocabulary:', error));

function showFlashcard(index) {
    const flashcard = document.getElementById('flashcard');
    const questionDiv = document.getElementById('question');
    const answerDiv = document.getElementById('answer');

    questionDiv.textContent = vocabularyData[index].word;
    answerDiv.textContent = vocabularyData[index].definition;
    flashcard.classList.remove('flipped');

    // Disable prev/next buttons if at the start or end of the list
    document.getElementById('prev').disabled = index === 0;
    document.getElementById('next').disabled = index === vocabularyData.length - 1;
}

function flipFlashcard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

function nextFlashcard() {
    if (currentIndex < vocabularyData.length - 1) {
        currentIndex++;
        showFlashcard(currentIndex);
    }
}

function prevFlashcard() {
    if (currentIndex > 0
