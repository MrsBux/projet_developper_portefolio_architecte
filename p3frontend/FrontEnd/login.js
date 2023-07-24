// page de connexion
// selection de la zone div de formulaire

const sectionLogIn = document.querySelector(".logIn");

// création du formulaire

const formulaire = document.createElement("form");
formulaire.innerText = "";
sectionLogIn.appendChild(formulaire);

const organisationForm = document.createElement("fieldset");
organisationForm.innerText = "";
formulaire.appendChild(organisationForm);

// titre formulaire

const legend = document.createElement("legend");
legend.innerText = "Log In";
organisationForm.appendChild(legend);

// zone label/ input email et mot de passe

const labelEmail = document.createElement("label");
labelEmail.innerText = "E-mail";
organisationForm.appendChild(labelEmail);

const email = document.createElement("input");
email.innerText = "E-mail";
organisationForm.appendChild(email);

const labelMdp = document.createElement("label");
labelMdp.innerText = "Mot de passe";
organisationForm.appendChild(labelMdp);

const password = document.createElement("input");
password.innerText = "Mot de passe";
organisationForm.appendChild(password);

// Bouton se connecter

const buttonConnexion = document.createElement("submit");
buttonConnexion.classList.add("connexion");
buttonConnexion.innerText = "Se connecter";
organisationForm.appendChild(buttonConnexion);

// lien mot de passe oublié NON FONCTIONNEL

const mdpOublie = document.createElement("a");
mdpOublie.innerText = "Mot de passe oublié";
sectionLogIn.appendChild(mdpOublie);

// Mise en fonction du formulaire --------------------------------------------------------

// ajout d'un event listener sur le bouton de connexion
buttonConnexion.addEventListener("click", async function () {
  // stockage d'un jeu email/mdp rentrés par l'utilisateur par un objet
  const jeuMdpPassword = {
    email: email.value,
    password: password.value,
  };
  console.log(jeuMdpPassword);

  //stockage de la réponse de la requete dans une constante
  const responsemdp = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    body: JSON.stringify(jeuMdpPassword),
    headers: {
      "Content-Type": "application/json",
    },
  });

  //traduction de la réponse en json
  const responseBody = await responsemdp.json();
  console.log(responseBody);

  // condition IF pour succès ou echec de la connexion

  // si reponse de la requete = 200 alors c'est un sccès
  if (responsemdp.status === 200) {
    // stockage du token en local
    window.localStorage.setItem("token", responseBody.token);

    //renvoie vers la page d'accueil en mode login au bout de 100ms
    setTimeout(function () {
      window.location.href = "index.html";
    }, 100);
  } else {
    // sinon c'est un echec et alors renvoie d'une alerte
    alert("Mauvaise combinaison Email / Mot de passe");
  }
});
