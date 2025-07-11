<template>
  <aside class="sidebar d-flex flex-column p-3">
    <h4 class="text-white mb-4">Admin Panel</h4>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item mb-2">
        <RouterLink to="/admin" class="nav-link text-white" exact-active-class="active">
          <i class="bi bi-speedometer2 me-2"></i>
          Inicio
        </RouterLink>
      </li>
      <li class="nav-item mb-2">
        <RouterLink to="/admin/categories" class="nav-link text-white" exact-active-class="active">
          <i class="bi bi-tags me-2"></i>
          Categorías
        </RouterLink>
      </li>
      <li class="nav-item mb-2">
        <RouterLink to="/admin/registrations" class="nav-link text-white" exact-active-class="active">
          <i class="bi bi-people-fill me-2"></i>
          Inscripciones
        </RouterLink>
      </li>
      <li class="nav-item mb-2">
        <RouterLink to="/admin/stats" class="nav-link text-white" exact-active-class="active">
          <i class="bi bi-bar-chart-line-fill me-2"></i>
          Estadísticas
        </RouterLink>
      </li>
      <li class="nav-item mt-auto">
        <button @click="handleLogout" class="btn btn-outline-light w-100">
          <i class="bi bi-box-arrow-right me-2"></i>
          Cerrar sesión
        </button>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useApi } from '@/composables/useApi'
import Swal from 'sweetalert2'

const router = useRouter()

async function handleLogout() {
  try {
    await useApi('admin/logout', 'POST')
    localStorage.removeItem('access_token')
    router.push({ name: 'AdminLogin' })
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No se pudo cerrar sesión. Intenta de nuevo.',
    })
  }
}
</script>

<style scoped>
.sidebar {
  width: 240px;
  background-color: var(--color-dark);
  min-height: 100vh;
}
.sidebar h4 {
  color: var(--color-light);
}
.nav-link {
  color: var(--color-light);
  transition: background-color 0.2s ease;
}
.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.nav-link.active {
  background-color: var(--color-primary);
  color: white;
}
.btn-outline-light {
  color: white;
  border-color: rgba(255,255,255,0.6);
}
.btn-outline-light:hover {
  background-color: rgba(255,255,255,0.1);
}
</style>
