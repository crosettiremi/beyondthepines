import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'
import Home from '../pages/Home.vue'
import Info from '../pages/Info.vue'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/info',
		name: 'Info',
		component: Info,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
