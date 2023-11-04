import pokemonApi from "../api/pokemonApi";
import axios from 'axios'
// import { sleep } from './sleep'
// import type { Pokemon } from "../interfaces/pokemon";
// import type { PokemonListResponse } from "../interfaces/pokemonList.response";
import type { Pokemon, PokemonListResponse, PokemonResponse } from "../interfaces";

export const getPokemons = async (): Promise<Pokemon[]> => {

    // await sleep(3)
    
    const { data } = await pokemonApi.get<PokemonListResponse>('/pokemon?limit=151')
        // .then((response) => {
        //      console.log(response.data.results[0].name);
    
        // })
    const pokemonPromises: Promise<Pokemon>[] = [];
    for (const { url } of data.results) {
        const pokemonPromise = axios.get<PokemonResponse>(url).then(({ data }) => {
            return {
                id: data.id,
                name: data.name,
                frontSprite: data.sprites.front_default
            }
        })
        pokemonPromises.push(pokemonPromise)
    }

    const pokemons =  await Promise.all(pokemonPromises)
    return pokemons
}