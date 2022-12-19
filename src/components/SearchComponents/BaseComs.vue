<template>
	<div>
		<a class="communities-status"
			><div class="communities-status-release">
				<img
					v-if="!value.picture"
					src="../../../img/default_inbox_avatar.png"
					alt="img"
					class="communities-img"
					@click="gotosub(value.subredditName)"
					:id="'user-avatar-' + value.subredditName"
				/>
				<img
					v-else
					:src="$baseurl + '/' + value.picture"
					alt="img"
					class="communities-img"
					:id="'user-avatar-' + value.subredditName"
					@click="gotosub(value.subredditName)"
				/>
				<div class="communities-content">
					<a
						class="communities-content-release"
						:href="'/r/' + value.subredditName"
					>
						<h6 class="communities-name">r/{{ value.subredditName }}</h6>
						<p class="community-members">{{ value.numberOfMembers }} Members</p>
					</a>
				</div>
				<div class="join">
					<base-button
						class="join-button"
						@click="toggle()"
						:id="'user-button-' + value.subredditName"
						:button-text="notFollowed ? 'Leave' : 'Join'"
					></base-button>
				</div></div
		></a>
		<div class="positioning">
			<FollowJoin
				v-for="message in savedUnsavedfollow"
				:key="message.id"
				:type="message.type"
				:state="message.state"
				:typeid="message.postid"
				@undo-action="toggle()"
			></FollowJoin>
		</div>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
import FollowJoin from './FollowJoin.vue';
// import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
export default {
	props: {
		value: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			savedUnsavedfollow: [],
			notFollowed: true,
		};
	},
	components: {
		BaseButton,
		FollowJoin,
	},
	created() {
		this.showuser();
	},
	methods: {
		showuser() {
			this.notFollowed = this.value.joined;
		},
		async toggle() {
			if (localStorage.getItem('accessToken')) {
				// console.log('Goes');
				this.notFollowed = !this.notFollowed;
				if (this.notFollowed) {
					try {
						await this.$store.dispatch('search/joinSubreddit', {
							baseurl: this.$baseurl,
							subredditId: this.value.dataId,
						});
						this.savedUnsavedfollow.push({
							id: this.savedUnsavedfollow.length,
							postid: this.value.subredditId,
							type: 'Joined',
							state: 'r/' + this.value.subredditName,
						});
						setTimeout(() => {
							this.savedUnsavedPosts.shift();
						}, 10000);
					} catch (error) {
						console.log(error);
					}
				} else {
					try {
						await this.$store.dispatch('search/leaveSubreddit', {
							baseurl: this.$baseurl,
							subredditName: this.value.subredditName,
						});
						this.savedUnsavedfollow.push({
							id: this.savedUnsavedfollow.length,
							postid: this.value.subredditId,
							type: 'Left',
							state: 'r/' + this.value.subredditName,
						});
						setTimeout(() => {
							this.savedUnsavedfollow.shift();
						}, 10000);
					} catch (error) {
						console.log(error);
					}
				}
			}
		},
		gotosub(subredditName) {
			this.$router.push('/r/' + subredditName);
		},
	},
};
</script>

<style scoped>
div {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
h4 h6 div {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
a {
	color: inherit;
	text-decoration: inherit;
	cursor: pointer;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
p {
	display: block;
	margin-block-start: 0em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.communities-status {
	margin-bottom: 0;
	border-radius: 4px 4px 0 0;
	border-bottom: thin solid #ccc;
	display: flex;
	flex-direction: column;
	margin-top: -1px;
	padding: 16px;
	cursor: pointer;
}
.communities-status-release {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.communities-img {
	font-size: 36px;
	height: 36px;
	max-height: 36px;
	max-width: 36px;
	overflow: hidden;
	width: 36px;
	line-height: normal;
	flex-shrink: 0;
	border-radius: 100%;
	vertical-align: middle;
}
.communities-content {
	flex-grow: 1;
	padding: 0 8px;
	overflow: hidden;
	overflow-wrap: break-word;
}
.communities-content-release {
	display: flex;
	align-items: baseline;
	flex-direction: column;
}
.communities-name {
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 12px;
	line-height: 16px;
	color: rgb(58, 49, 49);
	font-weight: 700;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
}
.communities-name:hover {
	text-decoration-color: rgba(0, 0, 0, 1);
}
.community-members {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #bbb;
}
.join {
	flex-shrink: 0;
	width: 88px;
}
.join-button {
	width: 100%;
	color: rgb(98, 98, 252);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
.positioning {
	position: fixed;
	bottom: 0;
	right: 500px;
}
</style>
