<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color: var(--color-primary)">Categorías de Participación</h2>
      <p class="lead text-muted">Explora cada categoría con detalle y elige la que mejor se adapte a tu perfil. ¡Hay premios y emoción para todos!</p>
    </div>

    <div class="row g-4">
      <div v-for="categoria in categorias" :key="categoria.nombre" class="col-12 col-md-6 col-lg-6">
        <div class="card h-100 border-0 shadow-lg categoria-card">
          <div class="card-body d-flex flex-column">
            <div class="d-flex align-items-center mb-3">
              <div class="icon-circle flex-shrink-0 me-3" :style="{ backgroundColor: categoria.color }">
                <i :class="categoria.icono" class="text-white fs-3"></i>
              </div>
              <div>
                <h4 class="fw-bold mb-1" style="color: var(--color-dark)">{{ categoria.nombre }}</h4>
                <small class="text-muted">Edad: {{ categoria.edad }}</small>
              </div>
            </div>

            <p class="mb-3 text-muted">{{ categoria.descripcion }}</p>

            <div class="bg-light rounded p-3 mb-3">
              <strong>Distancia:</strong> {{ categoria.distancia }}<br />
              <span v-if="categoria.premios">
                <strong>Premiación:</strong><br />
                <span class="text-muted">{{ categoria.premios }}</span>
              </span>
            </div>

            <div class="mt-auto text-center">
              <RouterLink to="/register" class="btn btn-gradient w-100">Inscribirme</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categorias = [
  { nombre: 'Infantil', descripcion: 'Para niños de 10 a 11 años llenos de energía. Participan en una competencia corta pero significativa.', distancia: '500 m', edad: '10 a 11 años', premios: 'Premios para los 5 primeros lugares.', icono: 'bi bi-emoji-smile', color: '#6f42c1' },
  { nombre: 'Prejuvenil', descripcion: 'Ideal para preadolescentes con ganas de iniciarse en el deporte competitivo.', distancia: '800 m', edad: '12 a 14 años', premios: 'Premios para los 5 primeros lugares.', icono: 'bi bi-fire', color: '#20c997' },
  { nombre: 'Juvenil', descripcion: 'Competencia de 1 km para adolescentes que buscan desafiar sus límites.', distancia: '1 km', edad: '15 a 17 años', icono: 'bi bi-lightning', color: '#17a2b8' },
  { nombre: 'Élite Hombres', descripcion: 'Alta exigencia para corredores entrenados y competitivos.', distancia: '10 km o 21 km', edad: '18 a 35 años', premios: '1° $2.000.000, 2° $1.200.000, 3° $800.000. Todos reciben medalla.', icono: 'bi bi-trophy', color: 'var(--color-orange)' },
  { nombre: 'Élite Mujeres', descripcion: 'Para mujeres corredoras profesionales. Exigen resistencia y velocidad.', distancia: '8 km', edad: '18 a 35 años', premios: '1° $1.200.000, 2° $900.000, 3° $500.000. Todas reciben medalla.', icono: 'bi bi-gem', color: '#e83e8c' },
  { nombre: 'Senior A (Hombres)', descripcion: 'Para hombres adultos con excelente condición física.', distancia: '6 km', edad: '36 a 42 años', premios: '1° $800.000, 2° $500.000, 3° $300.000. Todos reciben medalla.', icono: 'bi bi-person', color: '#6610f2' },
  { nombre: 'Senior B (Hombres)', descripcion: 'Dirigida a corredores experimentados.', distancia: '6 km', edad: '43 a 50 años', premios: '1° $800.000, 2° $500.000, 3° $300.000. Todos reciben medalla.', icono: 'bi bi-person-circle', color: '#fd7e14' },
  { nombre: 'Senior C (Hombres)', descripcion: 'Para veteranos del running.', distancia: '6 km', edad: '51 años en adelante', premios: '1° $800.000, 2° $500.000, 3° $300.000. Todos reciben medalla.', icono: 'bi bi-person-vcard', color: '#198754' },
  { nombre: 'Senior A (Mujer)', descripcion: 'Competencia para mujeres en gran forma física.', distancia: '6 km', edad: '36 a 42 años', premios: '1° $800.000, 2° $500.000, 3° $300.000. Todas reciben medalla.', icono: 'bi bi-gender-female', color: '#ff66b3' },
  { nombre: 'Senior B (Mujer)', descripcion: 'Atletas femeninas con experiencia.', distancia: '6 km', edad: '43 a 50 años', premios: '1° $800.000, 2° $500.000, 3° $300.000. Todas reciben medalla.', icono: 'bi bi-flower1', color: '#ff99cc' },
  { nombre: 'Senior C (Mujer)', descripcion: 'Mujeres veteranas que siguen dejando huella.', distancia: '6 km', edad: '51 años en adelante', premios: '1° $800.000, 2° $500.000, 3° $300.000. Todas reciben medalla.', icono: 'bi bi-heart-pulse', color: '#ffb3d9' },
  { nombre: 'Personas con discapacidad', descripcion: 'Carrera inclusiva con reconocimiento especial. Una sola categoría para hombres y mujeres.', distancia: 'Por definir', edad: 'Todas las edades', premios: 'Todos reciben medalla y reconocimiento.', icono: 'bi bi-universal-access', color: '#6c757d' },
]
</script>

<style scoped>
.categoria-card {
  transition: transform 0.3s ease;
  background-color: #fff;
  border-radius: 1rem;
}
.categoria-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
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
