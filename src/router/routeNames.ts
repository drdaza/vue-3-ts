import type { RouterLink } from "./routes"

export const COUNTER_VIEW:RouterLink = {
    name: 'counterView',
    path: '/counter',
    title: 'Counter'
}
export const HOME_VIEW:RouterLink = {
    name: 'homeView',
    path: '/',
    title: 'Home'
}
export const ABOUT_VIEW:RouterLink = {
    name: 'AboutView',
    path: '/about',
    title: 'About'
}