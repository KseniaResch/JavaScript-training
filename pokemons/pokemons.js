const amountOfCards = 50;
const mainPage = document.querySelector("#mainPage");



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
    nameDiv.textContent = element.name;

    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttons";

    element.types.forEach((typeElement, index, types) => {
      const type = document.createElement("div");
      type.textContent = typeElement.type.name;
      buttonDiv.append(type)
    })

    card.appendChild(img);
    card.appendChild(idDiv);
    card.appendChild(nameDiv);
    card.appendChild(buttonDiv);

    mainPage.appendChild(card)
  }) 
};

const getPokemon = async (id) =>  {
  if (id === undefined || id === null || String(id).trim() === "") {
    console.error("getPokemon called with:", id);
  //  throw new Error("Missing Pokémon id");
  }

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json();  
  if (!response.ok) throw new Error("Not found");

  return data;
}

//getPokemon(2);

const getAllPokemons = async () => {
//   const response = fetch('https://pokeapi.co/api/v2/pokemon') 
//   console.log(response);
//   response.then((data)=>{
//     data.json().then((results)=>{
//       console.log(results)   
//     })
//   })

  const response = await fetch('https://pokeapi.co/api/v2/pokemon')
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


getAllPokemons();


// style
//12 pokemons on the page
// load more 
// go into pokemons

const arr = [1,2,3,4];
const arr2 = arr.map((number, index, sourceArr)=>{
return number * 2;
})
console.log(arr2);

