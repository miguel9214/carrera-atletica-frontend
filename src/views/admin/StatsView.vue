<!-- src/views/admin/StatsView.vue -->
<template>
  <div class="admin-stats container py-5">
    <h2 class="mb-4" style="color: var(--color-dark)">Estadísticas y Reportes</h2>

    <!-- Métricas principales -->
    <div class="row g-4 mb-5">
      <div v-for="card in statsCards" :key="card.title" class="col-6 col-md-3">
        <div class="card shadow-sm text-center border-0">
          <div class="card-body">
            <i
              :class="card.icon"
              class="display-4 mb-2"
              :style="{ color: card.color }"
            ></i>
            <h5 class="fw-bold">{{ card.title }}</h5>
            <p class="h3 mb-0">{{ card.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Gráficos con datos de ejemplo -->
    <div class="row g-4 mb-5">
      <div class="col-md-6">
        <h5 class="mb-3">Inscripciones diarias (últimos 7 días)</h5>
        <canvas id="dailyChart"></canvas>
      </div>
      <div class="col-md-6">
        <h5 class="mb-3">Distribución por categoría</h5>
        <canvas id="categoryChart"></canvas>
      </div>
    </div>

    <!-- Botones de descarga (mock) -->
    <div class="d-flex flex-wrap gap-3">
      <button class="btn btn-gradient" @click="mockDownload">
        <i class="bi bi-file-earmark-arrow-down me-2"></i>
        Descargar CSV de inscripciones
      </button>
      <button class="btn btn-outline-primary" @click="mockDownload">
        <i class="bi bi-calendar-day me-2"></i>
        Descargar CSV inscripciones diarias
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'
import Swal from 'sweetalert2'

// Datos falsos para demostración
const fakeStats = {
  totalRegistrations: 157,
  totalCategories: 12,
  dailyRegistrations: 23,
  nextRaceDate: '2025-09-13',
  registrationsLast7Days: {
    '2025-09-06': 15,
    '2025-09-07': 22,
    '2025-09-08': 18,
    '2025-09-09': 24,
    '2025-09-10': 20,
    '2025-09-11': 19,
    '2025-09-12': 23
  },
  categoryDistribution: {
    'Infantil': 12,
    'Prejuvenil': 8,
    'Juvenil': 30,
    'Élite Hombres': 45,
    'Élite Mujeres': 27,
    'Senior A': 15,
    'Senior B': 10,
    'Senior C': 10
  }
}

const statsCards = ref([
  {
    title: 'Inscripciones totales',
    value: fakeStats.totalRegistrations,
    icon: 'bi bi-people-fill',
    color: 'var(--color-primary)'
  },
  {
    title: 'Categorías',
    value: fakeStats.totalCategories,
    icon: 'bi bi-tags',
    color: 'var(--color-accent)'
  },
  {
    title: 'Inscripciones hoy',
    value: fakeStats.dailyRegistrations,
    icon: 'bi bi-calendar-day',
    color: 'var(--color-orange)'
  },
  {
    title: 'Próxima carrera',
    value: new Date(fakeStats.nextRaceDate).toLocaleDateString('es-CO', { day:'2-digit',month:'short',year:'numeric' }),
    icon: 'bi bi-calendar-event',
    color: 'var(--color-magenta)'
  }
])

function renderCharts() {
  // Gráfico de línea diario
  const dailyCtx = document.getElementById('dailyChart')
  const days = Object.keys(fakeStats.registrationsLast7Days)
  const counts = Object.values(fakeStats.registrationsLast7Days)
  new Chart(dailyCtx, {
    type: 'line',
    data: {
      labels: days,
      datasets: [{
        label: 'Inscripciones',
        data: counts,
        fill: false,
        tension: 0.3,
        borderColor: 'var(--color-primary)',
        backgroundColor: 'var(--color-primary)'
      }]
    },
    options: {
      scales: {
        x: { ticks: { autoSkip: false } },
        y: { beginAtZero: true }
      }
    }
  })

  // Gráfico de pastel por categoría
  const categoryCtx = document.getElementById('categoryChart')
  const cats = Object.keys(fakeStats.categoryDistribution)
  const catCounts = Object.values(fakeStats.categoryDistribution)
  new Chart(categoryCtx, {
    type: 'pie',
    data: {
      labels: cats,
      datasets: [{
        data: catCounts,
        backgroundColor: [
          'var(--color-primary)',
          'var(--color-accent)',
          'var(--color-orange)',
          'var(--color-magenta)',
          '#6f42c1',
          '#20c997',
          '#6610f2',
          '#fd7e14'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'bottom' }
      }
    }
  })
}

function mockDownload() {
  Swal.fire({
    icon: 'info',
    title: 'Funcionalidad en desarrollo',
    text: 'La descarga estará disponible próximamente.',
  })
}

onMounted(() => {
  renderCharts()
})
</script>

<style scoped>
.admin-stats h2 {
  font-weight: 600;
}

.btn-gradient {
  background: linear-gradient(90deg, var(--color-primary), var(--color-magenta));
  border: none;
  color: white;
  transition: background 0.3s;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, var(--color-magenta), var(--color-primary));
}

canvas {
  max-height: 300px;
  width: 100% !important;
}
</style>
