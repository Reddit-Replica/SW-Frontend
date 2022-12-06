<template>
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<div>
			<notifications-top></notifications-top>
		</div>
	</div>
</template>

<script>
import NotificationsTop from '../../components/NotificationsComponents/NotificationsTop.vue';

export default {
	components: {
		NotificationsTop,
	},
	beforeMount() {
		this.loadAllNotifications();
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
