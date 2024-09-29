let flashcards = [];
let currentCard = 0;
let isFlipped = false;

// Fetch the vocabulary data from the JSON file
fetch('vocabulary.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    flashcards = data;
    displayFlashcard(); // Display the first flashcard
  })
  .catch(error => {
    console.error('Error fetching the vocabulary:', error);
    document.getElementById('content').innerText = 'Error loading vocabulary data!';
  });

// Function to display the flashcard
function displayFlashcard() {
  if (flashcards.length === 0) {
    document.getElementById('content').innerText = 'No vocabulary data found!';
    return;
  }

  const flashcard = flashcards[currentCard];
  const content = document.getElementById('content');
  
  if (isFlipped) {
    content.innerHTML = `
      <p><strong>Definition:</strong> ${flashcard.definition}</p>
      <p><strong>Translation:</strong> ${flashcard.translation}</p>
      <p><strong>Verb Forms:</strong> ${flashcard['Verb Form (if applicable)']}</p>
    `;
  } else {
    content.innerHTML = `<h2>${flashcard.word}</h2>`;
  }
}

// Event listeners for buttons
document.getElementById('flip-btn').addEventListener('click', () => {
  isFlipped = !isFlipped;
  displayFlashcard();
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentCard = (currentCard + 1) % flashcards.length;
  isFlipped = false;
  displayFlashcard();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
  isFlipped = false;
  displayFlashcard();
});
