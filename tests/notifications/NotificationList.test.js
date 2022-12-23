import { mount } from '@vue/test-utils';
import NotificationsList from '../../src/components/NotificationsComponents/NotificationsList.vue';
import Vuex from 'vuex';
import { describe, it, expect, vi } from 'vitest';
describe('NotificationMessage', () => {
	const notifications = [
		{
			isRead: false,
			link: 'http://localhost:8081/user/hoda',
			title: 'u/aya followed you',
			sendAt: '2019-08-24T14:15:22Z',
			photo: '',
		},
		{
			isRead: false,
			link: 'http://localhost:8081/user/hoda',
			title: 'u/aya replied to your post',
			sendAt: '2019-05-24T14:15:22Z',
			photo: '',
		},
	];
	const suggestedCommunity = [
		{
			title: 'subreddit',
		},
	];
	const randomSubredditName = 'subreddit';

	const subredditLink = 'r/subreddit';
	const linkSubreddit = 'r/subreddit';

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
		const noNotifications = false;
		const wrapper = mount(NotificationsList, {
			beforeMount() {
				getSuggestedCommunity: vi.fn();
			},
			data() {
				return {
					notifications,
					suggestedCommunity,
					randomSubredditName,
				};
			},
			computed: {
				linkSubreddit,
				subredditLink,
				noNotifications,
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

	it('There are notification', () => {
		const noNotifications = false;
		const wrapper = mount(NotificationsList, {
			beforeMount() {
				getSuggestedCommunity: vi.fn();
			},
			data() {
				return {
					notifications,
					suggestedCommunity,
					randomSubredditName,
				};
			},
			computed: {
				linkSubreddit,
				subredditLink,
				noNotifications,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-list-13').exists()).toBe(false);
	});

	it('Notifications titles', () => {
		const noNotifications = false;
		const wrapper = mount(NotificationsList, {
			beforeMount() {
				getSuggestedCommunity: vi.fn();
			},
			data() {
				return {
					notifications,
					suggestedCommunity,
					randomSubredditName,
				};
			},
			computed: {
				linkSubreddit,
				subredditLink,
				noNotifications,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-list-10').text()).contain('u/aya followed you');
		expect(wrapper.find('#ntf-list-10').text()).contain(
			'u/aya replied to your post'
		);
	});

	it('Notifications durations', () => {
		const noNotifications = false;
		const wrapper = mount(NotificationsList, {
			beforeMount() {
				getSuggestedCommunity: vi.fn();
			},
			data() {
				return {
					notifications,
					suggestedCommunity,
					randomSubredditName,
				};
			},
			computed: {
				linkSubreddit,
				subredditLink,
				noNotifications,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-list-10').text()).contain('Aug 24');
		expect(wrapper.find('#ntf-list-10').text()).contain('May 24');
	});

	it('Notifications see all button', async () => {
		const noNotifications = false;
		const wrapper = mount(NotificationsList, {
			beforeMount() {
				getSuggestedCommunity: vi.fn();
			},
			data() {
				return {
					notifications,
					suggestedCommunity,
					randomSubredditName,
				};
			},
			computed: {
				linkSubreddit,
				subredditLink,
				noNotifications,
			},
			global: {
				// OR:
				mocks: {
					$store: store,
					$router: mockRouter,
				},
			},
		});
		expect(wrapper.find('#ntf-list-11').exists()).toBe(true);
	});
});
