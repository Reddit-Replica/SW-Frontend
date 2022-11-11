import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import GrowCommunity from '../../src/components/CommunityComponents/GrowCommunity.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import store from '../../src/store/index.js';
import { describe, it, expect, vitest } from 'vitest';

describe('GrowCommunity.vue', () => {
	it('renders', () => {
		const wrapper = shallowMount(GrowCommunity, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('Test show and hide', async () => {
		const wrapper = shallowMount(GrowCommunity, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});

		expect(wrapper.find('.grow-body').exists()).toBe(true);
		//hide
		await wrapper.find('#show-up-grow').trigger('click');
		expect(wrapper.find('.grow-body').exists()).toBe(false);
		//show
		await wrapper.find('#show-down-grow').trigger('click');
		expect(wrapper.find('.grow-body').exists()).toBe(true);
	});
});
