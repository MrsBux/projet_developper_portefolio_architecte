//Importation des données works depuis l'API et stockage dans reponse (puis stockage en format json dans projects)
const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

//Importation des données category depuis l'API et stockage dans reponse2 (puis stockage en format json dans categories)

const reponse2 = await fetch("http://localhost:5678/api/categories");
const categories = await reponse2.json();
const categoriesT = [categories];

console.log(categories);

// const monSetCategoriesNames = new Set();

// for (let i = 0; i < categories.length; i++) {
//   // monSetCategories.add(categories[i].id);
//   monSetCategoriesNames.add(categories[i].name);
// }
// console.log(monSetCategoriesNames);

//création d'une constante section portfolio rattachée à la section portefolio du code HTML

const sectionPortfolio = document.querySelector(".portfolio");

const portfolioTitle = document.createElement("h2");
portfolioTitle.innerText = "Mes projets";
sectionPortfolio.appendChild(portfolioTitle);

const buttonFilters = document.createElement("div");
buttonFilters.classList.add("buttonFilters");
sectionPortfolio.appendChild(buttonFilters);

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

const categorySet = new Set(categories.map((category) => category.name));

categorySet.forEach((categoryName) => {
  const buttonFilter = document.createElement("button");
  buttonFilter.innerText = categoryName;
  buttonFilter.classList.add("filters");
  buttonFilters.appendChild(buttonFilter);

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
