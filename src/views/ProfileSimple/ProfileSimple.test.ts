import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import ProfileSimple from './ProfileSimple.vue';

describe('Simple Profile', () => {
  it('should render the main container', () => {
    const wrapper = mount(ProfileSimple);
    expect(wrapper.find('main').exists()).toBe(true);
  });

  it('should render all required buttons', () => {
    const wrapper = mount(ProfileSimple);
    expect(wrapper.find('button#search_btn').exists()).toBe(true);
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true);
    expect(wrapper.find('button#back_btn').exists()).toBe(true);
  });

  it('should render the Logo component', () => {
    const wrapper = mount(ProfileSimple);
    expect(wrapper.findComponent({ name: 'Logo' }).exists()).toBe(true);
  });

  it('should render the profile image', () => {
    const wrapper = mount(ProfileSimple);
    expect(wrapper.find('img').exists()).toBe(true);
  });

  it('should render the ProfileText component', () => {
    const wrapper = mount(ProfileSimple);
    expect(wrapper.findComponent({ name: 'ProfileText' }).exists()).toBe(true);
  });

  it('should hide all dialogs & menus by default', () => {
    const wrapper = mount(ProfileSimple);
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: 'DialogAccessibility'}).exists()).toBe(false);
  });

  it('should open the search flyout when search button is clicked', async () => {
    const wrapper = mount(ProfileSimple);
    const searchButton = wrapper.find('button#search_btn');
    await searchButton.trigger('click');
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(true);
  });

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    const wrapper = mount(ProfileSimple);
    const accessibilityButton = wrapper.find('button#accessibility_btn');
    await accessibilityButton.trigger('click');
    expect(wrapper.findComponent({ name: 'DialogAccessibility'}).exists()).toBe(true);
  });

  it('should open the hamburger menu when hamburger button is clicked', async () => {
    const wrapper = mount(ProfileSimple);
    const hamburgerButton = wrapper.find('button#hamburger_btn');
    await hamburgerButton.trigger('click');
    expect(wrapper.findComponent({ name: 'MenuHamburger' }).exists()).toBe(true);
  });
});
