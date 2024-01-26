
class Pokemon {
    num;
    name;
    type;
    types = [];
    img;
    abilities = [];
}

const pokemonDetail = document.getElementById('fullDetail');

const pokeApi = {}
const idPokemon = () => {
    const url = window.location.href;
    for (let i = 0; i < url.length; i++) {
        if (url[i] === '=') {
            return parseInt(url.slice(i + 1));
        }
    }
};


function convertPokeApiFullDetailPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    pokemon.num = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;

    pokemon.type = type;
    pokemon.img = pokeDetail.sprites.other.dream_world.front_default;

    pokemon.abilities = pokeDetail.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name);

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiFullDetailPokemon)
})


pokeApi.getPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon()}`
    return fetch(url)
        .then((response) => response.json())
        .then(convertPokeApiFullDetailPokemon)
}

function convertPokemonToFullDetail(pokemon) {
    return `
            <div class="pokemon ${pokemon.type}">
                
                <span class="number">#${pokemon.num}</span>
                <span class="name">${pokemon.name}</span>

                <span class="img">
                    <img src="${pokemon.img}" alt="${pokemon.name}">
                </span>

                <div class="detail">
                    <h3>Tipo</h3>
                    <ul class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ul>

                    <h3>Habilidades</h3>
                    <ul class="abilities">
                        ${pokemon.abilities.map((ability) => `<li class="ability">${ability}</li>`).join('')}
                    </ul>
                </div>
            </div>
    `
}

function loadPokemonItens() {
    pokeApi.getPokemon()
        .then((pokemon) => {
            const newHtml = convertPokemonToFullDetail(pokemon)
            pokemonDetail.innerHTML += newHtml 
        })
}

loadPokemonItens()
