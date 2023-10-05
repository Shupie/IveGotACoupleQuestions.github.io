// Get the counter element
const counter = document.querySelector("#counter");

// Initialize the click count
let clickCount = 0;

// Update the counter display when the user clicks
document.addEventListener("click", function() {
  clickCount++;
  counter.textContent = clickCount;
});

// Save the click count to local storage
localStorage.setItem("clickCount", clickCount);

// Restore the click count from local storage when the page loads
window.addEventListener("load", function() {
  clickCount = localStorage.getItem("clickCount");
  counter.textContent = clickCount;
});
