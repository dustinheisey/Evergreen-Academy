import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import GridStudents from './grid-students.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/splash-screen/splash-screen.vue') },
    {
      path: '/students/athletics',
      component: () => import('@/views/grid-students/grid-students.vue'),
    },
  ],
})

const props = {
  students: [
    {
      slug: 'jordan-smith',
      name: 'Jordan Smith',
      year: '2024',
      category: 'athletics',
      team: 'Varsity Soccer',
      intro: 'Jordan is the captain of the Varsity Soccer Team.',
      description:
        'As captain, Jordan led the team to the state championships in 2024, showcasing exceptional leadership both on and off the field. Known for their agility and strategic gameplay, Jordan has become a role model for younger players, inspiring teamwork and determination across the team.',
    },
  ],
}

const config = {
  global: {
    plugins: [router],
  },
  props,
}

describe('Item Grid', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // Set Pinia as active
  })

  it('renders correctly on /students/athletics route', async () => {
    router.push('/students/athletics')
    await router.isReady()

    const wrapper = mount(GridStudents, config)

    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('should render all required buttons', async () => {
    router.push('/students/athletics')
    await router.isReady()

    const wrapper = mount(GridStudents, config)
    expect(wrapper.find('button#search_btn').exists()).toBe(true)
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true)
    expect(wrapper.find('button#qr_code_btn').exists()).toBe(true)
    expect(wrapper.find('button#back_btn').exists()).toBe(true)
  })

  it('should render the logo', async () => {
    router.push('/students/athletics')
    await router.isReady()

    const wrapper = mount(GridStudents, config)
    expect(wrapper.find('.logo').exists()).toBe(true)
  })

  it('should render a grid of cards', async () => {
    router.push('/students/athletics')
    await router.isReady()

    const wrapper = mount(GridStudents, config)
    const grid = wrapper.find('section.grid')
    expect(grid.exists()).toBe(true)
    expect(grid.findAllComponents({ name: 'ea-card-student' }).length).toBeGreaterThan(0)
  })

  it('should hide all dialogs & menus by default', async () => {
    router.push('/students/athletics')
    await router.isReady()

    const wrapper = mount(GridStudents, config)

    const qrCodeDialog: HTMLDialogElement = wrapper
      .findComponent({ name: 'ea-dialog-qr-code' })
      .find('dialog').element
    const accessibilityDialog: HTMLDialogElement = wrapper
      .findComponent({ name: 'ea-dialog-accessibility' })
      .find('dialog').element

    expect(qrCodeDialog.open).toBe(false)
    expect(accessibilityDialog.open).toBe(false)
  })

  it('should open the qr code dialog when qr code button is clicked', async () => {
    router.push('/students/athletics')
    await router.isReady()

    const wrapper = mount(GridStudents, config)
    const qrCodeButton = wrapper.find('button#qr_code_btn')
    const qrCodeDialog: HTMLDialogElement = wrapper
      .findComponent({ name: 'ea-dialog-qr-code' })
      .find('dialog').element
    await qrCodeButton.trigger('click')
    expect(qrCodeDialog.open).toBe(true)
  })

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    router.push('/students/athletics')
    await router.isReady()

    const wrapper = mount(GridStudents, config)
    const accessibilityButton = wrapper.find('button#accessibility_btn')
    const accessibilityDialog: HTMLDialogElement = wrapper
      .findComponent({ name: 'ea-dialog-accessibility' })
      .find('dialog').element
    await accessibilityButton.trigger('click')
    expect(accessibilityDialog.open).toBe(true)
  })
})
