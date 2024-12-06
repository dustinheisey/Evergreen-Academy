import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import ReelAwards from './reel-awards.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/splash-screen/splash-screen.vue') },
    { path: '/awards', component: () => import('@/views/reel-awards/reel-awards.vue') },
  ],
})

const props = {
  awards: [
    {
      icon: 'speaking',
      name: 'Debate Leading Chapter',
      theme: 'primary',
      years: ['2000', '2004', '2009', '2011', '2016', '2020', '2023'],
    },
  ],
}

const config = {
  global: {
    plugins: [router],
  },
  props,
}

describe('Awards Reel', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // Set Pinia as active
  })

  it('renders correctly on /awards route', async () => {
    router.push('/awards')
    await router.isReady()

    const wrapper = mount(ReelAwards, config)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('should render all required buttons', async () => {
    router.push('/awards')
    await router.isReady()

    const wrapper = mount(ReelAwards, config)
    expect(wrapper.find('button#search_btn').exists()).toBe(true)
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true)
    expect(wrapper.find('button#qr_code_btn').exists()).toBe(true)
    expect(wrapper.find('button#back_btn').exists()).toBe(true)
  })

  it('should render the logo', async () => {
    router.push('/awards')
    await router.isReady()

    const wrapper = mount(ReelAwards, config)
    expect(wrapper.find('.logo').exists()).toBe(true)
  })

  it('should render a reel of awards cards', async () => {
    router.push('/awards')
    await router.isReady()

    const wrapper = mount(ReelAwards, config)
    const reel = wrapper.find('section.reel')
    expect(reel.exists()).toBe(true)
    expect(reel.findAllComponents({ name: 'ea-card-award' }).length).toBeGreaterThan(0)
  })

  it('should hide all dialogs & menus by default', async () => {
    router.push('/awards')
    await router.isReady()

    const wrapper = mount(ReelAwards, config)
    expect(wrapper.findComponent({ name: 'ea-dialog-qr-code' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'ea-dialog-accessibility' }).exists()).toBe(false)
  })

  it('should open the qr code dialog when qr code button is clicked', async () => {
    router.push('/awards')
    await router.isReady()

    const wrapper = mount(ReelAwards, config)
    const qrCodeButton = wrapper.find('button#qr_code_btn')
    await qrCodeButton.trigger('click')
    expect(wrapper.findComponent({ name: 'ea-dialog-qr-code' }).exists()).toBe(true)
  })

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    router.push('/awards')
    await router.isReady()

    const wrapper = mount(ReelAwards, config)
    const accessibilityButton = wrapper.find('button#accessibility_btn')
    await accessibilityButton.trigger('click')
    expect(wrapper.findComponent({ name: 'ea-dialog-accessibility' }).exists()).toBe(true)
  })
})
