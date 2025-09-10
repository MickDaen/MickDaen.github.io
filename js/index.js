const navbar = document.querySelector("nav");
const logo = document.querySelector("#logo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.style.height = "60px";
    logo.style.width = "70%";
  } else {
    navbar.style.height = "100px";
    logo.style.width = "100%";
  }
});
