<template>
  <div class="admin-dashboard d-flex">
    <Sidebar />

    <section class="content flex-fill p-4">
      <RouterView />
    </section>
  </div>
</template>

<script setup>
import Sidebar from '@/components/admin/Sidebar.vue'
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  min-height: 100vh;
}
.content {
  background-color: var(--color-light);
}
</style>
