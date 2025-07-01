<template>
  <!-- Imagen de la Ruta -->
  <div class="w-100 vh-100 position-relative">
    <div
      class="map-image w-100 h-100"
      style="background-image: url('/ruta.jpg');"
    ></div>

    <!-- Botón para ampliar imagen -->
    <div class="position-absolute bottom-0 end-0 m-3">
      <button
        class="btn btn-light btn-sm shadow"
        data-bs-toggle="modal"
        data-bs-target="#mapModal"
      >
        Ver en pantalla completa
      </button>
    </div>
  </div>

  <!-- Modal fullscreen -->
  <div
    class="modal fade"
    id="mapModal"
    tabindex="-1"
    aria-labelledby="mapModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-fullscreen">
      <div class="modal-content bg-dark">
        <div class="modal-header border-0">
          <h5 class="modal-title text-white">Mapa del recorrido</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Cerrar"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-center align-items-center">
          <img
            src="/ruta.jpg"
            alt="Mapa del recorrido"
            class="img-fluid rounded shadow"
            style="max-height: 90vh;"
          />
        </div>
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
          <p class="text-muted mb-0">Calle 5ta Con Carrera 25</p>
          <small class="text-muted">Hora: 2:30 p.m.</small>
        </div>

        <div class="card border-0 shadow-sm p-4 bg-light text-center">
          <div class="icon-circle bg-success text-white mx-auto mb-3">
            <i class="bi bi-geo-alt-fill fs-3"></i>
          </div>
          <h5 class="fw-bold">Llegada</h5>
          <p class="text-muted mb-0">Calle 5ta Con Carrera 25</p>
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
.map-image {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #f8f9fa;
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
