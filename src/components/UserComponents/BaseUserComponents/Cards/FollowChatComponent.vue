<template>
	<div class="follow-chat-div">
		<base-button
			v-if="(!blocked && state == 'user') || state == 'unauth'"
			:button-text="FollowedUser ? 'Unfollow' : 'Follow'"
			class="chat-follow-button"
			id="profile-follow-button"
			@click="toggleFollowed"
			:class="[FollowedUser ? 'chat-unfollow-button' : '']"
		></base-button>
		<base-button
			v-if="(!blocked && state == 'user') || state == 'unauth'"
			button-text="Chat"
			class="chat-follow-button"
			id="profile-chat-button"
		></base-button>
	</div>
	<div
		v-if="blocked && state == 'user'"
		class="blocked-user-button"
		id="blocked-user-box"
	>
		<base-button
			@click="toggleBlockedUnblocked"
			class="blocked-button"
			id="blocked-user-button"
			@mouseover="blockedText = 'Unblocked'"
			@mouseleave="blockedText = 'Blocked'"
			>{{ blockedText }}</base-button
		>
	</div>
</template>

<script>
import BaseButton from '../../../BaseComponents/BaseButton.vue';
export default {
	props: {
		// @vuese
		// blocked to Know the status of the user if blocked or not
		blocked: {
			type: Boolean,
			required: false,
			default: false,
		},
		// @vuese
		// followed to Know the status of the user if followed or not
		followed: {
			type: Boolean,
			required: true,
			default: false,
		},
		// @vuese
		// to know if the user page is for the authenticated user or other user or no authenticated user
		state: {
			type: String,
			required: true,
		},
		// @vuese
		// the user name of the current user so it used for block or follow the user
		userName: {
			type: String,
			required: true,
		},
	},
	components: {
		BaseButton,
	},
	data() {
		return {
			blockedText: 'Blocked',
			FollowedUser: this.followed,
		};
	},
	mounted() {
		//console.log(this.state);
	},
	methods: {
		/**
		 * @vuese
		 * this methods handle a request for following || unfollowing the  user
		 * @arg no
		 */
		async toggleFollowed() {
			if (this.state == 'unauth') {
				this.$router.push('/');
			}
			this.FollowedUser = !this.FollowedUser;
			try {
				await this.$store.dispatch('user/followUnfollowUser', {
					baseurl: this.$baseurl,
					followUnfollowData: {
						follow: this.FollowedUser,
						username: this.userName,
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		/**
		 * @vuese
		 * this methods handle a request for blocking || unblocking the  user
		 * @arg no
		 */
		async toggleBlockedUnblocked() {
			try {
				await this.$store.dispatch('user/blockUnblockUser', {
					baseurl: this.$baseurl,
					blockUnblockData: {
						username: this.userName,
						block: !this.blocked,
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style scoped>
.follow-chat-div {
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
}
.chat-follow-button {
	/* border: 1px solid #ccc; */
	overflow: visible;
	word-wrap: break-word;
	background-color: var(--color-blue-2);
	color: var(--main-white-color);
	padding: 12px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	/* min-width: 32px; */
	padding: 4px 16px;
	align-items: center;
	border-radius: 9999px;
	display: flex;
	justify-content: center;
	text-align: center;
	width: 139px;
	position: relative;
}
.chat-unfollow-button {
	background-color: var(--main-white-color);
	color: var(--color-blue-2);
	border: 1px solid var(--color-blue-2);
}

.chat-follow-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}
.chat-unfollow-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: #0079d3;
	z-index: 55;
	opacity: 0;
}

.chat-follow-button:hover::before {
	opacity: 0.08;
}
.blocked-user-button {
	margin-top: 10px;
	width: 100%;
	height: 50px;
	position: relative;
}
.blocked-button {
	width: 100%;
	height: 32px;
	background-color: #ff4500;
	color: var(--main-white-color);
	fill: var(--main-white-color);
	position: relative;
	border-radius: 9999px;
	font-size: 14px;
	font-weight: 700;
}
.blocked-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}
.blocked-button:hover::before {
	opacity: 0.08;
}
</style>
