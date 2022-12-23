import { mount } from '@vue/test-utils';
import NotificationMessage from '../../src/components/NotificationsComponents/NotificationMessage.vue';
import Vuex from 'vuex';

import { describe, it, expect } from 'vitest';
describe('NotificationMessage', () => {
	const index = 0;
	const notification = {
		isRead: false,
		link: 'http://localhost:8081/user/hoda',
		title: 'u/aya followed you',
		sendAt: '2019-08-24T14:15:22Z',
		photo: '',
	};

	const mockRouter = {
		push: vi.fn(),
	};

	const notificationsAction = {
		getAllNotifications: vi.fn(),
		getSomeNotifications: vi.fn(),
		hideNotification: vi.fn(),
		readNotification: vi.fn(),
		markAllRead: vi.fn(),
		createNotificationToken: vi.fn(),
		registerServiceWorker: vi.fn(),
		sendTokenToServer: vi.fn(),
		listenForegroundMessage: vi.fn(),
		removeNotificationToken: vi.fn(),
	};
	let store = new Vuex.Store({
		modules: {
			notificationsModule: {
				namespaced: true,
				state: {
					notifications: [],
					someNotifications: [],
					allRead: false,
					hiddenSuccessfully: false,
					readSuccessfully: false,
					unreadCount: 0,
					clientToken: null,
				},
				actions: notificationsAction,
			},
		},
	});

	it('should render', () => {
		const wrapper = mount(NotificationMessage, {
			props: {
				notification,
				index,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.exists()).toBe(true);
	});

	it('Notification message title', () => {
		const wrapper = mount(NotificationMessage, {
			props: {
				notification,
				index,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-msg-7-0').text()).contain('u/aya followed you');
	});

	it('Notification message duration', () => {
		const wrapper = mount(NotificationMessage, {
			props: {
				notification,
				index,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-msg-9-0').text()).contain('Aug 24');
	});
	it('Notification message photo', () => {
		const wrapper = mount(NotificationMessage, {
			props: {
				notification,
				index,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-msg-2-0').exists()).toBe(true);
	});
	it('Notification message hide', async () => {
		const wrapper = mount(NotificationMessage, {
			props: {
				notification,
				index,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		await wrapper.find('#ntf-msg-11-0').trigger('click');
		expect(wrapper.find('#ntf-msg-12-0').exists()).toBe(true);
		expect(wrapper.find('#ntf-msg-12-0').text()).contain(
			'Hide this notification'
		);
	});

	it('Notification message no reply back', () => {
		const wrapper = mount(NotificationMessage, {
			props: {
				notification,
				index,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-msg-2-2').exists()).toBe(false);
	});
});
