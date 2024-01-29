const spanModal = document.querySelector('.closeModalBtn'); 
const janela = document.querySelector('.window');
const windowContent = document.getElementById('window-content');

const DivImgPokemon = document.getElementById('poke-img');
const divHeaderDetail = document.querySelector('.header-detail');
const iconFavorite = document.getElementById('icon-heart');
const divFavorite = document.getElementById('favorite');
const tableOne = document.querySelector('.table-one');
const thTableTwo = document.getElementById('thTableTwo');


pokemonList.onclick = () => {
    janela.style.width = '100%';
    janela.style.left = 0;
    document.querySelector('body').style.overflow = 'hidden';
}

spanModal.onclick = () => {
    janela.style.width = '-100%';
    janela.style.left = '-100%';
    document.querySelector('body').style.overflow = 'visible';
}

function loadDetailPokemon(pokemon) {

    const pokemonHeaderHTML = `
            <li class="poke-modal pokemon" id="poke-modal" >
                <span class="name">${pokemon.name}</span>
                <span class="number">#${pokemon.number}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
                    </ol>
                </div>
            </li>
            `
            
    const pokemonImgHTML = `
        <img class="pokemonImg" id="pokemonImg" src="${pokemon.photo}">
    `
    const tableOneHTML = `
        <tbody>
            <tr>
                <th>Species</th>
                <td>${pokemon.name}</td>
            </tr>
            <tr>
                <th id="height">Height</th>
                <td>${(pokemon.height) / 10} ( cm / m )</td>
            </tr>
            <tr>
                <th>Weight</th>
                <td>${(pokemon.weight) / 10} ( kg )</td>
            </tr>
            <tr>
                <th>Abilities</th>
                <td>${pokemon.abilities.join(', ')}</td>
            </tr>
        </tbody>
    `
    const tableTwoHTML = `
        <th>Egg Groups</th>
        <td>${pokemon.eggGroups.join(', ')}</td>            
    `
        
    changePokemonColor(pokemon.types);

    DivImgPokemon.innerHTML = pokemonImgHTML;
    divHeaderDetail.innerHTML = pokemonHeaderHTML
    tableOne.innerHTML = tableOneHTML;
    thTableTwo.innerHTML = tableTwoHTML;

};


const changePokemonColor = (types) => {

    const bcgColorPokemon = {
        'grass': {
            bcg: '#77c850',
        },
        'fire': {
            bcg: '#ee7f30',
        },
        'normal': {
            bcg: '#a6a877',
        },
        'water': {
            bcg: '#678fee',
        },
        'electric': {
            bcg: '#f7cf2e',
        },
        'ice': {
            bcg: '#98d5d7',
        },
        'ground': {
            bcg: '#dfbf69',
        },
        'flying': {
            bcg: '#a98ff0',
        },
        'poison': {
            bcg: '#a040a0',
        },
        'fighting': {
            bcg: '#bf3029',
        },
        'psychic': {
            bcg: '#f65687',
        },
        'dark': {
            bcg: '#725847',
        },
        'rock': {
            bcg: '#b8a137',
        },
        'bug': {
            bcg: '#a8b720',
        },
        'ghost': {
            bcg: '#6e5896',
        },
        'steel': {
            bcg: '#b9b7cf',
        },
        'dragon': {
            bcg: '#6f38f6',
        },
        'fairy': {
            bcg: '#f9aec7',
        },
    };

    if (bcgColorPokemon[types[0]]) {
        windowContent.style.background = bcgColorPokemon[types[0]].bcg;
    }
}
