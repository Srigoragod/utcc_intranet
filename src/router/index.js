import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'default',
            component: () => import('../Page/Home.vue')
        },
        {
            path: '/document',
            name: 'form',
            component: () => import('../Page/FomsAndDocuments.vue')
        },
    ]
})

export default router
