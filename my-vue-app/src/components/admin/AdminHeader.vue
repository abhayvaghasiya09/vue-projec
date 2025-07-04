<template>
<header class="fixed top-0 left-0 right-0 z-50 bg-white w-full shadow-md p-4 flex items-center justify-between">
    <!-- Sidebar Toggle Button (Visible on Small Screens) -->
    <button @click="$emit('toggle-sidebar')" class="mr-4 text-gray-700 hover:text-black focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg"  class="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>

    </button>

    <!-- Brand (Left Side for MD and Up) -->
    <h1 class="text-[#887CB4] text-xl font-bold hidden md:block">Madhusha</h1>

    <!-- Center Title -->
    <h2 class="text-2xl font-bold text-center flex-1">MediLab Hospital</h2>

    <!-- Logout Button -->
    <button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
        Logout
    </button>
</header>
</template>

<script>
export default {
    name: "AdminHeader",
    emits: ["toggle-sidebar"],
};
</script>
