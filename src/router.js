import { createRouter, createWebHistory } from "vue-router";
import TheMain from "./components/TheMain.vue";
import ForgetUsername from './components/forget/ForgetUsername.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    { path: "/main", component: TheMain },
    { path: '/forgetUsername', component:ForgetUsername  },
    //{ path: '/forgetPassword', component:  },
    //  { path: '', component: null },
  ],
});

export default router;
