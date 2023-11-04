<script lang="ts" setup>
import type { Pokemon } from '../interfaces';
interface Props {
    pokemon: Pokemon
}
defineProps<Props>()
</script>
<template>
    <div class="card-detail">
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.frontSprite" :alt="pokemon.name">
    </div>
</template>
<style lang="scss" scoped>
    .card-detail {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
</style>