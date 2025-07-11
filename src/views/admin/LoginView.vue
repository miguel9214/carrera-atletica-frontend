<template>
  <div class="d-flex justify-content-center align-items-center min-vh-100 bg-light">
    <div class="card shadow-lg p-4" style="width: 360px;">
      <h3 class="text-center mb-4" style="color: var(--color-dark)">Admin Login</h3>
      <form @submit.prevent="handleLogin">
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
        <div class="mb-4">
          <label class="form-label">Contraseña</label>
          <input
            v-model="form.password"
            type="password"
            class="form-control form-control-lg"
            placeholder="••••••••"
            required
          />
        </div>
        <button type="submit" class="btn btn-gradient w-100 btn-lg">
          Iniciar sesión
        </button>
      </form>
      <p class="text-center mt-3">
        ¿No tienes cuenta?
        <RouterLink to="/admin/register">Crear administrador</RouterLink>
      </p>
    </div>
  </div>
</template>



// src/views/admin/LoginView.vue
<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import { useApi } from '@/composables/useApi'

const router = useRouter()
const form = reactive({ email: '', password: '' })

async function handleLogin() {
  try {
    // 1) Llamada al login
    const data = await useApi('admin/login', 'POST', {
      email: form.email,
      password: form.password,
    })
    console.log('Login successful:', data)

    // 2) Almaceno el token bajo la clave que usa useApi
    localStorage.setItem('access_token', data.token)

    // 3) Muestro alerta y, al cerrarse, redirijo a Home
    await Swal.fire({
      icon: 'success',
      title: '¡Bienvenido!',
      showConfirmButton: false,
      timer: 1200
    })

    // 4) Navego al Home público
    router.push({ name: 'AdminHome' })
  } catch (err) {
    console.error('Login error:', err)
    Swal.fire({
      icon: 'error',
      title: 'Error de autenticación',
      text: err.error || 'Credenciales inválidas'
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