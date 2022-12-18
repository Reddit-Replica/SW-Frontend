<template>
	<div id="ntf-page-1">
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<notifications-top @reload="reloadPage" id="ntf-page-2"></notifications-top>
		<div class="ntf-section" @reload="reloadPage" id="ntf-page-3">
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
		else this.loadAllNotifications();
	},
	data() {
		return {
			notifications: [],
			doneHide: false,
		};
	},
	methods: {
		async loadAllNotifications() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('notifications/getAllNotifications', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.notifications =
				this.$store.getters['notifications/getNotifications'];
		},
		reloadPage() {
			this.loadAllNotifications();
		},
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
	font-size: 18px;
	font-weight: 550;
	line-height: 22px;
	letter-spacing: 0.5px;
	color: var(--color-dark-3);
	padding: 8px 16px;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.ntf-section {
	background-color: var(--main-white-color);
	border-radius: 4px;
	width: 650px;
	display: flex;
	flex-direction: column;
	margin: 5rem auto 0rem auto;
}
.pop-up {
	bottom: 0;
	position: fixed;
	right: 35%;
	z-index: 1000;
}
</style>
