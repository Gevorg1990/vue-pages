import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import documentJs from './document';
import i18n from './i18n';
import $ from 'jquery';
import Tooltip from "../tooltipPlugin";

// Attach jQuery to the global window object
window.$ = $;
window.jQuery = $;

// Ensure jQuery is attached before app mounting
const app = createApp(App);
app.use(documentJs);
app.use(store);
app.use(router);
app.use(i18n);
// app.use(Tooltip);

// Mount the app after ensuring global jQuery
app.mount('#app');
