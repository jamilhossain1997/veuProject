import './bootstrap';
import { createApp } from 'vue';
import app from './Page/app.vue';
import router from './index'

createApp(app).use(router).mount("#app")
