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

const email = document.createElement("input");
email.innerText = "E-mail";
organisationForm.appendChild(email);

const labelMdp = document.createElement("label");
labelMdp.innerText = "Mot de passe";
organisationForm.appendChild(labelMdp);

const password = document.createElement("input");
password.innerText = "Mot de passe";
organisationForm.appendChild(password);

const buttonConnexion = document.createElement("submit");
buttonConnexion.classList.add("connexion");
buttonConnexion.innerText = "Se connecter";
organisationForm.appendChild(buttonConnexion);

const mdpOublie = document.createElement("a");
mdpOublie.innerText = "Mot de passe oublié";
sectionLogIn.appendChild(mdpOublie);

const errorLogIn = document.createElement("p");
errorLogIn.innerText = "Mauvaise combinaison";

buttonConnexion.addEventListener("click", async function () {
  const jeuMdpPassword = [email.value, password.value];
  console.log(jeuMdpPassword);
  const responsemdp = await fetch("http://localhost:5678/api/users/login");
  console.log(responsemdp);
});
//   array.forEach(inputEmail, inputMdt => {

//   }); {

//
// const responsemdp = await fetch("http://localhost:5678/api/users/login");
// // const responseMDT = await responsemdp.json();
// console.log(responsemdp);
// if (responsemdp.status === 200) {
//   console.log("Bien joué");
// } else {
//   // return "Mauvaise combinaison";
//   console.log("Mauvaise combinaison");
// }

// (localStorage.clear()) et d'utiliser la méthode location.reload()
