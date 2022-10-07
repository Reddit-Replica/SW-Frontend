import { createRouter, createWebHistory } from 'vue-router';

// import the components that you will use will routing



const router = createRouter({
  history: createWebHistory,
  routes: [
    
      {  path: '/',redirect:'',},
      {  path: '/',component:'',},
      
      { path: '/r:notFound(.*)',component: null,}
        
      
    

  ],
});

export default router;
