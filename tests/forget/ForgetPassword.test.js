import { describe, expect, it, vitest } from 'vitest';
//import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import ForgetPasswordpage from '../../src/pages/forget/ForgetPasswordpage.vue';
import BaseButton from '../../src/components/BaseComponents/BaseButton.vue';
// import heRecaptcha "../../components/TheRecaptcha.vue"

describe('ForgetPasswordpage.vue', () => {
	//it-> test block
	it('test v-model', async () => {
		//our component
		const wrapper = shallowMount(ForgetPasswordpage, {
			global: {
				components: {
					// 'the-recaptcha': TheRecaptcha,
					'base-button': BaseButton,
				},
				mocks: {},
			},
		});

		//test username
		const userName = wrapper.find('#userName');
		await userName.setValue('norhan');
		expect(userName.element.value).toBe('norhan');
		//test emailaddress
		const emailAddress = wrapper.find('#emailAddress');
		await emailAddress.setValue('norhan@gmail.com');
		expect(emailAddress.element.value).toBe('norhan@gmail.com');
	});

	it('test v-if rendring', async () => {
		//our component
		const wrapper = shallowMount(ForgetPasswordpage, {
			global: {
				components: {
					// 'the-recaptcha': TheRecaptcha,
					'base-button': BaseButton,
				},
				mocks: {},
				data() {
					return {
						showSignuser: true,
						invalidUsernamelength: false,
					};
				},
			},
		});

		//showSignuser
		/*expect(wrapper.get('#invalidUsernamelength').text()).toEqual(
			'Username must be between 3 and 20 characters'
		);*/
	});
});
