import { ref, createApp } from "vue";
import { createI18n } from 'vue-i18n';
import App from "./App.vue";
import en from "./locales/en.js";
import zh_CN from "./locales/zh_CN";
import zh_TW from "./locales/zh_TW";

const i18n = createI18n({
    local: 'en',
    fallbackLocale: 'en',
    legacy: false,
    messages: {
        en: en,
        zh_TW: zh_TW,
        zh_CN: zh_CN
    }
});
const app = createApp(App);
app.use(i18n);
app.mount('#app');
//createApp(App).mount("#app");
