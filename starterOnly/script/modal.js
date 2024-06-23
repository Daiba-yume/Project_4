// Fonction pour éditer la barre de navigation en mode responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    // Ajoute la classe 'responsive' pour rendre la navigation adaptable
    x.className += " responsive";
  } else {
    // Réinitialise la classe à 'topnav' pour enlever l'adaptation
    x.className = "topnav";
  }
}

// Éléments DOM
const modalbg = document.querySelector(".bground"); // Fond de la modale
const modalBtn = document.querySelectorAll(".modal-btn"); // Boutons pour ouvrir la modale
const formData = document.querySelectorAll(".formData"); // Champs du formulaire
const btnClose = document.getElementById("close-registration"); // Bouton pour fermer la modale depuis la page de remerciements
const closeBtn = document.querySelectorAll(".close"); // Boutons pour fermer la modale

// Événement de lancement de la modale
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fonction pour afficher la modale
function launchModal() {
  modalbg.style.display = "block";
}

// Événement pour fermer la modale depuis la page de remerciements
btnClose.addEventListener("click", function () {
  closeModal();
  resetForm();
});

// Événement pour fermer la modale
closeBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    closeModal();
    resetForm();
  })
);
// Fonction pour cacher la modale
function closeModal() {
  modalbg.style.display = "none";
}

// Éléments DOM pour les champs du formulaire
const formDataPrenom = document.querySelector("#first");
const formDataNom = document.querySelector("#last");
const formDataEmail = document.querySelector("#email");
const formDataBirthdate = document.querySelector("#birthdate");
const formDataTournois = document.querySelector("#quantity");

// Vérification du prénom et du nom
formDataPrenom.addEventListener("change", function () {
  checkName(this);
});

formDataNom.addEventListener("change", function () {
  checkName(this);
});

// Fonction pour vérifier le nom/prénom avec une regexp
function checkName(input) {
  // Vérifie que le nom/prénom ne contient que des lettres et des tirets, et est entre 2 et 30 caractères
  let nameRegExp = new RegExp("^[A-Za-z-]{2,30}$", "g");
  let testName = nameRegExp.test(input.value); // Teste la valeur du champ avec l'expression régulière
  if (testName) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green"; // Affiche un message de succès en vert
    return true;
  } else {
    input.nextElementSibling.innerHTML = "Champ vide ou incorrect.";
    input.nextElementSibling.style.color = "red"; // Affiche un message d'erreur en rouge
    return false;
  }
}

// Vérification de l'adresse e-mail
formDataEmail.addEventListener("change", function () {
  checkEmail(this);
});

// Fonction pour vérifier l'adresse e-mail avec une regexp
function checkEmail(input) {
  // Vérifie l'adresse e-mail
  let emailRegExp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    "g"
  );
  let testEmail = emailRegExp.test(input.value); // Teste la valeur du champ avec l'expression régulière
  if (testEmail) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green"; // Affiche un message de succès en vert
    return true;
  } else {
    input.nextElementSibling.innerHTML =
      "Champ vide ou email saisie incorrecte.";
    input.nextElementSibling.style.color = "red"; // Affiche un message d'erreur en rouge
    return false;
  }
}

// Vérification de la date de naissance
formDataBirthdate.addEventListener("change", function () {
  checkBirthdate(this);
});

// Fonction pour vérifier la date de naissance avec une regexp
function checkBirthdate(input) {
  // Vérifie une date au format AAAA-MM-JJ
  let birthdateRegExp = new RegExp(
    "^(19|20)[0-9]{2}[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$"
  );
  let testBirthdate = birthdateRegExp.test(input.value); // Teste la valeur du champ avec l'expression régulière

  let date1 = new Date(input.value).getTime(); // Date de naissance
  let date2 = new Date().getTime(); // Date actuelle

  if (testBirthdate && date1 < date2) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green"; // Affiche un message de succès en vert
    return true;
  } else if (date1 > date2) {
    input.nextElementSibling.innerHTML =
      "Vous ne pouvez pas être né(e) demain!";
    input.nextElementSibling.style.color = "red"; // Affiche un message d'erreur en rouge
    return false;
  } else if (!testBirthdate) {
    input.nextElementSibling.innerHTML =
      "Veuillez saisir votre date de naissance.";
    input.nextElementSibling.style.color = "red"; // Affiche un message d'erreur en rouge
    return false;
  }
}

