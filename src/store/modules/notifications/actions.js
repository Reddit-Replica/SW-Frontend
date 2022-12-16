import { app as firebaseApp } from '../../../firebase';
import {
	getToken,
	getMessaging,
	onMessage,
	//deleteToken,
} from 'firebase/messaging';
// import axios from 'axios';
import { register as registerSW } from 'register-service-worker';
import store from '@/store';
export default {
	async getAllNotifications(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/notifications', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
		});

		const responseData = await response.json();

		console.log(responseData['children']);

		if (response.status == 200) {
			context.commit('setNotifications', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async getSomeNotifications(context, payload) {
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/notifications?limit=10', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
		});

		const responseData = await response.json();

		console.log(responseData['children']);

		if (response.status == 200) {
			context.commit('setSomeNotifications', responseData['children']);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 404) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async hideNotification(context, payload) {
		context.commit('setHiddenSuccessfully', false);
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/hide-notification/${payload.notificationId}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
			}
		);

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setHiddenSuccessfully', true);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async readNotification(context, payload) {
		context.commit('setReadSuccessfully', false);
		const baseurl = payload.baseurl;

		const response = await fetch(
			baseurl + `/mark-notification-read/${payload.notificationId}`,
			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + payload.token,
				},
			}
		);

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setReadSuccessfully', true);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async markAllRead(context, payload) {
		context.commit('setAllRead', false);
		const baseurl = payload.baseurl;

		const response = await fetch(baseurl + '/mark-all-notifications-read', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
		});

		const responseData = await response.json();

		if (response.status == 200) {
			context.commit('setAllRead', true);
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Bad Request');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},

	async createNotificationToken(context, payload) {
		console.log('creation');

		if (localStorage.getItem('clientToken') == null) {
			await this.dispatch('notifications/registerServiceWorker', {
				baseurl: payload.baseurl,
				host: payload.host,
				token: payload.token,
			});
		} else {
			console.log(localStorage.getItem('clientToken'));
			context.commit('setClientToken', localStorage.getItem('clientToken'));
		}
	},

	async registerServiceWorker(_, payload) {
		console.log('registerServiceWorker');
		const host = payload.host;
		console.log(payload);

		if ('Notification' in window && navigator.serviceWorker) {
			registerSW(host + '/firebase-messaging-sw.js', {
				async ready(reg) {
					console.log('Service worker is Ready');
					// subsctibe to FCM
					console.log('subscribeToken');
					try {
						let token = await getToken(getMessaging(firebaseApp), {
							vapidKey: process.env.VUE_APP_FIREBASE_VAPIDKEY,
							serviceWorkerRegistration: reg,
						});
						console.log('Client token => ', token);

						// send token to server
						await store.dispatch('notifications/sendTokenToServer', {
							clientToken: token,
							baseurl: payload.baseurl,
							token: payload.token,
						});

						//store returned uuid with token
						localStorage.setItem('clientToken', token);

						//listen for notifications
						store.dispatch('notifications/listenForegroundMessage', {
							reg,
							host: payload.host,
							token: payload.token,
						});
					} catch (err) {
						console.error(err);
						localStorage.removeItem('clientToken');
						console.log('Retry to subscribe');
					}
				},
				async registered(reg) {
					console.log('Service worker has been registered.');
					setInterval(() => {
						reg.update();
					}, 1000 * 60 * 30); // 30 min checks
				},
				cached() {
					// console.log('Content has been cached for offline use.');
				},
				updatefound() {
					console.log('New content is downloading.');
				},
				updated(reg) {
					console.log('New content is available; please refresh.');
					document.dispatchEvent(
						new CustomEvent('swUpdated', { detail: reg.waiting })
					);
				},
				offline() {
					console.log('No internet connection found.');
				},
				error(error) {
					console.error('Error during service worker registration:', error);
				},
			});
		}
	},
	async sendTokenToServer(_, payload) {
		console.log('send');

		const baseurl = payload.baseurl;
		const data = { type: 'web', accessToken: payload.clientToken };

		const response = await fetch(baseurl + '/notification-subscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
			body: JSON.stringify(data),
		});

		const responseData = await response.json();

		if (response.status == 200) {
			return;
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
	async listenForegroundMessage(reg, payload) {
		const host = payload.host;

		if (!reg)
			reg = await navigator.serviceWorker.getRegistration(
				host + '/firebase-messaging-sw.js'
			);
		onMessage(getMessaging(firebaseApp), (payload) => {
			console.log('Message received. ', payload);
			let { notification, data } = payload;
			let notificationTitle = 'Test title';
			let notificationBody = 'Test body';
			if (notification && notification.title && notification.body) {
				notificationTitle = notification.title;
				notificationBody = notification.body;
			} else if (data && data.title && data.body) {
				notificationTitle = data.title;
				notificationBody = data.body;
			}
			// in window noti
			this.$notify({
				group: 'test',
				title: '[Foreground] ' + notificationTitle,
				text: notificationBody,
				duration: 10000,
			});
			const notificationOptions = {
				body: notificationBody,
			};
			if (reg)
				reg.showNotification(
					'[Foreground] ' + notificationTitle,
					notificationOptions
				);
		});
	},
	async removeNotificationToken(_, payload) {
		console.log('removing');

		const baseurl = payload.baseurl;
		const data = { type: 'web' };

		localStorage.removeItem('clientToken');

		const response = await fetch(baseurl + '/notification-unsubscribe', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + payload.token,
			},
			body: JSON.stringify(data),
		});

		const responseData = await response.json();

		if (response.status == 200) {
			return;
		} else if (response.status == 401) {
			const error = new Error(responseData.error || 'Unauthorized');
			throw error;
		} else if (response.status == 500) {
			const error = new Error(responseData.error || 'Server Error');
			throw error;
		}
	},
};
