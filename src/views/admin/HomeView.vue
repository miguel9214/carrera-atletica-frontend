<!-- src/views/admin/HomeView.vue -->
<template>
  <div class="admin-home container py-5">
    <h2 class="mb-4" style="color: var(--color-dark)">Panel de Control</h2>
    <div class="row g-4">
      <div v-for="card in cards" :key="card.title" class="col-6 col-md-3">
        <div class="card h-100 border-0 shadow-lg overflow-hidden card-hover">
          <div class="card-accent-top" :style="{ backgroundColor: card.color }"></div>
          <div class="card-body d-flex flex-column align-items-center justify-content-center text-center p-4">
            <div class="icon-circle mb-3" :style="{ backgroundColor: card.color }">
              <i :class="card.icon" class="text-white fs-4"></i>
            </div>
            <h6 class="card-title text-uppercase mb-2">{{ card.title }}</h6>
            <p class="card-value mb-0">{{ card.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/useApi'

const cards = ref([
  {
    title: 'Inscripciones totales',
    value: 0,
    icon: 'bi bi-people-fill',
    color: 'var(--color-primary)'
  },
  {
    title: 'Categorías',
    value: 0,
    icon: 'bi bi-tags',
    color: 'var(--color-accent)'
  },
  {
    title: 'Inscripciones hoy',
    value: 0,
    icon: 'bi bi-calendar-day',
    color: 'var(--color-orange)'
  },
  {
    title: 'Próxima carrera',
    value: '13 Sep 2025',
    icon: 'bi bi-calendar-event',
    color: 'var(--color-magenta)'
  }
])

onMounted(async () => {
  try {
    const stats = await useApi('admin/stats', 'GET')
    cards.value[0].value = stats.totalRegistrations
    cards.value[1].value = stats.totalCategories
    cards.value[2].value = stats.dailyRegistrations
    if (stats.nextRaceDate) {
      const d = new Date(stats.nextRaceDate)
      cards.value[3].value = d.toLocaleDateString('es-CO', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      })
    }
  } catch (err) {
    console.error('Error cargando estadísticas:', err)
  }
})
</script>

<style scoped>
.admin-home .card-accent-top {
  height: 4px;
  width: 100%;
}
.icon-circle {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}
.card-title {
  font-size: 0.9rem;
  color: var(--color-dark);
}
.card-value {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-dark);
}
.card-hover {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card-hover:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
</style>
