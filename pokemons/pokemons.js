const amountOfCards = 50;
const app = document.querySelector(".app");
const names = [
  "Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Eevee",
  "Jigglypuff", "Meowth", "Snorlax", "Psyduck", "Gengar",
  "Machop", "Geodude", "Magikarp", "Vulpix", "Growlithe",
  "Lapras", "Mew", "Mewtwo", "Ditto", "Cubone",
  "Onix", "Dratini", "Dragonair", "Dragonite", "Pidgey",
  "Rattata", "Zubat", "Gastly", "Alakazam", "Golem",
  "Scyther", "Pinsir", "Tauros", "Articuno", "Zapdos",
  "Moltres", "Sandshrew", "Nidoran", "Clefairy", "Abra",
  "Hitmonlee", "Hitmonchan", "Rhydon", "Kangaskhan", "Seadra",
  "Staryu", "Mr. Mime", "Jynx", "Electabuzz", "Magmar"
];


const createCards = (amount) => {
  for (let i = 0; i < amount; i++) {
    const card = document.createElement("div");
    card.className = "pokemoncard"

//Create image
const img = document.createElement("img")
img.src = "./image.png"
img.alt = "Pokemon"

//Create IDdiv
const idDiv = document.createElement("div");
idDiv.className = "id";
idDiv.textContent = `#${String(i + 1).padStart(4, "0")}`;



const nameDiv = document.createElement("div");
nameDiv.className = "name";
nameDiv.textContent = names[i];

const buttonDiv = document.createElement("div");
buttonDiv.className = "buttons";

const btn1 = document.createElement("button");
btn1.textContent = "Type1";

const btn2 = document.createElement("button");
btn2.textContent = "Type2";



card.appendChild(img);
card.appendChild(idDiv);
card.appendChild(nameDiv);
card.appendChild(buttonDiv);
card.appendChild(btn1);
card.appendChild(btn2);

app.appendChild(card)
  }
};

createCards(amountOfCards);
