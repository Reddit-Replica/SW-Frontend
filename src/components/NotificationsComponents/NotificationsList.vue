<template>
	<div id="ntf-list-1">
		<div class="ntf-header-list" id="ntf-list-2">
			<nav class="ntf-nav" @reload="reloadPage" id="ntf-list-3">
				<span class="ntf-title title-black" id="ntf-list-4">Notification</span>
				<span class="ntf-title-2" id="ntf-list-5"
					><router-link
						to="/message/messages"
						class="ntf-title title-grey flex"
						id="ntf-list-6"
						>Messages
						<!-- <span class="circle-red" id="ntf-list-7">18</span> -->
					</router-link>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-bookmark-check"
						viewBox="0 0 16 16"
						@click="markAllRead"
						id="ntf-list-8"
					>
						<path
							fill-rule="evenodd"
							d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
						/>
						<path
							d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
						/>
					</svg>
				</span>
			</nav>
			<div
				v-if="!noNotifications"
				class="ntf-list"
				@reload="reloadPage"
				id="ntf-list-9"
			>
				<ul id="ntf-list-10">
					<notification-message
						v-for="(notification, index) in notifications"
						:key="notification.id"
						:index="index"
						:notification="notification"
					></notification-message>
				</ul>
			</div>
			<div v-if="!noNotifications" class="see-all-ntf" id="ntf-list-11">
				<router-link to="/notifications" class="see-all-link" id="ntf-list-12"
					>See All</router-link
				>
			</div>
			<div v-if="noNotifications" class="no-ntf ntf-list" id="ntf-list-13">
				<img
					src="../../../img/default_avatar.png"
					alt="Avatar"
					id="ntf-list-14"
				/>
				<h1 id="ntf-list-15">You don’t have any activity yet</h1>
				<p id="ntf-list-16">
					That’s ok, maybe you just need the right inspiration. Try posting in
					r/<router-link to="subredditLink">{{
						randomSubredditName
					}}</router-link>
					, a popular community for discussion.
				</p>
				<base-button
					link
					to="/notifications"
					class="button-visit"
					id="ntf-list-17"
					>Visit r/{{ randomSubredditName }}</base-button
				>
			</div>
		</div>
	</div>
</template>
<script>
import NotificationMessage from './NotificationMessage.vue';
export default {
	components: {
		NotificationMessage,
	},
	beforeMount() {
		this.loadAllNotifications();
	},
	data() {
		return {
			notifications: [],
			randomSubredditName: 'subreddit_new',
		};
	},
	computed: {
		noNotifications() {
			return this.notifications.length == 0;
		},
		subredditLink() {
			return 'r/' + this.randomSubredditName;
		},
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
		async markAllRead() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('notifications/markAllRead', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.loadAllNotifications();
		},
		reloadPage() {
			this.loadAllNotifications();
		},
	},
};
</script>

<style scoped>
.ntf-header-list {
	/* height: 307px;
	max-height: 307px; */
	display: flex;
	flex-direction: column;
	width: 100%;
	/* height: auto; */
}
.ntf-nav {
	display: flex;
	justify-content: space-between;
	padding: 16px;
}
.ntf-title {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-right: 12px;
}
.ntf-title-2 {
	align-items: center;
	display: flex;
	overflow: hidden;
	margin-left: auto;
}
.bi-bookmark-check {
	border-left: var(--line-7);
	padding-left: 8px;
	width: fit-content;
	fill: var(--color-grey-dark-10);
}
.title-grey {
	color: var(--color-grey-dark-10);
}
.title-black {
	color: var(--color-dark-3);
}
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
	font-size: 12px !important;
}
.see-all-ntf {
	align-items: center;
	background-color: var(--color-grey-light-3);
	border-radius: 0 0 4px 4px;
	display: flex;
	height: 49px;
	justify-content: center;
	padding: 0 12px;
}
.see-all-link {
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 32px;
	text-transform: uppercase;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: var(--color-blue-2);
}
.circle-red {
	font-size: 1rem;
	height: 1.9rem;
	width: 1.9rem;
	border-radius: 50%;
	background-color: var(--color-primary);
	color: var(--color-white-1);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 8px;
}
.flex {
	display: flex;
}
.ntf-list {
	height: 307px;
	max-height: 307px;
	overflow: hidden;
	overflow-y: scroll;
}
.no-ntf {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	overflow-y: hidden;
}
img {
	height: 128px;
}
h1 {
	font-size: 18px;
	font-weight: 400;
	line-height: 22px;
	font-weight: 500;
	margin-top: 5px;
}
p {
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: var(--color-grey-dark-10);
	text-align: center;
	margin: 0 40px;
	margin-top: 5px;
	width: 65%;
}
.button-visit {
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 18px;

	width: fit-content;
	height: 40px;

	color: var(--color-white-1);
	background: var(--color-blue-2);
	margin-top: 10px;
	padding: 20px;

	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
