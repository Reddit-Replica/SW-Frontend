/**
 * The module 'NotificationsStore' object.
 * @name NotificationsGetters
 * @type {Object}
 * @getter {Array} getNotifications=notifications Returns an array contains all notifications.
 * @getter {Array} getSomeNotifications=someNotifications Returns an array contains ten notifications.
 * @getter {Boolean} getAllRead=allRead Returns a boolean checks if all notifications are read.
 * @getter {Boolean} getHiddenSuccessfully=hiddenSuccessfully Returns a boolean checks if a notification is hiddenSuccessfully.
 * @getter {Boolean} getReadSuccessfully=readSuccessfully Returns a boolean checks if a notification is readSuccessfully.
 * @getter {Number} getUnreadCount=unreadCount Returns a number contains number of unread notifications.
 * @getter {String} getClientToken=clientToken Returns a string contains firebase messaging token.
 */
export default {
	getNotifications(state) {
		return state.notifications;
	},
	getSomeNotifications(state) {
		return state.someNotifications;
	},
	getAllRead(state) {
		return state.allRead;
	},
	getHiddenSuccessfully(state) {
		return state.hiddenSuccessfully;
	},
	getReadSuccessfully(state) {
		return state.readSuccessfully;
	},
	getClientToken(state) {
		return state.clientToken;
	},
	getUnreadCount(state) {
		return state.unreadCount;
	},
};
