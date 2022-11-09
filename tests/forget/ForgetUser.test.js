import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import ForgetUsernamepage from '../../src/pages/forget/ForgetUsernamepage.vue';


describe('ForgetUsernamepage.vue', () => {
	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(ForgetUsernamepage, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('test v-model', async () => {
		//our component
		const wrapper = shallowMount(ForgetUsernamepage, {
			global: {
				components: {},
				mocks: {},
			},
		});

		//test emailaddress
		const emailAddress = wrapper.find('#emailAddress');
		await emailAddress.setValue('norhan@gmail.com');
		expect(emailAddress.element.value).toBe('norhan@gmail.com');
	});

	it('test v-if rendring', async () => {
		//our component
		const wrapper = shallowMount(ForgetUsernamepage, {
			global: {
				components: {},
				mocks: {},
				data() {
					return {};
				},
			},
		});

		
		expect(wrapper.find('#invalidEmail').exists()).toBe(false);
		expect(wrapper.find('#error').exists()).toBe(true);
		expect(wrapper.find('#success').exists()).toBe(false);
	});

	it('form exist', async () => {
		//our component
		const wrapper = mount(ForgetUsernamepage, {
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

	it('Render text exist', async () => {
		//our component
		const wrapper = shallowMount(ForgetUsernamepage, {
			global: {
				components: {},
				mocks: {},
			},
		});
	expect(wrapper.find ('#bottom').text ()).contain("Don't have an email or need assistance logging in")
		
	});
});

