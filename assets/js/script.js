const burguerButton = document.querySelector("#burguer-button");
const nav = document.querySelector("#main-nav");
const navButton = document.querySelectorAll(".main-nav-list-item a");

const topLineBurguer = document.querySelector(".top-line");
const middleLineBurguer = document.querySelector(".middle-line");
const bottomLineBurguer = document.querySelector(".bottom-line");

burguerButton.addEventListener("click", () => {
  nav.classList.toggle("activo");

  topLineBurguer.classList.toggle("active-top-line");
  middleLineBurguer.classList.toggle("active-middle-line");
  bottomLineBurguer.classList.toggle("active-bottom-line");
});

navButton.forEach((button) => {
  console.log(button)
  button.addEventListener("click", () => {
    nav.classList.toggle("activo");
  });
});
