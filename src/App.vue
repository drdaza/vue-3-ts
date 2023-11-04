<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './shared/components/NavBar.vue';
import { routeLinks } from './router/routes';
</script>

<template>

  <NavBar :title="'Pokemon Api'" :links="routeLinks"/>
  <RouterView />
</template>

<style scoped>
</style>
