
const pokeApi = {};

function convertPokeApiDetailToPokemon(pokeDetail, pokeDetailTwo) {
    const pokemon = new Pokemon();
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    const abilities = pokeDetail.abilities.map((listAbilitie) => listAbilitie.ability.name);
    pokemon.abilities = abilities;
    pokemon.abilitie = abilities[1];

    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;

    const eggGroups = pokeDetailTwo.egg_groups.map((details) => details);
    pokemon.eggGroups = eggGroups.map((listar) => listar.name);
    
    return pokemon;
}


pokeApi.getPokemonDetail = async (pokemon) => {
    try {
        const response = await fetch(pokemon.url);
        const data = await response.json();

        const resPokeDetail = await fetch(data.species.url)
        const dataTwoPokeDetails = await resPokeDetail.json()

        return convertPokeApiDetailToPokemon(data, dataTwoPokeDetails);

    } catch (error) {
        console.error('Error fetching Pokemon details:', error);
        throw error;
    }
};

pokeApi.getPokemons = async (offset = 0, limit = 10) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        const response = await fetch(url);
        const jsonBody = await response.json();
        const pokemons = jsonBody.results;

        const detailRequests = pokemons.map(async (poke) => await pokeApi.getPokemonDetail(poke));
        const pokemonsDetails = await Promise.all(detailRequests);

        return pokemonsDetails;
    } catch (error) {
        console.error('Error fetching Pokemon list:', error);
        throw error;
    }
};
