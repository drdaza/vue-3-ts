
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueQueryPlugin, type QueryObserverOptions } from "@tanstack/vue-query";
// import store from '@/storeVue/store';

import './assets/main.css'

// store.startLoadingPokemons()


const app = createApp(App)

type CustomQueryObserverOptions = QueryObserverOptions & { cacheTime: number };

const options: CustomQueryObserverOptions = {
  cacheTime: 1000*120,
  refetchOnReconnect: 'always',
};

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                ...options
            }
        }
    }
});
app.use(createPinia())
app.use(router)


app.mount('#app')
