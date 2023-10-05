// Create a canvas element
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Create a class to represent the ball
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

// Create a class to represent the paddles
class Paddle {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.vy = 0;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    this.y += this.vy;

    // Check if the paddle has hit the edge of the canvas
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
  }
}

// Create the ball and paddles
const ball = new Ball(canvas.width / 2, canvas.height / 2, 10, "white");
const paddle1 = new Paddle(10, canvas.height / 2 - 50, 10, 100, "red");
const paddle2 = new Paddle(canvas.width - 20, canvas.height / 2 - 50, 10, 100, "blue");

// Animate the game
function animate() {
  requestAnimationFrame(animate);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw the ball
  ball.update();
  ball.draw();

  // Update and draw the paddles
  paddle1.update();
  paddle1.draw();
  paddle2.update();
  paddle2.draw();

  // Check if the ball has collided with the paddles
  if (ball.x < paddle1.x + paddle1.width && ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) {
    ball.vx = -ball.vx;
  }
  if (ball.x > paddle2.x && ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) {
    ball.vx = -ball.vx;
  }

  // Check if the ball has gone off the screen
  if (ball.x < 0 || ball.x > canvas.width) {
    // Game over
    alert("Game over!");
    return;
  }

  // Keep animating
  requestAnimationFrame(animate);
}

// Start the animation
function animate() {
    requestAnimationFrame(animate);
  
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    // Update and draw the ball
    ball.update();
    ball.draw();
  
    // Update and draw the paddles
    paddle1.update();
    paddle1.draw();
    paddle2.update();
    paddle2.draw();
  
    // Check if the ball has collided with the paddles
    if (ball.x < paddle1.x + paddle1.width && ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) {
      ball.vx = -ball.vx;
    }
    if (ball.x > paddle2.x && ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) {
      ball.vx = -ball.vx;
    }
  
    // Check if the ball has gone off the screen
    if (ball.x < 0 || ball.x > canvas.width) {
      // Game over
      alert("Game over!");
      return;
    }
  }

  // Start the game
requestAnimationFrame(animate);

// Add event listeners to control the paddles
document.addEventListener("keydown", function(event) {
  switch (event.key) {
    case "w":
      paddle1.vy = -5;
      break;
    case "s":
      paddle1.vy = 5;
      break;
    case "ArrowUp":
      paddle2.vy = -5;
      break;
    case "ArrowDown":
      paddle2.vy = 5;
      break;
  }
});

// Remove event listeners when the game is over
document.addEventListener("gameover", function() {
  document.removeEventListener("keydown", handleKeyDown);
});

// Animate the game
function animate() {
  requestAnimationFrame(animate);

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw the ball
  ball.update();
  ball.draw();

  // Update and draw the paddles
  paddle1.update();
  paddle1.draw();
  paddle2.update();
  paddle2.draw();

  // Check if the ball has collided with the paddles
  if (ball.x < paddle1.x + paddle1.width && ball.y > paddle1.y && ball.y < paddle1.y + paddle1.height) {
    ball.vx = -ball.vx;
  }
  if (ball.x > paddle2.x && ball.y > paddle2.y && ball.y < paddle2.y + paddle2.height) {
    ball.vx = -ball.vx;
  }

  // Check if the ball has gone off the screen
  if (ball.x < 0 || ball.x > canvas.width) {
    // Game over
    alert("Game over!");
    document.dispatchEvent(new Event("gameover"));
    return;
  }
}