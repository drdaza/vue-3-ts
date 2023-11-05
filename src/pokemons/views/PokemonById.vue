<script setup lang="ts">
import { useRoute } from 'vue-router';
import { usePokemon } from '../composables/usePokemon';

const route = useRoute()

const { id } = route.params


const { pokemon } = usePokemon(id.toString())

</script>
<template>
    <div>
        <h1> Pokemon by id {{ id }}</h1>
        <h3>{{ pokemon?.name }}</h3>
    </div>
</template>
<style lang="scss">
    
</style>