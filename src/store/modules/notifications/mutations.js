/**
 * The module 'NotificationsMutations' object.
 * @name NotificationsMutations
 * @type {Object}
 * @mutator {Array} setNotifications=notifications Sets the state array property "notifications".
 * @mutator {Array} setSomeNotifications=someNotifications Sets the state array property "someNotifications".
 * @mutator {Boolean} setAllRead=allRead Sets the state boolean property "allRead".
 * @mutator {Boolean} setHiddenSuccessfully=hiddenSuccessfully Sets the state boolean property "hiddenSuccessfully".
 * @mutator {Boolean} setReadSuccessfully=readSuccessfully Sets the state boolean property "readSuccessfully".
 * @mutator {Number} setUnreadCount=unreadCount Sets the state number property "unreadCount".
 * @mutator {String} setClientToken=clientToken Sets the state string property "clientToken".
 */
export default {
	setNotifications(state, payload) {
		state.notifications = payload;
	},
	setSomeNotifications(state, payload) {
		state.someNotifications = payload;
	},
	setAllRead(state, payload) {
		state.allRead = payload;
	},
	setHiddenSuccessfully(state, payload) {
		state.hiddenSuccessfully = payload;
	},

	setReadSuccessfully(state, payload) {
		state.readSuccessfully = payload;
	},
	setClientToken(state, payload) {
		state.clientToken = payload;
	},
	setUnreadCount(state, payload) {
		state.unreadCount = payload;
	},
};
