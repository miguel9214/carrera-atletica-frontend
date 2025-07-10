<template>
  <div class="container py-5">
    <!-- Título -->
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color: var(--color-primary)">Kit del Participante</h2>
      <p class="lead text-muted">
        Todo lo que necesitas para vivir la experiencia atlética. Calidad, utilidad y estilo en un solo paquete.
      </p>
    </div>

    <!-- Tarjetas de elementos del kit -->
    <div class="row g-4 justify-content-center">
      <div
        v-for="item in kitItems"
        :key="item.title"
        class="col-6 col-md-4 col-lg-3"
      >
        <div class="card text-center h-100 border-0 shadow-sm kit-card">
          <div class="card-body">
            <div class="icon-box mb-3" :style="{ backgroundColor: item.color }">
              <i :class="item.icon" class="text-white fs-2"></i>
            </div>
            <h6 class="fw-bold">{{ item.title }}</h6>
            <p class="text-muted small">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Indumentaria para Hombre y Mujer -->
    <div class="row justify-content-center mt-5">
      <div class="col-lg-10">
        <div class="card border-0 shadow-sm p-4">
          <h4 class="text-center fw-bold mb-4" style="color: var(--color-dark)">
            Indumentaria Oficial
          </h4>
          <div class="row g-4">
            <div class="col-md-6 text-center">
              <img
                src="/indumentaria-hombre.jpg"
                alt="Indumentaria Hombre"
                class="img-fluid rounded shadow"
              />
              <p class="mt-2 fw-semibold">Modelo Hombre</p>
            </div>
            <div class="col-md-6 text-center">
              <img
                src="/indumentaria-mujer.jpg"
                alt="Indumentaria Mujer"
                class="img-fluid rounded shadow"
              />
              <p class="mt-2 fw-semibold">Modelo Mujer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Elementos destacados -->
    <div class="row justify-content-center mt-5">
      <div class="col-lg-10">
        <div class="card border-0 shadow-sm p-4">
          <div class="row g-4">
            <div class="col-md text-center">
              <img src="/tula.jpg" alt="Tula para hidratación" class="img-fluid rounded shadow" />
              <p class="mt-2 fw-semibold">Tula para llevar tu hidratación</p>
            </div>
          </div>

        </div>
      </div>
    </div>


    <!-- Botón de llamada a la acción -->
    <div class="text-center mt-5">
      <RouterLink to="/register" class="btn btn-lg btn-gradient px-4">
        ¡Inscríbete ahora!
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
const kitItems = [
  {
    title: 'Camiseta deportiva',
    description: 'Con el logo de la carrera, variedad de tallas.',
    icon: 'bi bi-person-lines-fill',
    color: 'var(--color-primary)',
  },
  {
    title: 'Medalla de participación',
    description: 'Recuerdo conmemorativo del evento.',
    icon: 'bi bi-award',
    color: 'var(--color-orange)',
  },
  {
    title: 'Número de corredor',
    description: 'Con chip o QR para control de tiempo.',
    icon: 'bi bi-hash',
    color: 'var(--color-magenta)',
  },
  {
    title: 'Hidratación',
    description: 'Botella de agua + bebida isotónica.',
    icon: 'bi bi-cup-straw',
    color: 'var(--color-accent)',
  },
  {
    title: 'Snacks',
    description: 'Fruta, barra energética o refrigerio.',
    icon: 'bi bi-basket',
    color: '#FFC107',
  },
  {
    title: 'Obsequios',
    description: 'Patrocinadores te sorprenderán.',
    icon: 'bi bi-gift',
    color: 'var(--color-dark)',
  },
]
</script>

<style scoped>
.kit-card {
  transition: transform 0.3s ease;
}
.kit-card:hover {
  transform: translateY(-5px);
}

.icon-box {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.card img {
  max-height: 280px;
  object-fit: contain;
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
