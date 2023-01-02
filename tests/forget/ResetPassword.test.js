import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import ResetPassword from '../../src/pages/forget/ResetPassword.vue';




describe('ResetPassword.vue', () => {

	//it-> test block

	
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(ResetPassword, {
			global: {
				components: {},
				mocks: {$route: {params: { id: ""}},},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});


		it('test v-model', async () => {
			//our component
			const wrapper = shallowMount(ResetPassword, {
				global: {
					components: {},
					mocks: {$route: {params: { id: ""}},},
				},
			});
			
		

		//test password
		const password = wrapper.find('#password');
		await password.setValue('123456789');
		expect(password.element.value).toBe('123456789');
		//test password-verify
		const passwordverify = wrapper.find('#password-verify');
		await passwordverify.setValue('123456789');
		expect(passwordverify.element.value).toBe('123456789');
	});



	it('test v-if rendring', async () => {
		//our component
		const wrapper = shallowMount(ResetPassword, {
			global: {
				components: {},
				mocks: {$route: {params: { id: ""}},},
			},
		});
		expect(wrapper.find('#invalidPassword').exists()).toBe(false);
		expect(wrapper.find('#error').exists()).toBe(true);
		expect(wrapper.find('#success').exists()).toBe(false);
		expect(wrapper.find('#invalidPasswordverify').exists()).toBe(false);
	});

	

	it('form exist', async () => {
		//our component
		const wrapper = shallowMount(ResetPassword, {
			global: {
				components: {},
				mocks: {$route: {params: { id: ""}},},
			},
		});
		expect(wrapper.find('form').exists()).toBe(true);
	});

	
	it('Render text exist', async () => {
		//our component
		const wrapper = shallowMount(ResetPassword, {
			global: {
				components: {},
				mocks: {$route: {params: { id: ""}},},
			},
		});
		expect(wrapper.find ('.description').text ()).contain("Choose a new password here, then log in to your account.")
	});

});
/*
.trigger('click')
			.then(() => {
				expect(wrapper.text()).contain(
					'reddit uses a slightly-customized version of Markdown for formatting. See below for some basics, or check the commenting wiki page for more detailed help and solutions to common issues.'
				);
			})
			.catch(function () {
				//console.log('Promise Rejected');
			});





*/
