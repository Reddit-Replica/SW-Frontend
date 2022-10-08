import { createRouter, createWebHistory } from "vue-router";
import TheMain from "./components/TheMain.vue";
import ForgetUsername from './components/forget/ForgetUsername.vue'
import ForgetPassword from './components/forget/ForgetPassword'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: TheMain },
    { path: '/forgetUsername', component:ForgetUsername  },
    { path: '/forgetPassword', component:ForgetPassword  },
    //  { path: '', component: null },
  ],
});

export default router;
