<template>
	<div class="about-bar" id="about-community-read-only">
		<div class="about-header">
			<div class="about-title"><h2 class="about-h2">About Community</h2></div>
			<div class="about-options">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					class="bi bi-three-dots"
					viewBox="0 0 16 16"
					@click="dotsClick"
					id="three-dots"
				>
					<path
						d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
					/>
				</svg>
				<div class="box-options" v-if="dotsClicked">
					<button
						class="button-option"
						@click="addToCustomFeed"
						id="add-to-custom-feed"
					>
						Add To Custom Feed
					</button>
					<button
						class="button-option"
						@click="addToFavourite"
						id="add-to-favourite"
					>
						{{ favouriteText }}
					</button>
				</div>
			</div>
		</div>

		<div class="about-body">
			<div class="text" id="comm-desc-read">
				{{ communityDescription }}
			</div>

			<div class="box-body" id="comm-date-box">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-calendar4"
					viewBox="0 0 16 16"
				>
					<path
						d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
					/>
				</svg>
				<span
					class="text-grey text space"
					id="comm-date-text"
					@mouseover="toogleDateBox"
					@mouseleave="toogleDateBox"
					>Created {{ communityDate }}</span
				>
				<div
					class="box arrow-top box-arrow-1"
					id="comm-date-hover"
					v-if="dateBoxShown"
				>
					10 days ago.
				</div>
			</div>

			<div class="line"></div>

			<div class="flex-between">
				<div id="members-num" class="relative-flex">
					<div
						class="text-bold"
						id="comm-mem"
						@mouseover="toogleMembersCountBox"
						@mouseleave="toogleMembersCountBox"
					>
						{{ membersCount }}
					</div>
					<div class="text-grey">Members</div>
					<div
						class="box arrow-top box-arrow-2"
						id="comm-mem-hover"
						v-if="MembersCountBoxShown"
					>
						{{ membersCount }} Members
					</div>
				</div>
				<div id="online-members-num" class="relative-flex">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-dot"
							viewBox="0 0 16 16"
						>
							<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
						</svg>
						<span
							class="text-bold"
							id="comm-online-mem"
							@mouseover="toogleOnlineMembersCountBox"
							@mouseleave="toogleOnlineMembersCountBox"
							>{{ onlineMembersCount }}</span
						>
					</div>
					<div class="text-grey">Online</div>
					<div
						class="box arrow-top box-arrow-3"
						id="comm-online-mem-hover"
						v-if="onlineMembersCountBoxShown"
					>
						{{ onlineMembersCount }} Online
					</div>
				</div>
				<div></div>
				<div></div>
			</div>

			<div class="line"></div>

			<div class="box-body">
				<base-button
					class="button-blue-2 text button-create-post"
					link
					to="/submit"
					button-text="Create Post"
					id="create-post-subreddit-bar"
				></base-button>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { BaseButton },
	props: {
		//@vuese
		//Number of members in subreddit
		membersCount: {
			type: Number,
			default: 1,
		},
		//@vuese
		//Number of online members in subreddit
		onlineMembersCount: {
			type: Number,
			default: 1,
		},
		//@vuese
		//Subreddit creation date
		communityDate: {
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
		//Subreddit description
		communityDescription: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			dotsClicked: false,
			addedToCustomFeed: false,
			addedToFavourite: false,
			favouriteText: 'Add To Favourites',

			dateBoxShown: false,
			MembersCountBoxShown: false,
			onlineMembersCountBoxShown: false,
		};
	},
	methods: {
		//@vuese
		//Toogle Show/hide options list in about community bar by clicking on dots icon.
		//@arg no argument
		dotsClick() {
			this.dotsClicked = !this.dotsClicked;
		},
		//@vuese
		//Mark subreddit added to custom feed
		//@arg no argument
		addToCustomFeed() {
			this.addedToCustomFeed = true;
		},
		//@vuese
		//Mark subreddit added to favourites
		//@arg no argument
		addToFavourite() {
			//toggle add to favourite data
			this.addedToFavourite = !this.addedToFavourite;

			//change button text
			this.favouriteText = this.addedToFavourite
				? 'Remove From Favourites'
				: 'Add To Favourites';

			//hide list
			this.dotsClick();

			//send request
			const accessToken = localStorage.getItem('accessToken');
			this.$store.dispatch('community/ToggleFavourite', {
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
		},

		//@vuese
		//Show/Hide date box while hovering on subreddit creation date
		//@arg no argument
		toogleDateBox() {
			this.dateBoxShown = !this.dateBoxShown;
		},
		//@vuese
		//Show/Hide members count box while hovering on subreddit members count
		toogleMembersCountBox() {
			this.MembersCountBoxShown = !this.MembersCountBoxShown;
		},
		//@vuese
		//Show/Hide online members count box while hovering on subreddit online members count
		//@arg no argument
		toogleOnlineMembersCountBox() {
			this.onlineMembersCountBoxShown = !this.onlineMembersCountBoxShown;
		},
	},
};
</script>

<style scoped>
.about-bar {
	background-color: var(--color-white-1);
	color: var(--color-dark-4);
	fill: var(--color-dark-4);
	border: var(--line-10);
	border-radius: 0.4rem;
	overflow: visible;
	word-wrap: break-word;
}
.about-header {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
	fill: var(--color-white-1);
	border-radius: 0.3rem 0.3rem 0 0;
	display: flex;
	padding: 0 1.2rem 1.2rem;
}
.about-title {
	padding: 1.2rem 0 0;
}
.about-h2 {
	font-size: 1.4rem;
	line-height: 1.8rem;
	font-weight: 700;
	text-transform: none;
}
.about-options {
	margin: auto 0 auto auto;
	padding-top: 1rem;
	vertical-align: middle;
}

.bi-three-dots:hover {
	background-color: rgba(0, 53, 132, 0.2);
	cursor: pointer;
}
.bi-three-dots {
	margin-left: 0.4rem;
	margin-right: 0.4rem;
	border-radius: 0.2rem;
}
.box-options {
	border: 1px solid var(--color-blue-light-2);
	box-shadow: var(--shadow-menu);
	background-color: var(--color-white-1);
	color: var(--color-dark-4);
	border-radius: 0.4rem;
	overflow: hidden;
	position: absolute;
	z-index: 10;
	margin-top: 0.5rem;
}
.button-option {
	color: var(--color-grey-light-5);
	background-color: var(--color-white-1);
	display: block;
	text-transform: capitalize;
	text-align: left;
	outline: none;
	border: none;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	padding: 0.8rem;
	width: 100%;
}
.button-option:hover {
	color: var(--color-dark-4);
	background-color: var(--color-blue-light-2);
}
.about-body {
	padding: 1.2rem;
}

.flex {
	display: flex;
}
.box-body {
	margin-top: 1.2rem;
	position: relative;
}
.text-grey {
	color: var(--color-grey-light-5);
}
.text {
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.8rem;
}
.text-bold {
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2rem;
}
.space {
	margin-left: 0.8rem;
}
.line {
	background-color: var(--color-grey-light-3);
	border: none;
	height: 0.1rem;
	margin: 1.6rem 0;
}
.flex-between {
	display: flex;
	justify-content: space-between;
}
.bi-dot {
	color: var(--color-green);
}

.button-blue-2 {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
	border: none;
	padding: 0.4rem 1.6rem;
	margin-left: 0.8rem;
}
.button-create-post {
	height: 3.2rem;
	width: 100%;
	margin: 0;
}
.box {
	background-color: var(--color-dark-1);
	color: var(--color-white-1);
	font-size: 9px;
	padding: 5px;
	position: absolute;
	border-radius: 4px;
	text-align: center;
	pointer-events: none;
	transform: translateX(-50%);
	z-index: 100;
}
.box.arrow-top {
	margin-top: 10px;
}
.box.arrow-top:after {
	content: ' ';
	position: absolute;
	right: 25%;
	top: -5px;
	border-top: none;
	border-right: 15px solid transparent;
	border-left: 15px solid transparent;
	border-bottom: 15px solid black;
}
.relative-flex {
	position: relative;
}
.box-arrow-1 {
	right: 20%;
}
.box-arrow-2 {
	right: -150%;
}
.box-arrow-3 {
	right: -200%;
	padding: 10px;
}
</style>
