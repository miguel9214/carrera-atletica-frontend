<!-- src/views/admin/RegistrationsView.vue -->
<template>
  <div class="admin-registrations container py-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="mb-0" style="color: var(--color-dark)">Inscripciones Registradas</h2>
      <button class="btn btn-primary" @click="openCreateModal">
        <i class="bi bi-plus-lg me-1"></i>
        Agregar Inscripción
      </button>
    </div>

    <!-- Buscador -->
    <div class="mb-4">
      <input
        v-model="searchTerm"
        type="text"
        class="form-control"
        placeholder="Buscar por nombre o documento..."
      />
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
            <th>Documento</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Categoría</th>
            <th>Pagado</th>
            <th>Fecha</th>
            <th class="text-end">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="reg in filteredRegistrations" :key="reg.id">
            <td>{{ reg.nombre }}</td>
            <td>{{ reg.documento }}</td>
            <td>{{ reg.telefono }}</td>
            <td>{{ reg.email }}</td>
            <td>{{ reg.categoria }}</td>
            <td>
              <span
                class="badge"
                :class="reg.paid ? 'bg-success' : 'bg-secondary'"
              >
                {{ reg.paid ? 'Sí' : 'No' }}
              </span>
            </td>
            <td>{{ formatDate(reg.created_at) }}</td>
            <td class="text-end">
              <button
                class="btn btn-sm btn-outline-primary me-2"
                @click="openEditModal(reg)"
                title="Editar"
              >
                <i class="bi bi-pencil"></i>
              </button>
              <button
                class="btn btn-sm btn-outline-danger"
                @click="confirmDelete(reg.id)"
                title="Eliminar"
              >
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
          <tr v-if="filteredRegistrations.length === 0">
            <td colspan="8" class="text-center text-muted py-4">
              No se encontraron inscripciones.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal para crear/editar -->
    <div class="modal-backdrop fade show" v-if="showModal"></div>
    <div
      class="modal fade show d-block"
      tabindex="-1"
      role="dialog"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="handleSave">
            <div class="modal-header">
              <h5 class="modal-title">
                {{ isEditing ? 'Editar Inscripción' : 'Nueva Inscripción' }}
              </h5>
              <button type="button" class="btn-close" @click="closeModal" />
            </div>
            <div class="modal-body">
              <div class="row g-3">
                <div class="col-md-6">
                  <label class="form-label">Nombre completo</label>
                  <input v-model="form.nombre" type="text" class="form-control" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Documento</label>
                  <input v-model="form.documento" type="text" class="form-control" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Teléfono</label>
                  <input v-model="form.telefono" type="tel" class="form-control" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Email</label>
                  <input v-model="form.email" type="email" class="form-control" required />
                </div>
                <div class="col-md-6">
                  <label class="form-label">Categoría</label>
                  <select v-model="form.categoria" class="form-select" required>
                    <option disabled value="">Selecciona una opción</option>
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
                <div class="col-md-6 d-flex align-items-center">
                  <div class="form-check mt-4">
                    <input
                      v-model="form.paid"
                      class="form-check-input"
                      type="checkbox"
                      id="paidCheck"
                    />
                    <label class="form-check-label" for="paidCheck">
                      Pago confirmado
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" @click="closeModal">
                Cancelar
              </button>
              <button type="submit" class="btn btn-primary">
                {{ isEditing ? 'Actualizar' : 'Guardar' }}
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
import { ref, computed, onMounted } from 'vue'
import Swal from 'sweetalert2'

const registrations = ref([])
const loading = ref(true)
const showModal = ref(false)
const isEditing = ref(false)
const searchTerm = ref('')
let editId = null

const form = ref({
  nombre: '',
  documento: '',
  telefono: '',
  email: '',
  categoria: '',
  paid: false,
  created_at: ''
})

// Datos falsos de ejemplo
const fakeRegs = [
  {
    id: 1,
    nombre: 'María Pérez',
    documento: '12345678',
    telefono: '+57 300 1234567',
    email: 'maria.perez@example.com',
    categoria: 'Juvenil',
    paid: true,
    created_at: '2025-07-01T10:15:00'
  },
  {
    id: 2,
    nombre: 'Juan Gómez',
    documento: '87654321',
    telefono: '+57 310 7654321',
    email: 'juan.gomez@example.com',
    categoria: 'Élite Hombres',
    paid: true,
    created_at: '2025-07-02T14:30:00'
  }
]

onMounted(() => {
  setTimeout(() => {
    registrations.value = fakeRegs
    loading.value = false
  }, 500)
})

// Filtrado por nombre o documento (case-insensitive)
const filteredRegistrations = computed(() => {
  if (!searchTerm.value.trim()) return registrations.value
  const term = searchTerm.value.trim().toLowerCase()
  return registrations.value.filter(r =>
    r.nombre.toLowerCase().includes(term) ||
    r.documento.toLowerCase().includes(term)
  )
})

function openCreateModal() {
  isEditing.value = false
  form.value = {
    nombre: '',
    documento: '',
    telefono: '',
    email: '',
    categoria: '',
    paid: false,
    created_at: ''
  }
  showModal.value = true
}

function openEditModal(reg) {
  isEditing.value = true
  editId = reg.id
  form.value = { ...reg }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}

function handleSave() {
  if (isEditing.value) {
    const idx = registrations.value.findIndex(r => r.id === editId)
    registrations.value[idx] = { ...form.value, id: editId }
    Swal.fire({ icon: 'success', title: 'Actualizado', timer: 1200, showConfirmButton: false })
  } else {
    const newReg = {
      ...form.value,
      id: Date.now(),
      created_at: new Date().toISOString()
    }
    registrations.value.push(newReg)
    Swal.fire({ icon: 'success', title: 'Guardado', timer: 1200, showConfirmButton: false })
  }
  closeModal()
}

function confirmDelete(id) {
  const reg = registrations.value.find(r => r.id === id)
  Swal.fire({
    title: `¿Eliminar "${reg.nombre}"?`,
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, eliminar'
  }).then(res => {
    if (res.isConfirmed) {
      registrations.value = registrations.value.filter(r => r.id !== id)
      Swal.fire({ icon: 'success', title: 'Eliminado', timer: 1000, showConfirmButton: false })
    }
  })
}

function formatDate(dateString) {
  const d = new Date(dateString)
  return d.toLocaleDateString('es-CO', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}
</script>

<style scoped>
.admin-registrations h2 {
  font-weight: 600;
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.03);
}

.badge {
  font-size: 0.9rem;
}

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
