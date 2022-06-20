import { createApp } from 'vue';
import App from './App.vue';

import 'devextreme/dist/css/dx.light.css';
import 'devexpress-dashboard/dist/css/dx-dashboard.light.css';
import '@devexpress/analytics-core/dist/css/dx-analytics.light.css';
import '@devexpress/analytics-core/dist/css/dx-querybuilder.css';

import router from './router';

createApp(App).use(router).mount('#app');
