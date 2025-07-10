<template>
  <!-- Hero con fondo -->
  <div class="home-hero d-flex align-items-center text-white text-center">
    <div class="container py-5">
      <h1 class="display-4 fw-bold mb-3">Carrera Atlética</h1>

      <!-- Sección destacada -->
      <section class="highlight-section py-5">
        <div class="container">
          <div
            class="card shadow-lg p-4 border-0 text-center animate__animated animate__fadeInUp highlight-card"
          >
            <h2 class="gradient-text fw-bold mb-3">CONQUISTA LA NOCHE</h2>
            <p class="fs-5">
              La carrera atlética por la <strong>PAZ</strong>, la <strong>SEGURIDAD</strong> y la
              <strong>CONVIVENCIA</strong> será una noche <strong>HISTÓRICA</strong> para Aguachica.<br />
              Vive una experiencia inolvidable con <strong>DEPORTE</strong> y <strong>ESPERANZA</strong>.<br />
              <span class="fw-semibold text-muted"
                ><i class="bi bi-calendar-event me-2"></i>13 de septiembre 2025</span
              >
            </p>
          </div>
        </div>
      </section>

      <div class="d-flex flex-wrap justify-content-center gap-3 mt-4">
        <RouterLink to="/register" class="btn btn-lg hero-btn">¡Inscríbete ahora!</RouterLink>
        <RouterLink to="/kit" class="btn btn-outline-light btn-lg"
          >Ver Kit del Corredor</RouterLink
        >
      </div>
    </div>
  </div>

  <!-- Cuenta regresiva -->
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card text-center shadow-sm border-0 countdown-card">
          <div class="card-body py-4">
            <h4 class="fw-bold mb-3" style="color: var(--color-dark)">
              Cuenta regresiva para la gran carrera
            </h4>
            <div class="display-6 fw-semibold countdown-text">
              {{ countdown.days }}d : {{ countdown.hours }}h : {{ countdown.minutes }}m :
              {{ countdown.seconds }}s
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Beneficios -->
  <div class="container text-center my-5">
    <h2 class="mb-4 fw-bold" style="color: var(--color-primary)">
      ¡Vive la emoción de correr con propósito!
    </h2>
    <p class="lead mb-5">
      Acompáñanos en una jornada llena de alegría, salud y comunidad. ¡Corre, comparte y gana!
    </p>
    <div class="row g-4">
      <div class="col-md-4" v-for="item in benefits" :key="item.title">
        <div
          class="card h-100 shadow-sm benefit-card border-0"
          :style="{ borderTop: '5px solid ' + item.color }"
        >
          <div class="card-body">
            <i :class="item.icon" class="display-4 mb-3" :style="{ color: item.color }"></i>
            <h5 class="fw-bold">{{ item.title }}</h5>
            <p class="text-muted">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Patrocinadores -->
  <div class="container text-center my-5">
    <h2 class="fw-bold mb-4" style="color: var(--color-primary)">Patrocinadores</h2>
    <p class="lead text-muted mb-5">
      Agradecemos a nuestro patrocinador por hacer posible este evento.
    </p>
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 justify-content-center"
    >
      <div v-for="sponsor in sponsors" :key="sponsor.name" class="col">
        <div class="card h-100 shadow-sm sponsor-card border-0">
          <img
            :src="sponsor.image"
            :alt="sponsor.name"
            class="card-img-top sponsor-img"
          />
          <div class="card-body text-center">
            <h5 class="fw-bold">{{ sponsor.name }}</h5>
            <p class="text-muted small mb-3">{{ sponsor.description }}</p>
            <a
              :href="sponsor.whatsapp"
              target="_blank"
              rel="noopener"
              class="btn btn-whatsapp"
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const countdown = ref({ days: '00', hours: '00', minutes: '00', seconds: '00' })
const eventDate = new Date('2025-09-13T00:00:00')
let interval = null

function updateCountdown() {
  const now = new Date()
  const diff = eventDate - now
  if (diff <= 0) {
    clearInterval(interval)
    countdown.value = { days: '00', hours: '00', minutes: '00', seconds: '00' }
    return
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / 1000 / 60) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  countdown.value = {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}

onMounted(() => {
  updateCountdown()
  interval = setInterval(updateCountdown, 1000)
})
onBeforeUnmount(() => clearInterval(interval))

const benefits = [
  {
    title: 'Ruta Segura',
    desc: 'Recorrido señalizado, hidratación y asistencia en todo el trayecto.',
    icon: 'bi bi-geo-alt-fill',
    color: 'var(--color-accent)',
  },
  {
    title: 'Premios y Medallas',
    desc: 'Trofeos para ganadores. Medallas para todos los participantes.',
    icon: 'bi bi-award',
    color: 'var(--color-orange)',
  },
  {
    title: 'Ambiente Familiar',
    desc: 'Un evento para todas las edades. ¡Corre, camina o apoya desde la orilla!',
    icon: 'bi bi-heart-fill',
    color: 'var(--color-primary)',
  },
]

const sponsors = ref([
  {
    name: 'HOTEL CALLE REAL',
    image: '/sponsors/hotelcallereal.jpg',
    description:
      'Hotel boutique con todas las comodidades para tu descanso antes y después de la carrera.',
    whatsapp: 'https://wa.me/message/4OLLNMWPF5GJF1',
  },
])
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.home-hero {
  background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url('/banner.jpg') center center / cover no-repeat;
  min-height: 85vh;
  animation: fadeIn 1s ease;
  color: white;
}

.hero-btn {
  background-color: var(--color-primary);
  border: none;
  color: white;
  transition: all 0.3s ease-in-out;
}
.hero-btn:hover {
  background-color: var(--color-magenta);
}

.gradient-text {
  background: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-magenta)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.countdown-card {
  border-left: 5px solid var(--color-primary);
  background-color: var(--color-light);
}
.countdown-text {
  color: var(--color-dark);
  font-variant-numeric: tabular-nums;
}

.benefit-card {
  transition: transform 0.3s ease;
}
.benefit-card:hover {
  transform: scale(1.03);
}

.highlight-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  padding: 2rem;
  backdrop-filter: blur(6px);
  border: 1px solid #e0e0e0;
}

/* Patrocinadores */
.sponsor-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 0.5rem;
}
.sponsor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
.sponsor-img {
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}
.btn-whatsapp {
  background-color: #25d366;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
}
.btn-whatsapp:hover {
  background-color: #1dad57;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
