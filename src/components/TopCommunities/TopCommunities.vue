<template>
	<div class="topCommunities">
		<div :style="style" class="topCommunitiesTitleBlock">
			<h2 class="topCommunitiesTitle">
				<a
					:href="topCommunitiesLink"
					class="topCommunitiesLink"
					id="top-communities-link"
					>Top <span>{{ topCommunitiesCaption }}</span> Communities</a
				>
			</h2>
		</div>
		<ol class="topCommunitiesList">
			<top-community
				v-for="(community, index) in topCommunities"
				:index="index"
				:key="community.id"
				:name="community.name"
				:image="community.image"
				:link="community.link"
			>
			</top-community>
		</ol>
		<div class="viewAllBlock">
			<base-button
				link
				to="/"
				class="viewAll"
				button-text="View All"
				id="view-all-top-communities"
			></base-button>
		</div>
		<div class="topCommunitiesRecommendations">
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
		</div>
	</div>
</template>

<script>
import TopCommunity from '../TopCommunities/TopCommunity.vue';
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { TopCommunity, BaseButton },
	props: {
		//@vuese
		//Top communities Title
		topCommunitiesCaption: {
			type: String,
			default: '',
		},
		//@vuese
		//Route to Top communities Page
		topCommunitiesLink: {
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
			type: Object,
			default() {
				return {
					index: '',
					image: '',
					name: '',
					id: '',
					link: '',
				};
			},
		},
		//@vuese
		//Top communities categories recommendations
		topCommunitiesRecommendations: {
			type: Object,
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
		//@vuese
		//Set background image of top communities bar
		style() {
			return 'background-image: ' + `url('${this.topCommunitiesImage}')`;
		},
	},
};
</script>

<style scoped>
.topCommunities {
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	fill: var(--color-dark-1);
	width: 310px;
	border: 1px solid var(--color-grey-light-4);
	border-radius: 4px;
	overflow: visible;
	word-wrap: break-word;
	margin-top: 5rem;
}
.topCommunitiesTitleBlock {
	background-color: var(--color-blue-2);
	background-position: 50%;
	background-repeat: no-repeat;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	height: 80px;
	/* width: 310px; */
	position: relative;
}
.topCommunitiesTitle {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	bottom: 8px;
	color: var(--main-white-color);
	left: 16px;
	position: absolute;
}
.topCommunitiesLink {
	color: inherit;
	text-decoration: inherit;
}

.topCommunitiesList {
	list-style: none;
	padding: 0px;
}
.viewAllBlock {
	padding: 12px;
}
.viewAll {
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);

	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
	width: 100%;
}
.viewAll:hover {
	opacity: 0.92;
}
.topCommunitiesRecommendations {
	flex-flow: row wrap;
	justify-content: flex-start;
	padding: 0 8px 12px;
	display: flex;
}
.topRecommendations {
	display: flex;
	margin: 4px;
}
.Recommendation {
	position: relative;
	background-color: var(--color-grey-light-2);
	border: 1px solid transparent;
	color: var(--color-blue-2);
	fill: var(--color-blue-2);

	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 700;
	min-height: 24px;
	min-width: 24px;
	padding: 4px 8px;
}
.Recommendation :hover {
	opacity: 0.92;
}
</style>
