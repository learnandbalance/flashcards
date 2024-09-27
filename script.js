// Vocabulary List
const flashcards = [
    {
        word: "Diminished",
        definition: "Made smaller or less; reduced in size, amount, importance.",
        translation: "Azalmış, küçülmüş, eksilmiş.",
        verbForms: "N/A"
    },
    {
        word: "Labored Breathing",
        definition: "Breathing that is difficult and requires a lot of effort.",
        translation: "Zor nefes alma, zorlu solunum.",
        verbForms: "N/A"
    },
    {
        word: "Remain",
        definition: "To continue to exist or stay in the same place or condition.",
        translation: "Kalmak, devam etmek, artmak.",
        verbForms: "N/A"
    },
    {
        word: "Queef",
        definition: "An expulsion of air from the vagina, often making a sound.",
        translation: "Vajinal gaz çıkışı.",
        verbForms: "N/A"
    },
    {
        word: "Legacy",
        definition: "Something handed down from an ancestor or from the past; money or property left to someone in a will.",
        translation: "Miras, vasiyet, geçmişten kalan.",
        verbForms: "N/A"
    },
    {
        word: "Monotony",
        definition: "Lack of variety and interest; tedious repetition and routine.",
        translation: "Tekdüzelik, monotonluk.",
        verbForms: "N/A"
    },
    {
        word: "Willingness",
        definition: "The quality or state of being prepared to do something; readiness.",
        translation: "Gönüllülük, istek, hazır olma durumu.",
        verbForms: "N/A"
    },
    {
        word: "Monetizing",
        definition: "The process of earning revenue from an asset, business, or service.",
        translation: "Paraya çevirmek, gelir elde etmek.",
        verbForms: "N/A"
    },
    {
        word: "Neglect",
        definition: "To fail to care for or give attention to someone or something.",
        translation: "İhmal etmek, göz ardı etmek, bakmamak.",
        verbForms: "V1: neglect, V2: neglected, V3: neglected"
    },
    {
        word: "Pile",
        definition: "A heap or stack of objects; to lay or place in a pile.",
        translation: "Yığın, küme, istif; yığmak, istiflemek.",
        verbForms: "N/A"
    }
];

// Track the current flashcard
let currentFlashcard = 0;
let isFlipped = false;

// Grab elements
const content = document.getElementById("content");
const flipBtn = document.getElementById("flip-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn"); // Correct ID reference

// Function to display the current flashcard
function displayFlashcard() {
    const flashcard = flashcards[currentFlashcard];
    content.innerHTML = `<h2>${flashcard.word}</h2>`;
}

// Flip event to toggle between word and details
flipBtn.addEventListener("click", () => {
    const flashcard = flashcards[currentFlashcard];
    if (isFlipped) {
        // If the card is flipped, show the word again
        content.innerHTML = `<h2>${flashcard.word}</h2>`;
    } else {
        // If not flipped, show the details
        content.innerHTML = `
            <p><strong>Definition:</strong> ${flashcard.definition}</p>
            <p><strong>Translation:</strong> ${flashcard.translation}</p>
            <p><strong>Verb Forms:</strong> ${flashcard.verbForms}</p>
        `;
    }
    isFlipped = !isFlipped;
});

// Next flashcard event
nextBtn.addEventListener("click", () => {
    // Move to the next flashcard
    currentFlashcard = (currentFlashcard + 1) % flashcards.length;
    displayFlashcard();
    isFlipped = false; // Reset to show the word first on the next card
});

// Previous flashcard event
prevBtn.addEventListener("click", () => {
    // Move to the previous flashcard
    currentFlashcard = (currentFlashcard - 1 + flashcards.length) % flashcards.length;
    displayFlashcard();
    isFlipped = false; // Reset to show the word first on the previous card
});

// Initialize the first flashcard on page load
displayFlashcard();
