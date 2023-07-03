// page de connexion

const sectionLogIn = document.querySelector(".logIn");

const formulaire = document.createElement("form");
formulaire.innerText = "";
sectionLogIn.appendChild(formulaire);

const organisationForm = document.createElement("fieldset");
organisationForm.innerText = "";
formulaire.appendChild(organisationForm);

const legend = document.createElement("legend");
legend.innerText = "Log In";
organisationForm.appendChild(legend);

const labelEmail = document.createElement("label");
labelEmail.innerText = "E-mail";
organisationForm.appendChild(labelEmail);

const inputEmail = document.createElement("input");
inputEmail.innerText = "E-mail";
organisationForm.appendChild(inputEmail);

const labelMdp = document.createElement("label");
labelMdp.innerText = "Mot de passe";
organisationForm.appendChild(labelMdp);

const inputMdp = document.createElement("input");
inputMdp.innerText = "Mot de passe";
organisationForm.appendChild(inputMdp);

const buttonConnexion = document.createElement("submit");
buttonConnexion.classList.add("connexion");
buttonConnexion.innerText = "Se connecter";
organisationForm.appendChild(buttonConnexion);

const mdpOublie = document.createElement("a");
mdpOublie.innerText = "Mot de passe oublié";
sectionLogIn.appendChild(mdpOublie);
