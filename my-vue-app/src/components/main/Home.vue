<template>
<div class="max-w-7xl mx-auto">
    <section>
        <div class="med-home-hero-section">
            <div class="flex flex-wrap items-center">
                <div class="w-full md:w-1/2 p-4">
                    <h1 class="text-black font-bold text-4xl md:text-6xl lg:text-6xl leading-tight">
                        We help people to get appointment <br /> in online
                    </h1>
                    <p class="mt-4 text-gray-600 text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin sit amet justo ut mauris consequat sollicitudin. Suspendisse potenti. Duis vel turpis in augue facilisis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Proin sit amet justo ut mauris consequat sollicitudin.
                    </p>
                </div>
                <div class="w-full md:w-1/2 p-4 flex justify-center">
                    <img src="/images/about/hero.png" alt="Appointment Illustration" class="w-full h-auto" />
                </div>

            </div>
        </div>
    </section>

    <section class="pt-10">
        <div class="med-home-hero-section">
            <div class="flex flex-wrap items-center">
                <div class="w-full md:w-1/2 p-4 flex justify-center">
                    <img src="/images/home/home-1.png" alt="Appointment Illustration" class="w-full h-auto object-cover" />
                </div>
                <div class="w-full md:w-1/2 p-4">
                    <h3 class="text-2xl font-medium">Biography</h3>
                    <h2 class="text-4xl md:text-6xl font-semibold pt-6a">Who We Are</h2>

                    <p class="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                        Proin sit amet justo ut mauris consequat sollicitudin. Suspendisse potenti.
                        Duis vel turpis in augue facilisis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                        Proin sit amet justo ut mauris consequat sollicitudin. Suspendisse potenti.
                        Duis vel turpis in augue facilisis tincidunt.
                    </p>

                    <p class="pt-4">It's 2019: time to sink or swim.</p>

                    <p class="pt-4">We are your Social Media Marketing Agency.</p>

                    <p class="pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                        Proin sit amet justo ut mauris consequat sollicitudin. Suspendisse potenti.
                        Duis vel turpis in augue facilisis tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                        Proin sit amet justo ut mauris consequat sollicitudin. Suspendisse potenti.
                        Duis vel turpis in augue facilisis tincidunt.
                    </p>

                    <p class="pt-4">It's 2019: time to sink or swim.</p>

                    <p class="pt-4">We are your Social Media Marketing Agency.</p>
                </div>

            </div>
        </div>
    </section>

    <section class="pt-10">
        <div class="text-center">
            <h2 class="text-4xl font-bold">Our Services</h2>
        </div>
        <div class="flex flex-col lg:flex lg:flex-row gap-10 py-8 m-4 lg:m-0">
            <div class="w-full lg:w-1/3">
                <div class="bg-white rounded-xl shadow">
                    <img class="rounded-xl" src="/images/home/Group.png" />
                    <h3 class="text-center p-4 text-3xl font-bold">NEUROSCIENCE</h3>
                </div>
            </div>
            <div class="w-full lg:w-1/3">
                <div class="bg-white rounded-xl shadow">
                    <img class="rounded-xl" src="/images/home/Group.png" />
                    <h3 class="text-center p-4 text-3xl font-bold">NEUROSCIENCE</h3>
                </div>
            </div>
            <div class="w-full lg:w-1/3">
                <div class="bg-white rounded-xl shadow">
                    <img class="rounded-xl" src="/images/home/Group.png" />
                    <h3 class="text-center p-4 text-3xl font-bold">NEUROSCIENCE</h3>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="text-center">
            <h2 class="text-4xl font-bold">Our Doctors</h2>
        </div>
        <div class="max-w-5xl mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pl-8">
            <div v-for="(doctor, index) in doctors" :key="index" class="flex gap-2 items-start">
                <img class="rounded-full w-20" :src="doctor.image" alt="Doctor Image" />
                <div>
                    <h3 class="text-xl font-bold">{{ doctor.name }}</h3>
                    <p class="text-gray-600">{{ doctor.qualifications }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20">
        <div class="max-w-5xl mx-auto px-4">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-bold">Send us a message</h2>
            </div>

            <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" placeholder="First Name" class="w-full p-3 border-4 md:border-8 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="First Name" class="w-full p-3 border-4 md:border-8 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="text" placeholder="Last Name" class="w-full p-3 border-4 md:border-8 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="email" placeholder="Email Address" class="w-full p-3 border-4 md:border-8 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <input type="tel" placeholder="Phone Number" class="w-full p-3 border-4 md:border-8 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <div>
                    <textarea rows="5" placeholder="Your Message" class="w-full p-3 border-4 md:border-8 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>

                <div class="text-center">
                    <button type="submit" class="px-6 py-3 text-white rounded-md transition" style="background: linear-gradient(to right, #9083D5, #807593)">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </section>

</div>
</template>

<script>
export default {
    name: "DoctorList",
    data() {
        return {
            doctors: [{
                    name: "Dr. Silva A.D.M.P",
                    qualifications: "MBBS, MD, IDCCM",
                    image: "/images/home/doctors.png",
                },
                {
                    name: "Dr. Priya Sharma",
                    qualifications: "MBBS, MS",
                    image: "/images/home/doctors.png",
                },
                {
                    name: "Dr. John Watson",
                    qualifications: "MBBS, DNB",
                    image: "/images/home/doctors.png",
                },
                {
                    name: "Dr. Alisha Verma",
                    qualifications: "MBBS, MD (Pediatrics)",
                    image: "/images/home/doctors.png",
                },
                {
                    name: "Dr. Nikhil Patel",
                    qualifications: "MBBS, MS (ENT)",
                    image: "/images/home/doctors.png",
                },
                {
                    name: "Dr. Meera Khan",
                    qualifications: "MBBS, MD (Dermatology)",
                    image: "/images/home/doctors.png",
                },
                {
                    name: "Dr. Rohit Mehta",
                    qualifications: "MBBS, MD (Psychiatry)",
                    image: "/images/home/doctors.png",
                },
                {
                    name: "Dr. Kavita Singh",
                    qualifications: "MBBS, MS (Ophthalmology)",
                    image: "/images/home/doctors.png",
                },
            ],
        };
    },
};
</script>
