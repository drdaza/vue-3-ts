import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { VueQueryPlugin, type QueryObserverOptions } from "@tanstack/vue-query";


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
