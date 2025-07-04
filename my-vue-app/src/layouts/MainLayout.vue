<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <Header />

    <!-- Main Content -->
    <main class="flex-1 bg-gray-50">
      <router-view />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/main/Header.vue'
import Footer from '@/components/main/Footer.vue'

export default {
  name: 'CommonLayout',
  components: {
    Header,
    Footer
  }
}
</script>
