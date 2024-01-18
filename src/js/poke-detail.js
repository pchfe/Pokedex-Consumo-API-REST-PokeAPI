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
}

spanModal.onclick = () => {
    janela.style.width = '-100%';
    janela.style.left = '-100%';
}

pokemonList.addEventListener('click', function(event) {

    const clickedPokemon = event.target.closest('.pokemon');
    
    if (clickedPokemon) {

        const number = clickedPokemon.getAttribute('data-number');
        const name = clickedPokemon.getAttribute('data-name');
        const photo = clickedPokemon.getAttribute('data-photo');
        const typesString = clickedPokemon.getAttribute('data-types');
        const abilities = clickedPokemon.getAttribute('data-abilities');
        const height = clickedPokemon.getAttribute('data-height');
        const weight = clickedPokemon.getAttribute('data-weight');
        const eggs = clickedPokemon.getAttribute('data-eggs');
        const types = typesString.split(',').map(type => type.trim());
        
        const pokemonHeaderHTML = `
            <!-- Nome do pokemon e tipos -->
            <li class="poke-modal pokemon" id="poke-modal" >
                <span class="name">${name}</span>
                <span class="number">#${number}</span>
                <div class="detail">
                    <ol class="types">
                        ${types.map((p1) => `<li class="type">${p1}</li>`).join('')}
                    </ol>
                </div>
            </li>
            `
            
        const pokemonImgHTML = `
            <img class="pokemonImg" id="pokemonImg" src="${photo}">
        `
        const tableOneHTML = `
            <tbody>
                <tr>
                    <th>Species</th>
                    <td>${name}</td>
                </tr>
                <tr>
                    <th id="height">Height</th>
                    <td>${height} ( cm / m )</td>
                </tr>
                <tr>
                    <th>Weight</th>
                    <td>${weight} ( kg )</td>
                </tr>
                <tr>
                    <th>Abilities</th>
                    <td>${abilities}</td>
                </tr>
            </tbody>
        `
        const tableTwoHTML = `
            <th>Egg Groups</th>
            <td>${eggs}</td>            
        `
        
        changePokemonColor(types);

        DivImgPokemon.innerHTML = pokemonImgHTML;
        divHeaderDetail.innerHTML = pokemonHeaderHTML
        tableOne.innerHTML = tableOneHTML;
        thTableTwo.innerHTML = tableTwoHTML;
    }
});


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
