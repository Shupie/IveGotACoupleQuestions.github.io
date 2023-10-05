// Get the canvas element
const canvas = document.querySelector("#canvas");

// Get the canvas context
const ctx = canvas.getContext("2d");

// Create an array of random colors
const colors = ["red", "green", "blue", "yellow", "pink", "orange", "purple"];

// Start the animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw a random colored rectangle at a random position
  ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
  ctx.fillRect(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 10, 10);

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Start the animation loop
animate();
