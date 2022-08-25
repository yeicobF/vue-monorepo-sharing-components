import "./style.css";
import * as components from "./components/index.js";

export default {
  install: (app, options) => {
    console.log(components);
    Object.values(components).forEach((component) => {
      console.log(component);
      console.log(component.__name);
      app.component(component.__name, component);
    });
  },
};
