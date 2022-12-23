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
					r/<router-link :to="'/r/' + randomSubredditName">{{
						randomSubredditName
					}}</router-link>
					, a popular community for discussion.
				</p>
				<base-button
					link
					:to="'/r/' + randomSubredditName"
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
	async beforeMount() {
		await this.loadAllNotifications();
		await this.getSuggestedCommunity();
	},
	data() {
		return {
			notifications: [],
			suggestedCommunity: [],
			randomSubredditName: '',
		};
	},
	computed: {
		//@vuese
		//check if ther is no notification
		noNotifications() {
			return this.notifications.length == 0;
		},
		//@vuese
		//router link of subreddit from the subreddit name
		subredditLink() {
			return 'r/' + this.randomSubredditName;
		},
		//@vuese
		//router link of subreddit from the subreddit object
		linkSubreddit() {
			return '/r/' + this.suggestedCommunity[0].data.title;
		},
	},
	methods: {
		//@vuese
		//load new ten notifications to show in list
		//@arg no argument
		async loadAllNotifications() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('notifications/getSomeNotifications', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.notifications =
				this.$store.getters['notifications/getSomeNotifications'];
		},
		//@vuese
		//mark all notifications as read
		//@arg no argument
		async markAllRead() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('notifications/markAllRead', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.loadAllNotifications();
		},
		//@vuese
		//reload and get notifications to get new data
		//@arg no argument
		reloadPage() {
			this.loadAllNotifications();
		},
		//@vuese
		//get a random suggested notification to show if no notifications
		//@arg no argument
		async getSuggestedCommunity() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('topCommunity/getSuggestedCommunity', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.suggestedCommunity =
				this.$store.getters['topCommunity/getSuggestedCommunity'];

			let firstcomm = this.suggestedCommunity[0];
			let data = firstcomm.data;
			let title = data.title;
			this.randomSubredditName = title;
		},
	},
};
</script>

<style scoped>
.ntf-header-list {
	display: flex;
	flex-direction: column;
	width: 100%;
}
.ntf-nav {
	display: flex;
	justify-content: space-between;
	padding: 1.6rem;
}
.ntf-title {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-right: 1.2rem;
}
.ntf-title-2 {
	align-items: center;
	display: flex;
	overflow: hidden;
	margin-left: auto;
}
.bi-bookmark-check {
	border-left: var(--line-7);
	padding-left: 0.8rem;
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
	font-size: 1.8rem;
	font-weight: 550;
	line-height: 2.2rem;
	letter-spacing: 0.5rem;
	color: var(--color-dark-3);
	padding: 0.8rem 1.6rem;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 1.2rem !important;
}
.see-all-ntf {
	align-items: center;
	background-color: var(--color-grey-light-3);
	border-radius: 0 0 0.4rem 0.4rem;
	display: flex;
	height: 4.9rem;
	justify-content: center;
	padding: 0 1.2rem;
}
.see-all-link {
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: 0.05rem;
	line-height: 3.2rem;
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
	margin-left: 0.8rem;
}
.flex {
	display: flex;
}
.ntf-list {
	height: 30.7rem;
	max-height: 30.7rem;
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
	height: 12.8rem;
}
h1 {
	font-size: 1.8rem;
	font-weight: 400;
	line-height: 2.2rem;
	font-weight: 500;
	margin-top: 0.5rem;
}
p {
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.8rem;
	color: var(--color-grey-dark-10);
	text-align: center;
	margin: 0 4rem;
	margin-top: 0.5rem;
	width: 65%;
}
.button-visit {
	font-style: normal;
	font-weight: 700;
	font-size: 1.4rem;
	line-height: 1.8rem;

	width: fit-content;
	height: 4rem;

	color: var(--color-white-1);
	background: var(--color-blue-2);
	margin-top: 1rem;
	padding: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;
}
@media only screen and (max-width: 1100px) {
	#ntf-list-1 {
		padding: 0;
		height: auto;
	}
}
</style>
