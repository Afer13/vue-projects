import { createApp } from 'vue'
import App from './App.vue';

import mix from './mix';

const app = createApp(App)

app.config.globalProperties.$globalData=mix;

app.mount('#app');
