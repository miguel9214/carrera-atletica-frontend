<template>
  <nav class="navbar navbar-expand-lg sticky-top nav-custom shadow-sm">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold d-flex align-items-center" to="/" @click="closeMenu">
        <img src="/logo.jpg" alt="Logo" height="40" class="me-2 rounded" />
        <span class="text-white">Carrera atletica</span>
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto text-uppercase">
          <li class="nav-item" v-for="(route, i) in routes" :key="i">
            <RouterLink class="nav-link nav-animated text-white px-3" :to="route.to" @click="closeMenu">
              {{ route.label }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Collapse } from 'bootstrap'

const routes = [
  { label: 'Inicio', to: '/' },
  { label: 'Inscripción', to: '/register' },
  { label: 'Kit', to: '/kit' },
  { label: 'Categorías', to: '/categorias' },
  { label: 'Ruta', to: '/ruta' },
]

function closeMenu() {
  const menu = document.getElementById('navbarNav')
  if (menu && menu.classList.contains('show')) {
    new Collapse(menu).hide()
  }
}
</script>

<style scoped>
.nav-custom {
  background: linear-gradient(90deg, var(--color-dark), var(--color-magenta));
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: var(--color-primary) !important;
  transition: all 0.3s ease-in-out;
}

.navbar-toggler-icon {
  filter: brightness(1000%);
}

.nav-animated {
  transition: transform 0.2s ease;
}
.nav-animated:hover {
  transform: scale(1.05);
}
</style>
