const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const pokemonListModal = document.getElementById('header-detail');
const pokemonImg = document.getElementById('poke-img');

const maxRecords = 151;
const limit = 10;
let offset = 0;


const load = document.querySelector('.load');
function showLoading() {
    load.style.display = 'block';
}
function hideLoading() {
    load.style.display = 'none';
}

function loadPokemonItems(offset, limit) {  
    showLoading();
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        
        pokemons.forEach((pokemon) => {
            const listItem = document.createElement('li');
            listItem.className = `pokemon ${pokemon.type}`;
            
            listItem.innerHTML = `
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            `;

            listItem.addEventListener('click', () => loadDetailPokemon(pokemon));

            pokemonList.appendChild(listItem);
        });
        
        hideLoading();
        
        // console.log(pokemons)
    })
}
    
loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', ()=> {
    offset += limit
    const qtdRecordsWithNextPage = offset + limit
    
    if (qtdRecordsWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItems(offset, newLimit);
        
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItems(offset, limit);
    }
})


