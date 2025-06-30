<template>
  <footer class="footer-split text-white">
    <div class="container">
      <div class="row align-items-center">
        <!-- Bloque izquierdo -->
        <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
          <h6 class="fw-bold mb-1">Carrera Atlética</h6>
          <small class="text">Primera edición • Aguachica • 13 de septiembre 2025</small>
        </div>

        <!-- Bloque derecho -->
        <div class="col-md-6 text-center text-md-end">
          <div class="d-flex justify-content-center justify-content-md-end gap-3">
            <a
              href="https://wa.me/573001112233"
              class="text-white"
              target="_blank"
              rel="noopener"
              title="WhatsApp"
            >
              <i class="bi bi-whatsapp fs-5"></i>
            </a>
            <a
              href="https://instagram.com/tu_cuenta"
              class="text-white"
              target="_blank"
              rel="noopener"
              title="Instagram"
            >
              <i class="bi bi-instagram fs-5"></i>
            </a>
            <a
              href="mailto:carrera@morrocoyera.com"
              class="text-white"
              title="Correo"
            >
              <i class="bi bi-envelope-fill fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
.footer-split {
  background-color: var(--color-dark);
  padding: 0.7rem 0;
  font-size: 0.85rem;
}

a.text-white:hover {
  color: var(--color-primary) !important;
}
</style>
