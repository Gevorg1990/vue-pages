import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import $ from 'jquery';
import documentJs from './document';
import i18n from './i18n';
import Tooltip from "../tooltipPlugin";

// Attach jQuery to the global window object
window.$ = $;
window.jQuery = $;

const app = createApp(App);
app.use(store);
app.use(router);
app.use(documentJs);
app.use(i18n);
// app.use(Tooltip);

app.mount('#app');
