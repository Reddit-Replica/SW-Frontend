<template>
	<div>
		<a class="people-status"
			><div class="people-status-release">
				<div class="img-release">
					<div class="img-holder">
						<div class="img-div">
							<img
								v-if="!value.avatar"
								src="../../../img/default_inbox_avatar.png"
								alt="img"
								class="people-img"
								:id="'user-avatar-' + value.id"
								@click="gotouser(value.username)"
							/>
							<img
								v-else
								:src="$baseurl + '/' + value.avatar"
								alt="img"
								class="people-img"
								:id="'user-avatar-' + value.id"
								@click="gotouser(value.username)"
							/>
						</div>
					</div>
				</div>
				<div class="people-content">
					<a class="people-content-release" :href="'/user/' + value.username">
						<h6 class="people-name">u/{{ value.username }}&nbsp;</h6>
						<p class="karma-number">{{ value.karma }} Karma&nbsp;</p>
					</a>
				</div>
				<div class="follow">
					<base-button
						class="follow-button"
						@click="toggle(value.username, !value.following)"
						:button-text="!notFollowed ? 'Unfollow' : 'Follow'"
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
				@undo-action="toggle(value.username, !value.following)"
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
	beforeMount() {
		this.showuser();
	},
	methods: {
		showuser() {
			this.notFollowed = !this.value.following;
		},
		async toggle(user, follow) {
			if (localStorage.getItem('accessToken')) {
				this.notFollowed = !this.notFollowed;
				if (this.notFollowed) {
					this.savedUnsavedfollow.push({
						id: this.savedUnsavedfollow.length,
						postid: this.value.id,
						type: 'follow',
						state: 'r/' + this.value.username,
					});
					setTimeout(() => {
						this.savedUnsavedPosts.shift();
					}, 10000);
				} else {
					this.savedUnsavedfollow.push({
						id: this.savedUnsavedfollow.length,
						postid: this.value.id,
						type: 'unfollow',
						state: 'r/' + this.value.username,
					});
					setTimeout(() => {
						this.savedUnsavedfollow.shift();
					}, 10000);
				}
				try {
					await this.$store.dispatch('search/follow', {
						baseurl: this.$baseurl,
						following: follow,
						username: user,
					});
				} catch (error) {
					console.log(error);
				}
			}
		},
		gotoUser(name) {
			this.$router.push('/user/' + name);
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
}
p {
	display: block;
	margin-block-start: 0em;
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.people-status {
	display: flex;
	flex-direction: column;
	margin-top: 0px;
	padding: 16px;
	border-radius: 4px 4px 0 0;
	border-bottom: thin solid #ccc;
}
.people-status-release {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.img-release {
	font-size: 36px;
	max-height: 36px;
	max-width: 36px;
	overflow: hidden;
	width: 36px;
	line-height: normal;
	flex-shrink: 0;
}
.people-img {
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
.people-content {
	flex-grow: 1;
	padding: 0 8px;
	overflow: hidden;
	overflow-wrap: break-word;
}
.people-content-release {
	display: flex;
	align-items: baseline;
	flex-direction: column;
}
.people-name {
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 12px;
	line-height: 16px;
	color: rgb(58, 49, 49);
	font-weight: 700;
}
.karma-number {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: lightgray;
}
.follow {
	flex-shrink: 0;
	width: 88px;
}
.follow-button {
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
