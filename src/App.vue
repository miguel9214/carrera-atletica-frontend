<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <!-- Sólo muestro el Navbar si la ruta NO es de guest -->
    <Navbar v-if="!isGuestRoute" />

    <main class="flex-fill">
      <RouterView />
    </main>

    <!-- Sólo muestro el Footer si la ruta NO es de guest -->
    <Transition name="fade-slide" appear>
      <Footer v-if="!isGuestRoute" />
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

// Detecto si la ruta actual tiene meta.guest = true
const route = useRoute()
const isGuestRoute = computed(() => !!route.meta.guest)
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>
