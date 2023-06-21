const container = document.querySelector(".container");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener("click", () => {
  container.classList.toggle("hover-left");
});


right.addEventListener("click", () => {
  container.classList.toggle("hover-right");
});


