<template>
	<div>
		<div class="top-banner" v-if="subredditBannerUrl">
			<img :src="$baseurl + '/' + subredditBannerUrl" class="top-banner-img" />
			<router-link :to="'/r/' + subredditName" id="link-top-subreddit-page-2"
				><div class="link" id="link-top-subreddit-page"></div
			></router-link>
		</div>
		<div class="blue-top" v-else>
			<router-link :to="'/r/' + subredditName" id="link-top-subreddit-page-2"
				><div class="link" id="link-top-subreddit-page"></div
			></router-link>
		</div>
		<div class="white-top">
			<div class="flex-start">
				<div class="top flex-start">
					<img
						:src="$baseurl + '/' + subredditImageUrl"
						alt="subredditImage"
						v-if="subredditImageUrl"
						id="img-top-subreddit-page"
					/>
					<img
						src="../../../img/default_subreddit_image.png"
						alt="user-img"
						v-else
						id="img-2-top-subreddit-page"
					/>
					<div class="top-title-button">
						<div class="top-title">
							<h1 class="title-1" id="title-top-subreddit-page">
								{{ subredditNickname }}
							</h1>
							<h2 class="title-2" id="title-2-top-subreddit-page">
								r/{{ subredditName }}
							</h2>
						</div>
						<div>
							<base-button
								class="button blue-button"
								@click="joinSubreddit"
								v-if="!joined"
								id="join-button"
								>Join</base-button
							>
							<base-button
								class="button white-button"
								@mouseover="hoverJoin('Leave')"
								@mouseleave="hoverJoin('Joined')"
								@click="leaveSubreddit"
								v-if="joined"
								id="leave-button"
								>{{ hoverButtonText }}</base-button
							>
							<save-unsave-popup-message
								v-if="doneJoined"
								class="pop-up"
								id="pop-join"
								>Successfully joined r/{{
									subredditName
								}}</save-unsave-popup-message
							>
							<save-unsave-popup-message
								v-if="doneLeft"
								class="pop-up"
								id="pop-leave"
								>Successfully left r/{{
									subredditName
								}}</save-unsave-popup-message
							>
							<save-unsave-popup-message
								v-if="notdoneLeft"
								class="pop-up"
								id="pop-leave-not"
								>You can't leave r/{{ subredditName }}, you are the
								moderator.</save-unsave-popup-message
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SaveUnsavePopupMessage from '../PostComponents/SaveUnsavePopupMessage.vue';
export default {
	emits: ['reload'],
	components: { SaveUnsavePopupMessage },
	props: {
		//@vuese
		//Subreddit ID
		subredditId: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit name
		subredditName: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit nickname
		subredditNickname: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit Image URL
		subredditImageUrl: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit Banner Image URL
		subredditBannerUrl: {
			type: String,
			default: '',
		},
		//@vuese
		//Is this user joined in subreddit or not
		joined: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			hoverButtonText: 'Joined',
			doneJoined: false,
			doneLeft: false,
			notdoneLeft: false,
		};
	},
	methods: {
		//@vuese
		//Change button text from Joined to Leave when hovering on button
		//@arg text to be written inside button
		hoverJoin(text) {
			this.hoverButtonText = text;
		},
		//@vuese
		//Join a subreddit
		//@arg no argument
		async joinSubreddit() {
			const accessToken = localStorage.getItem('accessToken');

			if (localStorage.getItem('accessToken') != null) {
				await this.$store.dispatch('community/joinSubreddit', {
					message: this.message,
					subredditId: this.subredditId,
					baseurl: this.$baseurl,
					token: accessToken,
				});

				this.doneJoined = true;
				//@vuese
				//emit fires to reload subreddit details
				this.$emit('reload');
			} else {
				this.$router.replace('/login');
			}
		},
		//@vuese
		//leave a subreddit
		//@arg no argument
		async leaveSubreddit() {
			const accessToken = localStorage.getItem('accessToken');

			if (localStorage.getItem('accessToken') != null) {
				await this.$store.dispatch('community/leaveSubreddit', {
					subredditName: this.subredditName,
					baseurl: this.$baseurl,
					token: accessToken,
				});
				console.log(this.$store.getters['community/getLeaveOwner']);

				if (this.$store.getters['community/getLeaveOwner'] === true) {
					this.notdoneLeft = true;
					//@vuese
					//emit fires to reload subreddit details
					this.$emit('reload');
				} else {
					this.doneLeft = true;
					//@vuese
					//emit fires to reload subreddit details
					this.$emit('reload');
				}
			} else {
				this.$router.replace('/login');
			}
		},
	},
};
</script>

<style scoped>
.blue-top {
	background: var(--color-blue-light-3);
	height: 8rem;
	width: 100%;
	margin-top: 5rem;
}
.top-banner {
	height: 8rem;
	width: 100%;
	margin-top: 5rem;
}
.top-banner-img {
	height: 8rem;
	width: 100%;
	border: none;
	border-radius: 0;
}
.link {
	height: 100%;
	width: 100%;
	cursor: pointer;
}
.white-top {
	background: var(--color-white-1);
	width: 100%;
	height: 8rem;
}
.top {
	margin-bottom: 1.2rem;
	margin-top: -1.4rem;
	margin-left: 25rem;
}
.flex-start {
	display: flex;
	align-items: flex-start;
}
img {
	border-radius: 100%;
	border: 0.4rem solid var(--color-white-1);
	display: inline-block;
	height: 7.2rem;
	width: 7.2rem;
	background: var(--color-white-1);
	box-sizing: border-box;
}
.top-title-button {
	box-sizing: border-box;
	align-items: flex-start;
	display: inline-flex;
	flex: 1;
	padding-left: 1.6rem;
	margin-top: 2.4rem;
	justify-content: space-between;
}
.top-title {
	display: inline-block;
	padding-right: 2.4rem;
}
.title-1 {
	color: var(--color-dark-3);
	display: inline-block;
	flex: 1;
	font-size: 2.8rem;
	font-weight: 700;
	line-height: 3.2rem;
	padding: 0 0.2rem 0.4rem 0;
	width: 100%;
}
.title-2 {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	color: var(--color-grey-light-5);
}
.button {
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.7rem;
	padding: 0.4rem 1.6rem;
	width: 9.6rem;
	height: 3.2rem;
}
.blue-button {
	background-color: var(--color-blue-2);
	border: none;
	color: var(--color-white-1);
}
.white-button {
	background-color: var(--color-white-1);
	border: var(--line-5);
	color: var(--color-blue-2);
}
.white-button:hover {
	opacity: 0.92;
}

@media screen and (max-width: 60rem) {
	.top {
		margin-left: 0.8rem;
	}
	.button {
		max-width: 9.6rem;
		min-height: 3.2rem;
		max-height: 3.2rem;
		min-width: 3.2rem;
	}
}
.pop-up {
	bottom: 0;
	position: fixed;
	z-index: 1000;
}
</style>
