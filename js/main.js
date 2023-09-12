
const pokemons__lista = document.getElementById('pokemon_list')
const loadMoreButton = document.getElementById("loadMoreButton")

const limit = 10;
let offset = 0;
const maxRecords = 15

function convertPokemonHtml(pokemon) {
    return `
        <li class="pokemons__lista_grass pokemons__lista ${pokemon.type}">
            <span class="pokemons__lista-number">#${pokemon.number}</span>
            <span class="pokemons__lista-name">${pokemon.name}</span>

            <div class="pokemons__lista-details">
                <ol class="pokemons__lista-types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join("")}
                </ol>
                <img src="${pokemon.photo}"
                    alt="${pokemon.name}" class="pokemons__lista-img">
            </div>

        </li>
    `
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit)
        .then((pokemonList = []) => {
            pokemons__lista.innerHTML += pokemonList.map(convertPokemonHtml).join("")
        })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener("click", () => {
    offset += limit

    const qtdRegistros = offset + limit

if(qtdRegistros >= maxRecords){
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    loadMoreButton.parentElement.removeChild(loadMoreButton)
    
}else{
    loadPokemonItens(offset, limit)
}
})