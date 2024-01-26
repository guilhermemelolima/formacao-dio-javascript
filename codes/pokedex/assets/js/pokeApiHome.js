
const pokeApi = {}

function convertPokeApiDetailPokemon(pokeDetail){
    const pokemon = new Pokemon();
    pokemon.num = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
        
    pokemon.types = types

    pokemon.type = type
    pokemon.img = pokeDetail.sprites.other.dream_world.front_default
    
    return pokemon
}

pokeApi.getPokemonDetail = (pokemon => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailPokemon)
})

pokeApi.getPokemons = (offset = 0, limit = 12) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detalhes => Promise.all(detalhes)))
        .then((detalhesPokemon) => detalhesPokemon)
        .catch((error) => console.error(error))
}
