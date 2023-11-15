import { createApp } from 'vue'
import router from "./router/index";
import pinia from './store/store';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '@/styles/reset.scss';

import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount("#app");