<template>
	<li class="topCommunity">
		<div
			:to="'r/' + name"
			@click.prevent="goToSubreddit(name)"
			class="topCommunityLink"
			:id="'top-community-link-' + index"
		>
			<div class="topCommunityBlock">
				<span class="topCommunityIndex">{{ index + 1 }}</span>
				<svg
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
				/>
				<img
					class="topCommunityImage"
					src="../../../img/default_subreddit_image.png"
					alt="community image"
					v-else
				/>
				<a class="topCommunityName" href="link">r/{{ name }}</a>
			</div>
		</div>

		<div class="joinBlock">
			<!-- <base-button
				button-text="Join"
				class="join"
				:id="'join-top-community-' + index"
			></base-button> -->
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
	</li>
</template>

<script>
export default {
	emits: ['reload'],
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
		members: {
			type: Number,
			default: 1,
		},
		showMembers: {
			type: Boolean,
			default: false,
		},
		isMember: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		membersCount() {
			if (this.members >= 1000000) {
				return parseFloat((this.members / 1000000).toFixed(1)) + ' M';
			} else if (this.members >= 1000) {
				return parseFloat((this.members / 1000).toFixed(1)) + ' K';
			} else {
				return this.members;
			}
		},
		noImage() {
			return !this.image;
		},
	},
	data() {
		return {
			hoverButtonText: 'Joined',
		};
	},
	methods: {
		hoverJoin(text) {
			this.hoverButtonText = text;
		},
		async joinSubreddit() {
			const accessToken = localStorage.getItem('accessToken');

			await this.$store.dispatch('community/joinSubreddit', {
				message: this.message,
				subredditId: this.id,
				baseurl: this.$baseurl,
				token: accessToken,
			});

			console.log('reload');
			this.$emit('reload');
			console.log('reload2');
		},
		async leaveSubreddit() {
			const accessToken = localStorage.getItem('accessToken');

			await this.$store.dispatch('community/leaveSubreddit', {
				subredditName: this.name,
				baseurl: this.$baseurl,
				token: accessToken,
			});

			this.$emit('reload');
		},
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
	height: 48px;
}
.topCommunity:not(:last-of-type) {
	border-bottom: thin solid var(--color-grey-light-4);
}
.topCommunityLink {
	padding: 0;
	margin: 0 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 48px;
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
	min-width: 20px;
	font-size: 14px;
	font-weight: 500;
}
.topCommunityImage {
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 100%;
	border-radius: 24px;
	font-size: 32px;
	height: 32px;
	margin: 0 8px;
	width: 32px;
}

.bi-chevron-up {
	color: var(--color-green);
	font-size: 20px;
	font-weight: 400;
	height: 20px;
	vertical-align: middle;
	width: 20px;
	margin-left: 8px;
}
.topCommunityName {
	max-width: 125px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	display: inline-block;
	text-decoration: none;
	color: var(--color-dark-1);
	font-size: 14px;
	font-weight: 500;
}
.joinBlock {
	margin-right: 12px;
	white-space: nowrap;
}
/* .join {
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);
	font-size: 12px;
	font-weight: 700;
	min-height: 24px;
	min-width: 24px;
	padding: 4px 16px;
}
.join:hover {
	opacity: 0.92;
} */
.members-count {
	width: 50px;
	margin-left: 5px;
	font-size: 16px;
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
</style>
