<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color: var(--color-primary)">Categorías de Participación</h2>
      <p class="lead text-muted">Escoge la categoría adecuada según tu edad y nivel. ¡Todos pueden participar!</p>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
      <div v-for="categoria in categorias" :key="categoria.nombre">
        <div class="card h-100 border-0 shadow categoria-card">
          <div class="card-body text-center d-flex flex-column justify-content-between">
            <div>
              <div class="icon-circle mb-3" :style="{ backgroundColor: categoria.color }">
                <i :class="categoria.icono" class="text-white fs-3"></i>
              </div>
              <h5 class="fw-bold" style="color: var(--color-dark)">{{ categoria.nombre }}</h5>
              <p class="text-muted small">{{ categoria.descripcion }}</p>
            </div>
            <div class="mt-3">
              <span class="badge text-white px-3 py-2" :style="{ backgroundColor: categoria.color }">
                Distancia: {{ categoria.distancia }}
              </span>
              <div class="edad-range mt-2 text-muted small">{{ categoria.edad }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-center mt-5">
      <RouterLink to="/register" class="btn btn-gradient btn-lg px-4">
        ¡Inscribirme ahora!
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const categorias = [
  {
    nombre: 'Recreativa',
    descripcion: 'Ambiente familiar sin presión. Ideal para disfrutar del evento con alegría.',
    distancia: '3 km',
    edad: 'Mayores de 14 años',
    icono: 'bi bi-emoji-smile',
    color: 'var(--color-accent)',
  },
  {
    nombre: 'Juvenil',
    descripcion: 'Para jóvenes con energía y ganas de competir sanamente.',
    distancia: '5 km',
    edad: 'De 14 a 17 años',
    icono: 'bi bi-lightning',
    color: '#17a2b8',
  },
  {
    nombre: 'Élite',
    descripcion: 'Alta exigencia para corredores entrenados y competitivos.',
    distancia: '10 o 21 km',
    edad: 'De 18 a 39 años',
    icono: 'bi bi-trophy',
    color: 'var(--color-orange)',
  },
  {
    nombre: 'Máster',
    descripcion: 'Atletas experimentados que dominan la resistencia.',
    distancia: '10 o 21 km',
    edad: 'Desde 40 años en adelante',
    icono: 'bi bi-person-bounding-box',
    color: 'var(--color-magenta)',
  },
]
</script>

<style scoped>
.categoria-card {
  transition: transform 0.3s ease;
  background-color: #fff;
}
.categoria-card:hover {
  transform: translateY(-5px);
}

.icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-flex;
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
