import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// CSS
import "./assets/base.css";
import "./assets/main.css";

// PLUGIN
import veeValidatePlugin from "@/plugins/validation";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(veeValidatePlugin);

app.mount("#app");
