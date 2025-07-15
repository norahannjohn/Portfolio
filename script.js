const typing = document.querySelector('.typing-text');
const roles = ["Budding Web Developer", "Tech Enthusiast"];
let index = 0, charIndex = 0, current = "", isDeleting = false;

function typeEffect() {
  if (index >= roles.length) index = 0;
  current = roles[index];

  if (isDeleting) {
    typing.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index++;
    }
  } else {
    typing.textContent = current.substring(0, charIndex++);
    if (charIndex === current.length + 1) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);
