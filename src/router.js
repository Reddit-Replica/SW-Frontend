import { createRouter, createWebHistory } from "vue-router";
import UserPage from "./pages/users/UserPage.vue";
import ForgetPassword from './components/forget/ForgetPassword.vue'
import ForgetUsername from './components/forget/ForgetUsername'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: UserPage },
    { path: '/forgetPassword', component: ForgetPassword },
    { path: '/forgetUsername', component: ForgetUsername},
    //  { path: '', component: null },
  ],
});

export default router;
