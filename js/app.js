/* RICK & MORTY */

// Create API access basis:

const API_URL = 'https://rickandmortyapi.com/api/';
const CHARACTERS_URL = 'character/:id';
const OPTIONS = { crossDomain: true };

var userInput = '';

const CHARACTER = function (character) {
  document.querySelector("body").innerHTML += `Hola mi nombre es ${character.name}, mi especie es ${character.species}, soy originario de ${character.origin.name}${"<br></br>"}`;
}

function askCharacter(id) {
  userInput = prompt("Please, enter an id or \"SHOW\"");
  if (userInput !== "SHOW") {
    const URL = `${API_URL}${CHARACTERS_URL.replace(":id", userInput)}`;
    $.get(URL, OPTIONS, CHARACTER);
  }
}

while (userInput !== "SHOW") {
  askCharacter();
}
