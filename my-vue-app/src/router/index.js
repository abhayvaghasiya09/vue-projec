import { createRouter, createWebHistory } from 'vue-router'

// Import the layout and pages
import CommonLayout from '@/layouts/MainLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'

import Home from '@/components/main/Home.vue'
import About from '@/components/main/About.vue'
import Appoinment from '@/components/main/Appoinment.vue'
import Appointments from '@/pages/admin/Appointments.vue'
import StaffForm from '@/pages/admin/StaffForm.vue'
import PatientForm from '@/pages/admin/PatientForm.vue'
import InvoiceForm from '@/pages/admin/InvoiceForm.vue'
import MedicineForm from '@/pages/admin/MedicineForm.vue'


const routes = [
  {
    path: '/',
    component: CommonLayout, // layout wrapper
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/appointment',
        name: 'Appoinment',
        component: Appoinment
      },
      {
        path: 'about',
        name: 'About',
        component: About
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('../components/main/Register.vue')
      },

      // Add more routes here
    ]
  },
   
  {
  path: '/admin',
  component: AdminLayout,
  children: [
    {
      path: 'appointments', // ✅ Relative path
      name: 'Appointments',
      component: Appointments
    },
    {
      path: 'staff', // ✅ Relative path
      name: 'StaffForm',
      component: StaffForm
    },
    {
      path: 'patient', // ✅ Relative path
      name: 'PatientForm',
      component: PatientForm
    },
    {
      path: 'invoice',
      name: 'Invoice',
      component: InvoiceForm
    },
     {
      path: 'medicine',
      name: 'Medicine',
      component: MedicineForm
    },
  ]
}

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
