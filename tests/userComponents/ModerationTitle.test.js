import { shallowMount } from '@vue/test-utils';
import ModerationTitle from '../../src/components/UserComponents/BaseUserComponents/PostComponents/ModerationTitle.vue';
import Vuex from 'vuex';
import { describe, it, expect } from 'vitest';
describe('Post Options Bar', () => {
	const moderation = {
		approve: {
			approvedBy: 'string',
			approvedDate: '2019-08-24T14:15:22Z',
		},
		remove: {
			removedBy: 'string',
			removedDate: '2019-08-24T14:15:22Z',
		},
		spam: {
			spammedBy: 'string',
			spammedDate: '2019-08-24T14:15:22Z',
		},
		lock: true,
	};
	const pinnedPostFlag = false;
	const state = 'user';
	//--------------------------------------------------------
	//                     Rendering
	//--------------------------------------------------------
	it('should renders if ModerationTitle content is correct', () => {
		const wrapper = shallowMount(ModerationTitle, {
			props: {
				moderation,
				pinnedPostFlag,
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	//--------------------------------------------------------
	//                     Testing no Moderation title
	//--------------------------------------------------------
	it('check existence of lock icon if moderation icon lock flag is true', () => {
		const wrapper = shallowMount(ModerationTitle, {
			props: {
				moderation,
				pinnedPostFlag,
			},
		});
		const byId = wrapper.find('#base-user-data-moderation-lock-lockedBy');
		expect(byId.exists()).toBe(true);
	});
	const moderationFalseLockFlag = {
		approve: {
			approvedBy: 'string',
			approvedDate: '2019-08-24T14:15:22Z',
		},
		remove: {
			removedBy: 'string',
			removedDate: '2019-08-24T14:15:22Z',
		},
		spam: {
			spammedBy: 'string',
			spammedDate: '2019-08-24T14:15:22Z',
		},
		lock: false,
	};
	it('check unexistence of lock icon if moderation icon lock flag is false', () => {
		const wrapper = shallowMount(ModerationTitle, {
			props: {
				moderation: moderationFalseLockFlag,
				pinnedPostFlag,
			},
		});
		const byId = wrapper.find('#base-user-data-moderation-lock-lockedBy');
		expect(byId.exists()).toBe(false);
	});
	const moderationApproveRemoveSpam = {
		approve: {
			approvedBy: 'string',
			approvedDate: '2019-08-24T14:15:22Z',
		},
		remove: {
			removedBy: 'string',
			removedDate: '2019-08-24T14:15:22Z',
		},
		spam: {
			spammedBy: 'string',
			spammedDate: '2019-08-24T14:15:22Z',
		},
		lock: false,
	};
	it('check existence of approve remove spam icon', () => {
		const wrapper = shallowMount(ModerationTitle, {
			props: {
				moderation: moderationApproveRemoveSpam,
				pinnedPostFlag,
			},
		});
		const byId = wrapper.find('#base-user-data-moderation-spam-spammedBy');
		const byId2 = wrapper.find('#base-user-data-moderation-remove-removedBy');
		const byId3 = wrapper.find('#base-user-data-moderation-approve-approveBy');
		expect(byId.exists() && byId2.exists() && byId3.exists()).toBe(true);
	});
	it('check unexistence of pin flag', () => {
		const wrapper = shallowMount(ModerationTitle, {
			props: {
				moderation: moderationApproveRemoveSpam,
				pinnedPostFlag,
			},
		});
		const byId = wrapper.find('#base-user-data-moderation-pin-pinnedBy');
		expect(byId.exists()).toBe(false);
	});
});
