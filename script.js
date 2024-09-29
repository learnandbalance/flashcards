fetch('vocabulary.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // The data is now available
    displayVocabulary(data); // Call a function to display the vocabulary
  })
  .catch(error => {
    console.error('Error fetching the vocabulary:', error);
  });

function displayVocabulary(vocabularyList) {
  const vocabularyContainer = document.getElementById('vocabulary-container');

  vocabularyList.forEach(vocab => {
    const wordElement = document.createElement('h3');
    wordElement.textContent = `Word: ${vocab.word}`;

    const definitionElement = document.createElement('p');
    definitionElement.textContent = `Definition: ${vocab.definition}`;

    const translationElement = document.createElement('p');
    translationElement.textContent = `Translation: ${vocab.translation}`;

    const verbFormsElement = document.createElement('p');
    verbFormsElement.textContent = `Verb Forms: ${vocab.verbForms}`;

    vocabularyContainer.appendChild(wordElement);
    vocabularyContainer.appendChild(definitionElement);
    vocabularyContainer.appendChild(translationElement);
    vocabularyContainer.appendChild(verbFormsElement);
  });
}
