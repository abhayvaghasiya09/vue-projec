<template>
  <footer class="bg-gray-100 ">
    <div class="max-w-7xl mx-auto px-4 py-10 border-t-8 border-gray-500">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Column 1 -->
        <div>
          <h3 class="text-xl font-bold mb-4">Welcome</h3>
          <p class="text-gray-700">Thank you for visiting our site. We’re here to serve you.</p>
        </div>

        <!-- Column 2: Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="text-gray-700 space-y-2">
            <li><a href="#" class="hover:text-blue-600">Home</a></li>
            <li><a href="#" class="hover:text-blue-600">Appointment</a></li>
            <li><a href="#" class="hover:text-blue-600">Service</a></li>
            <li><a href="#" class="hover:text-blue-600">About Us</a></li>
            <li><a href="#" class="hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>

        <!-- Column 3: Hours -->
        <div>
          <h3 class="text-xl font-bold mb-4">Hours</h3>
          <ul class="text-gray-700 space-y-1">
            <li>Mon – Fri: 9:00 – 18:00</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <!-- Column 4: Contact -->
        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>
          <ul class="text-gray-700 space-y-2">
            <li>Email: info@example.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Surat, Gujarat, India</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
