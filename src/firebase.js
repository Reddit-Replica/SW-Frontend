import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDtOWZqXNMb6DbQlg7JSokRQrkJt7zrE5o',
	authDomain: 'read-it-notification.firebaseapp.com',
	projectId: 'read-it-notification',
	storageBucket: 'read-it-notification.appspot.com',
	messagingSenderId: '714930093666',
	appId: '1:714930093666:web:5278a954327a10d9779b3b',
	measurementId: 'G-4FHVXG9KQ7',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
