import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import EmailsSettings from '../../src/pages/settings/EmailsSettings.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

// import { createRouter, createWebHistory } from 'vue-router';
// import { routes } from '@/router';
import VueRouter from 'vue-router';
import Vue from 'vue';
const action = {
	getnewFollowerEmail: vi.fn(),
	getSettings: vi.fn(),
	getunsubscribeFromEmails: vi.fn(),
};

//Mocking the store
let store = new Vuex.Store({
	modules: {
		setting: {
			namespaced: true,
			state: {
				accountSettings: {
					newFollowerEmail: true,
                    unsubscribeFromEmails: false,
				},
			},
			actions: action,
		},
	},
});
const setting = {
	newFollowerEmail: true,
    unsubscribeFromEmails: false,
};


describe('EmailsSettings', () => {
	//it-> test block
	it('component exist', async () => {
		//our component
		const wrapper = shallowMount(EmailsSettings, {
			created() {
				getSettings: vi.fn();
			},
			props: {},
			computed: {},
			data() {
				return {
					setting: {
                    newFollowerEmail: true,
                    unsubscribeFromEmails: false,
                    },
					newFollowerEmail: true,
                    unsubscribeFromEmails: false,
				};
			},
			methods: {
				getSettings: vi.fn(),
			},
			global: {
				components: {},
				mocks: {
					$store: store,
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('button is correct', () => {
		const wrapper =shallowMount(EmailsSettings, {
			created() {
				getSettings: vi.fn();
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('.h3-title');
		expect(byId.text()).toBe('New followers');
		
	});
	
});
