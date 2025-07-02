import { createRouter, createWebHistory } from 'vue-router'

// Públicas
import HomeView           from '@/views/HomeView.vue'
import RegisterView       from '@/views/RegisterView.vue'
import KitView            from '@/views/KitView.vue'
import CategoryView       from '@/views/CategoryView.vue'
import RouteView          from '@/views/RouteView.vue'
import NotFound           from '@/views/NotFound.vue'

// Administración (ahora en views/admin/)
import AdminLoginView     from '@/views/admin/LoginView.vue'
import AdminRegisterView  from '@/views/admin/RegisterView.vue'
import AdminDashboardView from '@/views/admin/DashboardView.vue'
import AdminCategoriesView from '@/views/admin/CategoriesView.vue'
import AdminCategoryForm  from '@/views/admin/CategoryForm.vue'
import AdminStatsView      from '@/views/admin/StatsView.vue'

const routes = [
  // — Públicas —
  { path: '/',            name: 'Home',       component: HomeView },
  { path: '/register',    name: 'Register',   component: RegisterView },
  { path: '/kit',         name: 'Kit',        component: KitView },
  { path: '/categorias',  name: 'Categories', component: CategoryView },
  { path: '/ruta',        name: 'Route',      component: RouteView },

  // — Admin (guest) —
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLoginView,
    meta: { guest: true }
  },
  {
    path: '/admin/register',
    name: 'AdminRegister',
    component: AdminRegisterView,
    meta: { requiresAuth: true }
  },

  // — Dashboard admin —
  {
    path: '/admin',
    name: 'AdminDashboard',
    component: AdminDashboardView,
    meta: { requiresAuth: true }
  },

  // — CRUD Categorías (Admin) —
  {
    path: '/admin/categories',
    name: 'AdminCategories',
    component: AdminCategoriesView,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/categories/create',
    name: 'AdminCategoryCreate',
    component: AdminCategoryForm,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/categories/:id/edit',
    name: 'AdminCategoryEdit',
    component: AdminCategoryForm,
    props: true,
    meta: { requiresAuth: true }
  },

  // — Estadísticas y Reportes (Admin) —
  {
    path: '/admin/stats',
    name: 'AdminStats',
    component: AdminStatsView,
    meta: { requiresAuth: true }
  },

  // — Catch-all 404 —
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Guard global de autenticación
router.beforeEach((to) => {
  const token = localStorage.getItem('access_token')
  if (to.meta.requiresAuth && !token)      return { name: 'AdminLogin' }
  if (to.meta.guest && token)              return { name: 'AdminDashboard' }
})

export default router
