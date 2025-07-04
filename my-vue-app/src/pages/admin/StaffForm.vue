<template>
  <section class="py-20">
    <div class="bg-white rounded-2xl p-4">
      <h2 class="text-2xl font-bold text-gray-700">Hospital Staff Management</h2>
    </div>

    <!-- Staff Form -->
    <div class="bg-white p-6 mt-6 rounded-2xl">
      <form @submit.prevent="isEditing ? updateStaff() : createStaff()" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input v-model="form.name" type="text" placeholder="Full Name" class="input-style" required />
          <input v-model="form.email" type="email" placeholder="Email" class="input-style" required />
          <input v-model="form.phone" type="text" placeholder="Phone" class="input-style" required />
          <input v-model="form.nic" type="text" placeholder="NIC" class="input-style" required />
          <input v-model="form.dob" type="date" class="input-style" required />

          <select v-model="form.department" class="input-style" required>
            <option disabled value="">Select Department</option>
            <option>General</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Emergency</option>
          </select>

          <select v-model="form.role" class="input-style" required>
            <option disabled value="">Select Role</option>
            <option>Doctor</option>
            <option>Nurse</option>
            <option>Receptionist</option>
            <option>Lab Technician</option>
          </select>

          <select v-model="form.status" class="input-style" required>
            <option disabled value="">Select Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <div class="text-center">
          <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            {{ isEditing ? 'Update Staff' : 'Add Staff' }}
          </button>
        </div>
      </form>
    </div>

    <!-- Staff Table -->
    <div class="bg-white p-6 mt-8 rounded-2xl">
      <h3 class="text-xl font-bold text-gray-700 mb-4">All Staff</h3>
      <table class="w-full text-left">
        <thead>
          <tr class="border-b">
            <th class="py-2">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="staff in staffList" :key="staff._id">
            <td>{{ staff.name }}</td>
            <td>{{ staff.email }}</td>
            <td>{{ staff.phone }}</td>
            <td>{{ staff.role }}</td>
            <td>{{ staff.status }}</td>
            <td>
              <button @click="editStaff(staff)" class="text-blue-600 mr-2">Edit</button>
              <button @click="deleteStaff(staff._id)" class="text-red-600">Delete</button>
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
      form: {
        name: '', email: '', phone: '', nic: '', dob: '', department: '', role: '', status: ''
      },
      isEditing: false,
      currentId: null,
      staffList: []
    };
  },
  methods: {
    async fetchStaff() {
      const res = await fetch('http://localhost:5000/api/staff');
      this.staffList = await res.json();
    },
    async createStaff() {
      await fetch('http://localhost:5000/api/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      alert('Staff added!');
      this.resetForm();
      this.fetchStaff();
    },
    editStaff(staff) {
      this.form = { ...staff };
      this.currentId = staff._id;
      this.isEditing = true;
    },
    async updateStaff() {
      await fetch(`http://localhost:5000/api/staff/${this.currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      alert('Staff updated!');
      this.resetForm();
      this.fetchStaff();
    },
    async deleteStaff(id) {
      if (confirm('Are you sure you want to delete this staff?')) {
        await fetch(`http://localhost:5000/api/staff/${id}`, { method: 'DELETE' });
        alert('Staff deleted!');
        this.fetchStaff();
      }
    },
    resetForm() {
      this.form = { name: '', email: '', phone: '', nic: '', dob: '', department: '', role: '', status: '' };
      this.isEditing = false;
      this.currentId = null;
    }
  },
  mounted() {
    this.fetchStaff();
  }
};
</script>

<style scoped>
.input-style {
  padding: 0.75rem;
  border: 8px solid #d1d5db;
  border-radius: 0.375rem;
  width: 100%;
  outline: none;
}
.input-style:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}
</style>