<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <!-- Sólo en rutas públicas -->
    <Navbar v-if="showNavFooter" />

    <main class="flex-fill">
      <RouterView />
    </main>

    <!-- Botón flotante de WhatsApp siempre -->
    <a
      href="https://wa.me/573132709958"
      target="_blank"
      rel="noopener"
      class="whatsapp-float d-flex align-items-center justify-content-center"
      title="Contáctanos por WhatsApp"
    >
      <i class="bi bi-whatsapp fs-2"></i>
    </a>

    <!-- Sólo en rutas públicas -->
    <Transition name="fade-slide" appear>
      <Footer v-if="showNavFooter" />
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()

// Oculta Nav/Footer en /admin/* o rutas meta.guest
const showNavFooter = computed(() => {
  if (route.meta.guest) return false
  return !route.path.startsWith('/admin')
})
</script>

<style scoped>
.fade-slide-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

/* Botón flotante WhatsApp */
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
