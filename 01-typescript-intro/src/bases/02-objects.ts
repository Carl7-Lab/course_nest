export const pokemonIds = [1, 20, 30, 34, 66];

export interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    age: 10
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander'
}

export const pokemons: Pokemon[] = [];

pokemons.push(bulbasaur);
pokemons.push(charmander);

console.log(pokemons);