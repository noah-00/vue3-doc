import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import ComponentGlobal from "./components/ComponentsInDepth/ComponentGlobal.vue";
import VFocus from "@/reuse/customDirectives/VFocus";

const app = createApp(App);

app.component("ComponentGlobal", ComponentGlobal);

// Register a global custom directive called `v-focus`
// <input type="text" v-focus />
app.directive("focus", VFocus);

app.mount("#app");
