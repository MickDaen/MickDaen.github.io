const classeur = document.querySelectorAll(".classeur");
const realisations = document.querySelectorAll(".wallimage");
const tout = document.querySelector("#real-all");
const logos = document.querySelector("#real-logo");
const prints = document.querySelector("#real-print");
const edition = document.querySelector("#real-edition");
const reseaux = document.querySelector("#real-reseaux");
const illustration = document.querySelector("#real-illustration");

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
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  prints.style.background = "none";
  prints.style.color = "#0A0A0A";
  edition.style.background = "none";
  edition.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  illustration.style.background = "none";
  illustration.style.color = "#0A0A0A";
});

logos.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  logos.style.background = "#1a0bf0";
  logos.style.color = "white";
  prints.style.background = "none";
  prints.style.color = "#0A0A0A";
  edition.style.background = "none";
  edition.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  illustration.style.background = "none";
  illustration.style.color = "#0A0A0A";
});

prints.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  prints.style.background = "#1a0bf0";
  prints.style.color = "white";
  edition.style.background = "none";
  edition.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  illustration.style.background = "none";
  illustration.style.color = "#0A0A0A";
});

edition.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  prints.style.background = "none";
  prints.style.color = "#0A0A0A";
  edition.style.background = "#1a0bf0";
  edition.style.color = "white";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  illustration.style.background = "none";
  illustration.style.color = "#0A0A0A";
});

reseaux.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  prints.style.background = "none";
  prints.style.color = "#0A0A0A";
  edition.style.background = "none";
  edition.style.color = "#0A0A0A";
  reseaux.style.background = "#1a0bf0";
  reseaux.style.color = "white";
  illustration.style.background = "none";
  illustration.style.color = "#0A0A0A";
});

illustration.addEventListener("click", () => {
  tout.style.background = "none";
  tout.style.color = "#0A0A0A";
  logos.style.background = "none";
  logos.style.color = "#0A0A0A";
  prints.style.background = "none";
  prints.style.color = "#0A0A0A";
  edition.style.background = "none";
  edition.style.color = "#0A0A0A";
  reseaux.style.background = "none";
  reseaux.style.color = "#0A0A0A";
  illustration.style.background = "#1a0bf0";
  illustration.style.color = "white";
});
