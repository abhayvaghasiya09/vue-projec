<template>
<section class="py-20">
    <div class="bg-white rounded-2xl p-4">
        <h3 class="text-2xl text-gray-500 font-bold">Appointment</h3>
    </div>

    <div class="bg-white rounded-2xl mt-4 p-4">
        <form @submit.prevent="isEditing ? updateAppointment() : submitForm()" class="space-y-6">
            <!-- Form Fields -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input v-model="form.firstName" type="text" placeholder="First Name" class="input-style" required />
                <input v-model="form.lastName" type="text" placeholder="Last Name" class="input-style" required />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input v-model="form.email" type="email" placeholder="Email Address" class="input-style" required />
                <input v-model="form.phone" type="tel" placeholder="Phone Number" class="input-style" required />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input v-model="form.nic" type="text" placeholder="NIC Number" class="input-style" required />
                <input v-model="form.dob" type="date" class="input-style" required />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <select v-model="form.gender" class="input-style" required>
                    <option disabled value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>

                <input v-model="form.appointmentDate" type="date" class="input-style" required />
                <input v-model="form.appointmentTime" type="time" class="input-style" required />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input v-model="form.department" type="text" placeholder="Department" class="input-style" required />
                <input v-model="form.doctorTime" type="text" placeholder="Doctor Time" class="input-style" required />
            </div>

            <div>
                <textarea v-model="form.message" rows="5" placeholder="Your Message" class="input-style"></textarea>
            </div>

            <div class="text-center">
                <button type="submit" class="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    {{ isEditing ? 'Update Appointment' : 'Book Appointment' }}
                </button>
            </div>
        </form>
    </div>

    <!-- Appointments Table -->
    <div class="bg-white rounded-2xl mt-8 p-4">
        <h4 class="text-xl font-bold text-gray-700 mb-4">All Appointments</h4>
        <table class="w-full text-left">
            <thead>
                <tr>
                    <th class="py-2">Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="appointment in appointments" :key="appointment._id">
                    <td>{{ appointment.firstName }} {{ appointment.lastName }}</td>
                    <td>{{ appointment.email }}</td>
                    <td>{{ appointment.phone }}</td>
                    <td>
                        <button @click="editAppointment(appointment)" class="text-blue-600 mr-2">Edit</button>
                        <button @click="deleteAppointment(appointment._id)" class="text-red-600">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</section>
</template>

<script>
export default {
    data() {
        return {
            appointments: [],
            form: {
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
            },
            isEditing: false,
            currentId: null
        };
    },
    methods: {
        async submitForm() {
            try {
                const res = await fetch('http://localhost:5000/api/appointments', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.form)
                });
                const data = await res.json();
                alert(data.message || 'Appointment added!');
                this.resetForm();
                this.fetchAppointments();
            } catch (err) {
                console.error('Error:', err);
                alert('Error creating appointment');
            }
        },
        async fetchAppointments() {
            try {
                const res = await fetch('http://localhost:5000/api/appointments');
                this.appointments = await res.json();
            } catch (err) {
                console.error('Fetch error:', err);
            }
        },
        editAppointment(appointment) {
            this.form = { ...appointment };
            this.currentId = appointment._id;
            this.isEditing = true;
        },
        async updateAppointment() {
            try {
                const res = await fetch(`http://localhost:5000/api/appointments/${this.currentId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(this.form)
                });
                const data = await res.json();
                alert(data.message || 'Appointment updated!');
                this.resetForm();
                this.fetchAppointments();
            } catch (err) {
                console.error('Update error:', err);
                alert('Error updating appointment');
            }
        },
        async deleteAppointment(id) {
            if (confirm('Are you sure to delete this appointment?')) {
                try {
                    const res = await fetch(`http://localhost:5000/api/appointments/${id}`, {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    alert(data.message || 'Appointment deleted!');
                    this.fetchAppointments();
                } catch (err) {
                    console.error('Delete error:', err);
                    alert('Error deleting appointment');
                }
            }
        },
        resetForm() {
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
            this.isEditing = false;
            this.currentId = null;
        }
    },
    mounted() {
        this.fetchAppointments();
    }
};
</script>

<style scoped>
.input-style {
    width: 100%;
    padding: 0.75rem;
    border: 8px solid #d1d5db;
    border-radius: 0.375rem;
    outline: none;
}
.input-style:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}
</style>
