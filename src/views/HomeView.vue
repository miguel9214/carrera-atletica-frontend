<template>
  <div class="home-hero text-white d-flex align-items-center justify-content-center text-center">
    <div class="container py-5">
      <h1 class="display-4 fw-bold mb-3">Carrera Atlética</h1>
      <p class="lead mb-4">¡Animate y participa! <br />13 de septiembre 2025</p>
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <RouterLink to="/register" class="btn btn-primary btn-lg">
          ¡Inscríbete ahora!
        </RouterLink>
        <RouterLink to="/kit" class="btn btn-outline-light btn-lg">
          Ver Kit del Corredor
        </RouterLink>
      </div>
    </div>
  </div>

  <div class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-8">
      <div class="card text-center shadow-sm border-0">
        <div class="card-body py-4">
          <h4 class="fw-bold mb-3" style="color: var(--color-dark)">
            Cuenta regresiva para la gran carrera
          </h4>
          <div class="display-6 fw-semibold" style="color: var(--color-primary)">
            {{ countdown.days }}d : {{ countdown.hours }}h : {{ countdown.minutes }}m : {{ countdown.seconds }}s
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  <div class="container text-center my-5">
    <h2 class="mb-4 fw-bold" style="color: var(--color-dark)">¡Vive la emoción de correr con propósito!</h2>
    <p class="lead mb-5">
      Acompáñanos en una jornada deportiva llena de alegría, salud y comunidad. ¡Corre, comparte y gana!
    </p>

    <div class="row g-4">
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <i class="bi bi-geo-alt-fill display-4 text-primary mb-3"></i>
            <h5 class="fw-bold">Ruta Segura</h5>
            <p class="text-muted">Recorrido señalizado, hidratación y asistencia en todo el trayecto.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <i class="bi bi-award display-4 text-success mb-3"></i>
            <h5 class="fw-bold">Premios y Medallas</h5>
            <p class="text-muted">Trofeos y premios para ganadores. Medallas para todos los participantes.</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body">
            <i class="bi bi-heart-fill display-4 text-danger mb-3"></i>
            <h5 class="fw-bold">Ambiente Familiar</h5>
            <p class="text-muted">Un evento para todas las edades. ¡Corre, camina o apoya desde la orilla!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'

const countdown = ref({
  days: '00',
  hours: '00',
  minutes: '00',
  seconds: '00',
})

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

onBeforeUnmount(() => {
  clearInterval(interval)
})

</script>

<style scoped>
.home-hero {
  background: linear-gradient(
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url('/banner.jpg') center center / cover no-repeat;
  min-height:99vh;
}

.display-6 {
  font-variant-numeric: tabular-nums;
}

</style>
