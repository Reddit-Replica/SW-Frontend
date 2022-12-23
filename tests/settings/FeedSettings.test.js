import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import FeedSettings from '../../src/pages/settings/FeedSettings.vue';
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
					adultContent: true,
                    autoplayMedia: false,
                    create: false,
                    
				},
			},
			actions: action,
		},
	},
});


describe('EmailsSettings', () => {
	//it-> test block
	it('component exist', async () => {
		//our component
		const wrapper = shallowMount(FeedSettings, {
			created() {
				getSettings: vi.fn();
			},
			props: {},
			computed: {},
			data() {
				return {
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
});
