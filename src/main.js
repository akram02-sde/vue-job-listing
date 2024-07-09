import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import router from './router';
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(router);
app.use(Toast);

app.mount('#app')
