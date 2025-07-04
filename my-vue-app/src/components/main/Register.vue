<template>
<div class="max-w-7xl mx-auto">
    <section>
        <div class="med-home-hero-section">
            <div class="flex flex-wrap items-center">
                <div class="w-full md:w-1/2 p-4">
                    <h1 class="text-black font-bold text-4xl md:text-6xl lg:text-6xl leading-tight">
                        We help people to get appointment in online
                    </h1>
                    <p class="mt-4 text-gray-600 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin sit amet justo ut mauris consequat sollicitudin. Suspendisse potenti. Duis vel turpis in augue facilisis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin sit amet justo ut mauris consequat sollicitudin. Suspendisse potenti. Duis vel turpis in augue facilisis tincidunt.
                    </p>
                </div>
                <div class="w-full md:w-1/2 p-4 flex justify-center">
                    <img src="/images/about/hero.png" alt="Appointment Illustration" class="w-full h-auto" />
                </div>

            </div>
        </div>
    </section>

    <section>
        <div>
            <h2 class="text-6xl text-gray-500 font-bold">Sign Up</h2>
            <p class="text-gray-500 text-2xl font-bold pt-4">Please Sign Up To Continue</p>
            <p class="text-gray-500 font-bold pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.<br /> Proin sit amet justo ut mauris consequat sollicitudin.</p>
        </div>
        <div>
            <form @submit.prevent="handleSubmit" class="max-w-7xl mx-auto py-8 space-y-6">
                <!-- Row 1: First Name, Last Name, Email, Mobile Number, NIC, DOB -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="First Name" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Last Name" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Email" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="tel" placeholder="Mobile Number" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="NIC" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="date" placeholder="Date of Birth" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <!-- Row 2: Username, Occupation -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Username" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Occupation" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <!-- Row 3: Password, Confirm Password, Referral Code -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input type="password" placeholder="Password" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="password" placeholder="Confirm Password" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Referral Code (optional)" class="p-3 border-8 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select v-model="form.role" class="p-3 border-8 border-gray-300 rounded" required>
                        <option disabled value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="doctor">Doctor</option>
                        <option value="patient">Patient</option>
                    </select>
                </div>

                <!-- Submit Button -->
                <div class="text-center pt-4">
                    <button type="submit" class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Sign Up
                    </button>
                </div>
            </form>

        </div>
    </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        nic: '',
        dob: '',
        username: '',
        occupation: '',
        password: '',
        role: '', // admin, doctor, or patient
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });
        const data = await res.json();
        alert(data.message);
      } catch (error) {
        alert('Registration failed.');
        console.error(error);
      }
    }
  }
}
</script>

