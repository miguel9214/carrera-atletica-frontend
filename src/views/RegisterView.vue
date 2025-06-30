<template>
  <div class="container py-5">
    <h2 class="text-center mb-4 fw-bold" style="color: var(--color-dark)">Formulario de Inscripción</h2>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <form @submit.prevent="submitForm" class="card shadow-sm p-4">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="nombre" class="form-label">Nombre completo</label>
              <input
                v-model="form.nombre"
                type="text"
                class="form-control"
                id="nombre"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="documento" class="form-label">Documento de identidad</label>
              <input
                v-model="form.documento"
                type="text"
                class="form-control"
                id="documento"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="telefono" class="form-label">Teléfono</label>
              <input
                v-model="form.telefono"
                type="tel"
                class="form-control"
                id="telefono"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="email" class="form-label">Correo electrónico</label>
              <input
                v-model="form.email"
                type="email"
                class="form-control"
                id="email"
                required
              />
            </div>

            <div class="col-md-6">
              <label for="genero" class="form-label">Género</label>
              <select v-model="form.genero" id="genero" class="form-select" required>
                <option disabled value="">Selecciona una opción</option>
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="categoria" class="form-label">Categoría</label>
              <select v-model="form.categoria" id="categoria" class="form-select" required>
                <option disabled value="">Selecciona una categoría</option>
                <option>Juvenil (14-17 años)</option>
                <option>Abierta (18-39 años)</option>
                <option>Veteranos (40+ años)</option>
                <option>Recreativa</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="talla" class="form-label">Talla de camiseta</label>
              <select v-model="form.talla" id="talla" class="form-select" required>
                <option disabled value="">Selecciona tu talla</option>
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div class="col-12 text-end mt-4">
              <button type="submit" class="btn btn-primary btn-lg">
                Enviar inscripción
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'
import { reactive } from 'vue'

const form = reactive({
  nombre: '',
  documento: '',
  telefono: '',
  email: '',
  genero: '',
  categoria: '',
  talla: '',
})

function submitForm() {
  // Aquí se conectará con la API Laravel
  Swal.fire({
    icon: 'success',
    title: '¡Inscripción enviada!',
    text: 'Pronto recibirás una confirmación por WhatsApp o email.',
  })

  // Limpiar el formulario
  Object.keys(form).forEach((key) => (form[key] = ''))
}
</script>
