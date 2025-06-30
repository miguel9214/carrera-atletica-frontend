<template>
  <div class="not-found d-flex flex-column align-items-center justify-content-center text-center text-white">
    <div class="container py-5">
      <h1 class="display-1 fw-bold">404</h1>
      <p class="lead mb-4">¡Uy! Página no encontrada</p>
      <p class="mb-4">Parece que la ruta que intentaste visitar no existe o fue movida.</p>
      <RouterLink to="/" class="btn btn-outline-light btn-lg">
        Volver al inicio
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  background: linear-gradient(rgba(15, 26, 110, 0.9), rgba(15, 26, 110, 0.9)),
    url('/banner.jpg') center center / cover no-repeat;
}
</style>
