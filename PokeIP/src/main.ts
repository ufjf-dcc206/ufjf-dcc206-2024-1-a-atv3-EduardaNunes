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

    const getPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(data => data.json())
    console.log(getPokemon)

    pokemon.setId = i
    pokemon.setName = getPokemon.name
    pokemon.setSprite = getPokemon.sprites.front_default
    pokemon.setType = getPokemon.types

    if(i<5){
      topCardsBox?.appendChild(pokemon)
    }else{
      bottomCardsBox?.appendChild(pokemon)
    }
  }
}

let isTopChoosen:boolean = false;
let isBottomChoosen:boolean = false;

export function chooseCard( e :MouseEvent){
  const element = (e.target) as PokemonCard

  if(!element) return

  if(Number(element.getId) < 5){
    if(!isTopChoosen){
      isTopChoosen = true
      middleBox?.appendChild(element as HTMLElement)
    }
  }else{
    if(!isBottomChoosen){
      isBottomChoosen = true
      middleBox?.appendChild(element as HTMLElement)
    }
  }
}
