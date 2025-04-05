// Array of messages to display in circles
const messages = [
  'Note 1: Hello!',
  'Note 2: Pop me!',
  'Note 3: Surprise!',
  'Note 4: Good luck!',
];

// Function to generate random positions
function getRandomPosition() {
  const x = Math.random() * window.innerWidth - 50; // 50 is the size of the circle
  const y = Math.random() * window.innerHeight - 50;
  return { x, y };
}

// Function to create a circle
function createCircle() {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  const { x, y } = getRandomPosition();
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;

  // Randomly assign a message to the circle
  const message = messages[Math.floor(Math.random() * messages.length)];
  circle.textContent = message;

  // Add click event to pop the circle
  circle.addEventListener('click', function () {
    alert(message);  // Show the note when clicked
    circle.style.display = 'none'; // Hide the circle (pop)
  });

  document.getElementById('circle-container').appendChild(circle);
}

// Create random circles every 2 seconds
setInterval(createCircle, 2000);
