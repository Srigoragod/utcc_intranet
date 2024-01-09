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
            path: '/:id' ,
            name: 'defaultID',
            component: () => import('../Page/Home.vue')
        },
        {
            path: '/formsdocument',
            name: 'form',
            component: () => import('../Page/FomsAndDocuments.vue')
        },
    ]
})

export default router
