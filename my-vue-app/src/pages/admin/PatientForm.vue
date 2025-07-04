<template>
<section class="py-20">
  <div class="bg-white rounded-2xl p-4">
    <h2 class="text-2xl font-bold text-gray-600">{{ isEditing ? 'Edit Patient' : 'Add New Patient' }}</h2>
  </div>

  <!-- Form -->
  <div class="bg-white p-4 rounded-lg mt-4">
    <form @submit.prevent="isEditing ? updatePatient() : handleSubmit()" class="space-y-6">
      <!-- Form Rows -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input v-model="form.name" type="text" placeholder="Full Name" class="input-style" required />
        <input v-model="form.email" type="email" placeholder="Email" class="input-style" required />
        <input v-model="form.phone" type="tel" placeholder="Phone Number" class="input-style" required />
        <input v-model="form.nic" type="text" placeholder="NIC Number" class="input-style" required />
        <input v-model="form.dob" type="date" class="input-style" required />
        <select v-model="form.gender" class="input-style" required>
          <option disabled value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input v-model="form.admissionDate" type="date" class="input-style" required />
        <input v-model="form.admissionTime" type="time" class="input-style" required />
        <select v-model="form.department" class="input-style" required>
          <option disabled value="">Select Department</option>
          <option>General</option>
          <option>Cardiology</option>
          <option>Orthopedics</option>
          <option>Neurology</option>
          <option>Pediatrics</option>
        </select>
        <input v-model="form.room" type="text" placeholder="Room / Ward" class="input-style" />
      </div>

      <textarea v-model="form.message" rows="4" placeholder="Additional Notes" class="input-style"></textarea>

      <div class="text-center">
        <button type="submit" class="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
          {{ isEditing ? 'Update Patient' : 'Save Patient' }}
        </button>
      </div>
    </form>
  </div>

  <!-- Patient List -->
  <div class="bg-white mt-10 p-6 rounded-lg">
    <h3 class="text-xl font-bold mb-4">All Patients</h3>
    <table class="w-full table-auto">
      <thead>
        <tr class="text-left border-b">
          <th class="p-2">Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="patient in patients" :key="patient._id" class="border-b">
          <td class="p-2">{{ patient.name }}</td>
          <td>{{ patient.email }}</td>
          <td>{{ patient.phone }}</td>
          <td>{{ patient.department }}</td>
          <td>
            <button @click="editPatient(patient)" class="text-blue-600 mr-2">Edit</button>
            <button @click="deletePatient(patient._id)" class="text-red-600">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>
</template>

<script>
export default {
  name: "PatientForm",
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        nic: '',
        dob: '',
        gender: '',
        admissionDate: '',
        admissionTime: '',
        department: '',
        room: '',
        message: ''
      },
      isEditing: false,
      currentId: null,
      patients: []
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await fetch('http://localhost:5000/api/patients', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });
        const data = await res.json();
        alert(data.message || 'Patient saved!');
        this.resetForm();
        this.getPatients();
      } catch (error) {
        console.error(error);
        alert('Failed to save patient.');
      }
    },
    async getPatients() {
      try {
        const res = await fetch('http://localhost:5000/api/patients');
        const data = await res.json();
        this.patients = data;
      } catch (err) {
        console.error('Fetch failed:', err);
      }
    },
    async deletePatient(id) {
      if (confirm("Are you sure to delete this patient?")) {
        await fetch(`http://localhost:5000/api/patients/${id}`, {
          method: 'DELETE'
        });
        this.getPatients();
      }
    },
    editPatient(patient) {
      this.form = { ...patient };
      this.currentId = patient._id;
      this.isEditing = true;
    },
    async updatePatient() {
      await fetch(`http://localhost:5000/api/patients/${this.currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      alert('Patient updated!');
      this.resetForm();
      this.getPatients();
    },
    resetForm() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        nic: '',
        dob: '',
        gender: '',
        admissionDate: '',
        admissionTime: '',
        department: '',
        room: '',
        message: ''
      };
      this.isEditing = false;
      this.currentId = null;
    }
  },
  mounted() {
    this.getPatients();
  }
}
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
  border-color: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
}
</style>
