import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import GrowComponent from '../../src/components/CommunityComponents/GrowComponent.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import store from '../../src/store/index.js';
import { describe, it, expect, vitest } from 'vitest';

describe('GrowComponent.vue', () => {
	it('renders', () => {
		const wrapper = shallowMount(GrowComponent, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	// it('Test exit grow option', async () => {
	// 	const wrapper = shallowMount(GrowComponent, {
	// 		global: {
	// 			components: {},
	// 			mocks: { $store: store },
	// 		},
	// 	});

	// 	expect(wrapper.find('#exit-grow-option-0').exists()).toBe(true);
	// 	//hide first grow your community element
	// 	await wrapper.find('#exit-grow-option-0').trigger('click');
	// 	expect(wrapper.find('#grow-link-0').exists()).toBe(false);
	// });
});
