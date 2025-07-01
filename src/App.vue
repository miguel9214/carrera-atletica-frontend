<template>
  <div class="app-wrapper d-flex flex-column min-vh-100">
    <Navbar />

    <main class="flex-fill">
      <RouterView />
    </main>

    <Transition name="fade-slide" appear>
      <Footer />
    </Transition>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
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
