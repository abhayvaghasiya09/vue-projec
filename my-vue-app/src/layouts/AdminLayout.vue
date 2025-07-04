<template>
  <div class="flex min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-1">
      <AdminHeader />
      <main class="p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/admin/Sidebar.vue'
import AdminHeader from '@/components/admin/AdminHeader.vue'

export default {
  components: { Sidebar, AdminHeader }
}
</script>
