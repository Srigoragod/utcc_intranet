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
        name: '',
            component: () => import('../Page/FomsAndDocuments.vue')
        },
        {
            path: '/department',
            name: 'department',
            component: () => import('../Page/Department.vue')
        },
        {
            path: '/:catchAll(.*)',
            component: () => import('../page/Static/NotFound.vue'),
        }
    ]
})

export default router
