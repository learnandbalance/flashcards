let flashcards = []; // This will store the flashcards data
let currentCard = 0; // Track the current flashcard
let isFlipped = false; // Track if the card is flipped

// Fetch the vocabulary data from the JSON file
fetch('vocabulary.json')
  .then(response => response.json())
  .then(data => {
    flashcards = data; // Store the data in the flashcards array
    displayFlashcard(); // Display the first flashcard
  })
  .catch(error => {
    console.error('Error fetching the vocabulary:', error);
  });

// Function to display the flashcard
function displayFlashcard() {
  const flashcard = flashcards[currentCard];
  const content = document.getElementById('content');
  
  if (isFlipped) {
    // Show definition, translation, and verb forms if flipped
    content.innerHTML = `
      <p><strong>Definition:</strong> ${flashcard.definition}</p>
      <p><strong>Translation:</strong> ${flashcard.translation}</p>
      <p><strong>Verb Forms:</strong> ${flashcard['Verb Form (if applicable)']}</p>
    `;
  } else {
    // Show the word on the front
    content.innerHTML = `<h2>${flashcard.word}</h2>`;
  }
}

// Event listeners for buttons
document.getElementById('flip-btn').addEventListener('click', () => {
  isFlipped = !isFlipped; // Toggle flip state
  displayFlashcard();
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentCard = (currentCard + 1) % flashcards.length; // Go to next card
  isFlipped = false; // Reset flip state
  displayFlashcard();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length; // Go to previous card
  isFlipped = false; // Reset flip state
  displayFlashcard();
});
