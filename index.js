tailwind.config = {
  theme: {
    extend: {
      colors: {
        dark: "#0A0A12",
        primary: "#FF2A6D",
        secondary: "#05D9E8",
        tertiary: "#D1F7FF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
      },
      animation: {
        "hologram-pulse": "hologramPulse 8s infinite",
        float: "float 6s ease-in-out infinite",
        "neon-glow": "neonGlow 2s alternate infinite",
        "text-gradient": "textGradient 5s linear infinite",
      },
      keyframes: {
        hologramPulse: {
          "0%, 100%": {
            "box-shadow":
              "0 0 5px #05D9E8, 0 0 10px #05D9E8, 0 0 20px rgba(5, 217, 232, 0.5), 0 0 40px rgba(5, 217, 232, 0.3)",
          },
          "50%": {
            "box-shadow":
              "0 0 10px #FF2A6D, 0 0 20px #FF2A6D, 0 0 40px rgba(255, 42, 109, 0.5), 0 0 80px rgba(255, 42, 109, 0.3)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        neonGlow: {
          "0%": {
            "text-shadow":
              "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #05D9E8, 0 0 30px #05D9E8",
          },
          "100%": {
            "text-shadow":
              "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #FF2A6D, 0 0 40px #FF2A6D",
          },
        },
        textGradient: {
          "0%": { "background-position": "0% 50%" },
          "100%": { "background-position": "100% 50%" },
        },
      },
    },
  },
};

// Create particles
const particleContainer = document.getElementById("particle-container");
for (let i = 0; i < 30; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random properties
  const size = Math.random() * 5 + 2;
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  const duration = Math.random() * 10 + 10;
  const delay = Math.random() * 5;

  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${posX}%`;
  particle.style.top = `${posY}%`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;
  particle.style.opacity = Math.random() * 0.5 + 0.1;

  particleContainer.appendChild(particle);
}

// Typewriter effect
const typewriterElement = document.getElementById("typewriter");
const text = typewriterElement.textContent;
typewriterElement.textContent = "";

let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    typewriterElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
};

// Start typewriter effect when in view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeWriter();
        observer.disconnect();
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(typewriterElement);

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
mobileMenuButton.addEventListener("click", () => {
  alert("Mobile menu would open here in a full implementation");
});

// Project card hover effect enhancement
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angleY = (x - centerX) / 25;
    const angleX = (centerY - y) / 25;

    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(20px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) translateZ(0)";
    setTimeout(() => {
      card.style.transform = "";
    }, 500);
  });
});
