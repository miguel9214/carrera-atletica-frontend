// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'

// Públicas
import HomeView             from '@/views/HomeView.vue'
import RegisterView         from '@/views/RegisterView.vue'
import KitView              from '@/views/KitView.vue'
import CategoryView         from '@/views/CategoryView.vue'
import RouteView            from '@/views/RouteView.vue'
import SponsorsView         from '@/views/SponsorsView.vue'
import NotFound             from '@/views/NotFound.vue'

// Administración (ahora en views/admin/)
import AdminLoginView       from '@/views/admin/LoginView.vue'
import AdminRegisterView    from '@/views/admin/RegisterView.vue'
import AdminDashboardView   from '@/views/admin/DashboardView.vue'
import AdminHomeView        from '@/views/admin/HomeView.vue'           // <— componente de bienvenida
import AdminCategoriesView  from '@/views/admin/CategoriesView.vue'
import AdminCategoryForm    from '@/views/admin/CategoryForm.vue'
import AdminRegistrationsView from '@/views/admin/RegistrationsView.vue'
import AdminStatsView       from '@/views/admin/StatsView.vue'

const routes = [
  // — Públicas —
  { path: '/',               name: 'Home',         component: HomeView },
  { path: '/register',       name: 'Register',     component: RegisterView },
  { path: '/kit',            name: 'Kit',          component: KitView },
  { path: '/categorias',     name: 'Categories',   component: CategoryView },
  { path: '/ruta',           name: 'Route',        component: RouteView },
  { path: '/patrocinadores', name: 'Sponsors',     component: SponsorsView },

  // — Admin (login & registro) —
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
    meta: { guest: true }
  },

  // — Panel Admin con Sidebar y vistas hijas —
  {
    path: '/admin',
    component: AdminDashboardView,
    meta: { requiresAuth: true },
    children: [
      // /admin → AdminHomeView
      {
        path: '',
        name: 'AdminHome',
        component: AdminHomeView
      },

      // CRUD Categorías
      {
        path: 'categories',
        name: 'AdminCategories',
        component: AdminCategoriesView
      },
      {
        path: 'categories/create',
        name: 'AdminCategoryCreate',
        component: AdminCategoryForm
      },
      {
        path: 'categories/:id/edit',
        name: 'AdminCategoryEdit',
        component: AdminCategoryForm,
        props: true
      },

      // Gestión de Inscripciones
      {
        path: 'registrations',
        name: 'AdminRegistrations',
        component: AdminRegistrationsView
      },

      // Estadísticas y Reportes
      {
        path: 'stats',
        name: 'AdminStats',
        component: AdminStatsView
      }
    ]
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
  if (to.meta.guest && token)              return { name: 'AdminCategories' }
})

export default router
