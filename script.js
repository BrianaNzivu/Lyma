// Scroll-triggered animate.css reveal
document.addEventListener("DOMContentLoaded", () => {
  const animatedEls = document.querySelectorAll(".animate__animated");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate__fadeInUp");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animatedEls.forEach(el => observer.observe(el));
});

// Testimonial slider
let currentSlide = 0;
const testimonials = [
  {
    quote: "\"LubriGas has been a game-changer for our fleet management. Their lubricants and LPG solutions are unmatched.\"",
    name: "John Smith",
    title: "Fleet Manager, TransCargo Ltd"
  },
  {
    quote: "\"Reliable products and professional support – LubriGas is our go-to supplier for industrial lubricants.\"",
    name: "Emily Chen",
    title: "Operations Lead, MechaTech"
  },
  {
    quote: "\"Safe and clean LPG with fast delivery. Perfect for both our home and commercial use.\"",
    name: "Ahmed R.",
    title: "Restaurant Owner"
  }
];

function updateTestimonial(index) {
  const container = document.querySelector(".testimonial");
  const blockquote = container.querySelector("blockquote");
  const author = container.querySelector(".author");
  const position = container.querySelector(".position");

  blockquote.innerHTML = `<em>${testimonials[index].quote}</em>`;
  author.textContent = testimonials[index].name;
  position.textContent = testimonials[index].title;

  document.querySelectorAll(".slider-dots .dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

document.querySelector(".slider-arrow.left")?.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  updateTestimonial(currentSlide);
});

document.querySelector(".slider-arrow.right")?.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  updateTestimonial(currentSlide);
});

document.querySelectorAll(".slider-dots .dot").forEach((dot, i) => {
  dot.addEventListener("click", () => {
    currentSlide = i;
    updateTestimonial(currentSlide);
  });
});

// Initialize first testimonial
updateTestimonial(0);

// Active navbar link based on scroll position
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  let currentId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentId)) {
      link.classList.add("active");
    }
  });
});
