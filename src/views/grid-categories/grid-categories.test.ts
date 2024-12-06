import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import GridCategories from './grid-categories.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/splash-screen/splash-screen.vue') },
    { path: '/categories', component: () => import('@/views/grid-categories/grid-categories.vue') },
  ],
})

const props = {
  categories: [
    {
      name: 'Athletes',
      slug: 'athletics',
    },
  ],
}

const config = {
  global: {
    plugins: [router],
  },
  props,
}

describe('Category Grid', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // Set Pinia as active
  })

  it('renders correctly on /categories route', async () => {
    router.push('/categories')
    await router.isReady()

    const wrapper = mount(GridCategories, config)

    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('should render all required buttons', async () => {
    router.push('/categories')
    await router.isReady()

    const wrapper = mount(GridCategories, config)
    expect(wrapper.find('button#search_btn').exists()).toBe(true)
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true)
    expect(wrapper.find('button#qr_code_btn').exists()).toBe(true)
    expect(wrapper.find('button#back_btn').exists()).toBe(true)
  })

  it('should render the logo', async () => {
    router.push('/categories')
    await router.isReady()

    const wrapper = mount(GridCategories, config)
    expect(wrapper.find('.logo').exists()).toBe(true)
  })

  it('should render a grid of cards', async () => {
    router.push('/categories')
    await router.isReady()

    const wrapper = mount(GridCategories, config)
    const grid = wrapper.find('section.grid')
    expect(grid.exists()).toBe(true)
    expect(grid.findAllComponents({ name: 'ea-card-category' }).length).toBeGreaterThan(0)
  })

  it('should hide all dialogs & menus by default', async () => {
    router.push('/categories')
    await router.isReady()

    const wrapper = mount(GridCategories, config)
    expect(wrapper.findComponent({ name: 'dialog-qr-code' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'DialogAccessibility' }).exists()).toBe(false)
  })

  it('should open the qr code dialog when qr code button is clicked', async () => {
    router.push('/categories')
    await router.isReady()

    const wrapper = mount(GridCategories, config)
    const qrCodeButton = wrapper.find('button#qr_code_btn')
    await qrCodeButton.trigger('click')

    expect(wrapper.findComponent({ name: 'ea-dialog-qr-code' }).exists()).toBe(true)
  })

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    router.push('/categories')
    await router.isReady()

    const wrapper = mount(GridCategories, config)
    const accessibilityButton = wrapper.find('button#accessibility_btn')
    await accessibilityButton.trigger('click')
    expect(wrapper.findComponent({ name: 'ea-dialog-accessibility' }).exists()).toBe(true)
  })
})
