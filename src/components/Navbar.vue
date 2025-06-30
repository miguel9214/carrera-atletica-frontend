<template>
  <nav class="navbar navbar-expand-lg shadow-sm sticky-top" :style="navbarStyle">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold d-flex align-items-center" to="/" @click="closeMenu">
        <img src="/logo.jpg" alt="Logo" height="40" class="me-2" />
        <span class="text-white">Carrera atlética</span>
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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/" @click="closeMenu">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/register" @click="closeMenu">Inscripción</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/kit" @click="closeMenu">Kit</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/categorias" @click="closeMenu">Categorías</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/ruta" @click="closeMenu">Ruta</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Collapse } from 'bootstrap'

function closeMenu() {
  const menu = document.getElementById('navbarNav')
  if (menu && menu.classList.contains('show')) {
    new Collapse(menu).hide()
  }
}

const navbarStyle = {
  backgroundColor: 'var(--color-dark)',
}
</script>

<style scoped>
.nav-link:hover {
  color: var(--color-primary) !important;
  transition: color 0.2s ease-in-out;
}

/* Forzar ícono hamburguesa en blanco */
.navbar-toggler-icon {
  filter: brightness(1000%);
}
</style>
