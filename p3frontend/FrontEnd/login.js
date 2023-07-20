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

const legend = document.createElement("legend");
legend.innerText = "Log In";
organisationForm.appendChild(legend);

// zone input email et mot de passe

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

// lien mot de passe oublié

const mdpOublie = document.createElement("a");
mdpOublie.innerText = "Mot de passe oublié";
sectionLogIn.appendChild(mdpOublie);

// Mise en fonction du formulaire --------------------------------------------------------

const errorLogIn = document.createElement("p");
errorLogIn.innerText = "Mauvaise combinaison";

buttonConnexion.addEventListener("click", async function () {
  const jeuMdpPassword = {
    email: email.value,
    password: password.value,
  };
  console.log(jeuMdpPassword);
  const responsemdp = await fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    body: JSON.stringify(jeuMdpPassword),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBody = await responsemdp.json();
  console.log(responseBody);
  debugger;

  if (responsemdp.status === 200) {
    console.log("Bien joué");

    window.localStorage.setItem("token", responseBody.token);
    setTimeout(function () {
      window.location.href = "index.html";
    }, 100);
  } else {
    alert("Mauvaise combinaison Email / Mot de passe");
  }
});
