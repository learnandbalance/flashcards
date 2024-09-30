let flashcards = [];
let currentIndex = 0;
let showDefinition = false;

fetch('vocabulary01.json')
    .then(response => response.json())
    .then(data => {
        flashcards = data;
        showFlashcard();
    });

function showFlashcard() {
    const question = document.getElementById('question');
    const answer = document.getElementById('answer');
    
    if (flashcards.length > 0) {
        question.textContent = flashcards[currentIndex].word;
        answer.textContent = flashcards[currentIndex].definition;
    }
}

function toggleAnswer() {
    const answer = document.getElementById('answer');
    showDefinition = !showDefinition;
    answer.style.display = showDefinition ? 'block' : 'none';
}

function nextFlashcard() {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        showDefinition = false;
        document.getElementById('answer').style.display = 'none';
        showFlashcard();
    }
}

function prevFlashcard() {
    if (currentIndex > 0) {
        currentIndex--;
        showDefinition = false;
        document.getElementById('answer').style.display = 'none';
        showFlashcard();
    }
}
