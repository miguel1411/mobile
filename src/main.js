import { createApp } from "vue";
import { createPinia } from 'pinia'
import { session } from "@/utils/session";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Utilización de axios
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App);

const instance = axios.create({
  baseURL: 'https://demo.factura123.mx/api/v2',
  headers: {
    "X-Unique":"2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824",
    "Content-Type": "application/json",
    "X-Token" : session.get(),
  },
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      let auth = session.get();
      if (auth) {
        session.remove();
      }
      router.replace({ path: '/login', replace: true });
    }
    return Promise.reject(error);
  }
  );
  
app.use(createPinia())
app.use(VueAxios, instance);
app.use(router);


app.mount("#app");
