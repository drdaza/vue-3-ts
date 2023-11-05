<script setup lang="ts">
import store from '@/storeVue/store'
import PokemonCardList from '../components/PokemonCardList.vue';
import { getPokemons } from '../helpers/getPokemons';
import { useQuery } from '@tanstack/vue-query';


useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    select (response) {
        store.loadedPokemons(response)
    }
})



</script>
<template>
    <div  v-if="store.pokemons.isLoading">
        <h1>Loading....</h1>
    </div>
    <div class="card-list-container" v-else-if="!store.pokemons.isError">
        <h1>Pokemon List Native - {{ store.pokemons.count }}</h1>
        <PokemonCardList 
            :pokemons="store.pokemons.list ?? []"
        />
    </div>
    <div v-else>
        <h1>{{ store.pokemons.errorMessage }}</h1>
    </div>
    
    
</template>
<style lang="scss" scoped>
    .card-list-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>