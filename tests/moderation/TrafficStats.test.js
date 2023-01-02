
import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import TrafficStats from '../../src/pages/moderation/TrafficStats.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

// import { createRouter, createWebHistory } from 'vue-router';
// import { routes } from '@/router';
import VueRouter from 'vue-router';
import Vue from 'vue';
const action = {
	getStates: vi.fn(),
};

//Mocking the store
let store = new Vuex.Store({
	modules: {
		// setting: {
		// 	namespaced: true,
		// 	state: {
		// 		accountSettings: {
		// 			adultContent: true,
        //             autoplayMedia: false,
        //             create: false,
                    
		// 		},
		// 	},
		// 	actions: action,
		// },
	},
});


describe('TrafficStats', () => {
	//it-> test block
	it('component exist', async () => {
		//our component
		const wrapper = shallowMount(TrafficStats, {
			created() {
				getStates: vi.fn();
			},
			props: {},
			computed: {},
			data() {
				return {
				};
			},
			methods: {
				getStates: vi.fn(),
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
