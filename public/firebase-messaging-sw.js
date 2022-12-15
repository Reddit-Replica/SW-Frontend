importScripts(
	'https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js'
);
importScripts(
	'https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js'
);

firebase.initializeApp({
	apiKey: 'AIzaSyDtOWZqXNMb6DbQlg7JSokRQrkJt7zrE5o',
	authDomain: 'read-it-notification.firebaseapp.com',
	projectId: 'read-it-notification',
	storageBucket: 'read-it-notification.appspot.com',
	messagingSenderId: '714930093666',
	appId: '1:714930093666:web:5278a954327a10d9779b3b',
	measurementId: 'G-4FHVXG9KQ7',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options

// FCM automatically displays the message when 'notification' key is in payload
// It will also automatically displays when 'data' key is in payload
// You can be received notification tiwce when both key is in payload

// If you wanna handle notification, use only 'data' key
// See: https://firebase.google.com/docs/cloud-messaging/concept-options#notifications_and_data_messages

messaging.onBackgroundMessage(function (payload) {
	console.log(
		'[firebase-messaging-sw.js] Received background message ',
		payload
	);
	// Customize notification here for 'data' key
	let { data } = payload;
	if (data && data.title && data.body) {
		const notificationTitle = data.title || 'Test title';
		const notificationOptions = {
			body: data.body || 'Test body',
		};

		self.registration.showNotification(notificationTitle, notificationOptions);
	}
});

self.addEventListener('notificationclick', function (event) {
	let { notification } = event;
	// this event will not be occoured by notication of FCM 'notification' key
	console.log('[firebase-messaging-sw.js]  Notification clicked: ', event);
	notification.close();
});
