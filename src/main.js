import { createApp } from "vue";

import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";
import "./index.css";
import BaseEmoji from "./components/ui/BaseEmoji.vue";
import BaseButton from "./components/ui/BaseButton.vue";

const app = createApp(App);

app.component("base-emoji", BaseEmoji);
app.component("base-button", BaseButton);

app.use(router);
app.use(store);

app.mount("#app");
