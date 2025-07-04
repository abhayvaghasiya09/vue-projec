<template>
  <aside class="w-64 hidden md:block pt-20" style="background: linear-gradient(to right, #9083D5, #807593);">
    <!-- pt-16 creates space equal to header height (64px) -->
    <ul class="space-y-4 p-4">
      <li><router-link to="/admin" class="text-white text-xl font-bold hover:text-blue-300">Dashboard</router-link></li>
      <!-- <li><router-link to="/admin/doctors" class="text-white text-xl font-bold hover:text-blue-300">Doctors</router-link></li> -->
      <li><router-link to="/admin/appointments" class="text-white text-xl font-bold hover:text-blue-300">Appointments</router-link></li>
      <li><router-link to="/admin/staff" class="text-white text-xl font-bold hover:text-blue-300">Staff</router-link></li>
      <li><router-link to="/admin/patient" class="text-white text-xl font-bold hover:text-blue-300">Patient</router-link></li>
      <li><router-link to="/admin/invoice" class="text-white text-xl font-bold hover:text-blue-300">Invoice</router-link></li>
      <li><router-link to="/admin/medicine" class="text-white text-xl font-bold hover:text-blue-300">Medicine</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>
  