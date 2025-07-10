<template>
  <div class="container py-5">
    <!-- Título -->
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color: var(--color-primary)">Patrocinadores</h2>
      <p class="lead text-muted">Agradecemos a nuestros patrocinadores por hacer posible este evento.</p>
    </div>

    <!-- Grid de tarjetas -->
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      <div v-for="sponsor in sponsors" :key="sponsor.name" class="col">
        <div class="card h-100 shadow-sm sponsor-card border-0">
          <img
            :src="sponsor.image"
            :alt="sponsor.name"
            class="card-img-top sponsor-img"
          />
          <div class="card-body text-center">
            <h5 class="card-title">{{ sponsor.name }}</h5>
            <p class="card-text text-muted mb-3">{{ sponsor.description }}</p>
            <a
              :href="sponsor.whatsapp"
              target="_blank"
              rel="noopener"
              class="btn btn-whatsapp px-4"
            >
              <i class="bi bi-whatsapp me-2"></i>Contactar
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sponsors = ref([
  {
    name: 'HOTEL CALLE REAL',
    image: '/sponsors/hotelcallereal.jpg',
    description: 'Hotel con todas las comodidades para tu descanso antes y después de la carrera.',
    whatsapp: 'https://wa.me/message/4OLLNMWPF5GJF1'
  },
  {
    name: 'Deportes Rápidos',
    image: '/sponsors/deportes-rapidos.jpg',
    description: 'Tienda especializada en calzado y equipamiento deportivo de alto rendimiento.',
    whatsapp: 'https://wa.me/message/ABCD1234EFGH'
  },
  {
    name: 'Salud y Bienestar',
    image: '/sponsors/salud-bienestar.jpg',
    description: 'Centro de bienestar integral con servicios de nutrición y fisioterapia.',
    whatsapp: 'https://wa.me/message/ZYXW9876VUTS'
  },
  // …agrega más patrocinadores según necesites…
])
</script>

<style scoped>
.sponsor-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 0.5rem;
}
.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.sponsor-img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.3;
}

.btn-whatsapp {
  background-color: #25D366;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
}
.btn-whatsapp:hover {
  background-color: #1dad57;
}
</style>
