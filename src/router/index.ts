import { createRouter, createWebHistory } from 'vue-router'
import SplashScreen from '@/views/splash-screen/splash-screen.vue'
import data from '@/data.json'
import type { Category, Student } from '../types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SplashScreen,
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/views/grid-categories/grid-categories.vue'),
      props: () => ({
        categories: data.categories,
      }),
    },
    ...data.categories.map((category: Category) => ({
      path: `/students/${category.slug}`,
      name: `${category.name} Students`,
      component: () => import('@/views/grid-students/grid-students.vue'),
      props: () => ({
        students: data.students.filter((student: Student) => student.category === category.slug),
      }),
    })),
    ...data.students.map((student: Student) => ({
      path: `/profile/${student.slug}`,
      name: student.slug,
      component: () => import('@/views/profile-simple/profile-simple.vue'),
      props: () => student,
    })),
    {
      path: '/awards',
      name: 'awards',
      component: () => import('@/views/reel-awards/reel-awards.vue'),
      props: () => ({
        awards: data.awards,
      }),
    },
  ],
})

export default router
