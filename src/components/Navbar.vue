<template>
  <nav class="navbar navbar-expand-lg shadow-sm sticky-top" :style="navbarStyle">
    <div class="container">
      <RouterLink class="navbar-brand fw-bold d-flex align-items-center" to="/">
        <img src="/logo.jpg" alt="Logo" height="40" class="me-2" />
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
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/">Inicio</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/register">Inscripción</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/kit">Kit</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/categorias">Categorías</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link text-white" to="/ruta">Ruta</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navbarStyle = {
  backgroundColor: 'var(--color-dark)',
}
</script>

<style scoped>
.nav-link:hover {
  color: var(--color-primary) !important;
  transition: color 0.2s ease-in-out;
}
</style>
