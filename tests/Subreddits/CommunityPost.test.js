import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import CommunityPost from '../../src/components/CommunityComponents/CommunityPost.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import store from '../../src/store/index.js';
import { describe, it, expect, vitest } from 'vitest';

describe('CommunityPost.vue', () => {
	it('renders', () => {
		const wrapper = shallowMount(CommunityPost, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('Test icons list', async () => {
		const wrapper = shallowMount(CommunityPost, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});

		expect(wrapper.find('#initial-post-icon-15').exists()).toBe(true);
		await wrapper.find('#initial-post-icon-15').trigger('click');
        expect(wrapper.find('#initial-post-icon-list').exists()).toBe(true);
	});

   
});
