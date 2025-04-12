// Function to create ripple effect
document.body.addEventListener("click", function (e) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = e.clientX + "px";
  ripple.style.top = e.clientY + "px";
  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
});

// Function to create sparkle effect
document.body.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";

  const angle = Math.random() * 2 * Math.PI;
  const radius = 50 + Math.random() * 30;

  const x = Math.cos(angle) * radius + "px";
  const y = Math.sin(angle) * radius + "px";

  sparkle.style.setProperty("--x", x);
  sparkle.style.setProperty("--y", y);

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1500);
});

// Function to create stars on click
document.body.addEventListener("click", function (e) {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";

  const angle = Math.random() * 2 * Math.PI;
  const radius = 50 + Math.random() * 30;

  const x = Math.cos(angle) * radius + "px";
  const y = Math.sin(angle) * radius + "px";

  star.style.setProperty("--x", x);
  star.style.setProperty("--y", y);

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000);
});

// Function to create random stars on all pages except the last page
setInterval(() => {
  const star = document.createElement("span");
  star.className = "star";
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 5000);
}, 3000);

// Function to create permanent stars for the final page (question 4)
if (window.location.pathname.includes("question4.html")) {
  setInterval(() => {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(star);
  }, 3000);
}

// Typing effect for final question
if (window.location.pathname.includes("question4.html")) {
  const questionElement = document.querySelector('.final');
  const questionText = "Can I be your boyfriend?";
  let index = 0;

  function typeWriter() {
    if (index < questionText.length) {
      questionElement.textContent += questionText.charAt(index);
      index++;
      setTimeout(typeWriter, 100); // Adjust typing speed here
    }
  }

  typeWriter();

  // Continuously create sparkles following the text being written
  setInterval(() => {
    const sparkle = document.createElement("span");
    sparkle.className = "sparkle";
    const x = Math.random() * window.innerWidth + "px";
    const y = Math.random() * window.innerHeight + "px";
    sparkle.style.left = x;
    sparkle.style.top = y;

    document.body.appendChild(sparkle);
    setTimeout(() => {
      sparkle.remove();
    }, 1500);
  }, 100); // Sparkles will appear every 100ms
}
