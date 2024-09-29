import { chooseCard } from "./main.ts"

interface Type {
    type: { name: string };
  }

export default class PokemonCard extends HTMLElement{
    private shadow
    private pokeId:number = 0
    private name:string = ""
    private sprite:string = ""
    private types: Type[] = []
    constructor(){
        super()
        this.pokeId
        this.name
        this.sprite
        this.types
        this.shadow = this.attachShadow({mode:"closed"})
        this.addEventListener("click", (e) => {chooseCard(e)})
        this.#render()
    }
    set setId(newId:number){
       this.pokeId = newId
       this.#render()
    }
    set setName(newName:string){
        this.name = newName
        this.#render()
    }
    set setSprite(newSprite:string){
        this.sprite = newSprite
        this.#render()
    }
    set setType(newType:Type[]){
        newType.forEach(type => {
            this.types.push(type)  
        });
        
        this.#render()
    } 
    get getId():number{
        return this.pokeId
    }
    get getName():string{
        return this.name
    }
    get getSprite():string{
        return this.sprite
    }
    get getType():Type[]{
        return this.types
    }

    #render(){
        this.shadow.innerHTML = `
        <style>
            .card{
                display: flex;
                flex-direction: column;
                width: 180px;
                height: 15hv;
                border-radius: 20px;
                background: rgba(0, 0, 0, 0.6);
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(9.5px);
                -webkit-backdrop-filter: blur(9.5px);
                gap: 0;
                align-items: center;
                padding-top: 70px;
                box-sizing: border-box;
            }
            img{
                pointer-events: none;
                position: absolute;
                width: 100%;
                image-rendering: pixelated;
                top: -80px;
            }
            h2{
                pointer-events: none;
                height: 20%;
                position: relative;
            }
            .typesBox{
                pointer-events: none;
                height: 30%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: 1rem;
            }
            p{
                padding: 5px 8px 5px 8px;
                border-radius: 10px;
            }
            .grass{
                background-color: green;
            }
            .water{
                background-color: dodgerblue;
            }
            .fire{
                background-color: darkred;
            }
            .normal{
                background-color: gray;
            }
            .flying{
                background-color: mediumturquoise;
            }
            .rock{
                background-color: darkgray;
            }
            .poison{
                background-color: limegreen;
            }
            .ground{
                background-color: brown;
            }
            .fighting{
                background-color: coral;
            }
            .electric{
                background-color: orange;
            }
            .fairy{
                background-color: lightcoral;
            }
            .bug{
                background-color: purple;
            }
            .psychic{
                background-color: goldenrod;
            }
            .ice{
                background-color: cornflowerblue;
            }
            .ghost{
                background-color: cadetblue;
            }
            .steel{
                background-color: darkslategray;
            }
            .steel{
                background-color: darkorange;
            }
            .dragon{
                background-color: crimson;
            }
        </style>
        `
        const card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("id", `${this.getId}`);

        const pokeSprite = document.createElement("img")
        pokeSprite.src = this.getSprite
        card.appendChild(pokeSprite)

        const pokeName = document.createElement("h2")
        pokeName.innerHTML = `${this.getName}`
        card.appendChild(pokeName)

        const pokeTypes = document.createElement("div")
        pokeTypes.classList.add("typesBox")
        this.types.forEach(type => {
            if(type){
                const pokeType = document.createElement("p")
                pokeType.classList.add(type.type.name)
                pokeType.innerHTML = `${type.type.name}`
                pokeTypes.appendChild(pokeType)
            }
        });
        card.appendChild(pokeTypes)

        this.shadow.appendChild(card)

    }
}
customElements.define("pokemon-card", PokemonCard)