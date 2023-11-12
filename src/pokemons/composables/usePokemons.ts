import { computed, watchEffect } from 'vue'
import { useQuery } from "@tanstack/vue-query";
import { initialPokemons } from '@/pokemons/data/initialPokemons'

import { getPokemons } from '../helpers/getPokemons';
// import type { Pokemon } from '../interfaces';

// const pokemons = ref<Pokemon[]>([])
// const isLoading = ref(true)

export const usePokemons = () => {
    

    const { isLoading, data:pokemons, isError, error} = useQuery({
      queryKey: ['pokemons'],
      queryFn: getPokemons,
      retry: 1,
      initialData: initialPokemons
    })

    watchEffect(() => {
      // console.log('pokemons', isLoading.value);
      
    });


    return {
        pokemons,
        isLoading,
        isError,
        error,

        count: computed(()=> pokemons.value?.length ?? 0)
    }
}

// function watchEffect(arg0: () => void) {
// throw new Error('Function not implemented.');
// }
