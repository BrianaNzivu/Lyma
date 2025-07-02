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
    quote: "\"Since I switched to Lyma lubricants, my bike engine runs smoother, and I don't stress about breakdowns. Hii mafuta ni legit!\"",
    name: "Kevin M.",
    title: "Boda Rider, Umoja"
  },
  {
    quote: "\"Reliable products and professional support – Lyma is our go-to supplier for industrial lubricants.\"",
    name: "Emily K.",
    title: "Operations Lead, MechaTech"
  },
  {
    quote: "\"I used to struggle finding quality oil for my car. With Lyma, I get the best service and my car runs like brand new.\"",
    name: "Ahmed R.",
    title: "Car Enthusiast, Mombasa"
  },
  {
    quote: "\"Their LPG is always clean and delivered fast. I run a hotel, and with Lyma, I never worry about gas imeisha.\"",
    name: "Njeri M.",
    title: "Hotel Owner, Eldoret"
  },
    {
    quote: "\"Lyma LPG changed my kitchen game! The gas lasts longer, burns clean, and I can order and get it delivered in minutes. No more last-minute stress!\"",
    name: "Valerie N.,",
    title: "Apartment Tenant, Nairobi CBD"
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
