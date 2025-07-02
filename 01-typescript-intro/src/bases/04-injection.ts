import type { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiFetchAdapter, PokemonApiAdapter, type HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {
    get imageUrl(): string {
        return `https://pokemon.com/${this.id}.png`;
    }

    constructor(
        public readonly id: number,
        public name: string,
        public age: number,

        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(): Promise<Move[]> {
        const  data  = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);

        return data.moves;
    }
}

const pokeApiAxios = new PokemonApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const charmander = new Pokemon(4, 'Charmander', 10, pokeApiAxios);
export const pikachu = new Pokemon(25, 'Pikachu', 10, pokeApiFetch);

charmander.getMoves();
pikachu.getMoves();