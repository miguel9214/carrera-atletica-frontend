<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card shadow-lg p-4" style="width: 400px;">
      <h3 class="text-center mb-4" style="color: var(--color-dark)">Crear Administrador</h3>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label class="form-label">Nombre completo</label>
          <input
            v-model="form.name"
            type="text"
            class="form-control form-control-lg"
            placeholder="Tu Nombre"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="form-control form-control-lg"
            placeholder="admin@ejemplo.com"
            required
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control form-control-lg"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="mb-4">
          <label class="form-label">Confirmar Contraseña</label>
          <input
            v-model="form.password_confirmation"
            type="password"
            class="form-control form-control-lg"
            placeholder="••••••••"
            required
          />
        </div>
        <button type="submit" class="btn btn-gradient w-100 btn-lg">
          Crear cuenta
        </button>
      </form>
      <p class="text-center mt-3">
        ¿Ya eres admin?
        <RouterLink to="/admin/login">Inicia sesión</RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useApi } from '@/composables/useApi'

const router = useRouter()
const form = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
})

async function handleRegister() {
  if (form.password !== form.password_confirmation) {
    return Swal.fire({ icon: 'warning', title: 'Las contraseñas no coinciden' })
  }

  try {
    await useApi('admin/register', 'POST', {
      name: form.name,
      email: form.email,
      password: form.password,
      password_confirmation: form.password_confirmation,
    })
    Swal.fire({
      icon: 'success',
      title: '¡Administrador creado!',
      text: 'Ahora puedes iniciar sesión',
      timer: 1500,
      showConfirmButton: false
    })
    router.push({ name: 'AdminLogin' })
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Error al registrar',
      text: err.error || 'Revisa los datos e inténtalo de nuevo',
    })
  }
}
</script>

<style scoped>
.btn-gradient {
  background: linear-gradient(90deg, var(--color-primary), var(--color-magenta));
  border: none;
  color: white;
  transition: background 0.3s;
}
.btn-gradient:hover {
  background: linear-gradient(90deg, var(--color-magenta), var(--color-primary));
}
</style>