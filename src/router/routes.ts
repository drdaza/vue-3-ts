// export const COUNTER_VIEW= {
//     name: 'counterView',
//     path: '/counter-view',
//     title: 'Counter'
// }
export interface RouterLink {
    name: string,
    path: string,
    title: string,
    visible: boolean
}
export const routeLinks: RouterLink[] = [
    {
        name: 'counterView',
        path: '/counter',
        title: 'Counter',
        visible: true
    },
    {
        name: 'homeView',
        path: '/', 
        title: 'Home',
        visible: true
    },
    {
        name: 'PokemonsView',
        path: '/pokemons', 
        title: 'Pokemons',
        visible: true
    },
    {
        name: 'AboutView',
        path: '/about',
        title: 'About',
        visible: true
    }
]
