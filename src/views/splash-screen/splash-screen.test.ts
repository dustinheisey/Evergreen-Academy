import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { mount } from '@vue/test-utils'
import SplashScreen from './splash-screen.vue'

describe('Splash Screen', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // Set Pinia as active
  })
  it('renders correctly on / route', () => {
    const wrapper = mount(SplashScreen)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('should render all required buttons', () => {
    const wrapper = mount(SplashScreen)
    expect(wrapper.find('button#search_btn').exists()).toBe(true)
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true)
    expect(wrapper.find('button#qr_code_btn').exists()).toBe(true)
    expect(wrapper.find('button#explore_btn').exists()).toBe(true)
  })

  it('should render the logo', () => {
    const wrapper = mount(SplashScreen)
    expect(wrapper.find('.logo').exists()).toBe(true)
  })

  it('should render the background video', () => {
    const wrapper = mount(SplashScreen)
    expect(wrapper.find('.bg-img>video').exists()).toBe(true)
    expect(wrapper.find('.bg-img>.filter').exists()).toBe(true)
    expect(wrapper.find('.bg-img>.cover').exists()).toBe(true)
  })

  it('should hide all dialogs & menus by default', () => {
    const wrapper = mount(SplashScreen)
    expect(wrapper.findComponent({ name: 'ea-dialog-qr-code' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'ea-dialog-accessibility' }).exists()).toBe(false)
  })

  it('should open the qr code dialog when qr code button is clicked', async () => {
    const wrapper = mount(SplashScreen)
    const qrCodeButton = wrapper.find('button#qr_code_btn')
    await qrCodeButton.trigger('click')
    expect(wrapper.findComponent({ name: 'ea-dialog-qr-code' }).exists()).toBe(true)
  })

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    const wrapper = mount(SplashScreen)
    const accessibilityButton = wrapper.find('button#accessibility_btn')
    await accessibilityButton.trigger('click')
    expect(wrapper.findComponent({ name: 'ea-dialog-accessibility' }).exists()).toBe(true)
  })
})
