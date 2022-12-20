<template>
	<div class="topCommunities" id="top-comm-1" v-if="!noCommunities">
		<div class="topCommunitiesTitleBlock style" id="top-comm-2">
			<h2 class="topCommunitiesTitle" id="top-comm-3">
				<router-link
					:to="'/subreddits/leaderboard/' + topCommunitiesCaption"
					class="topCommunitiesLink"
					id="top-communities-link"
					v-if="topCommunitiesCaption"
					>Top <span>{{ topCommunitiesCaption }}</span> Communities</router-link
				>
				<router-link
					to="/subreddits/leaderboard"
					class="topCommunitiesLink"
					id="top-communities-link-else"
					v-else
					>Trending Communities</router-link
				>
			</h2>
		</div>
		<ol class="topCommunitiesList" id="top-comm-5">
			<top-community
				@reload="reloadAgain"
				v-for="(community, index) in topCommunities"
				:index="index"
				:key="community.id"
				:id="community.id"
				:name="community.data.title"
				:image="community.data.picture"
				:members="community.data.members"
				:show-members="false"
				:is-member="community.data.isMember"
			>
			</top-community>
		</ol>
		<div class="viewAllBlock" id="top-comm-6">
			<base-button
				link
				:to="'/subreddits/leaderboard/' + topCommunitiesCaption"
				class="viewAll viewAll-2"
				id="view-all-top-communities-2"
				>See All {{ topCommunitiesCaption }}</base-button
			>
		</div>
		<!-- <div class="topCommunitiesRecommendations" v-if="!notLeaderbord">
			<span
				class="topRecommendations"
				v-for="(recommendation, index) in topCommunitiesRecommendations"
				:key="recommendation.id"
				:id="'recommendation-top-comm-' + index"
			>
				<base-button
					class="Recommendation"
					link
					:to="recommendation.link"
					:button-text="recommendation.name"
				></base-button>
			</span>
		</div> -->
	</div>
</template>

<script>
import TopCommunity from '../TopCommunities/TopCommunity.vue';
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { TopCommunity, BaseButton },
	emits: ['reloadComponent'],
	props: {
		//@vuese
		//Top communities Title
		topCommunitiesCaption: {
			type: String,
			default: '',
		},
		//@vuese
		//Top communities Background image URL
		topCommunitiesImage: {
			type: String,
			default: '',
		},
		//@vuese
		//Top communities List
		topCommunities: {
			type: Array,
			default: () => [],
		},
		//@vuese
		//Top communities categories recommendations
		topCommunitiesRecommendations: {
			type: Object,
			required: false,
			default() {
				return {
					name: '',
					id: '',
					link: '',
				};
			},
		},
	},
	computed: {
		noCommunities() {
			return this.topCommunities.length === 0;
		},
	},
	mounted() {
		console.log(this.topCommunities);
		console.log(this.thereCommunities);
		console.log(this.topCommunities !== []);
		console.log(!this.topCommunities);
	},
	methods: {
		reloadAgain() {
			this.$emit('reloadComponent');
		},
	},
};
</script>

<style scoped>
.topCommunities {
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	fill: var(--color-dark-1);
	width: 31rem;
	border: 0.1rem solid var(--color-grey-light-4);
	border-radius: 0.4rem;
	overflow: visible;
	word-wrap: break-word;
	/* margin-top: 5rem; */
}
.topCommunitiesTitleBlock {
	background-color: var(--color-blue-2);
	background-position: 50%;
	background-repeat: no-repeat;
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;
	height: 8rem;
	/* width: 310px; */
	position: relative;
}
.topCommunitiesTitle {
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2rem;
	bottom: 0.8rem;
	color: var(--main-white-color);
	left: 1.6rem;
	position: absolute;
}
.topCommunitiesLink {
	color: inherit;
	text-decoration: inherit;
}

.topCommunitiesList {
	list-style: none;
	padding: 0;
}
.viewAllBlock {
	padding: 1.2rem;
}
.viewAll {
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);

	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;
	width: 100%;
}
.viewAll:hover {
	opacity: 0.92;
}
.viewAll-2 {
	background-color: var(--color-white-1);
	border: var(--line-5);
	color: var(--color-blue-2);
}
.viewAll-2:hover {
	opacity: 0.92;
}
.topCommunitiesRecommendations {
	flex-flow: row wrap;
	justify-content: flex-start;
	padding: 0 0.8rem 1.2rem;
	display: flex;
}
.topRecommendations {
	display: flex;
	margin: 0.4rem;
}
.Recommendation {
	position: relative;
	background-color: var(--color-grey-light-2);
	border: 0.1rem solid transparent;
	color: var(--color-blue-2);
	fill: var(--color-blue-2);

	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: 700;
	min-height: 2.4rem;
	min-width: 2.4rem;
	padding: 0.4rem 0.8rem;
}
.Recommendation :hover {
	opacity: 0.92;
}
.style {
	background-image: url('../../../img/banner-background_top.png');
}
</style>
