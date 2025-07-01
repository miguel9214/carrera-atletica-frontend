<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color: var(--color-primary)">Inscríbete a la Carrera atlética</h2>
      <p class="text-muted">Completa el formulario para participar. ¡Corre, comparte y gana!</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="card p-4 shadow-sm border-0" style="background-color: var(--color-light); border-left: 6px solid var(--color-primary)">
          <form @submit.prevent="handleSubmit">
            <div class="row g-4">
              <div class="col-md-6">
                <label class="form-label">Nombre completo</label>
                <input v-model="form.nombre" type="text" class="form-control form-control-lg" required />
              </div>

              <div class="col-md-6">
                <label class="form-label">Documento de identidad</label>
                <input v-model="form.documento" type="text" class="form-control form-control-lg" required />
              </div>

              <div class="col-md-6">
                <label class="form-label">Teléfono</label>
                <input v-model="form.telefono" type="tel" class="form-control form-control-lg" required />
              </div>

              <div class="col-md-6">
                <label class="form-label">Correo electrónico</label>
                <input v-model="form.email" type="email" class="form-control form-control-lg" required />
              </div>

              <div class="col-md-6">
                <label class="form-label">Género</label>
                <select v-model="form.genero" class="form-select form-select-lg" required>
                  <option disabled value="">Selecciona una opción</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Categoría</label>
                <select v-model="form.categoria" class="form-select form-select-lg" required>
                  <option disabled value="">Selecciona una categoría</option>
                  <option>Infantil</option>
                  <option>Prejuvenil</option>
                  <option>Juvenil</option>
                  <option>Élite Hombres</option>
                  <option>Élite Mujeres</option>
                  <option>Senior A (Hombres)</option>
                  <option>Senior B (Hombres)</option>
                  <option>Senior C (Hombres)</option>
                  <option>Senior A (Mujer)</option>
                  <option>Senior B (Mujer)</option>
                  <option>Senior C (Mujer)</option>
                  <option>Personas con discapacidad</option>
                </select>
              </div>

              <div class="col-md-6">
                <label class="form-label">Talla de camiseta</label>
                <select v-model="form.talla" class="form-select form-select-lg" required>
                  <option disabled value="">Selecciona tu talla</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>

            <!-- TOTAL -->
            <div class="total-box mt-4 text-end">
              <span class="badge fs-5 rounded-pill px-4 py-2" :style="{ backgroundColor: 'var(--color-accent)', color: '#fff' }">
                Total: ${{ precioTotal.toLocaleString() }}
              </span>
            </div>

            <!-- BOTÓN FINAL -->
            <div class="mt-4 text-end">
              <button type="submit" class="btn btn-lg btn-gradient">
                Continuar con la inscripción
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Swal from 'sweetalert2'

const form = reactive({
  nombre: '',
  documento: '',
  telefono: '',
  email: '',
  genero: '',
  categoria: '',
  talla: '',
})

const categoriasGratis = ['Infantil', 'Prejuvenil']

const precioTotal = computed(() => {
  if (!form.categoria) return 0
  return categoriasGratis.includes(form.categoria) ? 0 : 40000
})

function handleSubmit() {
  if (precioTotal.value === 0) {
    Swal.fire({
      icon: 'success',
      title: '¡Inscripción completada!',
      text: 'Te esperamos en la línea de salida. 🎉',
    })
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Redirigiendo a pago...',
      text: `Total a pagar: $${precioTotal.value.toLocaleString()}`,
      timer: 2500,
      showConfirmButton: false,
    })
  }

  // Aquí va la lógica para conectar con la API o redirigir a pasarela
}
</script>

<style scoped>
.form-label {
  font-weight: 600;
  color: var(--color-dark);
}

.btn-gradient {
  background: linear-gradient(90deg, var(--color-primary), var(--color-magenta));
  border: none;
  color: white;
  transition: all 0.3s ease;
}

.btn-gradient:hover {
  background: linear-gradient(90deg, var(--color-magenta), var(--color-primary));
}
</style>
