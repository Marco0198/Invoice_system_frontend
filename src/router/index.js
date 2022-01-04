import Vue from "vue";
import VueRouter from "vue-router";
import Invoices from "../views/Invoices.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "invoices",
    component: Invoices,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  hash: false,
});

export default router;
