<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces';
import { useQueryClient } from '@tanstack/vue-query';
import { getPokemon } from '../helpers/getPokemon';
// import pokemonApi from '../api/pokemonApi';
interface Props {
    pokemon: Pokemon
}
const props = defineProps<Props>()

const router = useRouter()

const queryClient = useQueryClient()

const goTo = () => {
    router.push({
        name: 'pokemonById',
        params: {
            id: props.pokemon.id
        }
    })
}

const preFetchPokemon = () => {
    const id = props.pokemon.id.toString()
    queryClient.prefetchQuery({
        queryKey: ['pokemon', id],
        queryFn: ()=> getPokemon(id)
    })    
}
</script>
<template>
    <div class="card-detail" @click="goTo" @mouseenter="preFetchPokemon">
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.frontSprite" :alt="pokemon.name">
    </div>
</template>
<style lang="scss" scoped>
    .card-detail {
        width: 30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>