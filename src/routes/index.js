import { createRouter, createWebHistory } from 'vue-router';
import FrontEndRoutes  from "@routes/frontend/index.js";
import AdminRoutes from "@routes/backend/index.js";
let allRoutes = [];

const routes = allRoutes.concat(FrontEndRoutes,AdminRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes:routes
});

export default router