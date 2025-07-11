<!-- src/views/admin/CategoriesView.vue -->
<template>
  <div class="admin-categories container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0" style="color: var(--color-dark)">Categorías Registradas</h2>
      <button class="btn btn-primary" @click="openModal">
        <i class="bi bi-plus-lg me-1"></i>
        Agregar Categoría
      </button>
    </div>

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    <div v-else>
      <table class="table table-hover align-middle">
        <thead class="table-light">
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Edad</th>
            <th>Distancia</th>
            <th>Género</th>
            <th>Premios</th>
            <th class="text-end">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cat in categories" :key="cat.id">
            <td>{{ cat.nombre }}</td>
            <td>{{ cat.descripcion }}</td>
            <td>{{ cat.min_age }} – {{ cat.max_age }} años</td>
            <td>{{ cat.distancia }}</td>
            <td class="text-capitalize">{{ cat.gender }}</td>
            <td>{{ cat.premios }}</td>
            <td class="text-end">
              <button
                class="btn btn-sm btn-outline-primary me-2"
                @click="goEdit(cat.id)"
                title="Editar"
              >
                <i class="bi bi-pencil"></i>
              </button>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="confirmDelete(cat.id)"
                title="Eliminar"
              >
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          <tr v-if="categories.length === 0">
            <td colspan="7" class="text-center text-muted py-4">
              No hay categorías registradas.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal -->
    <div class="modal-backdrop fade show" v-if="showModal"></div>
    <div
      class="modal fade show d-block"
      tabindex="-1"
      role="dialog"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="handleCreate">
            <div class="modal-header">
              <h5 class="modal-title">Nueva Categoría</h5>
              <button type="button" class="btn-close" @click="closeModal"></button>
            </div>
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nombre</label>
                  <input v-model="form.nombre" type="text" class="form-control" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Género</label>
                  <select v-model="form.gender" class="form-select" required>
                    <option value="ambos">Ambos</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                  </select>
                </div>
                <div class="col-12">
                  <label class="form-label">Descripción</label>
                  <textarea v-model="form.descripcion" class="form-control" rows="2"></textarea>
                </div>
                <div class="col-md-3">
                  <label class="form-label">Edad mínima</label>
                  <input v-model.number="form.min_age" type="number" min="0" class="form-control" required />
                </div>
                <div class="col-md-3">
                  <label class="form-label">Edad máxima</label>
                  <input
                    v-model.number="form.max_age"
                    :min="form.min_age"
                    type="number"
                    class="form-control"
                    required
                  />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Distancia</label>
                  <input
                    v-model="form.distancia"
                    type="text"
                    class="form-control"
                    placeholder="Ej. 10 km"
                    required
                  />
                </div>
                <div class="col-12">
                  <label class="form-label">Premios</label>
                  <textarea v-model="form.premios" class="form-control" rows="2"></textarea>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" @click="closeModal">
                Cancelar
              </button>
              <button type="submit" class="btn btn-primary">
                Guardar Categoría
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- /Modal -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
// import { useApi } from '@/composables/useApi'

const router = useRouter()
const categories = ref([])
const loading = ref(true)
const showModal = ref(false)

// Formulario en modal
const form = ref({
  nombre: '',
  descripcion: '',
  min_age: null,
  max_age: null,
  distancia: '',
  premios: '',
  gender: 'ambos'
})

// Datos falsos de ejemplo
const fakeCategories = [
  {
    id: 1,
    nombre: 'Infantil',
    descripcion: 'Para niños de 10 a 11 años llenos de energía.',
    min_age: 10,
    max_age: 11,
    distancia: '500 m',
    premios: 'Premios para los 5 primeros lugares.',
    gender: 'ambos'
  },
  {
    id: 2,
    nombre: 'Prejuvenil',
    descripcion: 'Ideal para preadolescentes con ganas de competir.',
    min_age: 12,
    max_age: 14,
    distancia: '800 m',
    premios: 'Premios para los 5 primeros lugares.',
    gender: 'ambos'
  },
  {
    id: 3,
    nombre: 'Juvenil',
    descripcion: 'Competencia de 1 km para adolescentes.',
    min_age: 15,
    max_age: 17,
    distancia: '1 km',
    premios: 'Medallas para todos y trofeos top 3.',
    gender: 'ambos'
  }
]

onMounted(() => {
  setTimeout(() => {
    categories.value = fakeCategories
    loading.value = false
  }, 500)
})

function openModal() {
  form.value = {
    nombre: '',
    descripcion: '',
    min_age: null,
    max_age: null,
    distancia: '',
    premios: '',
    gender: 'ambos'
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function handleCreate() {
  // En entorno real usarías useApi POST aquí...
  const newCat = { ...form.value, id: Date.now() }
  categories.value.push(newCat)
  closeModal()
  Swal.fire({
    icon: 'success',
    title: 'Categoría creada',
    timer: 1200,
    showConfirmButton: false
  })
}

function goEdit(id) {
  router.push({ name: 'AdminCategoryEdit', params: { id } })
}

function confirmDelete(id) {
  const cat = categories.value.find(c => c.id === id)
  Swal.fire({
    title: `¿Eliminar "${cat.nombre}"?`,
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar',
    cancelButtonText: 'Cancelar'
  }).then(result => {
    if (result.isConfirmed) {
      categories.value = categories.value.filter(c => c.id !== id)
      Swal.fire({
        icon: 'success',
        title: 'Eliminada',
        timer: 1000,
        showConfirmButton: false
      })
    }
  })
}
</script>

<style scoped>
.admin-categories h2 {
  font-weight: 600;
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

/* Modal fixes */
.modal-backdrop {
  z-index: 1040;
}
.modal {
  z-index: 1050;
}
.modal-dialog {
  margin-top: 10vh;
}
.btn-primary {
  background: var(--color-primary);
  border: none;
}
.btn-primary:hover {
  background: var(--color-magenta);
}
</style>
