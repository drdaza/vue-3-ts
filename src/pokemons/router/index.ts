import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons' 

export const pokemonRoute: RouteRecordRaw = {
    path: `/${ ROUTE_NAME }`,
    redirect: `/${ROUTE_NAME}/list`,
    name: ROUTE_NAME,
    component: () => import('@/pokemons/layouts/PokemonLayout.vue'),
    children: [
        {
            path: `/${ROUTE_NAME}/by/:id`,
            props: {title: 'Pokemon by id'},
            name: 'pokemonById',
            component: () => import('@/pokemons/views/PokemonById.vue')
        },
        {
            path: `/${ROUTE_NAME}/list`,
            props: {title: 'Pokemons List'},
            name: 'pokemonList',
            component: () => import('@/pokemons/views/PokemonList.vue')
        },
        {
            path: `/${ROUTE_NAME}/list-native`,
            props: {title: 'Pokemons List Native'},
            name: 'pokemonListNative',
            component: () => import('@/pokemons/views/PokemonListNative.vue')
        },
        {
            path: `/${ROUTE_NAME}/search`,
            props: {title: 'Pokemons search'},
            name: 'pokemonSearch',
            component: () => import('@/pokemons/views/PokemonSearch.vue')
        }
    ]
}