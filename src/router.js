import { createRouter, createWebHistory } from "vue-router";
import UserPage from "./pages/users/UserPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: UserPage },
    //{ path: '/test', component: null },
    //  { path: '', component: null },
  ],
});

export default router;
