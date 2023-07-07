// Importation des données works depuis l'API et stockage dans la variable 'reponse', puis conversion au format JSON dans la variable 'projects'
const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

// Importation des données category depuis l'API et stockage dans la variable 'reponse2', puis conversion au format JSON dans la variable 'categories'

const reponse2 = await fetch("http://localhost:5678/api/categories");
const categories = await reponse2.json();

// import Fontion font awesome pour les icons

// import { ajoutFontawesome } from "./scripts/main";
// ajoutFontawesome();

//sélection du header

const header = document.querySelector("header");

// Sélection de l'élément HTML avec la classe "portfolio" et stockage dans la variable 'sectionPortfolio'

const sectionPortfolio = document.querySelector(".portfolio");

// création zone div pour titre + button modifier login

const portfolioTitleChange = document.createElement("div");
sectionPortfolio.appendChild(portfolioTitleChange);
portfolioTitleChange.setAttribute(
  "style",
  "display: flex; flex-direction: row; justify-content : center; align-items : center; gap: 20px;"
);

// Création d'un élément <h2> pour le titre "Mes projets" et ajout à 'sectionPortfolio'

const portfolioTitle = document.createElement("h2");
portfolioTitle.innerText = "Mes projets";
portfolioTitleChange.appendChild(portfolioTitle);

// Création d'un conteneur pour les boutons de filtre et ajout à 'sectionPortfolio'

const buttonFilters = document.createElement("div");
buttonFilters.classList.add("buttonFilters");
sectionPortfolio.appendChild(buttonFilters);

// Sélection de l'élément HTML avec la classe "gallery" et stockage dans la variable 'sectionGallery'

const sectionGallery = document.querySelector(".gallery");
sectionPortfolio.appendChild(sectionGallery);

// Fonction pour générer les projets dans la galerie

function generateProjects(projects) {
  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectElement = document.createElement("figure");

    const idElement = document.createElement("p");
    idElement.innerText = project.id;

    const idCategory = document.createElement("p");
    idCategory.innerText = project.categoryId;

    const imageElement = document.createElement("img");
    imageElement.src = project.imageUrl;

    const titleElement = document.createElement("p");
    titleElement.innerText = project.title;

    sectionGallery.appendChild(projectElement);
    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);
  }
}

//appel de la fonction pour génerer les projets

generateProjects(projects);

// Création du bouton "Tous" pour afficher tous les projets + ajout listener d'événement sur le bouton "Tous" pour afficher tous les projets

const buttonFilterAll = document.createElement("button");
buttonFilterAll.innerText = "Tous";
buttonFilterAll.classList.add("filters");
buttonFilters.appendChild(buttonFilterAll);
buttonFilterAll.addEventListener("click", function () {
  const piecesFiltres = projects.filter(function (project) {
    return project;
  });
  console.log(piecesFiltres);
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(piecesFiltres);
});

// Création des boutons de filtre pour chaque catégorie

// Création d'un ensemble Set pour stocker les noms uniques des catégories
const categorySet = new Set(categories.map((category) => category.name));

// Parcours de chaque nom de catégorie dans l'ensemble Set
categorySet.forEach((categoryName) => {
  // création d'un bouton de filtre pour chaque catégorie
  const buttonFilter = document.createElement("button");
  buttonFilter.innerText = categoryName;
  buttonFilter.classList.add("filters");
  buttonFilters.appendChild(buttonFilter);

  // ajout d'un listener d'évenement sur chaquez bouton en fonction de l'ID de la catégorie
  buttonFilter.addEventListener("click", function () {
    const piecesFiltres = projects.filter(function (project) {
      return (
        project.categoryId ===
        categories.find((category) => category.name === categoryName).id
      );
    });
    console.log(piecesFiltres);
    sectionGallery.innerHTML = "";
    generateProjects(piecesFiltres);
  });
});

//créatin d'une variable token

const tokenRegistred = window.localStorage.getItem("token");

// Modification du format de la section 1

// Boucle login / log out

if (
  tokenRegistred ==
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY1MTg3NDkzOSwiZXhwIjoxNjUxOTYxMzM5fQ.JGN1p8YIfR-M-5eQ-Ypy6Ima5cKA4VbfL2xMr2MgHm4"
) {
  // barre noire dans le header + logo + texte mode edition + button publier les changements

  const barreEditHeader = document.createElement("div");
  header.appendChild(barreEditHeader);
  barreEditHeader.setAttribute(
    "style",
    "order:1; display: flex; flex-direction: row; justify-content: center; align-items:center; gap:15px; width :100% ; height: 59px; background-color: black; margin: 0px;"
  );

  const modifHeader = document.createElement("button");
  modifHeader.innerText = "Modifier";
  modifHeader.setAttribute(
    "style",
    "color : white; margin: 0px; font-family: Work Sans; border:none; background-color: black;"
  );
  barreEditHeader.appendChild(modifHeader);

  const iconHeader = document.createElement("i");
  iconHeader.classList.add("fa-regular");
  iconHeader.classList.add("fa-pen-to-square");
  iconHeader.innerText = ".";
  barreEditHeader.appendChild(iconHeader);

  const buttonPublication = document.createElement("button");
  buttonPublication.innerText = "publier les changements";
  buttonPublication.setAttribute(
    "style",
    "display: flex; justify-content :center; align-items:center; width :216px; font-family: Work Sans; border:none; font-size: 14px; font-weight: 800; height: 30px; background-color: ; margin: 0px; border-radius: 60px; color: black;"
  );
  barreEditHeader.appendChild(buttonPublication);

  //login devient logout

  const lienLogin = document.querySelector(".lien_login");
  lienLogin.style.setProperty("display", "none");

  const lienLogout = document.querySelector(".lien_logout");
  lienLogout.style.setProperty("display", "flex");

  // Modifier la zone intro (logo + texte)

  const changeIntro = document.querySelector(".change-intro");
  changeIntro.setAttribute(
    "style",
    "width: 100%; display: flex; flex-direction: row; justify-content: flex-start; margin-top: 30px;"
  );

  const modifIntro = document.createElement("button");
  modifIntro.innerText = "Modifier";
  modifIntro.setAttribute(
    "style",
    "display: flex; color: black; margin: 0px; font-family: Work Sans; border:none; background-color: white;"
  );
  changeIntro.appendChild(modifIntro);

  const iconIntro = document.createElement("i");
  iconIntro.innerText = " fa-regular fa-pen-to-square";
  changeIntro.appendChild(iconIntro);

  // Modifier la zone 2 (logo + texte)

  const iconGallery = document.createElement("i");
  iconGallery.innerText = "fa-regular fa-pen-to-square";
  portfolioTitleChange.appendChild(iconGallery);

  const modifGallery = document.createElement("button");
  modifGallery.innerText = "Modifier";
  modifGallery.setAttribute(
    "style",
    "display: flex; color: black; margin: 0px; font-family: Work Sans; border:none; background-color: white;"
  );
  portfolioTitleChange.appendChild(modifGallery);

  // ------------------------------------------------------------------------Ajout modale

  // --------------------------------------------------------------------------------

  //Supprimer les filtres

  buttonFilterAll.style.setProperty("display", "none");
  buttonFilters.style.setProperty("display", "none");
} else {
  // le site se comporte normalement
}
