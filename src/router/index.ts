import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '@views/splash-screen/splash-screen.vue'
import GridGroups from '@views/grid-groups/grid-groups.vue'
import GridStudents from '@views/grid-students/grid-students.vue'
import ReelAwards from '@views/reel-awards/reel-awards.vue'
import ProfileSimple from '@views/profile-simple/profile-simple.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SplashScreen,
    },
    {
      path: '/groups',
      name: 'groups',
      component: GridGroups,
    },
    {
      path: '/students',
      name: 'students',
      component: GridStudents,
    },
    {
      path: '/awards',
      name: 'awards',
      component: ReelAwards,
    },
    {
      path: '/simple-profile',
      name: 'simple-profile',
      component: ProfileSimple,
    },
  ],
})

export default router
