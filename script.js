// Fetch the vocabulary data from the raw GitHub URL
fetch('https://raw.githubusercontent.com/learnandbalance/flashcards/main/vocabulary.json')
  .then(response => response.json())
  .then(data => {
    console.log('Vocabulary data fetched successfully:', data); // Check if data is fetched
    displayVocabulary(data); // Call a function to display the vocabulary
  })
  .catch(error => {
    console.error('Error fetching the vocabulary:', error);  // Log any errors here
  });

// Function to display the vocabulary on the webpage
function displayVocabulary(vocabularyList) {
  const vocabularyContainer = document.getElementById('vocabulary-container');

  vocabularyList.forEach(vocab => {
    // Create HTML elements for each vocabulary item
    const wordElement = document.createElement('h3');
    wordElement.textContent = `Word: ${vocab.word}`;

    const definitionElement = document.createElement('p');
    definitionElement.textContent = `Definition: ${vocab.definition}`;

    const translationElement = document.createElement('p');
    translationElement.textContent = `Translation: ${vocab.translation}`;

    const verbFormsElement = document.createElement('p');
    // Use bracket notation to access the key with spaces and parentheses
    verbFormsElement.textContent = `Verb Forms: ${vocab['Verb Form (if applicable)']}`;

    // Append elements to the container
    vocabularyContainer.appendChild(wordElement);
    vocabularyContainer.appendChild(definitionElement);
    vocabularyContainer.appendChild(translationElement);
    vocabularyContainer.appendChild(verbFormsElement);
  });
}
