<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <!-- Sólo muestro el Navbar si la ruta NO es de guest -->
    <Navbar v-if="!isGuestRoute" />

    <main class="flex-fill">
      <RouterView />
    </main>

    <!-- Botón flotante de WhatsApp -->
    <a
      href="https://wa.me/573132709958"
      target="_blank"
      rel="noopener"
      class="whatsapp-float d-flex align-items-center justify-content-center"
      title="Contáctanos por WhatsApp"
    >
      <i class="bi bi-whatsapp fs-2"></i>
    </a>

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

/* Estilos para el botón flotante */
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  background-color: #25D366;
  color: #fff;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  z-index: 2000;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(0,0,0,0.3);
}
</style>
