<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';
import { useQueryClient } from '@tanstack/vue-query';

const route = useRoute()

const { id } = route.params

const queryClient = useQueryClient()

const { pokemon } = usePokemon(id.toString())

const invalidateQueries = () => {
    queryClient.invalidateQueries({ queryKey: ['pokemon', id] })
}
</script>
<template>
    <button @click="invalidateQueries">invalid queries</button>
    <div>
        <h1> Pokemon by id {{ id }}</h1>
        <h3>{{ pokemon?.name }}</h3>
        <img :src="pokemon?.frontSprite" alt="">
    </div>
</template>
<style lang="scss">
    
</style>