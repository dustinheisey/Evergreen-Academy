import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import GridGroups from './grid-groups.vue'

describe('Group Grid', () => {
  it('should render the main container', () => {
    const wrapper = mount(GridGroups)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('should render all required buttons', () => {
    const wrapper = mount(GridGroups)
    expect(wrapper.find('button#search_btn').exists()).toBe(true)
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true)
    expect(wrapper.find('button#hamburger_btn').exists()).toBe(true)
    expect(wrapper.find('button#back_btn').exists()).toBe(true)
  })

  it('should render the Logo component', () => {
    const wrapper = mount(GridGroups)
    expect(wrapper.findComponent({ name: 'Logo' }).exists()).toBe(true)
  })

  it('should render a grid of cards', () => {
    const wrapper = mount(GridGroups)
    const grid = wrapper.find('section.grid')
    expect(grid.exists()).toBe(true)
    expect(grid.findAllComponents({ name: 'Card' }).length).toBeGreaterThan(0)
  })

  it('should hide all dialogs & menus by default', () => {
    const wrapper = mount(GridGroups)
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(false)
    expect(wrapper.findComponent({ name: 'DialogAccessibility' }).exists()).toBe(false)
  })

  it('should open the search flyout when search button is clicked', async () => {
    const wrapper = mount(GridGroups)
    const searchButton = wrapper.find('button#search_btn')
    await searchButton.trigger('click')
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(true)
  })

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    const wrapper = mount(GridGroups)
    const accessibilityButton = wrapper.find('button#accessibility_btn')
    await accessibilityButton.trigger('click')
    expect(wrapper.findComponent({ name: 'DialogAccessibility' }).exists()).toBe(true)
  })

  it('should open the hamburger menu when hamburger button is clicked', async () => {
    const wrapper = mount(GridGroups)
    const hamburgerButton = wrapper.find('button#hamburger_btn')
    await hamburgerButton.trigger('click')
    expect(wrapper.findComponent({ name: 'MenuHamburger' }).exists()).toBe(true)
  })
})