// Importation des données works depuis l'API et stockage dans la variable 'reponse', puis conversion au format JSON dans la variable 'projects'
const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

// Importation des données category depuis l'API et stockage dans la variable 'reponse2', puis conversion au format JSON dans la variable 'categories'

const reponse2 = await fetch("http://localhost:5678/api/categories");
const categories = await reponse2.json();

// Sélection de l'élément HTML avec la classe "portfolio" et stockage dans la variable 'sectionPortfolio'

const sectionPortfolio = document.querySelector(".portfolio");

// Création d'un élément <h2> pour le titre "Mes projets" et ajout à 'sectionPortfolio'

const portfolioTitle = document.createElement("h2");
portfolioTitle.innerText = "Mes projets";
sectionPortfolio.appendChild(portfolioTitle);

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
