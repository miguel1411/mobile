import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/facturar",
      name: "facturar",
      component: () => import("../views/facturar.vue"),
    },
    {
      path: "/clientes",
      name: "clientes",
      component: () => import("../views/clientes.vue"),
    },
    {
      path: "/cliente/:clienteId",
      name: "clienteModificar",
      component: () => import("../views/cliente/editar.vue"),
    },
    {
      path: "/cliente/crearCliente",
      name: "clienteCrear",
      component: () => import("../views/cliente/crear.vue"),
    },
    {
      path: "/productos",
      name: "productos",
      component: () => import("../views/productos.vue"),
    },
    {
      path: "/cfdi",
      name: "cfdi",
      component: () => import("../views/cfdi.vue"),
    },
    {
      path: "/pagos",
      name: "pagos",
      component: () => import("../views/pagos.vue"),
    },
    {
      path: "/cotizacion",
      name: "cotizacion",
      component: () => import("../views/cotizacion.vue"),
    },
    {
      path: "/configuracion",
      name: "configuracion",
      component: () => import("../views/configuracion.vue"),
    },
    {
      path: "/salir",
      name: "salir",
      component: () => import("../views/login.vue"),
    },
  ],
});

export default router;
