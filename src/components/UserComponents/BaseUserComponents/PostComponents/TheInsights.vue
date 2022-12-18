<template>
	<div class="insight-header">
		<h3 class="insights-title">Post Insights</h3>
		<p class="insights-p">Only you and mods of this community can see this</p>
	</div>
	<ul>
		<li>
			<span id="base-user-data-post-insights-getInsights-Data-totalViews"
				>{{ getInsightsData.totalViews }}
				<i style="color: #0079d3" class="fa-solid fa-chart-simple"></i
			></span>
			<span><i class="fa-regular fa-eye"></i> total views</span>
		</li>
		<li>
			<span id="base-user-data-post-insights-getInsights-Data-upvoteRate"
				>{{ getInsightsData.upvoteRate }}%</span
			>
			<span>
				<i style="width: 12px; height: 12px" class="fa-solid fa-up-long"></i>
				Upvote Rate</span
			>
		</li>
		<li>
			<span id="base-user-data-post-insights-getInsightsData-communityKarma"
				>{{ getInsightsData.communityKarma }} <i></i
			></span>
			<span><i class="fa-solid fa-fan"></i> Community Karma</span>
		</li>
		<li>
			<span id="base-user-data-post-insights-getInsightsData-totalShares"
				>{{ getInsightsData.totalShares }}<i></i
			></span>
			<span> <i class="fa-solid fa-upload"></i> total shares</span>
		</li>
	</ul>
</template>
<script>
export default {
	computed: {
		/**
		 * @vuese
		 * get the insights data from the store
		 * @arg no arg
		 */
		getInsightsData() {
			console.log(this.$store.getters['userposts/getInsightsData']);
			return this.$store.getters['userposts/getInsightsData'].insightsData;
		},
	},
};
</script>
<style scoped>
/* insights content */
/* .insights-content {
	padding: 16px 16px 8px 120px;
	display: flex;
	flex-direction: column;
	font-size: 12px;
} */
h3.insights-title {
	display: block;
	font-weight: 700;
	line-height: 16px;
	color: #1c1c1c;
	padding-right: 8px;
	padding-bottom: 4px;
	font-size: 12px;
}
.insight-header {
	padding-bottom: 8px;
}
p.insights-p {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
}
ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
span {
	display: inline-block;
}
ul {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 16px;
}
ul li {
	display: flex;
	align-items: center;
	flex-direction: column;
}
ul li span:first-child {
	font-size: 22px;
	display: inline-block;
	font-weight: 500;
	line-height: 26px;
	color: #1c1c1c;
}
ul li span:first-child i {
	/* color: #0079d3; */
	padding-left: 6px;
	font-size: 20px;
}
ul li span:nth-child(2) {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
	margin-top: 2px;
	text-transform: capitalize;
}
/* end insights content */
</style>
