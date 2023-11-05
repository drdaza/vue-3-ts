import { reactive } from 'vue'
import type { Pokemon }  from '../pokemons/interfaces'

interface store {
    // State
    pokemons: {
    list: Pokemon[],
    count: number,
    isLoading: boolean,
    isError: boolean,
    errorMessage?: string
    },

    // Actions 
    startLoadingPokemons: () =>  Promise<void>,
    loadedPokemons: (data: Pokemon[]) => void,
    loadPokemonsFailed: (error: string) => void
}


const store = reactive<store>({
    pokemons: {
    list: [],
    count: 0,
    isLoading: false,
    isError: false,
    errorMessage: ''
    },
    startLoadingPokemons: async  function (): Promise<void> {
    // throw new Error('Function not implemented.')
        this.pokemons = {
            ...this.pokemons,
            isLoading: true,
            isError: false,
            errorMessage: ''
        }
    },
    loadedPokemons: function (data: Pokemon[]): void {
    // throw new Error('Function not implemented.')
       this.pokemons = {

        list: data,
        count: data.length,
        isLoading: false,
        isError: false,
        errorMessage: ''
       }
        
    },
    loadPokemonsFailed: function (error: string): void {
    // throw new Error('Function not implemented.')
    this.pokemons = {
        ...this.pokemons,
        isLoading: false,
        isError: true,
        errorMessage: error
    }
    }
})

export default store