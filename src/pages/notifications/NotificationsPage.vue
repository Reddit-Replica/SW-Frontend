<template>
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<notifications-top></notifications-top>
		<div class="ntf-section">
			<div>
				<div class="ntf-list-title">Title</div>
				<ul>
					<notification-message
						v-for="(notification, index) in notifications"
						:key="notification.id"
						:index="index"
						:id="notification.id"
						:title="notification.title"
						:link="notification.link"
						:send-at="notification.sendAt"
						:content="notification.content"
						:is-read="notification.isRead"
						:small-icon="notification.smallIcon"
						:sender-id="notification.senderID"
						:data="notification.data"
					></notification-message>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import NotificationsTop from '../../components/NotificationsComponents/NotificationsTop.vue';
import NotificationMessage from '@/components/NotificationsComponents/NotificationMessage.vue';
export default {
	components: {
		NotificationsTop,
		NotificationMessage,
	},
	beforeMount() {
		if (localStorage.getItem('accessToken') == null)
			this.$router.push('/login');
		else this.loadAllNotifications();
	},
	data() {
		return {
			notifications: [],
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
</style>
