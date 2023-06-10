const button = document.querySelector(".goodbye-btn");

const animatedElement = document.querySelector(".use-tag-2");
const animatedShadow = document.querySelector(".use-tag-2-shadow");
const astroContainer = document.querySelector(".astro-container");

button.addEventListener("click", handleClick);

function handleClick() {
  animatedElement.classList.add("use-tag-2--active");
  animatedShadow.classList.add("use-tag-2-shadow--active");

  setTimeout(() => {
    astroContainer.style.opacity = "0";
  }, 2000);
  setTimeout(() => {
    button.style.opacity = "0";
    button.style.cursor = "default";
    button.disabled = "true";
  }, 2000);
}
