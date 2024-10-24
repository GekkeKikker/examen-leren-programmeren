// Deel 1: Schrijf een functie genaamd hallo. De functie accepteert één parameter, genaamd naam.
// hallo("Jordy"); // Dit zal 'Hallo Jordy!' printen in de console
// hallo("Mark"); // Dit zal 'Hallo Mark!' printen in de console

function hallo(naam) {
  console.log("Hallo " + naam + "!");
}

// deel 2: Gebruik de gemaakte functie uit Deel 1 in onderstaande code.
const docent = "Jordy";

if (docent === "Mark") {
  hallo(docent);
} else if (docent === "John") {
  hallo(docent);
} else if (docent === "Jordy") {
  hallo(docent);
} else {
  console.log(`Hallo vreemdeling!`);
}
