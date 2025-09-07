const BASE_URL = "https://pokeapi.co/api/"
const API_VERSION = "v2/"
const amountOfCards = 12;
let offset = 0
const mainPage = document.querySelector("#mainPage");
const cardTemplate = document.getElementById("pokemoncard");



const createCards = (data) => {
  data.forEach((element, index) => {
    const card = document.createElement("div");
    card.className = "pokemoncard"

    //Create image
    const img = document.createElement("img")
    img.src = element.sprites.other['official-artwork'].front_default
    img.alt = "Pokemon"

    //Create IDdiv
    const idDiv = document.createElement("div");
    idDiv.className = "id";
   idDiv.textContent = `#${String(element.id).padStart(4, "0")}`;

    const nameDiv = document.createElement("div");
    nameDiv.className = "name";
    nameDiv.textContent = element.name.replace(/^./, c => c.toUpperCase()); //replaces the small letter with the capital letter

    const abilities = document.createElement("div");
    abilities.className = "abilities";

    element.types.forEach((typeElement, index, types) => {
      const type = document.createElement("div");
      type.textContent = typeElement.type.name;
      //type.className = "badge" + " " + "fire";
      type.classList.add("badge");
      type.classList.add(typeElement.type.name);
      abilities.append(type);
    })

    card.appendChild(img);
    card.appendChild(idDiv);
    card.appendChild(nameDiv);
    card.appendChild(abilities);

    mainPage.appendChild(card)
  }) 
};

const getPokemon = async (id) =>  {
  if (id === undefined || id === null || String(id).trim() === "") {
    console.error("getPokemon called with:", id);
  //  throw new Error("Missing Pokémon id");
  }

  const response = await fetch(`${BASE_URL}${API_VERSION}/pokemon/${id}`)
  const data = await response.json();  
  if (!response.ok) throw new Error("Not found");

  return data;
}

//getPokemon(2);

const getAllPokemons = async (offset) => {
//   const response = fetch('https://pokeapi.co/api/v2/pokemon') 
//   console.log(response);
//   response.then((data)=>{
//     data.json().then((results)=>{
//       console.log(results)   
//     })
//   })

  const response = await fetch(`${BASE_URL}${API_VERSION}/pokemon?limit=${amountOfCards}&offset=${offset}`); // show only 12 pokemons
  const data = await response.json();
  const pokemons =  data.results
  console.log(pokemons)
  const promises = pokemons.map((currentElement, index, sourcePokemons)=> {
    return getPokemon(currentElement.name);
    
  })
   console.log(promises);
  const fullData = await Promise.all(promises)
  console.log(fullData);
  createCards(fullData);
}



const loadMoreButten = document.querySelector("#loadMore");
loadMoreButten.addEventListener("click", (event) => {
  offset += amountOfCards
//  offset = offset + 12
  getAllPokemons(offset)
    
});






getAllPokemons(offset);



// go into pokemons

const arr = [1,2,3,4];
const arr2 = arr.map((number, index, sourceArr)=>{
return number * 2;
})
console.log(arr2);

