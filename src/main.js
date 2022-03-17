import { createApp } from 'vue';

import App from './App.vue';
import BaseButton from '@/components/ui/BaseButton';

import store from '@/store';

const app = createApp(App);

app.use(store);

app.component('base-button', BaseButton);

app.mount('#app');
