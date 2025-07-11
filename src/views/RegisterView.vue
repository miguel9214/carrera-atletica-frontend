<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color: var(--color-primary)">
        Inscríbete a la Carrera Atlética
      </h2>
      <p class="text-muted">
        Completa el formulario para participar. ¡Corre, comparte y gana!
      </p>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div
          class="card p-4 shadow-sm border-0"
          style="background-color: var(--color-light);
                 border-left: 6px solid var(--color-primary)"
        >
          <form @submit.prevent="handleSubmit">
            <div class="row g-4">
              <!-- Nombre completo -->
              <div class="col-md-6">
                <label class="form-label">Nombre completo</label>
                <input
                  v-model="form.nombre"
                  type="text"
                  class="form-control form-control-lg"
                  required
                />
              </div>

              <!-- Documento -->
              <div class="col-md-6">
                <label class="form-label">Documento de identidad</label>
                <input
                  v-model="form.documento"
                  type="text"
                  class="form-control form-control-lg"
                  @keypress="isNumber"
                  inputmode="numeric"
                  required
                />
              </div>

              <!-- Teléfono -->
              <div class="col-md-6">
                <label class="form-label">Teléfono</label>
                <input
                  v-model="form.telefono"
                  type="tel"
                  class="form-control form-control-lg"
                  required
                />
              </div>

              <!-- Email -->
              <div class="col-md-6">
                <label class="form-label">Correo electrónico</label>
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control form-control-lg"
                  required
                />
              </div>

              <!-- Fecha de nacimiento -->
              <div class="col-md-6">
                <label class="form-label">Fecha de nacimiento</label>
                <input
                  v-model="form.fechaNacimiento"
                  type="date"
                  class="form-control form-control-lg"
                  required
                />
              </div>

              <!-- Edad calculada -->
              <div class="col-md-6" v-if="form.edad !== null">
                <label class="form-label">Edad</label>
                <input
                  :value="form.edad + ' años'"
                  class="form-control form-control-lg"
                  disabled
                />
              </div>

              <!-- Género -->
              <div class="col-md-6">
                <label class="form-label">Género</label>
                <select
                  v-model="form.genero"
                  class="form-select form-select-lg"
                  required
                >
                  <option disabled value="">Selecciona una opción</option>
                  <option>Masculino</option>
                  <option>Femenino</option>
                  <option>Otro</option>
                </select>
              </div>

              <!-- Categoría -->
              <div class="col-md-6">
                <label class="form-label">Categoría</label>
                <select
                  v-model="form.categoria"
                  @change="validateCategory"
                  class="form-select form-select-lg"
                  required
                >
                  <option disabled value="">Selecciona una categoría</option>
                  <option
                    v-for="cat in categorias"
                    :key="cat.nombre"
                    :value="cat.nombre"
                  >
                    {{ cat.nombre }}
                  </option>
                </select>
              </div>

              <!-- Talla -->
              <div class="col-md-6">
                <label class="form-label">Talla de camiseta</label>
                <select
                  v-model="form.talla"
                  class="form-select form-select-lg"
                  required
                >
                  <option disabled value="">Selecciona tu talla</option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>

            <!-- Total -->
            <div class="total-box mt-4 text-end">
              <span
                class="badge fs-5 rounded-pill px-4 py-2"
                :style="{ backgroundColor: 'var(--color-accent)', color: '#fff' }"
              >
                Total: ${{ precioTotal.toLocaleString() }}
              </span>
            </div>

            <!-- Botón / MercadoPago -->
            <div class="mt-4 text-end">
              <!-- Inscripción gratuita -->
              <button
                v-if="precioTotal === 0"
                type="submit"
                class="btn btn-lg btn-gradient"
              >
                Finalizar inscripción
              </button>

              <!-- Pago con MercadoPago (link directo) -->
              <a
                v-else
                :href="mpLink"
                target="_blank"
                rel="noopener"
                class="btn btn-lg btn-gradient"
              >
                Pagar con Mercado Pago
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch } from 'vue'
import Swal from 'sweetalert2'

// Estado del formulario
const form = reactive({
  nombre: '',
  documento: '',
  telefono: '',
  email: '',
  fechaNacimiento: '',
  edad: null,
  genero: '',
  categoria: '',
  talla: ''
})

// Definición de categorías y rangos de edad
const categorias = [
  { nombre: 'Infantil', rango: [10, 11] },
  { nombre: 'Prejuvenil', rango: [12, 14] },
  { nombre: 'Juvenil', rango: [15, 17] },
  { nombre: 'Élite Hombres', rango: [18, 35] },
  { nombre: 'Élite Mujeres', rango: [18, 35] },
  { nombre: 'Senior A (Hombres)', rango: [36, 42] },
  { nombre: 'Senior B (Hombres)', rango: [43, 50] },
  { nombre: 'Senior C (Hombres)', rango: [51, 120] },
  { nombre: 'Senior A (Mujer)', rango: [36, 42] },
  { nombre: 'Senior B (Mujer)', rango: [43, 50] },
  { nombre: 'Senior C (Mujer)', rango: [51, 120] },
  { nombre: 'Personas con discapacidad', rango: [0, 120] }
]

// Cálculo de edad al cambiar fecha de nacimiento
watch(
  () => form.fechaNacimiento,
  (val) => {
    if (!val) {
      form.edad = null
      return
    }
    const hoy = new Date()
    const nac = new Date(val)
    let edad = hoy.getFullYear() - nac.getFullYear()
    const m = hoy.getMonth() - nac.getMonth()
    if (m < 0 || (m === 0 && hoy.getDate() < nac.getDate())) edad--
    form.edad = edad
  }
)

// Validación de categoría vs edad
function validateCategory() {
  const cat = categorias.find((c) => c.nombre === form.categoria)
  if (!cat || form.edad === null) return
  const [min, max] = cat.rango
  if (form.edad < min || form.edad > max) {
    Swal.fire({
      icon: 'warning',
      title: 'Categoría no válida',
      text: `Tienes ${form.edad} años, no corresponde a la categoría ${cat.nombre}.`
    })
    form.categoria = ''
  }
}

// Permitir solo números en documento
function isNumber(event) {
  const char = String.fromCharCode(event.keyCode)
  if (!/^[0-9]$/.test(char)) event.preventDefault()
}

// Cálculo de precio total
const precioTotal = computed(() => {
  if (!form.categoria) return 0
  return ['Infantil', 'Prejuvenil'].includes(form.categoria) ? 0 : 40000
})

// Enlace directo de Mercado Pago
const mpLink = 'https://mpago.li/32CDkjM'

// Manejo de envío en inscripciones gratuitas
function handleSubmit() {
  if (precioTotal.value === 0) {
    Swal.fire({
      icon: 'success',
      title: '¡Inscripción completada!',
      text: '¡Nos vemos en la meta!'
    })
  }
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
  color: #fff;
  transition: 0.3s;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, var(--color-magenta), var(--color-primary));
}
.total-box .badge {
  font-variant-numeric: tabular-nums;
}
</style>
