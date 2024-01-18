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
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type} sp" data-number="${pokemon.number}" data-name="${pokemon.name}" 
            data-types="${pokemon.types}" data-photo="${pokemon.photo}" data-abilities="${pokemon.abilities.join(', ')}"
            data-height="${(pokemon.height)/10}" data-weight="${(pokemon.weight / 10).toFixed(1)}" data-eggs="${pokemon.eggGroups.join(', ')}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
        
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}"
                            alt="${pokemon.name}">
                    </div>
                </li>
        `).join('')
        

        pokemonList.innerHTML += newHtml
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


