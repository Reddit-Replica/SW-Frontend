<template>
	<div id="ntf-page-1">
		<the-header :header-title="'Notifications'"></the-header>
		<notifications-top @reload="reloadPage" id="ntf-page-2"></notifications-top>
		<div
			class="ntf-section"
			@reload="reloadPage"
			id="ntf-page-3"
			v-if="!noNotifications"
		>
			<div id="ntf-page-4">
				<div class="ntf-list-title" id="ntf-page-5">Notifications</div>
				<ul id="ntf-page-6">
					<notification-message
						v-for="(notification, index) in notifications"
						:key="notification.id"
						:index="index"
						:notification="notification"
						@reload="reloadPage"
						@showpop="showPop"
					></notification-message>
				</ul>
			</div>
		</div>
		<div class="center-no">
			<!-- <img src="../../../img/default_avatar.png" class="default-img" /> -->
			<h1>No Notifications</h1>
		</div>
		<save-unsave-popup-message v-if="doneHide" class="pop-up" id="pop-hide"
			>Notification Hidden</save-unsave-popup-message
		>
	</div>
</template>

<script>
import NotificationsTop from '../../components/NotificationsComponents/NotificationsTop.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
import NotificationMessage from '@/components/NotificationsComponents/NotificationMessage.vue';
export default {
	components: {
		NotificationsTop,
		NotificationMessage,
		SaveUnsavePopupMessage,
	},
	beforeMount() {
		if (localStorage.getItem('accessToken') == null)
			this.$router.push('/login');
		else {
			document.title = 'Notifications';
			this.loadAllNotifications();
		}
	},
	data() {
		return {
			notifications: [],
			doneHide: false,
		};
	},
	computed: {
		//@vuese
		//username of logged in user
		userName() {
			return localStorage.getItem('userName');
		},
		//@vuese
		//check if ther is no notification
		noNotifications() {
			return this.notifications.length === 0;
		},
	},
	methods: {
		//@vuese
		//load all notifications
		//@arg no argument
		async loadAllNotifications() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('notifications/getAllNotifications', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.notifications =
				this.$store.getters['notifications/getNotifications'];
		},
		//@vuese
		//reload and get notifications to get new data
		//@arg no argument
		reloadPage() {
			this.loadAllNotifications();
		},
		//@vuese
		//show pop up to confirm action
		//@arg no argument
		showPop() {
			this.doneHide = true;
			setTimeout(() => {
				this.doneHide = false;
			}, 1000);
		},
	},
};
</script>

<style scoped>
.ntf-list-title {
	font-size: 1.8rem;
	font-weight: 550;
	line-height: 2.2rem;
	letter-spacing: 0.05rem;
	color: var(--color-dark-3);
	padding: 0.8rem 1.6rem;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.ntf-section {
	background-color: var(--main-white-color);
	border-radius: 0.4rem;
	/* width: 65rem; */
	width: auto;
	display: flex;
	flex-direction: column;
	margin: 5rem auto 0rem auto;
}
@media only screen and (min-width: 900px) {
	.ntf-section {
		width: 65rem;
	}
}
.center-no {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: black;
}

.pop-up {
	bottom: 0;
	position: fixed;
	right: 35%;
	z-index: 1000;
}
</style>