// Vérification du nombre de tournois
formDataTournois.addEventListener("change", function () {
  checkTournois(this);
});

// Fonction pour vérifier le nombre de tournois avec une regexp
function checkTournois(input) {
  // Vérifie que le nombre de tournois est un chiffre entre 0 et 99
  let tournoisRegExp = new RegExp("^[0-9]{1,2}$");
  let testTournois = tournoisRegExp.test(input.value); // Teste la valeur du champ avec l'expression régulière
  if (testTournois) {
    input.nextElementSibling.innerHTML = "Champ valide.";
    input.nextElementSibling.style.color = "green"; // Affiche un message de succès en vert
    return true;
  } else {
    input.nextElementSibling.innerHTML =
      "Veuillez saisir un nombre compris entre 0 et 99";
    input.nextElementSibling.style.color = "red"; // Affiche un message d'erreur en rouge
    return false;
  }
}

// Vérification de la sélection de la ville
const formDataLocations = document.querySelectorAll('input[name="location"]');

// Événement pour vérifier la sélection de la ville
formDataLocations.forEach(function (e) {
  e.addEventListener("click", function () {
    checkLocations();
  });
});

// Fonction pour vérifier qu'une ville est sélectionnée
function checkLocations() {
  const locationFormErrorMessage = document.querySelector(".errorLocation");

  if (document.querySelector("input[name='location']:checked") === null) {
    locationFormErrorMessage.textContent = "Veuillez sélectionner une ville.";
    locationFormErrorMessage.style.display = "block"; // Affiche un message d'erreur si aucune ville n'est sélectionnée
    return false;
  } else {
    locationFormErrorMessage.textContent = "";
    locationFormErrorMessage.style.display = "none"; // Cache le message d'erreur si une ville est sélectionnée
    return true;
  }
}

// Vérification de l'acceptation des CGU
const formDataCheckbox = document.getElementById("checkbox1");

formDataCheckbox.addEventListener("click", function () {
  checkCGU();
});

// Fonction pour vérifier que les CGU sont acceptées
function checkCGU() {
  const checkboxErrorMessage = document.querySelector(".errorCheckbox");

  if (formDataCheckbox.checked === false) {
    checkboxErrorMessage.textContent = "Veuillez prendre connaissance des CGU.";
    checkboxErrorMessage.style.display = "block"; // Affiche un message d'erreur si les CGU ne sont pas acceptées
    return false;
  } else {
    checkboxErrorMessage.textContent = "";
    checkboxErrorMessage.style.display = "none"; // Cache le message d'erreur si les CGU sont acceptées
    return true;
  }
}

// Soumission du formulaire
const form = document.getElementById("registration");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  sendForm();
});

// Fonction pour envoyer le formulaire après vérification de tous les champs
function sendForm() {
  const validName = checkName(formDataPrenom);
  const validLastName = checkName(formDataNom);
  const validEmail = checkEmail(formDataEmail);
  const validBirthday = checkBirthdate(formDataBirthdate);
  const validTournois = checkTournois(formDataTournois);
  const validLocation = checkLocations(formDataLocations);
  const validChecker = checkCGU(formDataCheckbox);

  // Si tous les champs sont valides, cache le formulaire, affiche le message de remerciement
  if (
    validName &&
    validLastName &&
    validEmail &&
    validBirthday &&
    validTournois &&
    validLocation &&
    validChecker
  ) {
    document.getElementById("registration").style.display = "none";
    document.getElementById("thanks").style.display = "flex";
    document.getElementById("close-registration").style.display = "block";
    document.getElementById("close-registration-text").style.display = "flex";
  } else {
    alert("Formulaire incomplet"); // Alerte si le formulaire n'est pas complet
  }
}

// Fonction pour réinitialiser le formulaire
function resetForm() {
  form.reset(); // Réinitialise le formulaire
  document.getElementById("registration").style.display = "block";
  document.getElementById("thanks").style.display = "none";
  document.getElementById("close-registration").style.display = "none";
  document.getElementById("close-registration-text").style.display = "block";

  // Réinitialiser les messages d'erreur
  const errorMessages = document.querySelectorAll(
    ".formData .error-message, .formData .msg-regexp"
  );
  errorMessages.forEach((message) => {
    message.innerHTML = "";
    message.style.display = "none";
    message.style.color = "";
  });
}
