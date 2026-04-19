document.addEventListener("DOMContentLoaded", () => {

  const textArray = [
    "AI & ML Enthusiast",
    "Building Intelligent Systems",
    "CSE Student & Problem Solver"
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;

  const typedText = document.getElementById("typed-text");

  if (!typedText) return;

  function typeEffect() {
    const currentText = textArray[index];

    if (!isDeleting) {
      typedText.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;
    } else {
      typedText.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % textArray.length;
    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);
  }

  typeEffect();

  // Scroll Reveal Animation
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop < windowHeight - revealPoint) {
        section.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

});