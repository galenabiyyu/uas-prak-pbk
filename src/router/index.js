import { createRouter, createWebHistory } from 'vue-router'
import WeatherWidget from '../components/WeatherWidget.vue'
import Task1 from '../components/Task1.vue'
// Add more tasks as needed

const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/task1', component: Task1 },
  // Add more routes for other tasks
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router