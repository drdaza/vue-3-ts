<script setup lang="ts">
import { ref } from 'vue'


let counter = ref(10)

const increaseCounter = () => {
    counter.value++
}
</script>
<template>
    <h1>{{counter}}</h1>
    <button @click="increaseCounter">+1</button>
</template>