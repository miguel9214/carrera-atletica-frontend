<template>
  <!-- Mapa en pantalla completa -->
  <div class="w-100 vh-100 position-relative">
    <div class="map-container w-100 h-100 bg-light d-flex align-items-center justify-content-center">
      <div class="text-center">
        <i class="bi bi-map display-1 text-muted"></i>
        <p class="text-muted">Aquí se mostrará el mapa del recorrido</p>
        <small class="text-muted">*Disponible próximamente</small>
      </div>
    </div>
  </div>

  <!-- Contenido debajo del mapa -->
  <div class="container py-5">
    <div class="row g-5">
      <!-- Columna Afiche -->
      <div class="col-lg-6 text-center">
        <img src="/afiche.jpg" alt="Afiche carrera" class="img-fluid rounded shadow" style="max-height: 650px;" />
      </div>

      <!-- Columna Info de Salida y Llegada -->
      <div class="col-lg-6 d-flex flex-column justify-content-center">
        <h3 class="fw-bold text-primary mb-4 text-center">Puntos de la Carrera</h3>

        <div class="card border-0 shadow-sm p-4 mb-4 bg-light text-center">
          <div class="icon-circle bg-primary text-white mx-auto mb-3">
            <i class="bi bi-flag-fill fs-3"></i>
          </div>
          <h5 class="fw-bold">Salida</h5>
          <p class="text-muted mb-0">Parque Principal de Aguachica</p>
          <small class="text-muted">Hora: 6:30 a.m.</small>
        </div>

        <div class="card border-0 shadow-sm p-4 bg-light text-center">
          <div class="icon-circle bg-success text-white mx-auto mb-3">
            <i class="bi bi-geo-alt-fill fs-3"></i>
          </div>
          <h5 class="fw-bold">Llegada</h5>
          <p class="text-muted mb-0">Frente al Coliseo Cubierto</p>
          <small class="text-muted">Premiación al finalizar la carrera</small>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-5">
      <RouterLink to="/register" class="btn btn-gradient btn-lg px-5">
        ¡Inscribirme ahora!
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.map-container {
  background: linear-gradient(135deg, #f3f4f6, #e9ecef);
}
.icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-gradient {
  background: linear-gradient(90deg, var(--color-primary), var(--color-magenta));
  border: none;
  color: white;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, var(--color-magenta), var(--color-primary));
}
</style>
