import { createRouter, createWebHistory } from 'vue-router'
import AppComponent from '../components/AppContent.vue'
import AppAbout from '../components/AppAbout.vue'
import AppProfile from '../components/AppProfile.vue'
import AppPhotos from '../components/AppPhotos.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: AppComponent
      },
      {
        path: '/about',
        name: 'about',
        component: AppAbout
      },
      {
        path: '/profile',
        name: 'profile',
        component: AppProfile
      },
      {
        path: '/photos',
        name: 'photos',
        component: AppPhotos
      }
    ]
  })
  
  export default router
