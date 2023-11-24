const password = document.querySelector(".container-input-password");
const email = document.querySelector(".container-input-email");
const button = document.querySelector(".container-button button");
const emoji = document.getElementById("emoji");
const emojisentence = document.getElementById("emoji-sentence");

// Via ce script vous spécifiez que l'email doit :
// - contenir une arobase et un point
// - avant la présence de l'arobase nous pouvons trouver, des lettres quelconques
//     (en minuscule ou majuscule), n'importe quel chiffre, et les caractères "-" ou "_"
// - aprés l'arobase, la vérification reste la même mais on interdit la présence de "_"
//     et il faut impérativement au moins de caractères entre l'arobase et le point
// - aprés le point, nous devons une succession de 2 ou 3 caractères doivent être
//     présentes afin de pouvoir valider l'adresse email.

function validationEmail(email) {
  var check = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  if (check.exec(email) == null) {
    return false;
  } else {
    return true;
  }
}

function validationPassword(password) {
  var check = /^[A-Za-z]\w{8,50}$/;
  if (check.exec(password) == null) {
    return false;
  } else {
    return true;
  }
}

let isValidateEmail;
let isValidatePassword;

email.addEventListener("input", (e) => {
  isValidateEmail = validationEmail(e.target.value);
  if (isValidateEmail == false) {
    e.target.classList.remove("done");
    e.target.classList.add("error");
  } else {
    e.target.classList.remove("error");
    e.target.classList.add("done");
  }
  checkIsButtonDone();
  if (e.target.value === "") {
    e.target.classList.remove("done");
    e.target.classList.remove("error");
  }
});

password.addEventListener("input", (e) => {
  isValidatePassword = validationPassword(e.target.value);
  if (isValidatePassword == false) {
    e.target.classList.remove("done");
    e.target.classList.add("error");
  } else {
    e.target.classList.remove("error");
    e.target.classList.add("done");
  }
  checkIsButtonDone();
  if (e.target.value === "") {
    e.target.classList.remove("done");
    e.target.classList.remove("error");
  }
});

function checkIsButtonDone() {
    if (isValidateEmail && isValidatePassword) {
      button.classList.add("correct");
      button.textContent = "Se connecter";
      updateEmoji("https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif"); // Emoji heureux
      updateEmojiSentence("Bravooooo");
    } else {
      button.classList.remove("correct");
      button.textContent = "Ne me touche pas hein";
      updateEmoji("https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.gif"); // Emoji neutre
      updateEmojiSentence("Pas encore bon!");
    }
  }

  function updateEmoji(imageSrc) {
    // Trouve l'élément avec l'id "emoji"
    const emojiContainer = document.getElementById("emoji");

    // Remplace le contenu HTML de l'élément avec l'image
    emojiContainer.innerHTML = `
    <img src="${imageSrc}" alt="emoji" width="50" height="50">
  `;
}

  function updateEmojiSentence(sentence) {
    emojisentence.textContent = sentence;
  }

  function checkIsButtonDone() {
    if (isValidateEmail && isValidatePassword) {
        button.classList.add("correct");
        button.textContent = "Se connecter";
        updateEmoji("https://fonts.gstatic.com/s/e/notoemoji/latest/1f973/512.gif"); // Emoji heureux
        updateEmojiSentence("Bravooooo");
        resetButtonPosition(); // Ajout de cette ligne
    } else {
        button.classList.remove("correct");
        button.textContent = "Ne me touche pas hein";
        updateEmoji("https://fonts.gstatic.com/s/e/notoemoji/latest/1f610/512.gif"); // Emoji neutre
        updateEmojiSentence("Pas encore bon!");
    }
}

function resetButtonPosition() {
    // Réinitialise la transformation du bouton à sa position initiale
    button.style.transform = "translate(0, 0)";
}


window.addEventListener("mousemove", (e) => {
    button.addEventListener("mouseenter", () => {
      if (!isValidateEmail || !isValidatePassword) {
        if (e.movementX > 0) {
          if (e.pageX < window.innerWidth / 2) {
            button.style.transform = `translate(${e.pageX / 3}px, ${e.pageY / 3}px)`;
          } else {
            button.style.transform = `translate(-${e.pageX / 3}px, ${e.pageY / 3}px)`;
          }
        } else {
          if (e.pageX < window.innerWidth / 2) {
            button.style.transform = `translate(${e.pageX / 3}px, ${e.pageY / 3}px)`;
          } else {
            button.style.transform = `translate(-${e.pageX / 3}px, ${e.pageY / 3}px)`;
          }
        }
      }
    });
  });
  
  
  