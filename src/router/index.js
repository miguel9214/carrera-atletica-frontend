import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import KitView from '@/views/KitView.vue'
import CategoryView from '@/views/CategoryView.vue'
import RouteView from '@/views/RouteView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/register', component: RegisterView },
  { path: '/kit', component: KitView },
  { path: '/categorias', component: CategoryView },
  { path: '/ruta', component: RouteView },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
