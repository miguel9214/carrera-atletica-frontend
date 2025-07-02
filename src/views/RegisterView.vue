<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold" style="color: var(--color-primary)">Inscríbete a la Carrera Atlética</h2>
      <p class="text-muted">Completa el formulario para participar. ¡Corre, comparte y gana!</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-9">
        <div class="card p-4 shadow-sm border-0" 
             style="background-color: var(--color-light); border-left: 6px solid var(--color-primary)">
          <form @submit.prevent="handleSubmit">
            <div class="row g-4">
              <div class="col-md-6">
                <label class="form-label">Nombre completo</label>
                <input v-model="form.nombre" type="text" class="form-control form-control-lg" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Documento de identidad</label>
                <input v-model="form.documento" type="number" class="form-control form-control-lg" required />
              </div>

              <div class="col-md-6">
                <label class="form-label">Teléfono</label>
                <input v-model="form.telefono" type="tel" class="form-control form-control-lg" required />
              </div>
              <div class="col-md-6">
                <label class="form-label">Correo electrónico</label>
                <input v-model="form.email" type="email" class="form-control form-control-lg" required />
              </div>

              <!-- Fecha de nacimiento y edad -->
              <div class="col-md-6">
                <label class="form-label">Fecha de nacimiento</label>
                <input v-model="form.fechaNacimiento" type="date" class="form-control form-control-lg" required />
              </div>
              <div class="col-md-6" v-if="form.edad !== null">
                <label class="form-label">Edad</label>
                <input :value="form.edad + ' años'" class="form-control form-control-lg" disabled />
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
                <select v-model="form.categoria" @change="validateCategory" 
                        class="form-select form-select-lg" required>
                  <option disabled value="">Selecciona una categoría</option>
                  <option v-for="cat in categorias" :key="cat.nombre" :value="cat.nombre">
                    {{ cat.nombre }}
                  </option>
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

            <!-- Total -->
            <div class="total-box mt-4 text-end">
              <span class="badge fs-5 rounded-pill px-4 py-2" 
                    :style="{ backgroundColor: 'var(--color-accent)', color: '#fff' }">
                Total: ${{ precioTotal.toLocaleString() }}
              </span>
            </div>

            <!-- Botón -->
            <div class="mt-4 text-end">
              <button type="submit" class="btn btn-lg btn-gradient">
                {{ precioTotal === 0 ? 'Finalizar inscripción' : 'Continuar con el pago' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, computed, watch } from 'vue'
import Swal from 'sweetalert2'

// Form state
const form = reactive({
  nombre: '', documento: '', telefono: '', email: '',
  fechaNacimiento: '', edad: null, genero: '', categoria: '', talla: ''
})

// Category definitions with age ranges
const categorias = [
  { nombre: 'Infantil', rango: [10,11] },
  { nombre: 'Prejuvenil', rango: [12,14] },
  { nombre: 'Juvenil', rango: [15,17] },
  { nombre: 'Élite Hombres', rango: [18,35] },
  { nombre: 'Élite Mujeres', rango: [18,35] },
  { nombre: 'Senior A (Hombres)', rango: [36,42] },
  { nombre: 'Senior B (Hombres)', rango: [43,50] },
  { nombre: 'Senior C (Hombres)', rango: [51,120] },
  { nombre: 'Senior A (Mujer)', rango: [36,42] },
  { nombre: 'Senior B (Mujer)', rango: [43,50] },
  { nombre: 'Senior C (Mujer)', rango: [51,120] },
  { nombre: 'Personas con discapacidad', rango: [0,120] }
]

// Watch date of birth to calculate age
watch(() => form.fechaNacimiento, (val) => {
  if (!val) {
    form.edad = null
    return
  }
  const hoy = new Date(), nac = new Date(val)
  let edad = hoy.getFullYear() - nac.getFullYear()
  const m = hoy.getMonth() - nac.getMonth()
  if (m < 0 || (m === 0 && hoy.getDate() < nac.getDate())) edad--
  form.edad = edad
})

// Validate category vs age
function validateCategory() {
  const cat = categorias.find(c=>c.nombre===form.categoria)
  if (!cat || form.edad===null) return
  const [min,max] = cat.rango
  if (form.edad < min || form.edad > max) {
    Swal.fire({ icon:'warning', title:'Categoría no válida',
      text:`Tienes ${form.edad} años, no corresponde a la categoría ${cat.nombre}.` })
    form.categoria = ''
  }
}

// Price: free for Infantil y Prejuvenil
const precioTotal = computed(() => {
  if (!form.categoria) return 0
  return ['Infantil','Prejuvenil'].includes(form.categoria) ? 0 : 40000
})

// Handle submit
function handleSubmit() {
  if (precioTotal.value === 0) {
    Swal.fire({ icon:'success', title:'¡Inscripción completada!', text:'¡Nos vemos en la meta!' })
  } else {
    Swal.fire({ icon:'info', title:'Redirigiendo a pago...', text:`Total a pagar: $${precioTotal.value.toLocaleString()}`, timer:2000, showConfirmButton:false })
  }
  // Luego conectar con API o pasarela
}
</script>

<style scoped>
.form-label { font-weight:600; color:var(--color-dark) }
.btn-gradient { background:linear-gradient(90deg,var(--color-primary),var(--color-magenta)); border:none; color:#fff; transition:0.3s }
.btn-gradient:hover { background:linear-gradient(90deg,var(--color-magenta),var(--color-primary)) }
.total-box .badge { font-variant-numeric: tabular-nums; }
</style>
