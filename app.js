// Get the canvas element
const canvas = document.querySelector("#canvas");

// Get the canvas context
const ctx = canvas.getContext("2d");

// Create an array of different shapes
const shapes = ["square", "circle", "triangle"];

// Create a variable to store the current shape
let currentShape = shapes[0];

// Create a variable to store the current zoom level
let zoomLevel = 1;

// Start the animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the current shape at the center of the canvas
  drawShape(currentShape, canvas.width / 2, canvas.height / 2, zoomLevel);

  // Increase the zoom level
  zoomLevel += 0.1;

  // If the zoom level is greater than 10, reset it to 1 and choose a new shape
  if (zoomLevel > 10) {
    zoomLevel = 1;
    currentShape = shapes[Math.floor(Math.random() * shapes.length)];
  }

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Draw a shape at a given position and zoom level
function drawShape(shape, x, y, zoomLevel) {
  switch (shape) {
    case "square":
      ctx.fillStyle = "black";
      ctx.fillRect(x - zoomLevel / 2, y - zoomLevel / 2, zoomLevel, zoomLevel);
      break;
    case "circle":
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(x, y, zoomLevel / 2, 0, 2 * Math.PI);
      ctx.fill();
      break;
    case "triangle":
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.moveTo(x - zoomLevel / 2, y + zoomLevel / 2);
      ctx.lineTo(x + zoomLevel / 2, y + zoomLevel / 2);
      ctx.lineTo(x, y - zoomLevel / 2);
      ctx.closePath();
      ctx.fill();
      break;
  }
}

// Start the animation loop
animate();
