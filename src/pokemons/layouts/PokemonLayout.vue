<script setup lang="ts">
import NavBar from '@/shared/components/NavBar.vue';
import type { RouterLink } from '@/router/routes';

import { pokemonRoute } from '../router';

let routerLinks: RouterLink[]

routerLinks = pokemonRoute.children?.map(({name, path, props}) => {
    const {title, visible} = props as { title: string, visible: boolean}
    const routeToReturn: RouterLink = 
    {
        name: name?.toString() ?? '', 
        path, 
        title,
        visible
    }
    return routeToReturn
}) || []

</script>
<template>
    <div>
        <h1> Pokemon Layout</h1>
        <NavBar :links="routerLinks" :isSecondary="true"/>
        <!-- <Suspense>
            <template #fallback>
                Loading...
            </template>
        </Suspense> -->
        <RouterView/>
    </div>
</template>
<style lang="scss">
    
</style>