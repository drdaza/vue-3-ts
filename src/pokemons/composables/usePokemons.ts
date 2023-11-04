import { computed } from 'vue'
import { useQuery } from "@tanstack/vue-query";

import { getPokemons } from '../helpers/getPokemons';
// import type { Pokemon } from '../interfaces';

// const pokemons = ref<Pokemon[]>([])
// const isLoading = ref(true)

export const usePokemons = () => {
    

    const { isLoading, data:pokemons, isError, error} = useQuery({
      queryKey: ['pokemons'],
      queryFn: getPokemons,
    })


    return {
        pokemons,
        isLoading,
        isError,
        error,

        count: computed(()=> pokemons.value?.length ?? 0)
    }
}