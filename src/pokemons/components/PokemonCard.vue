<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { Pokemon } from '../interfaces';
// import pokemonApi from '../api/pokemonApi';
interface Props {
    pokemon: Pokemon
}
const props = defineProps<Props>()

const router = useRouter()

const goTo = () => {
    router.push({
        name: 'pokemonById',
        params: {
            id: props.pokemon.id
        }
    })
}
</script>
<template>
    <div class="card-detail" @click="goTo">
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