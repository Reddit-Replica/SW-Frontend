import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import SubredditTop from '../../src/components/CommunityComponents/SubredditTop.vue';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import store from '../../src/store/index.js';
import { describe, it, expect, vitest } from 'vitest';

describe('SubredditTop.vue', () => {
	it('renders', () => {
		const wrapper = shallowMount(SubredditTop, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('Test join and leave buttons', async () => {
		const wrapper = shallowMount(SubredditTop, {
			global: {
				components: {},
				mocks: { $store: store },
			},
		});

        //click on join button
        await wrapper.find('#join-button').trigger('click');
		expect(wrapper.find('#leave-button').exists()).toBe(true);
        ///click on leave button
        await wrapper.find('#leave-button').trigger('click');
		expect(wrapper.find('#join-button').exists()).toBe(true);
	});
});