import { createRouter, createWebHistory } from "vue-router";
import TheMain from "./components/TheMain.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: TheMain },
    //{ path: '/test', component: null },
    //  { path: '', component: null },
  ],
});

export default router;
