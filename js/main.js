
const offset = 9
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonHtml(pokemon) {
    return `
        <li class="pokemons__lista_grass pokemons__lista">
            <span class="pokemons__lista-number">#001</span>
            <span class="pokemons__lista-name">${pokemon.name}</span>

            <div class="pokemons__lista-details">
                <ol class="pokemons__lista-types">
                    <li class="pokemons__lista-type_grass">Grass/li>
                    <li class="pokemons__lista-type_grass">Poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}" class="pokemons__lista-img">
            </div>

        </li>
    `
}

const pokemons__lista = document.getElementById('pokemon_list')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            pokemons__lista.innerHTML += convertPokemonHtml(pokemon)

            
        }
    })

    .catch((error) => console.log(error))
    .finally(() => console.log("Requisição Concluída!"))