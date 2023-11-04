import { computed, onMounted, ref } from 'vue'

import { getPokemons } from '../helpers/getPokemons';
import type { Pokemon } from '../interfaces';

const pokemons = ref<Pokemon[]>([])
const isLoading = ref(true)
export const usePokemons = () => {
    
    // if (pokemons.value.length === 0) {

    //     getPokemons().then(response =>{ 
    //         pokemons.value = response
    //         isLoading.value = false
    //     })

    // }
    onMounted(async () => {
        const data = await getPokemons()
        pokemons.value = data
        isLoading.value = false
    })

    // const loadPokemons = async () => {
        
    // }

    return {
        pokemons,
        isLoading,


        count: computed(()=> pokemons.value.length)
    }
}