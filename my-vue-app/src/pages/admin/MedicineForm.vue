<template>
<section class="py-20">
  <div class="bg-white rounded-2xl p-4">
    <h2 class="text-2xl font-bold text-gray-700">{{ isEditing ? 'Edit Medicine' : 'Add New Medicine' }}</h2>
  </div>

  <!-- Medicine Form -->
  <div class="bg-white p-8 border-gray-300 rounded-lg mt-4">
    <form @submit.prevent="isEditing ? updateMedicine() : createMedicine()" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input v-model="form.medicineName" type="text" placeholder="Medicine Name" class="input-style" required />
        <input v-model="form.supplierName" type="text" placeholder="Supplier Name" class="input-style" required />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input v-model="form.expiryDate" type="date" class="input-style" required />
        <input v-model="form.manufactureDate" type="date" class="input-style" required />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input v-model="form.qty" type="number" placeholder="Quantity" class="input-style" required />
        <input v-model="form.unitPrice" type="number" placeholder="Unit Price (Rs.)" class="input-style" required />
      </div>
      <div class="text-center pt-4">
        <button type="submit" class="px-8 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
          {{ isEditing ? 'Update Medicine' : 'Save Medicine' }}
        </button>
      </div>
    </form>
  </div>

  <!-- Medicines List -->
  <div class="bg-white p-6 rounded-lg mt-10">
    <h3 class="text-xl font-semibold mb-4">All Medicines</h3>
    <table class="w-full text-left border-collapse">
      <thead>
        <tr>
          <th class="border p-2">Name</th>
          <th class="border p-2">Supplier</th>
          <th class="border p-2">Qty</th>
          <th class="border p-2">Unit Price</th>
          <th class="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="medicine in medicines" :key="medicine._id">
          <td class="border p-2">{{ medicine.medicineName }}</td>
          <td class="border p-2">{{ medicine.supplierName }}</td>
          <td class="border p-2">{{ medicine.qty }}</td>
          <td class="border p-2">Rs. {{ medicine.unitPrice }}</td>
          <td class="border p-2">
            <button @click="editMedicine(medicine)" class="text-blue-600 mr-3">Edit</button>
            <button @click="deleteMedicine(medicine._id)" class="text-red-600">Delete</button>
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
        medicineName: '',
        supplierName: '',
        expiryDate: '',
        manufactureDate: '',
        qty: '',
        unitPrice: ''
      },
      medicines: [],
      isEditing: false,
      currentId: null
    };
  },
  methods: {
    async fetchMedicines() {
      const res = await fetch('http://localhost:5000/api/medicines');
      this.medicines = await res.json();
    },
    async createMedicine() {
      const res = await fetch('http://localhost:5000/api/medicines', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      alert('Medicine added!');
      this.resetForm();
      this.fetchMedicines();
    },
    editMedicine(med) {
      this.form = { ...med };
      this.currentId = med._id;
      this.isEditing = true;
    },
    async updateMedicine() {
      await fetch(`http://localhost:5000/api/medicines/${this.currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      alert('Medicine updated!');
      this.resetForm();
      this.fetchMedicines();
    },
    async deleteMedicine(id) {
      if (confirm('Are you sure you want to delete this medicine?')) {
        await fetch(`http://localhost:5000/api/medicines/${id}`, {
          method: 'DELETE'
        });
        alert('Medicine deleted!');
        this.fetchMedicines();
      }
    },
    resetForm() {
      this.form = {
        medicineName: '',
        supplierName: '',
        expiryDate: '',
        manufactureDate: '',
        qty: '',
        unitPrice: ''
      };
      this.isEditing = false;
      this.currentId = null;
    }
  },
  mounted() {
    this.fetchMedicines();
  }
};
</script>

<style scoped>
.input-style {
  width: 100%;
  padding: 0.75rem;
  border: 8px solid #d1d5db;
  border-radius: 0.5rem;
  outline: none;
}
.input-style:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
}
</style>