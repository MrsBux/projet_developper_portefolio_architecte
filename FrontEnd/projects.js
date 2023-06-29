const reponse = await fetch("http://localhost:5678/api/works");
const projects = await reponse.json();

const sectionProjects = document.querySelector(".portfolio");

const portfolioTitle = document.createElement("h2");
portfolioTitle.innerText = "Mes projets";
sectionProjects.appendChild(portfolioTitle);

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
