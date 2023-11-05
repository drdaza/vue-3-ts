import { useQuery } from "@tanstack/vue-query"
import { getPokemon } from "../helpers/getPokemon"



export const usePokemon = (id:string) => {
    const { isLoading, data: pokemon, isError, error } = useQuery(
        {
            queryKey: ['pokemon', id],
            queryFn: () => getPokemon(id),
        }
    ) 

    return {
        pokemon,
        isLoading,
        isError,
        error,

    }
}