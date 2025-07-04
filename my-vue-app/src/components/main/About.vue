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

    <section class="py-10">
        <div class="med-home-hero-section">
            <div class="flex flex-wrap items-center">
                <div class="w-full md:w-1/2 p-4 flex justify-center">
                    <img src="/images/about/about-2.png" alt="Appointment Illustration" class="w-full h-auto object-cover" />
                </div>
                <div class="w-full md:w-1/2 p-4">
                    <h3 class="text-2xl font-medium">Biography</h3>
                    <h2 class="text-6xl font-semibold pt-6a">Who We Are</h2>

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
</div>
</template>

<script>
export default {
    data() {
        return {
            count: 10
        }
    },
    methods: {
        increment() {
            this.count++
        },
        decremnt() {
            this.count--
        }
    }
}
</script>
