import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import ForgetPasswordpage from '../../src/pages/forget/ForgetPasswordpage.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

// import { createRouter, createWebHistory } from 'vue-router';
// import { routes } from '@/router';
import VueRouter from 'vue-router';
import Vue from 'vue';
const action = {
	forgetPasswordhandle: vi.fn(),
};

//Mocking the store
store = new Vuex.Store({
	modules: {
		auth: {
			namespaced: true,
			state: {
				userName: '',
				accessToken: '',
				response: '',
			},
			actions: action,
		},
	},
});

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

	it('Render text exist', async () => {
		//our component
		const wrapper = shallowMount(ForgetPasswordpage, {
			global: {
				components: {},
				mocks: {},
			},
		});
		expect(wrapper.find('#bottom').text()).contain(
			"Don't have an email or need assistance logging in"
		);
	});
});

//--------------------------------------------------------
//                     Testing clickig buttons
//--------------------------------------------------------

it('Testing clicking submit', () => {
	const wrapper = mount(ForgetPasswordpage, {
		props: {},
		global: {
			// OR:
			mocks: {
				$store: store,
				fetch: mockservice,
			},
		},
	});
	const resetBtn = wrapper.find('#reset-btn');
	const userName = wrapper.find('#userName');
	resetBtn
		.trigger('click')
		.then(() => {
			expect(this.response == 200).toBe(true);
			userName.setValue('norhan');
			expect(userName.element.value).toBe('norhan');
			expect(this.userName == userName.element.value).toBe(true);
		})
		.catch(function () {
			console.log('Promise Rejected');
		});
	return Promise.resolve();
});

//--------------------------------------------------------
//                     Testing clickig buttons Routing
//--------------------------------------------------------

test('test login button', async () => {
	const mockRoute = {
		//   params: {
		// 	id: 1
		//   }
	};
	const mockRouter = {
		push: vi.fn(),
	};

	const wrapper = shallowMount(ForgetPasswordpage, {
		props: {},
		global: {
			mocks: {
				$route: mockRoute,
				$router: mockRouter,
			},
		},
	});

	await wrapper
		.find('#login')
		.trigger('click')
		.then(() => {
			expect(wrapper.html()).toContain('Log in');
		});
});

test('test signup button', async () => {
	const mockRoute = {
		//   params: {
		// 	id: 1
		//   }
	};
	const mockRouter = {
		push: vi.fn(),
	};

	const wrapper = shallowMount(ForgetPasswordpage, {
		props: {},
		global: {
			mocks: {
				$route: mockRoute,
				$router: mockRouter,
			},
		},
	});

	await wrapper.find('#signup').trigger('click');

	// expect(mockRouter.push).toHaveBeenCalledTimes(1)
	expect(wrapper.html()).toContain('Sign Up');
});

//   test('redirect an unauthenticated user to 404', async () => {
// 	const mockRoute = {
// 	  params: {
// 		id: 1
// 	  }
// 	}
// 	const mockRouter = {
// 	  push: jest.fn()
// 	}

// 	const wrapper = mount(Component, {
// 	  props: {
// 		isAuthenticated: false
// 	  },
// 	  global: {
// 		mocks: {
// 		  $route: mockRoute,
// 		  $router: mockRouter
// 		}
// 	  }
// 	})

// 	await wrapper.find('button').trigger('click')

// 	expect(mockRouter.push).toHaveBeenCalledTimes(1)
// 	expect(mockRouter.push).toHaveBeenCalledWith('/404')
//   })

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
