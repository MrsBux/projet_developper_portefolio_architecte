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

  const modal1 = document.createElement("aside");
  modal1.classList.add("modal1");
  modal1.role = "dialog";
  modal1.style.display = "none";
  sectionGallery.appendChild(modal1);

  const modifGallery = document.createElement("button");
  modifGallery.innerText = "Modifier";
  modifGallery.setAttribute(
    "style",
    "display: flex; color: black; margin: 0px; font-family: Work Sans; border:none; background-color: white;"
  );
  modifGallery.addEventListener("click", async function () {
    modal1.style.display = null;
  });

  portfolioTitleChange.appendChild(modifGallery);

  //Supprimer les filtres

  buttonFilterAll.style.setProperty("display", "none");
  buttonFilters.style.setProperty("display", "none");

  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modalWrapper");
  modalWrapper.setAttribute(
    "style",
    "display: flex; flex-direction: column; align-items: center; gap: 40px; color: black; padding: 20px; border:none; background-color: white;"
  );
  modal1.appendChild(modalWrapper);

  const titleModal = document.createElement("h3");
  titleModal.innerText = "Galerie photo";
  titleModal.setAttribute(
    "style",
    "margin: auto; font-family: Work Sans; font-size: 26px; padding-top: 50px; padding-bottom: 20px;"
  );
  modalWrapper.appendChild(titleModal);

  const galleryModal = document.createElement("div");
  galleryModal.setAttribute(
    "style",
    "display: grid; grid-template-columns: 78px 78px 78px 78px 78px; gap: 15px; margin: auto; border-bottom: green 1px solid; padding: 20px;"
  );
  modalWrapper.appendChild(galleryModal);

  function generateProjectsModal(projects) {
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];

      const projectElementModal = document.createElement("figure");
      projectElementModal.setAttribute(
        "style",
        "max-width: 100%; display: flex; flex-direction: column"
      );

      const imageElementModal = document.createElement("img");
      imageElementModal.src = project.imageUrl;
      imageElementModal.setAttribute(
        "style",
        " box-sizing: border-box; width : 78px  ;"
      );

      const figureCaptionElement = document.createElement("figurecaption");
      figureCaptionElement.innerText = "";

      const lienEdit = document.createElement("a");
      lienEdit.innerText = "Editer";

      galleryModal.appendChild(projectElementModal);
      projectElementModal.appendChild(imageElementModal);
      projectElementModal.appendChild(figureCaptionElement);
      figureCaptionElement.appendChild(lienEdit);
    }
  }

  generateProjectsModal(projects);

  const buttonAjoutPhoto = document.createElement("button");
  buttonAjoutPhoto.innerText = "Ajouter une photo";
  buttonAjoutPhoto.setAttribute(
    "style",
    "font-family: Syne; font-weight: 700; font-size:14px; width: 237px; height: 36px; text-align:center; background-color: #1d6154 ; color: white; border-radius:60px; border:none;"
  );
  modalWrapper.appendChild(buttonAjoutPhoto);

  const lienSuppression = document.createElement("a");
  lienSuppression.innerText = "Supprimer la galerie";
  lienSuppression.setAttribute(
    "style",
    "font-size:14px; width: 237px; height: 36px; text-align:center; color: #D65353;"
  );
  modalWrapper.appendChild(lienSuppression);

  //----------------------------------------------------modal2

  const modal2 = document.createElement("aside");
  modal2.classList.add("modal2");
  modal2.role = "dialog";
  modal2.style.display = null;
  sectionGallery.appendChild(modal2);

  const modalWrapper2 = document.createElement("div");
  modalWrapper2.classList.add("modalWrapper");
  modalWrapper2.setAttribute(
    "style",
    "display: flex; flex-direction: column; align-items: center; gap: 40px; color: black; padding: 20px; border:none; background-color: white;"
  );
  modal2.appendChild(modalWrapper2);

  const titleModal2 = document.createElement("h3");
  titleModal2.innerText = "Ajout photo";
  titleModal2.setAttribute(
    "style",
    "margin: auto; font-family: Work Sans; font-size: 26px; padding-top: 50px; padding-bottom: 20px;"
  );
  modalWrapper2.appendChild(titleModal2);

  const zoneAjoutPhoto = document.createElement("div");
  zoneAjoutPhoto.setAttribute(
    "style",
    "width : 420px; height 169px; display: flex; flex-direction: column; justify:content: center; align-items: center; gap: 10px;  padding: 20px; border: 1px dark-blue solid; background-color: #E8F1F6;"
  );
  modalWrapper2.appendChild(zoneAjoutPhoto);

  const iconAjoutPhoto = document.createElement("i");
  zoneAjoutPhoto.appendChild(iconAjoutPhoto);

  const buttonAjoutPhotoM2 = document.createElement("button");
  buttonAjoutPhotoM2.innerText = " + Ajouter Photo ";
  buttonAjoutPhotoM2.setAttribute(
    "style",
    "font-family: Work Sans; font-size:14px; width: 237px; height: 36px; text-align:center; background-color: #CBD6DC ; color: #306685; border-radius:60px; border:none;"
  );
  zoneAjoutPhoto.appendChild(buttonAjoutPhotoM2);

  const legendFormat = document.createElement("p");
  legendFormat.innerText = "jpg.png : 4 Mo max";
  zoneAjoutPhoto.appendChild(legendFormat);

  const formModal2 = document.createElement("form");
  modalWrapper2.appendChild(formModal2);

  const fieldsetModal2 = document.createElement("fieldset");
  fieldsetModal2.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify:content:center; align-items: center; gap: 40px; color: black; padding: 20px; border:none; background-color: white;"
  );
  formModal2.appendChild(fieldsetModal2);

  const titlePhotoModal2 = document.createElement("input");
  titlePhotoModal2.classList.add("inputModal2");
  titlePhotoModal2.type = "text";
  titlePhotoModal2.name = "titre";
  titlePhotoModal2.id = "titre";
  fieldsetModal2.appendChild(titlePhotoModal2);

  const titleCategoryTitlePhoto = document.createElement("label");
  titleCategoryTitlePhoto.for = "titre";
  titleCategoryTitlePhoto.innerText = "Titre";
  titlePhotoModal2.appendChild(titleCategoryTitlePhoto);

  const categoryPhotoModal2 = document.createElement("select");
  categoryPhotoModal2.classList.add("inputModal2");
  categoryPhotoModal2.name = "Catégorie";
  categoryPhotoModal2.name = "Catégorie";
  fieldsetModal2.appendChild(categoryPhotoModal2);

  const category0ptionPhotoModal2 = document.createElement("option");
  category0ptionPhotoModal2.value = "";
  category0ptionPhotoModal2.innerText = "";
  categoryPhotoModal2.appendChild(category0ptionPhotoModal2);

  const categoryObjetsPhotoModal2 = document.createElement("option");
  categoryObjetsPhotoModal2.value = " Objets";
  categoryObjetsPhotoModal2.innerText = "Objets";
  categoryPhotoModal2.appendChild(categoryObjetsPhotoModal2);

  const categoryAppartPhotoModal2 = document.createElement("option");
  categoryAppartPhotoModal2.value = " Appartements";
  categoryAppartPhotoModal2.innerText = "Appartements";
  categoryPhotoModal2.appendChild(categoryAppartPhotoModal2);

  const categoryHotelsPhotoModal2 = document.createElement("option");
  categoryHotelsPhotoModal2.value = " Hôtels et restaurants";
  categoryHotelsPhotoModal2.innerText = "Hôtels et restaurants";
  categoryPhotoModal2.appendChild(categoryHotelsPhotoModal2);

  const buttonValidationModal2 = document.createElement("button");
  buttonValidationModal2.innerText = "Valider";
  buttonValidationModal2.setAttribute(
    "style",
    "font-family: Syne; font-weight: 700; font-size:14px; width: 237px; height: 36px; text-align:center; background-color: #1d6154 ; color: white; border-radius:60px; border:none;"
  );
  modalWrapper2.appendChild(buttonValidationModal2);
} else {
  // le site se comporte normalement
}

// ------------------------------------------------------------------------Ajout modale

// {
//   /* <h3 id="titlemodal2">Ajout photo</h3>
// <div> cadre ajout photo
// <icon></icon>
// <button></button>
// <p></p>
// </div>
// <form action="">
// <fieldset></fieldset>
// </form>
// <button> valider</button>
// </div> */
// }

// const closeModal = function (e) {
//   if (modal === null) return;
//   e.preventDefault();
//   modal.style.display = "none";
//   modal.setAttribute("aria-hidden", "true");
//   modal.removeAttribute("aria-modal");
//   modal = target;
//   modal.removeEventListener("click", closeModal);
//   modal
//     .querySelector(".js-modal-close")
//     .removeEventListener("click", closeModal);
//   modal = null;
// };

// --------------------------------------------------------------------------------

// document.querySelectorAll(".js-modal").forEach((a) => {
//   a.addEventListener("click", openModal);
// // });
