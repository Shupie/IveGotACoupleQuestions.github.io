// Create a canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a class to represent a paddle
class Paddle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, 10, 50);
  }
}

// Create a class to represent a ball
class Ball {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(this.x, this.y, 10, 10);
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;

    // Check if the ball has hit the top or bottom of the canvas
    if (this.y < 0 || this.y > canvas.height - 10) {
      this.dy = -this.dy;
    }

    // Check if the ball has hit the left or right of the canvas
    if (this.x < 0 || this.x > canvas.width - 10) {
      // Game over
    }
  }
}

// Create a paddle for each player
const paddle1 = new Paddle(100, 100);
const paddle2 = new Paddle(canvas.width - 110, 100);

// Create a ball
const ball = new Ball(canvas.width / 2, canvas.height / 2, 5, 5);

// Animate the game
function animate() {
  requestAnimationFrame(animate);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw and update the paddles
  paddle1.draw();
  paddle2.draw();

  // Draw and update the ball
  ball.draw();
  ball.update();
}

// Start the animation
requestAnimationFrame(animate);

// Add event listeners for the paddles
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 87) {
    paddle1.y -= 10;
  } else if (event.keyCode === 83) {
    paddle1.y += 10;
  } else if (event.keyCode === 38) {
    paddle2.y -= 10;
  } else if (event.keyCode === 40) {
    paddle2.y += 10;
  }
});
