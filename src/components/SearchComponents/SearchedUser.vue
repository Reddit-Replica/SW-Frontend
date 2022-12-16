<template>
	<div>
		<a class="user-a"
			><div class="user-div">
				<div class="user-details">
					<div class="user-img-div">
						<div class="user-img-det"></div>
						<div class="user-img">
							<img
								v-if="!value.avatar"
								src="../../../img/default_inbox_avatar.png"
								alt="img"
								class="image-user"
								:id="'user-avatar' + value.id"
								@click="gotouser(value.username)"
							/>
							<img
								v-else
								:src="$baseurl + '/' + value.avatar"
								alt="img"
								class="image-user"
								:id="'user-avatar' + value.id"
								@click="gotouser(value.username)"
							/>
						</div>
					</div>
				</div>
				<div class="people-content">
					<div class="people-content_release">
						<div class="name" @click="gotoUser(value.username)">
							<h6 class="people-name">u/{{ value.username }}&nbsp;</h6>
						</div>
						<p class="karma-number">
							<span class="point-span" role="presentation">&nbsp;•&nbsp;</span
							>{{ value.karma }} Karma&nbsp;
						</p>
					</div>
					<!-- <p class="p-details">{{ value.Pdetails }}&nbsp;</p> -->
				</div>
				<div class="follow">
					<base-button
						class="follow-button"
						@click="toggle(value.username, !value.following)"
						:button-text="!notFollowed ? 'Unfollow' : 'Follow'"
					></base-button>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	props: {
		value: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			notFollowed: true,
		};
	},
	components: {
		BaseButton,
	},
	computed: {
		SearchedUsers() {
			console.log(this.$store.getters['search/Getusers']);
			return this.$store.getters['search/Getusers'];
		},
	},
	beforeMount() {
		this.showuser();
	},
	methods: {
		showuser() {
			this.notFollowed = !this.value.following;
		},
		async toggle(user, follow) {
			this.notFollowed = !this.notFollowed;
			if (localStorage.getItem('accessToken')) {
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
a {
	color: inherit;
	text-decoration: inherit;
}
.user-a {
	margin-bottom: 0;
	border-radius: 4px 4px 0 0;
	border: thin solid #ccc;
	padding: 16px;
	display: flex;
	flex-direction: column;
	margin-top: -1px;
	color: inherit;
	text-decoration: inherit;
}
.user-div {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.people {
	margin-bottom: 16px;
	width: 100%;
}
.people-results {
	background: #fff;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
	max-width: 100%;
	width: 100%;
}
.people-content {
	flex-grow: 1;
	padding: 0 8px;
	overflow: hidden;
	overflow-wrap: break-word;
}
.people-content_release {
	display: flex;
	align-items: baseline;
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
.p-details {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 200;
	line-height: 12px;
	color: #7c7c7c;
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
.name {
	cursor: pointer;
}
</style>
