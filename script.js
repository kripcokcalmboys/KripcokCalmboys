/** @format */

// script.js

/** @format */

// --- Fungsionalitas Navigasi Mobile (Asli) ---
const hamburger = document.getElementById("hamburger");
const navSlide = document.getElementById("navSlide");
const navLinks = document.querySelectorAll(".nav-slide a");

// Toggle menu saat hamburger diklik
if (hamburger && navSlide) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navSlide.classList.toggle("active");
  });
}

// Tutup menu saat salah satu link diklik
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (hamburger && navSlide) {
      hamburger.classList.remove("active");
      navSlide.classList.remove("active");
    }
  });
});

// Tutup menu saat klik di luar area menu
document.addEventListener("click", (e) => {
  if (navSlide && hamburger) {
    const isClickInsideMenu = navSlide.contains(e.target);
    const isClickOnHamburger = hamburger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
      hamburger.classList.remove("active");
      navSlide.classList.remove("active");
    }
  }
});

// --- Fungsionalitas Galeri Foto Horizontal (Baru) ---
const fotoWrapper = document.querySelector(".foto-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

if (fotoWrapper && prevBtn && nextBtn) {
  // Fungsi untuk mendapatkan lebar yang akan digeser (lebar efektif satu gambar)
  const getScrollAmount = () => {
    // Mengambil lebar container, yang mewakili lebar satu slide penuh (dengan margin/padding yang diatur di CSS)
    return fotoWrapper.clientWidth;
  };

  // Geser ke kiri (Previous)
  prevBtn.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    // Gunakan 'smooth' untuk animasi geser yang halus
    fotoWrapper.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  });

  // Geser ke kanan (Next)
  nextBtn.addEventListener("click", () => {
    const scrollAmount = getScrollAmount();
    // Gunakan 'smooth' untuk animasi geser yang halus
    fotoWrapper.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  });
}
