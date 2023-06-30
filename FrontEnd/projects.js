//Importation des données works depuis l'API et stockage dans reponse (puis stockage en format json dans projects)
const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

//Importation des données category depuis l'API et stockage dans reponse2 (puis stockage en format json dans categories)

const reponse2 = await fetch("http://localhost:5678/api/categories");
const categories = await reponse2.json();

//création d'une constante section portfolio rattachée à la section portefolio du code HTML

const sectionPortfolio = document.querySelector(".portfolio");

// création du titre Mes projets et rattachement à section portfolio

const portfolioTitle = document.createElement("h2");
portfolioTitle.innerText = "Mes projets";
sectionPortfolio.appendChild(portfolioTitle);

// créations boutons de filtres

const buttonFilters = document.createElement("div");
buttonFilters.classList.add("buttonFilters");

sectionPortfolio.appendChild(buttonFilters);

const buttonFilterAll = document.createElement("button");
buttonFilterAll.innerText = "Tous";
buttonFilterAll.classList.add("filters");
buttonFilters.appendChild(buttonFilterAll);

const buttonFilterObject = document.createElement("button");
buttonFilterObject.innerText = "Objets";
buttonFilterObject.classList.add("filters");
buttonFilters.appendChild(buttonFilterObject);

const buttonFilterAppart = document.createElement("button");
buttonFilterAppart.innerText = "Appartements";
buttonFilterAppart.classList.add("filters");
buttonFilters.appendChild(buttonFilterAppart);

const buttonFilterHotel = document.createElement("button");
buttonFilterHotel.innerText = "Hôtels & restaurants";
buttonFilterHotel.classList.add("filters");
buttonFilters.appendChild(buttonFilterHotel);

const sectionGallery = document.querySelector(".gallery");
sectionPortfolio.appendChild(sectionGallery);

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

generateProjects(projects);

// Evenements de trie

buttonFilterAll.addEventListener("click", function () {
  const piecesFiltres = projects.filter(function (project) {
    return project;
  });
  console.log(piecesFiltres);
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(piecesFiltres);
});

buttonFilterObject.addEventListener("click", function () {
  const piecesFiltres = projects.filter(function (project) {
    return project.categoryId === 1;
  });
  console.log(piecesFiltres);
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(piecesFiltres);
});

buttonFilterAppart.addEventListener("click", function () {
  const piecesFiltres = projects.filter(function (project) {
    return project.categoryId === 2;
  });
  console.log(piecesFiltres);
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(piecesFiltres);
});

buttonFilterHotel.addEventListener("click", function () {
  const piecesFiltres = projects.filter(function (project) {
    return project.categoryId === 3;
  });
  console.log(piecesFiltres);
  document.querySelector(".gallery").innerHTML = "";
  generateProjects(piecesFiltres);
});
