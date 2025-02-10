import { createRouter, createWebHistory, } from 'vue-router'


const routes = [
    {
        path: '/upLoadFile',
        component: () => import('@/views/functional/UpLoadFile.vue')
    },
    {
        path: '/upLoadFileWebSocket',
        component: () => import('@/views/functional/UpLoadFileWebSocket.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;

