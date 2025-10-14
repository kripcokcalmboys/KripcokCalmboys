/** @format */

const hamburger = document.getElementById("hamburger");
const navSlide = document.getElementById("navSlide");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navSlide.classList.toggle("active");
});
