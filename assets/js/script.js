document.addEventListener("DOMContentLoaded", () => {
  const quotes = [
    "Seindah apa pun bulan malam ini, tetap kalah indah dibanding senyummu..",
    "Bulan selalu setia hadir di langit, sama seperti aku yang ingin selalu ada untukmu",
    "Andai bulan bisa bicara, ia pasti iri karena aku lebih sering mengagumimu daripada dirinya.",
  ];

  const quoteElement = document.getElementById("quote");
  let quoteIndex = 0;

  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[quoteIndex];
  }, 5000);

  const surpriseButton = document.getElementById("surpriseButton");
  surpriseButton.addEventListener("click", () => {
    alert("Cindy, you are the most amazing person in my life!");
  });

  const fallingHearts = document.querySelector(".falling-hearts");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.textContent = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "fall 5s linear";
    fallingHearts.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);

  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();

  const heroCarousel = new bootstrap.Carousel("#heroCarousel", {
    interval: 3000, // Change image every 3 seconds
    ride: "carousel",
  });

  const images = ["assets/images/cindy1.jpg", "assets/images/cindy2.jpg", "assets/images/cindy3.jpg"];
  const changingImage = document.getElementById("changingImage");
  let currentIndex = 0;

  setInterval(() => {
    changingImage.style.opacity = 0; // Start fade-out transition
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image
      changingImage.src = images[currentIndex];
      changingImage.style.opacity = 1; // Start fade-in transition
    }, 1000); // Wait for fade-out to complete before changing the image
  }, 5000); // Change image every 5 seconds

  const heroImage = document.getElementById("heroImage");
  heroImage.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Cycle through the images
    heroImage.src = images[currentIndex];
  });
});

// ketikan berjalan untuk teks di bagian hero  section
const text = `For Cindy Agustina
          "You are the sunshine lights up my life."`;
const speed = 70; // kecepatan ketik (ms)
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
}
typing();

document.querySelectorAll(".btn-card").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.innerText = "❤️ Opened!";
    setTimeout(() => {
      btn.innerText = "See More";
    }, 2000);
  });
});

// unutk musik
const music = document.getElementById("bg-music");
const toggleBtn = document.getElementById("toggleMusic");

toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🎵 Pause";
  } else {
    music.pause();
    toggleBtn.textContent = "▶️ Play";
  }
});

// Efek footer muncul lembut saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".romantic-footer");
  footer.style.opacity = "0";
  footer.style.transition = "opacity 1.5s ease";

  window.addEventListener("scroll", () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      footer.style.opacity = "1";
    }
  });
});

// puisi
