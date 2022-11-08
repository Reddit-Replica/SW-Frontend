import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import ProfileCard from '../../src/components/UserComponents/BaseUserComponents/Cards/ProfileCard.vue';
import Vuex from 'vuex';
import store from '../../src/store/index.js';

import { describe, it, expect } from 'vitest';
describe('SocialLink.vue', () => {
	const userData = {
		displayName: 'Abdalhameed_Emad',
		about: '',
		banner: 'string',
		picture: '../../../../assets/R.png',
		karma: 10,
		cakeDate: '2019-01-24',
		socialLinks: [
			{
				type: 'Reddit',
				displayText: 'medo',
				link: 'http:/google.com',
			},
			{
				type: 'Twitter',
				displayText: 'abdok',
				link: 'http:/google.com',
			},
		],
		nsfw: false,
		followed: true,
		blocked: true,
		moderatorOf: [
			{
				subredditName: 'string',
				numOfMembers: 10,
				nsfw: true,
				joined: true,
			},
			{
				subredditName: 'stringff',
				numOfMembers: 110,
				nsfw: true,
				joined: false,
			},
			{
				subredditName: 'stringjj',
				numOfMembers: 10,
				nsfw: true,
				joined: true,
			},
		],
	};
	it('should renders if profilepage content is correct', () => {
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});
	it('Testing the displayed user name is correct', () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		expect(wrapper.find('#profile-displayed-name').text()).toBe(
			'Abdalhameed_Emad'
		);
	});
	it('Testing the displayed Karma is correct', () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		expect(wrapper.find('#karma').text()).toBe('10');
	});
	it('Testing the displayed birth date is correct', () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		expect(wrapper.find('#birth-date').text()).toBe('January 24,2019');
	});
	it('Testing the that should not  render the about box because is empty ', () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#user-profile-about-box');
		expect(byId.exists()).toBe(false);
	});
	it('Testing the that should not  render the nsfw  because it is false ', () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#profile-nsfw');
		expect(byId.exists()).toBe(false);
	});
	it('Testing the user name ', () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
				userName :'medoemad'
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#profile-pic-user-name');
		expect(byId.text()).toBe('u/medoemad');
	});
	it('Testing trigger more option button to be hidden after clicking ',async () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId =wrapper.find('#more-options-button'); 
		await byId.trigger('click');
		expect(byId.isVisible()).toBe(false);
	});
	it('Testing trigger more option button to  show fewer options button',async () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId =wrapper.find('#more-options-button'); 
		await byId.trigger('click');
		const byId2 =wrapper.find('#fewer-options-button');
		expect(byId2.isVisible()).toBe(true);
	});
	it('Testing trigger more option button to show options block ',async () => {
		const testMessage = 'Happy People';
		const wrapper = shallowMount(ProfileCard, {
			props: {
				userData,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId =wrapper.find('#more-options-button');
		await byId.trigger('click');
		const byId2 =wrapper.find('#profile-options');
		expect(byId2.isVisible()).toBe(true);
	});
});
