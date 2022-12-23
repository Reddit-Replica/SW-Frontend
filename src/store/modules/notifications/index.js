import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
	namespaced: true,
	/**
	 * The Vuex 'NotificationsState' object.
	 * @name NotificationsState
	 * @type {object}
	 * @property {Array} notifications Contains all notifications.
	 * @property {Array} someNotifications Contains ten notifications.
	 * @property {Boolean} allRead Checks if all notifications are read.
	 * @property {Boolean} hiddenSuccessfully Checks if a notification is hiddenSuccessfully.
	 * @property {Boolean} readSuccessfully Checks if a notification is readSuccessfully.
	 * @property {Number} unreadCount Contains number of unread notifications.
	 * @property {String} clientToken Contains firebase messaging token.
	 */
	state() {
		return {
			notifications: [],
			someNotifications: [],
			allRead: false,
			hiddenSuccessfully: false,
			readSuccessfully: false,
			unreadCount: 0,

			clientToken: null,
		};
	},
	mutations,
	actions,
	getters,
};
