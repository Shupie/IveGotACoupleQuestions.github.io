// Get the text area element
const textArea = document.querySelector("#text-area");

// Create an array of random words
const words = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"];

// Create a flag to indicate whether the text generator is running
let isRunning = false;

// Start the text generator when the user clicks on the screen
document.addEventListener("click", function() {
  isRunning = true;
  generateText();
});

// Stop the text generator when the user clicks on the screen again
document.addEventListener("click", function() {
  isRunning = false;
});

// Generate random text
function generateText() {
  // Get a random word from the array
  const word = words[Math.floor(Math.random() * words.length)];

  // Add the word to the text area
  textArea.textContent += word + " ";

  // If the text generator is still running, request the next animation frame
  if (isRunning) {
    requestAnimationFrame(generateText);
  }
}

// Start the text generator when the page loads
window.addEventListener("load", generateText);
