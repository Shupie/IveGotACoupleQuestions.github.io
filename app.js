// Create a canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a class to represent a ball
class Ball {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.vx = Math.random() * 5 - 2.5;
    this.vy = Math.random() * 5 - 2.5;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    // Check if the ball has hit the edge of the canvas
    if (this.x < 0 || this.x > canvas.width) {
      this.vx = -this.vx;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.vy = -this.vy;
    }
  }
}

// Create an array of balls
const balls = [];
for (let i = 0; i < 100; i++) {
  const ball = new Ball(
    Math.random() * canvas.width,
    Math.random() * canvas.height,
    5,
    "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
  );
  balls.push(ball);
}

// Animate the balls
function animate() {
  requestAnimationFrame(animate);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw and update each ball
  for (const ball of balls) {
    ball.draw();
    ball.update();
  }
}

// Start the animation
requestAnimationFrame(animate);

// Add event listeners for the sliders and buttons
document.getElementById("speedSlider").addEventListener("change", function() {
  // Update the speed of the balls
  for (const ball of balls) {
    ball.vx = ball.vx * this.value / 5;
    ball.vy = ball.vy * this.value / 5;
  }
});

document.getElementById("changeColorButton").addEventListener("click", function() {
  // Change the color of the balls
  for (const ball of balls) {
    ball.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
  }
});

document.getElementById("addBallsButton").addEventListener("click", function() {
  // Add more balls to the array
  for (let i = 0; i < 10; i++) {
    const ball = new Ball(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      5,
      "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"
    );
    balls.push(ball);
  }
});

document.getElementById("removeBallsButton").addEventListener("click", function() {
  // Remove balls from the array
  while (balls.length > 10) {
    balls.pop();
  }
});
