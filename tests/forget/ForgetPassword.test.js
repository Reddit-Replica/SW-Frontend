import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import ForgetPasswordpage from '../../src/pages/forget/ForgetPasswordpage.vue';




describe('ForgetPasswordpage.vue', () => {
	//it-> test block
	it('Render component exist', async () => {
		//our component
		const wrapper = shallowMount(ForgetPasswordpage, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('test v-model', async () => {
		//our component
		const wrapper = shallowMount(ForgetPasswordpage, {
			global: {
				components: {},
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
				components: {},
				mocks: {},
				data() {
					return {};
				},
			},
		});

		expect(wrapper.find('#invalidUsernamelength').exists()).toBe(false);
		expect(wrapper.find('#invalidEmail').exists()).toBe(false);
		expect(wrapper.find('#error').exists()).toBe(true);
		expect(wrapper.find('#success').exists()).toBe(false);
	});

	it('form exist', async () => {
		//our component
		const wrapper = mount(ForgetPasswordpage, {
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

	/*it('test router', async () => {
		const router = new VueRouter({ routes })
		const wrapper = mount(App, { 
		  localVue,
		  router
		})
	
		router.push("/forgetPasswordpage")
		await wrapper.vm.$nextTick()
	
		expect(wrapper.findComponent(ForgetPasswordpage).exists()).toBe(false)
	})*/
});
/*
.trigger('click')
			.then(() => {
				expect(wrapper.text()).contain(
					'reddit uses a slightly-customized version of Markdown for formatting. See below for some basics, or check the commenting wiki page for more detailed help and solutions to common issues.'
				);
			})
			.catch(function () {
				console.log('Promise Rejected');
			});





*/
