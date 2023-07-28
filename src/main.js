import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus';
import * as ElIcons from '@element-plus/icons';
import 'element-plus/theme-chalk/index.css';
import axios from 'axios';

const app = createApp(App)
axios.defaults.baseURL = 'https://a811-2409-8900-24c1-82da-20fe-95bd-6598-8a97.ngrok-free.app'
app.config.globalProperties.$axios = axios;

for (const name in ElIcons){
	app.component(name, ElIcons[name])
}

app.use(router).use(ElementPlus).use(store).mount('#app');
