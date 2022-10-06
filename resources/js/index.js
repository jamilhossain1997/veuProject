import { createWebHistory, createRouter } from "vue-router";
import app from "@/Page/Home.vue";
import About from "@/Page/About.vue";


const routes = [
    {
      path: "/",
      name: "Home",
      component: app,
    },
    {
        path: "/About",
        name: "About",
        component: About,
      }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;