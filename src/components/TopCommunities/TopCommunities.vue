<template>
	<div class="topCommunities">
		<div :style="style" class="topCommunitiesTitleBlock">
			<h2 class="topCommunitiesTitle">
				<a :href="topCommunitiesLink" class="topCommunitiesLink"
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
			<a href="https://www.google.com/" class="viewAll">View All</a>
		</div>
		<div class="topCommunitiesRecommendations">
			<span>
				<a
					v-for="recommendation in topCommunitiesRecommendations"
					:key="recommendation.id"
					:href="recommendation.link"
					>{{ recommendation.name }}</a
				>
			</span>
		</div>
	</div>
</template>

<script>
import TopCommunity from '../TopCommunities/TopCommunity.vue';
export default {
	components: { TopCommunity },
	props: {
		topCommunitiesCaption: {
			type: String,
			default: '',
		},
		topCommunitiesLink: {
			type: String,
			default: '',
		},
		topCommunitiesImage: {
			type: String,
			default: '',
		},
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
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
.viewAll:hover {
	opacity: 0.92;
}
.topCommunitiesRecommendations {
	flex-flow: row wrap;
	justify-content: start;
	padding: 0 8px 12px;
	display: flex;
}
</style>
