<template>
  <div class="container py-5">
    <h2 class="text-center mb-4 fw-bold" style="color: var(--color-dark)">Ruta de la Carrera</h2>

    <div class="row justify-content-center mb-4">
      <div class="col-lg-8 text-center">
        <p class="lead">
          ¡Prepárate para disfrutar de un recorrido inolvidable por Aguachica! La ruta inicia y finaliza en el parque principal.
        </p>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item"><i class="bi bi-geo-alt-fill me-2 text-primary"></i><strong>Salida:</strong> Parque Principal de Aguachica</li>
          <li class="list-group-item"><i class="bi bi-flag-fill me-2 text-success"></i><strong>Llegada:</strong> Mismo punto de salida</li>
          <li class="list-group-item"><i class="bi bi-droplet-fill me-2 text-info"></i><strong>Puntos de hidratación:</strong> cada 2 km</li>
        </ul>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-10">
        <div class="ratio ratio-16x9 shadow-lg rounded overflow-hidden">
          <!-- Puedes reemplazar el src por el enlace a tu mapa específico -->
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.749967657561!2d-73.61883318573644!3d8.313731054374386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5d9ce7a8577b5f%3A0x60c42a67c04d5a13!2sParque%20Principal%20Aguachica!5e0!3m2!1ses-419!2sco!4v1660000000000!5m2!1ses-419!2sco"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
