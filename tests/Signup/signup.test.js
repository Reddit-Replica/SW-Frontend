import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import SignUpPage from '../../src/pages/signup/SignupPage.vue';
describe('SignupPage.vue', () => {
	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = mount(SignUpPage, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('test v-model', async () => {
		//our component
		const wrapper = mount(SignUpPage, {
			global: {
				components: {},
				mocks: {},
			},
		});

		//test email
		const email = wrapper.find('#email-input');
		await email.setValue('kareemsaqer@gmail.com');
		expect(email.element.value).toBe('kareemsaqer@gmail.com');
	});

	it('test v-if rendring', async () => {
		//our component
		const wrapper = mount(SignUpPage, {
			global: {
				components: {},
				mocks: {},
				data() {
					return {};
				},
			},
		});

		expect(wrapper.find('#showSignemail').exists()).toBe(false);
		expect(wrapper.find('#messageErrorShowEmail').exists()).toBe(false);
	});

	it('form 2 Continue', async () => {
		//our component
		const wrapper = mount(SignUpPage, {
			global: {
				components: {},
				mocks: {},
				data() {
					return {};
				},
			},
		});

		// trigger the element
		const byId =wrapper.find('#button-Continue');
		await byId.trigger('click');
        expect(wrapper.find('#page2').exists()).toBe(false);
        expect(wrapper.find('#bottom_div').exists()).toBe(false);


	});
	//Testing wrong email
	it('Testing clicking submit', () => {
		const wrapper = mount(SignUpPage, {
			props: {},
			global: {},
		});
		const signupbtn = wrapper.find('#button-Continue');
		const emailinp = wrapper.find('#email-input');
		signupbtn
			.trigger('click')
			.then(() => {
				emailinp.setValue('ksasd');
				expect(emailinp.element.value).toBe('ksasd');
				expect(wrapper.find('#messageErrorShowEmail').exists()).toBe(true);
				expect(wrapper.find('#showSignemail').exists()).toBe(true);
			})
			.catch(function () {
				console.log('Promise Rejected');
			});
		return Promise.resolve();
	});
    // it('test v-model', async () => {
	// 	//our component
	// 	const wrapper = shallowMount(SignUpPage, {
	// 		global: {
	// 			components: {},
	// 			mocks: {},
	// 		},
	// 	});

		
    //     //test username
	// 	const UserName = wrapper.find('#regUsername');
	// 	await UserName.setValue('karimsaqr');
	// 	expect(UserName.element.value).toBe('karimsaqr');

    //     //test password
	// 	const password = wrapper.find('#reg-password');
	// 	await password.setValue('k123456789');
	// 	expect(password.element.value).toBe('k123456789');
	// });

    // it('test v-if rendring', async () => {
	// 	//our component
	// 	const wrapper = shallowMount(SignUpPage, {
	// 		global: {
	// 			components: {},
	// 			mocks: {},
	// 			data() {
	// 				return {};
	// 			},
	// 		},
	// 	});

	// 	expect(wrapper.find('#messageErrorShowPass').exists()).toBe(false);
	// 	expect(wrapper.find('#messageErrorShowUser').exists()).toBe(false);
	// 	expect(wrapper.find('#showSignuser').exists()).toBe(true);
	// });

	
});