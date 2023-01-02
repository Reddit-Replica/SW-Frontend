
import { describe, expect, it, vitest } from 'vitest';
import { shallowMount, mount, createLocalVue } from '@vue/test-utils';
import ThesettingsMod from '../../src/pages/moderation/ThesettingsMod.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';
import mockservice from '../../../mockservice.txt';

// import { createRouter, createWebHistory } from 'vue-router';
// import { routes } from '@/router';
import VueRouter from 'vue-router';
import Vue from 'vue';


//Mocking the store
let store = new Vuex.Store({
	modules: {
		
	},
});


describe('ThesettingsMod', () => {
	//it-> test block
	it('component exist', async () => {
		//our component
		const wrapper = shallowMount(ThesettingsMod, {
			created() {
				
			},
			props: {},
			computed: {},
			data() {
				return {
				};
			},
			methods: {
				
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
