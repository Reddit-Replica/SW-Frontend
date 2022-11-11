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

        //join
        await wrapper.find('#join-button').trigger('click');
		expect(wrapper.find('#leave-button').exists()).toBe(true);
        //leave
        await wrapper.find('#leave-button').trigger('click');
		expect(wrapper.find('#join-button').exists()).toBe(true);
	});
});