import pokemonApi from "../api/pokemonApi";
import type { Pokemon, PokemonResponse } from "../interfaces";



export const getPokemon = async (idPokemon: string): Promise<Pokemon> => {

    const { data } = await pokemonApi.get<PokemonResponse>(`/pokemon/${idPokemon}`)

    const { name, id, sprites} = data

    const pokemonPromise = {
        id,
        name,
        frontSprite: sprites.front_default
    }
    
    const pokemon = await Promise.resolve(pokemonPromise)
    return pokemon

}