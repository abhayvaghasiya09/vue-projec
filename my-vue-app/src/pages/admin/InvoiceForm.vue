<template>
<section class="py-20">
  <!-- Invoice Form -->
  <div class="bg-white p-8 rounded-2xl">
    <h2 class="text-2xl font-bold text-gray-700 mb-4">{{ isEditing ? 'Edit' : 'Create' }} Invoice</h2>
    <form @submit.prevent="isEditing ? updateInvoice() : createInvoice()" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input v-model="form.invoiceNumber" type="text" placeholder="Invoice Number" class="input-style" required />
        <input v-model="form.date" type="date" class="input-style" required />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input v-model="form.patientName" type="text" placeholder="Patient Name" class="input-style" required />
        <input v-model="form.patientContact" type="tel" placeholder="Patient Contact" class="input-style" required />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input v-model="form.service" type="text" placeholder="Service" class="input-style" required />
        <input v-model="form.amount" type="number" placeholder="Amount" class="input-style" required />
      </div>
      <div>
        <textarea v-model="form.notes" rows="3" placeholder="Additional Notes" class="input-style"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          {{ isEditing ? 'Update' : 'Save' }} Invoice
        </button>
      </div>
    </form>
  </div>

  <!-- Invoice List -->
  <div class="mt-10 bg-white p-6 rounded-2xl">
    <h3 class="text-xl font-semibold mb-4">All Invoices</h3>
    <table class="w-full text-left border-collapse">
      <thead>
        <tr>
          <th class="border p-2">Invoice #</th>
          <th class="border p-2">Patient</th>
          <th class="border p-2">Amount</th>
          <th class="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in invoices" :key="invoice._id">
          <td class="border p-2">{{ invoice.invoiceNumber }}</td>
          <td class="border p-2">{{ invoice.patientName }}</td>
          <td class="border p-2">Rs. {{ invoice.amount }}</td>
          <td class="border p-2">
            <button @click="editInvoice(invoice)" class="text-blue-600 mr-3">Edit</button>
            <button @click="deleteInvoice(invoice._id)" class="text-red-600">Delete</button>
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
      invoices: [],
      form: {
        invoiceNumber: '',
        date: '',
        patientName: '',
        patientContact: '',
        service: '',
        amount: '',
        notes: ''
      },
      isEditing: false,
      currentId: null
    }
  },
  methods: {
    async fetchInvoices() {
      const res = await fetch('http://localhost:5000/api/invoices');
      this.invoices = await res.json();
    },
    async createInvoice() {
      const res = await fetch('http://localhost:5000/api/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      const data = await res.json();
      alert(data.message || 'Invoice saved!');
      this.resetForm();
      this.fetchInvoices();
    },
    editInvoice(invoice) {
      this.form = { ...invoice };
      this.currentId = invoice._id;
      this.isEditing = true;
    },
    async updateInvoice() {
      const res = await fetch(`http://localhost:5000/api/invoices/${this.currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.form)
      });
      const data = await res.json();
      alert(data.message || 'Invoice updated!');
      this.resetForm();
      this.fetchInvoices();
    },
    async deleteInvoice(id) {
      if (confirm('Are you sure you want to delete this invoice?')) {
        await fetch(`http://localhost:5000/api/invoices/${id}`, {
          method: 'DELETE'
        });
        alert('Invoice deleted!');
        this.fetchInvoices();
      }
    },
    resetForm() {
      this.form = {
        invoiceNumber: '',
        date: '',
        patientName: '',
        patientContact: '',
        service: '',
        amount: '',
        notes: ''
      };
      this.isEditing = false;
      this.currentId = null;
    }
  },
  mounted() {
    this.fetchInvoices();
  }
}
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
