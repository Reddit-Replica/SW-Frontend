import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import LoginPage from '../../src/pages/login/LoginPage.vue';
describe('LoginPage.vue', () => {
	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(LoginPage, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('test v-model', async () => {
		//our component
		const wrapper = shallowMount(LoginPage, {
			global: {
				components: {},
				mocks: {},
			},
		});

		//test username
		const UserName = wrapper.find('#user-name');
		await UserName.setValue('karim');
		expect(UserName.element.value).toBe('karim');
		//test password
		const password = wrapper.find('#password');
		await password.setValue('k123456789');
		expect(password.element.value).toBe('k123456789');
	});

	it('test v-if rendring', async () => {
		//our component
		const wrapper = shallowMount(LoginPage, {
			global: {
				components: {},
				mocks: {},
				data() {
					return {};
				},
			},
		});

		expect(wrapper.find('#messageErrorShowUser').exists()).toBe(false);
		expect(wrapper.find('#messageErrorShowPass').exists()).toBe(false);
		expect(wrapper.find('#showSignuser').exists()).toBe(false);
	});

	it('form exist', async () => {
		//our component
		const wrapper = mount(LoginPage, {
			global: {
				components: {},
				mocks: {},
				data() {
					return {};
				},
			},
		});

		// trigger the element
		expect(wrapper.find('form').exists()).toBe(true);

	});

	
});