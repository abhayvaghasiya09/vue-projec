<template>
<header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <!-- Logo -->
        <div class="text-2xl font-bold text-gray-800">
            MediLab Hospital
        </div>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex space-x-6">
            <a href="/" class="text-black font-semibold hover:text-blue-600">Home</a>
            <a href="/appointment" class="text-black font-semibold hover:text-blue-600">Appointment</a>
            <a href="/about" class="text-black font-semibold hover:text-blue-600">About</a>
            <a href="/contact" class="text-black font-semibold hover:text-blue-600">Contact</a>
            <a href="/blog" class="text-black font-semibold hover:text-blue-600">Blog</a>
        </nav>

        <!-- Buttons (Desktop) -->
        <div class="hidden md:flex space-x-3">
            <button class="px-4 py-2 border border-gray-600 rounded-xl font-bold hover:bg-blue-50">
                Login
            </button>
            <a href="/register">
                <button class="px-4 py-2 text-white font-bold rounded-xl" style="background: linear-gradient(to right, #9083D5, #807593)">
                    Sign Up
                </button>
            </a>

        </div>

        <!-- Mobile Menu Button -->
        <button @click="toggleMenu" class="md:hidden text-2xl focus:outline-none">
            ☰
        </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden px-4 pb-4 space-y-4 bg-white border-t">
        <a href="/" class="block text-black font-semibold hover:text-blue-600">Home</a>
        <a href="/appointment" class="block text-black font-semibold hover:text-blue-600">Appointment</a>
        <a href="/about" class="block text-black font-semibold hover:text-blue-600">About</a>
        <a href="/contact" class="block text-black font-semibold hover:text-blue-600">Contact</a>
        <a href="/blog" class="block text-black font-semibold hover:text-blue-600">Blog</a>
        <div class="flex flex-col space-y-2 pt-2">
            <button class="w-full px-4 py-2 border border-gray-600 rounded-xl font-bold hover:bg-blue-50">
                Login
            </button>
            <button class="w-full px-4 py-2 bg-gray-500 text-white font-bold rounded-xl hover:bg-gray-700">
                Sign Up
            </button>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
};
</script>
