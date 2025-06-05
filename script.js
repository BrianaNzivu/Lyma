document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS animations
AOS.init({
  duration: 1000,
  once: false
})

  // Scroll spy for navbar active link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  const messages = ["Welcome to Lyma Energy", "Fueling Your Journey", "Driven by Quality"];
  let msgIndex = 0, charIndex = 0;
  const typedText = document.getElementById("typed-text");

  function typeEffect() {
    if (charIndex < messages[msgIndex].length) {
      typedText.textContent += messages[msgIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      setTimeout(() => {
        typedText.textContent = '';
        charIndex = 0;
        msgIndex = (msgIndex + 1) % messages.length;
        typeEffect();
      }, 2000);
    }
  }
  typeEffect();

  window.addEventListener('scroll', () => {
    let currentSectionId = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80; // Adjust for navbar height
      const sectionHeight = section.offsetHeight;

      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active');
      }
    });
  });
});
