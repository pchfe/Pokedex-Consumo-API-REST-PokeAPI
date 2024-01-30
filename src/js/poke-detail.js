const spanModal = document.querySelector('.closeModalBtn'); 
const janela = document.querySelector('.window');
const windowContent = document.getElementById('window-content');

const DivImgPokemon = document.getElementById('poke-img');
const divHeaderDetail = document.querySelector('.header-detail');
const alert = document.getElementById('alert');
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

function alertModal() {
    alert.style.visibility = 'visible';
    alert.style.top = '5px';

    setTimeout(() => {
        alert.style.top = '-10%';
        alert.style.visibility = 'hidden';
    }, 1300)
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

    const alertAddHTML = `
        <img src="${pokemon.photo}">
        <p>Pokémon favoritado com sucesso!</p>
    `
    const alertRemoveHTML = `
        <img src="${pokemon.photo}">
        <p>Pokémon removido dos favoritos com sucesso!</p>
    `

    const iconFavorite = document.getElementById('icon-heart');
    let listFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isFavorited = listFavorites.includes(pokemon.number);

    if (isFavorited) {
        iconFavorite.className = "fa-solid fa-heart icon-heart"
    } else {
        iconFavorite.className = "fa-regular fa-heart icon-heart"
    }

    iconFavorite.addEventListener('click', () => {
        
        if (isFavorited) {
            listFavorites = listFavorites.filter((favPokemon) => favPokemon !== pokemon.number);
            iconFavorite.className = "fa-regular fa-heart icon-heart"
            alert.innerHTML = alertRemoveHTML;
            alertModal()
        } else {
            if (!listFavorites.includes(pokemon.number)) {
                listFavorites.push(pokemon.number);
                iconFavorite.className = "fa-solid fa-heart icon-heart"
                alert.innerHTML = alertAddHTML;
                alertModal()
            }
        }

        localStorage.setItem('favorites', JSON.stringify(listFavorites));
        isFavorited = !isFavorited;
    });
        
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
