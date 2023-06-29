const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

const sectionProjects = document.querySelector(".portfolio");

const portfolioTitle = document.createElement("h2");
portfolioTitle.innerText = "Mes projets";
sectionProjects.appendChild(portfolioTitle);

const filters = document.querySelector(".filters");

const buttonFilterTous = document.createElement("button");
buttonFilterTous.innerText = "Tous";
buttonFilterTous.classList.add("filters");
sectionProjects.appendChild(buttonFilterTous);

const buttonFilterObjects = document.createElement("button");
buttonFilterObjects.innerText = "Objets";
buttonFilterObjects.classList.add("filters");
sectionProjects.appendChild(buttonFilterObjects);

const buttonFilterAppart = document.createElement("button");
buttonFilterAppart.innerText = "Appartements";
buttonFilterAppart.classList.add("filters");
sectionProjects.appendChild(buttonFilterAppart);

const buttonFilterHotel = document.createElement("button");
buttonFilterHotel.innerText = "Hôtels & restaurants";
buttonFilterHotel.classList.add("filters");
sectionProjects.appendChild(buttonFilterHotel);

function generateProjects(projects) {
  const gallery = document.querySelector(".gallery");

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];

    const projectElement = document.createElement("figure");

    const imageElement = document.createElement("img");
    imageElement.src = project.imageUrl;
    imageElement.classList.add("gallery-image");

    const titleElement = document.createElement("p");
    titleElement.innerText = project.title;

    gallery.appendChild(projectElement);

    projectElement.appendChild(imageElement);
    projectElement.appendChild(titleElement);
  }
}

generateProjects(projects);

// for (let i = 0; i < projects.length; i++) {
//   const project = projects[i];

//   const titleElement = document.createElement("p");
//   titleElement.innerText = project.title;

//   const idElement = document.createElement("p");
//   idElement.innerText = project.id;

//   const categoryId = document.createElement("p");
//   categoryId.innerText = project.categoryId;

//   const userId = document.createElement("p");
//   userId.innerText = project.userId;

//   const category = document.createElement("p");
//   userId.innerText = project.category;

//   console.log(category);
// }
