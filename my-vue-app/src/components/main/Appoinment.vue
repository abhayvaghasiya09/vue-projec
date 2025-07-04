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
        <h3 class="text-5xl text-gray-500 font-bold">Appoinment</h3>
        <form class="space-y-6 py-8 max-w-7xl mx-auto">
            <!-- Row 1: First Name & Last Name -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="First Name" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Last Name" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Row 2: Email & Phone -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="email" placeholder="Email Address" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="tel" placeholder="Phone Number" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Row 3: NIC & Date of Birth -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="NIC Number" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="date" placeholder="Date of Birth" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Row 4: Gender, Appointment Date, Appointment Time -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <select class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option disabled selected>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>

                <input type="date" placeholder="Appointment Date" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />

                <input type="time" placeholder="Appointment Time" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Row 5: Department & Doctor Time -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Department" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="Doctor Time" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>

            <!-- Row 6: Message -->
            <div>
                <textarea rows="5" placeholder="Your Message" class="w-full p-3 border-8 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="px-6 py-3 bg-gray-500 text-white rounded-md hover:bg-gray-700 transition duration-200">
                    Book Appointment
                </button>
            </div>
        </form>
    </section>

</div>
</template>

<script>
export default{
    methods:{
        async submitForm() {
            try {
                const res = await fetch('http://localhost:5000/api/appointments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });

                const data = await res.json();
                alert(data.message || 'Appointment booked successfully!');

                // Reset the form
                this.form = {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    nic: '',
                    dob: '',
                    gender: '',
                    appointmentDate: '',
                    appointmentTime: '',
                    department: '',
                    doctorTime: '',
                    message: ''
                };
            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Failed to book appointment');
            }
        }
    }
}
</script>
