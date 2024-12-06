import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import ProfileSimple from './profile-simple.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('@/views/splash-screen/splash-screen.vue') },
    {
      path: '/profile/:slug',
      component: () => import('@/views/profile-simple/profile-simple.vue'),
    },
  ],
})

const props = {
  slug: 'jordan-smith',
  name: 'Jordan Smith',
  year: '2024',
  category: 'athletics',
  team: 'Varsity Soccer',
  intro: 'Jordan is the captain of the Varsity Soccer Team.',
  description:
    'As captain, Jordan led the team to the state championships in 2024, showcasing exceptional leadership both on and off the field. Known for their agility and strategic gameplay, Jordan has become a role model for younger players, inspiring teamwork and determination across the team.',
}

const config = {
  global: {
    plugins: [router],
  },
  props,
}

describe('Simple Profile', () => {
  beforeEach(() => {
    setActivePinia(createPinia()) // Set Pinia as active
  })

  it('renders correctly on /profile/jordan-smith route', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('should render all required buttons', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    expect(wrapper.find('[id=search_btn]').exists()).toBe(true)
    expect(wrapper.find('[id=accessibility_btn]').exists()).toBe(true)
    expect(wrapper.find('[id=qr_code_btn]').exists()).toBe(true)
    expect(wrapper.find('[id=back_btn]').exists()).toBe(true)
  })

  it('should render the logo', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    expect(wrapper.find('.logo').exists()).toBe(true)
  })

  it('should render the profile image', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    expect(wrapper.find('img').exists()).toBe(true)
  })

  it('should render the ProfileText component', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    expect(wrapper.findComponent({ name: 'ea-profile-text' }).exists()).toBe(true)
  })

  it('should hide all dialogs & menus by default', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    expect(wrapper.findComponent({ name: 'ea-dialog-qr-code' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'ea-dialog-accessibility' }).exists()).toBe(false)
  })

  it('should open the qr code dialog when qr code button is clicked', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    const qrCodeButton = wrapper.find('button#qr_code_btn')
    await qrCodeButton.trigger('click')
    expect(wrapper.findComponent({ name: 'ea-dialog-qr-code' }).exists()).toBe(true)
  })

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    router.push('/profile/jordan-smith')
    await router.isReady()

    const wrapper = mount(ProfileSimple, config)
    const accessibilityButton = wrapper.find('button#accessibility_btn')
    await accessibilityButton.trigger('click')
    expect(wrapper.findComponent({ name: 'ea-dialog-accessibility' }).exists()).toBe(true)
  })
})
