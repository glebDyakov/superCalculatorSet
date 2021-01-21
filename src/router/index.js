import Vue from 'vue'
import VueRouter from 'vue-router'
import Calculator from '@/views/Calculator.vue'
import EnginerCalculator from '@/views/EnginerCalculator.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/engine',
    name: 'EnginerCalculator',
    component: EnginerCalculator
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
