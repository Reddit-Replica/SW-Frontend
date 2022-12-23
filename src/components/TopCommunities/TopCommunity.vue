<template>
	<li class="topCommunity">
		<div
			:to="'r/' + name"
			@click.prevent="goToSubreddit(name)"
			class="topCommunityLink"
			:id="'top-community-link-' + index"
		>
			<div class="topCommunityBlock" :id="'top-community-div-' + index">
				<span class="topCommunityIndex" :id="'top-community-order-' + index">{{
					index + 1
				}}</span>
				<svg
					:id="'top-community-icon-' + index"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					class="bi bi-chevron-up"
					viewBox="0 0 16 16"
					style="color: #46d160"
				>
					<path
						fill-rule="evenodd"
						d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
					/>
				</svg>
				<img
					class="topCommunityImage"
					:src="image"
					alt="community image"
					v-if="!noImage"
					:id="'top-community-img-' + index"
				/>
				<img
					class="topCommunityImage"
					src="../../../img/default_subreddit_image.png"
					alt="community image"
					v-else
					:id="'top-community-img2-' + index"
				/>
				<a
					class="topCommunityName"
					href="link"
					:id="'top-community-link2-' + index"
					>r/{{ name }}</a
				>
			</div>
		</div>

		<div class="joinBlock">
			<base-button
				class="button blue-button-2"
				@click="joinSubreddit"
				v-if="!isMember"
				>Join</base-button
			>
			<base-button
				class="button white-button"
				@mouseover="hoverJoin('Leave')"
				@mouseleave="hoverJoin('Joined')"
				@click="leaveSubreddit"
				v-if="isMember"
				>{{ hoverButtonText }}</base-button
			>
			<span class="topCommunityName members-count" v-if="showMembers">{{
				membersCount
			}}</span>
		</div>
		<save-unsave-popup-message v-if="doneJoined" class="pop-up" id="pop-join"
			>Successfully joined r/{{ name }}</save-unsave-popup-message
		>
		<save-unsave-popup-message v-if="doneLeft" class="pop-up" id="pop-leave"
			>Successfully left r/{{ name }}</save-unsave-popup-message
		>
		<save-unsave-popup-message
			v-if="notdoneLeft"
			class="pop-up"
			id="pop-leave-not"
			>You can't leave r/{{ name }}, you are the
			moderator.</save-unsave-popup-message
		>
	</li>
</template>

<script>
import SaveUnsavePopupMessage from '../PostComponents/SaveUnsavePopupMessage.vue';

export default {
	emits: ['reload'],
	components: { SaveUnsavePopupMessage },
	props: {
		//@vuese
		//index of community in top communities list
		index: {
			type: Number,
			default: 0,
		},
		//@vuese
		//Image URL of community in top communities list
		image: {
			type: String,
			default: '',
		},
		//@vuese
		//Name of community in top communities list
		name: {
			type: String,
			default: '',
		},
		//@vuese
		//ID of community in top communities list
		id: {
			type: String,
			default: '',
		},
		//@vuese
		//Number of members in community in top communities list
		members: {
			type: Number,
			default: 1,
		},
		//@vuese
		//show number of members in community or not
		showMembers: {
			type: Boolean,
			default: false,
		},
		//@vuese
		//Is user a member in this community
		isMember: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		//@vuese
		//Number of members in community using K,M,..
		membersCount() {
			if (this.members >= 1000000) {
				return parseFloat((this.members / 1000000).toFixed(1)) + ' M';
			} else if (this.members >= 1000) {
				return parseFloat((this.members / 1000).toFixed(1)) + ' K';
			} else {
				return this.members;
			}
		},
		//@vuese
		//Check if community has no image
		noImage() {
			return !this.image;
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
					subredditId: this.id,
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
					subredditName: this.name,
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
		//@vuese
		//Change router to subreddit router
		//@arg no argument
		goToSubreddit(name) {
			this.$router.replace(`/r/${name}`);
		},
	},
};
</script>

<style scoped>
.topCommunity {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	position: relative;
	background-color: var(--main-white-color);
	/* width: 310px; */
	height: 4.8rem;
}
.topCommunity:not(:last-of-type) {
	border-bottom: thin solid var(--color-grey-light-4);
}
.topCommunityLink {
	padding: 0;
	margin: 0 1.2rem;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 4.8rem;
	align-items: center;
	display: flex;
}
.topCommunityBlock {
	overflow: hidden;
	align-items: center;
	display: flex;
}
.topCommunityIndex {
	color: var(--color-dark-1);
	text-align: right;
	min-width: 2rem;
	font-size: 1.4rem;
	font-weight: 500;
}
.topCommunityImage {
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 100%;
	border-radius: 2.4rem;
	font-size: 3.2rem;
	height: 3.2rem;
	margin: 0 0.8rem;
	width: 3.2rem;
}

.bi-chevron-up {
	color: var(--color-green);
	font-size: 2rem;
	font-weight: 400;
	height: 2rem;
	vertical-align: middle;
	width: 2rem;
	margin-left: 0.8rem;
}
.topCommunityName {
	max-width: 12.5rem;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	display: inline-block;
	text-decoration: none;
	color: var(--color-dark-1);
	font-size: 1.4rem;
	font-weight: 500;
}
.joinBlock {
	margin-right: 1.2rem;
	white-space: nowrap;
}
.members-count {
	width: 5rem;
	margin-left: 0.5rem;
	font-size: 1.6rem;
	vertical-align: middle;
	text-align: center;
}
.button {
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.7rem;
	padding: 0.4rem 1.6rem;
	width: 9.6rem;
	height: 3.2rem;
}
@media only screen and (max-width: 500px) {
	.button {
		width: 6.4rem;
	}
}
.blue-button-2 {
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
.pop-up {
	bottom: 0;
	position: fixed;
	z-index: 1000;
	right: 35%;
}
</style>
