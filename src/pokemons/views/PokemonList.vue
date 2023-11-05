<script setup lang="ts">


import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';
// import { getPokemons } from '../helpers/getPokemons';
// import { computed } from 'vue';


const { count, pokemons, isLoading, isError, error } = usePokemons()





</script>
<template>
    <div  v-if="isLoading">
        <h1>Loading....</h1>
    </div>
    <div class="card-list-container" v-else-if="!isError">
        <h1>Pokemon List - {{ count }}</h1>
        <PokemonCardList 
            :pokemons="pokemons ?? []"
        />
    </div>
    <div v-else>
        <h1>{{ error }}</h1>
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