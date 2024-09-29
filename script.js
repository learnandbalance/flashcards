let flashcards = [];
let currentCard = 0;
let isFlipped = false;

// Fetch the vocabulary data from the JSON file
fetch('vocabulary.json')
  .then(response => response.json())
  .then(data => {
    flashcards = data; // Store the flashcard data
    console.log("Fetched flashcards data:", flashcards); // Log the fetched data
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
  console.log("Current flashcard data:", flashcard); // Log current flashcard

  const content = document.getElementById('content');
  
  if (isFlipped) {
    // Show the details (definition, translation, verb forms) if the card is flipped
    content.innerHTML = `
      <p><strong>Definition:</strong> ${flashcard['Definition']}</p>
      <p><strong>Translation:</strong> ${flashcard['Turkish Translation']}</p>
      <p><strong>Verb Forms:</strong> ${flashcard['Verb Form'] || 'N/A'}</p>
    `;
  } else {
    // Show the word if the card is not flipped
    content.innerHTML = `<h2>${flashcard['Word']}</h2>`;
  }
}

// Event listeners for buttons
document.getElementById('flip-btn').addEventListener('click', () => {
  isFlipped = !isFlipped; // Toggle the flip state
  displayFlashcard();
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentCard = (currentCard + 1) % flashcards.length; // Go to the next card
  isFlipped = false; // Reset the flip state
  displayFlashcard();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentCard = (currentCard - 1 + flashcards.length) % flashcards.length; // Go to the previous card
  isFlipped = false; // Reset the flip state
  displayFlashcard();
});
