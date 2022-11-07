import { mount } from '@vue/test-utils';
import ProfileCard from '../../src/components/UserComponents/BaseUserComponents/Cards/ProfileCard.vue';
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
		const testMessage = 'Happy People';
		const wrapper = mount(ProfileCard, {
			data() {
				return {
					userData,
				};
			},
		});
		// expect(wrapper.text()).toBe(true);
	});
});
