import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import aiaComponents from "@aia/components";

const app = createApp(App);
app.use(aiaComponents);
app.mount("#app");
