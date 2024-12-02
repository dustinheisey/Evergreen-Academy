import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils';
import SplashScreen from './SplashScreen.vue';

describe('Splash Screen', () => {
  it('should render the main container', () => {
    const wrapper = mount(SplashScreen);
    expect(wrapper.find('main').exists()).toBe(true);
  });

  it('should render all required buttons', () => {
    const wrapper = mount(SplashScreen);
    expect(wrapper.find('button#explore_btn').exists()).toBe(true);
    expect(wrapper.find('button#search_btn').exists()).toBe(true);
    expect(wrapper.find('button#social_btn').exists()).toBe(true);
    expect(wrapper.find('button#qr_code_btn').exists()).toBe(true);
    expect(wrapper.find('button#accessibility_btn').exists()).toBe(true);
  });

  it('should render the background video', () => {
    const wrapper = mount(SplashScreen);
    expect(wrapper.find('video.bg-video').exists()).toBe(true);
  });

  it('should render the Logo component', () => {
    const wrapper = mount(SplashScreen);
    expect(wrapper.findComponent({ name: 'Logo' }).exists()).toBe(true);
  });

  it('should hide all dialogs & menus by default', () => {
    const wrapper = mount(SplashScreen);
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: 'DialogSocial' }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: 'DialogQRCode' }).exists()).toBe(false);
    expect(wrapper.findComponent({ name: 'DialogAccessibility'}).exists()).toBe(false);
  });

  it('should open the search flyout when search button is clicked', async () => {
    const wrapper = mount(SplashScreen);
    const searchButton = wrapper.find('button#search_btn');
    await searchButton.trigger('click');
    expect(wrapper.findComponent({ name: 'MenuSearch' }).exists()).toBe(true);
  });

  it('should open the social dialog when social button is clicked', async () => {
    const wrapper = mount(SplashScreen);
    const socialButton = wrapper.find('button#social_btn');
    await socialButton.trigger('click');
    expect(wrapper.findComponent({ name: 'SocialDialog' }).exists()).toBe(true);
  });

  it('should open the qr code dialog when qr code button is clicked', async () => {
    const wrapper = mount(SplashScreen);
    const qrCodeButton = wrapper.find('button#qr_code_btn');
    await qrCodeButton.trigger('click');
    expect(wrapper.findComponent({ name: 'QRCodeDialog' }).exists()).toBe(true);
  });

  it('should open the accessibility dialog when accessibility button is clicked', async () => {
    const wrapper = mount(SplashScreen);
    const accessibilityButton = wrapper.find('button#accessibility_btn');
    await accessibilityButton.trigger('click');
    expect(wrapper.findComponent({ name: 'DialogAccessibility'}).exists()).toBe(true);
  });
});
