<template>
  <footer class="footer-split text-white">
    <div class="container py-3">
      <div class="row align-items-center">
        <!-- Info del evento -->
        <div class="col-md-6 text-center text-md-start mb-2 mb-md-0">
          <h6 class="fw-bold mb-1">Carrera Atlética</h6>
          <small class="text-muted">Aguachica • 13 de septiembre 2025</small>
        </div>

        <!-- Redes sociales -->
        <div class="col-md-6 text-center text-md-end">
          <div class="d-flex justify-content-center justify-content-md-end gap-3">
            <a href="https://wa.me/573001112233" target="_blank" class="footer-icon" title="WhatsApp">
              <i class="bi bi-whatsapp"></i>
            </a>
            <a href="https://instagram.com/tu_cuenta" target="_blank" class="footer-icon" title="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="mailto:carrera@.com" class="footer-icon" title="Correo">
              <i class="bi bi-envelope-fill"></i>
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
  background: linear-gradient(90deg, var(--color-dark), var(--color-primary));
  font-size: 0.85rem;
  color: white;
}

.footer-icon {
  color: white;
  font-size: 1.25rem;
  transition: color 0.3s ease;
}
.footer-icon:hover {
  color: var(--color-accent);
}
</style>
