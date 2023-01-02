<template>
	<div>
		<a class="user-a"
			><div class="user-div">
				<div class="user-details" @click="gotosub(value.subredditName)">
					<div class="user-img-div">
						<div class="user-img-det"></div>
						<div class="user-img">
							<img
								v-if="!value.picture"
								src="../../../img/default_subreddit_image.png"
								alt="img"
								class="image-user"
								:id="'user-avatar-' + value.subredditName"
								@click="gotosub(value.subredditName)"
							/>
							<img
								v-else
								:src="$baseurl + '/' + value.picture"
								alt="img"
								class="image-user"
								:id="'user-avatar-' + value.subredditName"
								@click="gotosub(value.subredditName)"
							/>
						</div>
					</div>
				</div>
				<a class="people-content pointer" @click="gotosub(value.subredditName)">
					<div class="people-content_release">
						<h6 class="people-name">r/{{ value.subredditName }}&nbsp;</h6>

						<p class="karma-number">
							<span class="point-span" role="presentation">&nbsp;•&nbsp;</span
							>{{ value.numberOfMembers }} Members&nbsp;
						</p>
					</div>
					<p class="p-details">{{ value.description }}&nbsp;</p>
				</a>
				<div class="follow">
					<base-button
						class="follow-button"
						@click="toggle()"
						:id="'user-button-' + value.subredditName"
						:button-text="notFollowed ? 'Leave' : 'Join'"
					></base-button>
				</div>
			</div>
		</a>
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
			savedUnsavedfollow: [],
		};
	},
	components: {
		BaseButton,
		FollowJoin,
	},
	// computed: {
	// 	SearchedCms() {
	// 		// //console.log(this.$store.getters['search/Getsubreddits']);
	// 		return this.$store.getters['search/Getsubreddits'];
	// 	},
	// },
	created() {
		this.showuser();
	},
	methods: {
		/**
		 * @vuese
		 * Toggle notFollowed Data
		 * @arg no arg
		 */
		showuser() {
			this.notFollowed = this.value.joined;
			// //console.log('Goes');
		},
		/**
		 * @vuese
		 * Request for Join and Leave Subreddits
		 * @arg no arg
		 */
		async toggle() {
			if (localStorage.getItem('accessToken')) {
				// //console.log('Goes');
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
		/**
		 * @vuese
		 * Go To subreddit URL.
		 * @arg Name Subreddit's Name
		 */
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
a {
	color: inherit;
	text-decoration: inherit;
}
.image-user {
	height: 50px;
	width: 60px;
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
	cursor: pointer;
	text-decoration: underline 0.15px rgba(0, 0, 0, 0);
	transition: text-decoration-color 100ms;
}
.people-name:hover {
	text-decoration-color: rgba(0, 0, 0, 1);
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
.positioning {
	position: fixed;
	bottom: 0;
	right: 400px;
}
</style>
