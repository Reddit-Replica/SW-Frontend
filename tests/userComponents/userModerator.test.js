import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';
import UserModerator from '../../src/components/UserComponents/BaseUserComponents/Cards/UserModeratorsCard.vue';
import Vuex from 'vuex';
// import store from '../../src/store/index.js';

import { describe, it, expect } from 'vitest';
describe('SocialLink.vue', () => {
	let store = new Vuex.Store({
		modules: {
			userModule: {
				namespaced: true,
				state: {
					userData: {
						displayName: '',
						about: '',
						banner: '',
						picture: '',
						karma: 0,
						cakeDate: '2019-08-24',
						socialLinks: [
							{
								type: 'Reddit',
								displayText: 'medo',
								link: '11',
							},
						],
						nsfw: true,
						followed: true,
						blocked: true,
						moderatorOf: [
							{
								subredditName: '',
								numOfMembers: 0,
								nsfw: true,
							},
						],
					},
					socialLinkItems: [
						{
							text: 'Custom URL',
							imgSrc: 'img',
							alt: 'custom url',
							type: 'link' /* link or username */,
							baseurl: '',
						},
					],
				},
			},
		},
	});
	it('Check render of user moderator card', async () => {
		const userModerators = [
			{
				subredditName: 'sub1',
				numOfMembers: 10,
				nsfw: true,
				followed: true,
			},
			{
				subredditName: 'sub2',
				numOfMembers: 110,
				nsfw: true,
				followed: false,
			},
			{
				subredditName: 'sub3',
				numOfMembers: 10,
				nsfw: false,
				followed: true,
			},
		];
		const wrapper = shallowMount(UserModerator, {
			props: {
				userModerators,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#user-moderator-header');
		// await byId.trigger('click');
		// const byId2 =wrapper.find('#profile-options');
		await expect(byId.text()).toBe("You're a moderator of these communities");
	});
	it('check for subredit name that is exist ', async () => {
		const userModerators = [
			{
				subredditName: 'sub1',
				numOfMembers: 10,
				nsfw: true,
				followed: true,
			},
			{
				subredditName: 'sub2',
				numOfMembers: 110,
				nsfw: true,
				followed: false,
			},
			{
				subredditName: 'sub3',
				numOfMembers: 10,
				nsfw: false,
				followed: true,
			},
		];
		const wrapper = shallowMount(UserModerator, {
			props: {
				userModerators,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#moderator-name-sub1');
		// await byId.trigger('click');
		// const byId2 =wrapper.find('#profile-options');
		await expect(byId.text()).toBe('r/sub1');
	});
	it('check for subredit name that is exist ', async () => {
		const userModerators = [
			{
				subredditName: 'sub1',
				numOfMembers: 10,
				nsfw: true,
				followed: true,
			},
			{
				subredditName: 'sub2',
				numOfMembers: 110,
				nsfw: true,
				followed: false,
			},
			{
				subredditName: 'sub3',
				numOfMembers: 80,
				nsfw: false,
				followed: true,
			},
		];
		const wrapper = shallowMount(UserModerator, {
			props: {
				userModerators,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#moderator-member-number-sub1');
		// await byId.trigger('click');
		// const byId2 =wrapper.find('#profile-options');
		await expect(byId.text()).toBe('10 member');
	});
	it('check for subredit name that is exist ', async () => {
		const userModerators = [
			{
				subredditName: 'sub1',
				numOfMembers: 10,
				nsfw: true,
				followed: true,
			},
			{
				subredditName: 'sub2',
				numOfMembers: 110,
				nsfw: true,
				followed: false,
			},
			{
				subredditName: 'sub3',
				numOfMembers: 10,
				nsfw: false,
				followed: true,
			},
		];
		const wrapper = shallowMount(UserModerator, {
			props: {
				userModerators,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#moderator-name-sub1');
		// await byId.trigger('click');
		// const byId2 =wrapper.find('#profile-options');
		await expect(byId.text()).toBe('r/sub1');
	});
	it('check button of subredditName: "sub3" it case is joined ', async () => {
		const userModerators = [
			{
				subredditName: 'sub1',
				numOfMembers: 10,
				nsfw: true,
				followed: true,
			},
			{
				subredditName: 'sub2',
				numOfMembers: 110,
				nsfw: true,
				followed: false,
			},
			{
				subredditName: 'subi',
				numOfMembers: 10,
				nsfw: false,
				followed: true,
			},
		];
		const wrapper = shallowMount(UserModerator, {
			props: {
				userModerators,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#moderator-join-button-subi');
		// await byId.trigger('click');
		// const byId2 =wrapper.find('#profile-options');
		await expect(byId.html().includes('joined')).toBe(true);
	});
	it('check button of subredditName: "sub3" it case is joined after click to join ', async () => {
		const userModerators = [
			{
				subredditName: 'sub1',
				numOfMembers: 10,
				nsfw: true,
				followed: true,
			},
			{
				subredditName: 'sub2',
				numOfMembers: 110,
				nsfw: true,
				followed: false,
			},
			{
				subredditName: 'subi',
				numOfMembers: 10,
				nsfw: false,
				followed: true,
			},
		];
		const wrapper = shallowMount(UserModerator, {
			props: {
				userModerators,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#moderator-join-button-subi');
		await byId.trigger('click');
		// const byId2 =wrapper.find('#profile-options');
		await expect(byId.html().includes('join')).toBe(true);
	});
	it('check button of subredditName: "sub3" it case is joined check when i hovered on it to be leave ', async () => {
		const userModerators = [
			{
				subredditName: 'sub1',
				numOfMembers: 10,
				nsfw: true,
				followed: true,
			},
			{
				subredditName: 'sub2',
				numOfMembers: 110,
				nsfw: true,
				followed: false,
			},
			{
				subredditName: 'subi',
				numOfMembers: 10,
				nsfw: false,
				followed: true,
			},
		];
		const wrapper = shallowMount(UserModerator, {
			props: {
				userModerators,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
				},
			},
		});
		const byId = wrapper.find('#moderator-join-button-subi');
		await byId.trigger('mouseover');
		// const byId2 =wrapper.find('#profile-options');
		await expect(byId.html().includes('leave')).toBe(true);
	});
});
