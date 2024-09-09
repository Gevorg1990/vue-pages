import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import $ from 'jquery';
import Tooltip from '../tooltipPlugin';
// import documentJs from './document'; // Ensure the path is correct

// Attach jQuery to the global window object
window.$ = $;
window.jQuery = $;

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Tooltip);
// app.use(documentJs); // Uncomment if you have the documentJs plugin available
app.use(i18n);

app.mount('#app');
