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
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4OTIzMzc0OCwiZXhwIjoxNjg5MzIwMTQ4fQ._ZGdaUKcrLbQSnhMvuKBw_BnV6Du9YbVsJvBHLo6ZYo"
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

  const iconHeader = document.createElement("img");
  iconHeader.src = "svg/Groupbl.svg";
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

  const iconIntro = document.createElement("img");
  iconIntro.src = " svg/Group.svg";
  changeIntro.appendChild(iconIntro);

  // Modifier la zone 2 (logo + texte)

  const iconGallery = document.createElement("img");
  iconGallery.src = " svg/Group.svg";
  portfolioTitleChange.appendChild(iconGallery);

  const modal1 = document.createElement("aside");
  modal1.classList.add("modal1");
  modal1.role = "dialog";
  modal1.style.display = "none";
  sectionGallery.appendChild(modal1);

  // modal1.addEventListener("click", async function () {
  //   modal1.style.display = "none";
  // });

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

  const iconFermetureModal1 = document.createElement("img");
  iconFermetureModal1.src = "svg/xmark.svg";
  iconFermetureModal1.setAttribute(
    "style",
    "width: 24px; height:24px; position: relative; left : 290px;"
  );
  modalWrapper.appendChild(iconFermetureModal1);
  iconFermetureModal1.addEventListener("click", async function () {
    modal1.style.display = "none";
  });

  const titleModal = document.createElement("h3");
  titleModal.innerText = "Galerie photo";
  titleModal.setAttribute(
    "style",
    "margin: auto; font-family: Work Sans; font-size: 26px; padding-top:10px;"
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
      // );

      // icon suppression et add listener supression du projet

      const iconSuppression = document.createElement("img");
      iconSuppression.src = "svg/suppr.svg";
      projectElementModal.appendChild(iconSuppression);
      iconSuppression.setAttribute(
        "style",
        "width: 17px; height:17px; position: relative; top:25px; left: 55px; z-index:2;"
      );

      iconSuppression.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();

        const idElementmodal = project.id;
        console.log(idElementmodal);

        const token = localStorage.getItem("token");
        console.log(token);

        responseDelete = await fetch(
          `http://localhost:5678/api/works/${idElementmodal}`,
          {
            method: "DELETE",
            headers: {
              accept: "*/*",
              Authorization: `Bearer ${token}`,
            },
          }
        );
      });

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

  const iconMove = document.createElement("img");
  iconMove.src = "svg/Move.svg";
  galleryModal.appendChild(iconMove);
  iconMove.setAttribute(
    "style",
    "width: 17px; height:17px; position: relative; bottom: 279px; right: 60px; z-index:2;"
  );

  const buttonAjoutPhoto = document.createElement("button");
  buttonAjoutPhoto.innerText = "Ajouter une photo";
  buttonAjoutPhoto.setAttribute(
    "style",
    "font-family: Syne; font-weight: 700; font-size:14px; width: 237px; height: 36px; text-align:center; background-color: #1d6154 ; color: white; border-radius:60px; border:none;"
  );
  modalWrapper.appendChild(buttonAjoutPhoto);

  buttonAjoutPhoto.addEventListener("click", async function () {
    modal1.style.display = "none";
    modal2.style.display = null;
  });

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
  modal2.style.display = "none";
  sectionGallery.appendChild(modal2);

  // modal2.addEventListener("click", async function () {
  //   modal2.style.display = "none";
  // });

  const modalWrapper2 = document.createElement("div");
  modalWrapper2.classList.add("modalWrapper");
  modalWrapper2.setAttribute(
    "style",
    "display: flex; flex-direction: column; align-items: center; gap: 40px; color: black; padding: 20px; ; background-color: white;"
  );
  modal2.appendChild(modalWrapper2);

  const zoneIconFermetureModale2 = document.createElement("div");
  zoneIconFermetureModale2.setAttribute(
    "style",
    "display: flex; flex-direction: row; gap: 550px;"
  );
  modalWrapper2.appendChild(zoneIconFermetureModale2);

  const iconReturnModal2 = document.createElement("img");
  iconReturnModal2.src = "svg/arrow.svg";
  iconReturnModal2.setAttribute("style", "width: 21px; height:21px;");

  zoneIconFermetureModale2.appendChild(iconReturnModal2);

  iconReturnModal2.addEventListener("click", async function () {
    modal1.style.display = null;
    modal2.style.display = "none";
  });

  const iconFermetureModal2 = document.createElement("img");
  iconFermetureModal2.src = "svg/xmark.svg";
  iconFermetureModal2.setAttribute("style", "width: 24px; height:24px;");

  zoneIconFermetureModale2.appendChild(iconFermetureModal2);

  iconFermetureModal2.addEventListener("click", async function () {
    modal2.style.display = "none";
  });

  const titleModal2 = document.createElement("h3");
  titleModal2.innerText = "Ajout photo";
  titleModal2.setAttribute(
    "style",
    "margin: auto; font-family: Work Sans; font-size: 26px;"
  );
  modalWrapper2.appendChild(titleModal2);

  const zoneAjoutPhoto = document.createElement("div");
  zoneAjoutPhoto.setAttribute(
    "style",
    "width : 420px; height 169px; display: flex; flex-direction: column; justify:content: center; align-items: center; gap: 15px;  padding: 20px; border: 1px dark-blue solid; background-color: #E8F1F6;"
  );
  modalWrapper2.appendChild(zoneAjoutPhoto);

  const iconAjoutPhoto = document.createElement("img");
  iconAjoutPhoto.src = "svg/picture.svg";
  iconAjoutPhoto.setAttribute("style", "width: 58px; height:58px;");

  zoneAjoutPhoto.appendChild(iconAjoutPhoto);

  const buttonAjoutPhotoM2 = document.createElement("button");
  buttonAjoutPhotoM2.innerText = " + Ajouter Photo ";
  buttonAjoutPhotoM2.setAttribute(
    "style",
    "font-family: Work Sans; font-size:14px; width: 173px; height: 36px; text-align:center; background-color: #CBD6DC ; color: #306685; border-radius:60px; border:none;"
  );
  zoneAjoutPhoto.appendChild(buttonAjoutPhotoM2);

  const legendFormat = document.createElement("p");
  legendFormat.innerText = "jpg.png : 4 Mo max";
  legendFormat.setAttribute("style", "font-family: Work Sans; font-size:10px;");
  zoneAjoutPhoto.appendChild(legendFormat);

  const formModal2 = document.createElement("form");
  formModal2.setAttribute("method", "post");
  formModal2.setAttribute("action", "submit.php");
  formModal2.setAttribute(
    "style",
    "border-bottom: solid 1px grey; padding-bottom : 20px;"
  );
  modalWrapper2.appendChild(formModal2);

  const fieldsetModal2 = document.createElement("fieldset");
  fieldsetModal2.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify:content:flex-start; align-items: flex-start; gap: 40px; color: black; padding: 0px 20px 20px 0px; border:none; background-color: white;"
  );
  formModal2.appendChild(fieldsetModal2);

  const titleTitlePhoto = document.createElement("label");
  titleTitlePhoto.setAttribute("for", "titre");
  titleTitlePhoto.innerText = "Titre";
  fieldsetModal2.appendChild(titleTitlePhoto);

  const titlePhotoModal2 = document.createElement("input");
  titlePhotoModal2.classList.add("inputModal2");
  titlePhotoModal2.setAttribute("type", "text");
  titlePhotoModal2.setAttribute("name", "titre");
  titlePhotoModal2.setAttribute("id", "titre");
  fieldsetModal2.appendChild(titlePhotoModal2);

  const titleCategoryPhoto = document.createElement("label");
  titleCategoryPhoto.setAttribute("for", "categorie");
  titleCategoryPhoto.innerText = "Catégorie";
  fieldsetModal2.appendChild(titleCategoryPhoto);

  const categoryPhotoModal2 = document.createElement("select");
  categoryPhotoModal2.classList.add("inputModal2");
  categoryPhotoModal2.setAttribute("name", "categorie");
  categoryPhotoModal2.setAttribute("id", "categorie");
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
