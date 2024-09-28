import PokemonCard from './card';
import './style.css'

const topCardsBox = document.getElementById("topCardsBox")
const bottomCardsBox = document.getElementById("bottomCardsBox")
const middleBox = document.getElementById("middleBox")

const nPokemons:number = 10;
createPokemon();

function generateRandomId(max:number):number{
  return Math.floor(Math.random() * max);
}

async function createPokemon(){
  for(let i = 0; i < nPokemons; i++){
    const id:number = generateRandomId(152);
    const pokemon = new PokemonCard();

    const getPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`).then(data => data.json())

    pokemon.setId = i
    pokemon.setName = getPokemon.pokemon.name
    pokemon.setSprite = getPokemon.sprites.front_default
    pokemon.setType = getPokemon.types
    console.log(getPokemon.types)

    if(i<5){
      topCardsBox?.appendChild(pokemon)
    }else{
      bottomCardsBox?.appendChild(pokemon)
    }
  }
}

export function chooseCard( e :MouseEvent){
  const element = e.target as HTMLElement
  console.log(element)

  /*
  if(Number(element.id) < 5){
    topCardsBox?.removeChild(document.getElementById(element.id))
  }else{
    bottomCardsBox?.removeChild(document.getElementById(element.id))  
  }
  */
  
}
