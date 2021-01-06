import { createApp } from "vue";

import router from "./router.js";
import store from "./store/index.js";
import App from "./App.vue";
import "./index.css";
import BaseEmoji from "./components/base/BaseEmoji.vue";
import BaseButton from "./components/base/BaseButton.vue";
import BaseSpinner from "./components/base/BaseSpinner.vue";

const app = createApp(App);

app.component("base-emoji", BaseEmoji);
app.component("base-button", BaseButton);
app.component("base-spinner", BaseSpinner);

app.use(router);
app.use(store);

app.mount("#app");
