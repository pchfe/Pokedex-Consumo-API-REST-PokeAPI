
# Pokédex - Consumo de API REST
Olá, devs! Acompanhe como foi construído este projeto de Pokédex consumindo a API da PokéAPI, disponibilizada gratuitamente para uso educacional.

Para este projeto, foram utilizadas tecnologias, como: HTML, CSS e JavaScript.

### Confira o projeto:
[Pokédex](https://pokedex-s.netlify.app/)

#### Link inicial:
https://pokeapi.co/api/v2/pokemon?offset=0&limit=10               
- Este link retorna uma lista de objetos encapsulados dentro dentro de um objeto. Cada objeto contém um nome e uma url que precisa ser acessada para obtenção de mais detalhes do pokemon.

- É preciso definir o **offset** e o **limit** antes de fazer a requisição. 
  -  O ***offset*** serve para definir a apartir de qual pokémon é interessante que seja retornado para a sua aplicação. Nessa ocasião, o offset foi definido com 0 (zero), isso retornará o primeiro pokémon da API.
  - O ***limit*** se trata de quantos pokemons você quer que seja retornado, de acordo com a necessidade da sua aplicação. Neste caso, o limit está definido como 10, ou seja, serão retornados 10 pokémons para a sua aplicação.

#### Trecho do código:
```javascript
pokeApi.getPokemons = async (offset = 0, limit = 10) => {
    ...código da requisição...
}
```

#### Link do primeiro Pokémon:       
https://pokeapi.co/api/v2/pokemon/1/
- Através desse link é possível acessar mais detalhes do pokémon. 

## Screenshots
![Lista de Pokémons - Desktop](https://github.com/pchfe/Pokedex-Consumo-API-REST-PokeAPI/blob/main/assets/ProjectImages/listPokemons.PNG)

![Detalhes do Pokémon - Desktop](https://github.com/pchfe/Pokedex-Consumo-API-REST-PokeAPI/blob/main/assets/ProjectImages/pokemonDetails.PNG)

![Lista de Pokémons - Mobile](https://github.com/pchfe/Pokedex-Consumo-API-REST-PokeAPI/blob/main/assets/ProjectImages/list_Pokemons_mobile.jpg)

![Detalhe do Pokémon - Mobile](https://github.com/pchfe/Pokedex-Consumo-API-REST-PokeAPI/blob/main/assets/ProjectImages/pokemon_detail_mobile.jpg)

## Licença

[MIT](https://choosealicense.com/licenses/mit/)


## Projeto desenvolvido por:
Patrick Chaves - Desenvolvedor de Software

## 🔗 Links
[![linkedin](https://www.linkedin.com/)](https://www.linkedin.com/in/pchfe)
[![instagram](https://www.instagram.com/pchfe/)](https://www.instagram.com/pchfe/)
