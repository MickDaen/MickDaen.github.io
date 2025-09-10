const classeur = document.querySelectorAll(".classeur");
const realisations = document.querySelectorAll(".wallimage");
const tout = document.querySelector("#real-all");
const flyer = document.querySelector("#real-flyer");
const brochure = document.querySelector("#real-brochure");
const reseaux = document.querySelector("#real-reseaux");
const logos = document.querySelector("#real-logo");
const animation = document.querySelector("#real-animation");

for (i = 0; i < classeur.length; i++) {
  classeur[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    // console.log(filter);
    realisations.forEach((wallimage) => {
      if (filter == "tout") {
        wallimage.style.display = "block";
      } else {
        if (wallimage.classList.contains(filter)) {
          wallimage.style.display = "block";
        } else {
          wallimage.style.display = "none";
        }
      }
    });
  });
}

tout.addEventListener("click", () => {
  tout.style.background = "#1a0bf0";
  tout.style.color = "white";
  flyer.style.background = "none";
  flyer.style.color = "#0A0A0A";
  brochure.style.background = "none";
  brochure.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  animation.style.background = "none";
  animation.style.color = "#0A0A0A";
});

flyer.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  flyer.style.background = "#1a0bf0";
  flyer.style.color = "white";
  brochure.style.background = "none";
  brochure.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  animation.style.background = "none";
  animation.style.color = "#0A0A0A";
});

brochure.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  flyer.style.background = "none";
  flyer.style.color = "#0A0A0A";
  brochure.style.background = "#1a0bf0";
  brochure.style.color = "white";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  animation.style.background = "none";
  animation.style.color = "#0A0A0A";
});

reseaux.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  flyer.style.background = "none";
  flyer.style.color = "#0A0A0A";
  brochure.style.background = "none";
  brochure.style.color = "#0A0A0A";
  reseaux.style.background = "#1a0bf0";
  reseaux.style.color = "white";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  animation.style.background = "none";
  animation.style.color = "#0A0A0A";
});

logos.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  flyer.style.background = "none";
  flyer.style.color = "#0A0A0A";
  brochure.style.background = "none";
  brochure.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  logos.style.background = "#1a0bf0";
  logos.style.color = "white";
  animation.style.background = "none";
  animation.style.color = "#0A0A0A";
});

animation.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  flyer.style.background = "none";
  flyer.style.color = "#0A0A0A";
  brochure.style.background = "none";
  brochure.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  animation.style.background = "#1a0bf0";
  animation.style.color = "white";
});
