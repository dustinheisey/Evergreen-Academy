import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import ProfileGallery from './ProfileGallery.vue';

describe('Simple Profile', () => {
  it('should render the main container', () => {
    const wrapper = mount(ProfileGallery);
    expect(wrapper.find('main').exists()).toBe(true);
  });

  it('should render all required buttons', () => {
    const wrapper = mount(ProfileGallery);
    expect(wrapper.find('button#search_btn').exists()).toBe(true);
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true);
    expect(wrapper.find('button#back_btn').exists()).toBe(true);
  });

  it('should render the Logo component', () => {
    const wrapper = mount(ProfileGallery);
    expect(wrapper.findComponent({ name: 'Logo' }).exists()).toBe(true);
  });

  it('should render the BtnGroup component', () => {
    const wrapper = mount(ProfileGallery);
    expect(wrapper.findComponent({ name: 'BtnGroup' }).exists()).toBe(true);
  });

  it('should render the Slideshow component', () => {
    const wrapper = mount(ProfileGallery);
    expect(wrapper.findComponent({name: 'Slideshow'}).exists()).toBe(true);
  });

  it('should hide all dialogs & menus by default', () => {
    const wrapper = mount(ProfileGallery);
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: 'DialogAccessibility'}).exists()).toBe(false);
  });

  it('should open the search flyout when search button is clicked', async () => {
    const wrapper = mount(ProfileGallery);
    const searchButton = wrapper.find('button#search_btn');
    await searchButton.trigger('click');
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(true);
  });

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    const wrapper = mount(ProfileGallery);
    const accessibilityButton = wrapper.find('button#accessibility_btn');
    await accessibilityButton.trigger('click');
    expect(wrapper.findComponent({ name: 'DialogAccessibility'}).exists()).toBe(true);
  });

  it('should open the hamburger menu when hamburger button is clicked', async () => {
    const wrapper = mount(ProfileGallery);
    const hamburgerButton = wrapper.find('button#hamburger_btn');
    await hamburgerButton.trigger('click');
    expect(wrapper.findComponent({ name: 'MenuHamburger' }).exists()).toBe(true);
  });
});
