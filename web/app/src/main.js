import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
console.log('El valor de NODE_ENV es:', process.env.NODE_ENV);
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
