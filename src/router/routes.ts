// export const COUNTER_VIEW= {
//     name: 'counterView',
//     path: '/counter-view',
//     title: 'Counter'
// }
export interface RouterLink {
    name: string,
    path: string,
    title: string
}
export const routeLinks: RouterLink[] = [
    {
        name: 'counterView',
        path: '/counter',
        title: 'Counter'
    },
    {
        name: 'homeView',
        path: '/', 
        title: 'Home'
    },
    {
        name: 'PokemonsView',
        path: '/pokemons', 
        title: 'Pokemons'
    },
    {
        name: 'AboutView',
        path: '/about',
        title: 'About'
    }
]
