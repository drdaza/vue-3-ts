<script setup lang="ts">
// import { COUNTER_VIEW } from '@/router/routes'
import type { RouterLink } from '@/router/routes';
// Forma de declarar props con interfaces y el define props
interface interfaceProps {
  title?: string,
  links: RouterLink[],
  isSecondary?: boolean
}

const props = withDefaults( defineProps<interfaceProps>(),
{
  title: 'CompoApp',
  links: () => [],
  isSecondary: false
});
// Forma de declarar props como un objeto donde defino sus atriburos directamente en el defineProps
// const props = defineProps({
//   title: {
//     type: String,
//     default: 'CompoApp',
//     required: true 
//   },
//   links: {
//     type: RouterLink[],

//   }
// })
</script>
<template>
      <nav class="nav-bar-basic-style">
        <template v-if="!isSecondary">
          <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="30" height="30" />
          <span>{{title}}</span>
        </template>
        
        <RouterLink v-for="link of props.links" 
          :key="link.name" 
          :to="link.path">
          {{ link.title }}
        </RouterLink>
        <!-- <RouterLink to="/about">About</RouterLink> -->
        <!-- <RouterLink :to="COUNTER_VIEW.path">{{COUNTER_VIEW.title}}</RouterLink> -->
        
      </nav>

</template>
<style lang="scss" scoped>
.nav-bar-basic-style {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>