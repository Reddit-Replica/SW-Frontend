<template>
	<div class="comm-top-1">
		<div class="comm-top-2">
			<h2>Top</h2>
			<span class="text-grey">Rank Change</span>
		</div>
		<ol>
			<top-community
				v-for="(community, index) in allCommunities"
				:index="index"
				:key="community.id"
				:name="community.data.title"
			>
			</top-community>
		</ol>
	</div>
</template>

<script>
import TopCommunity from './TopCommunity.vue';
export default {
	components: {
		TopCommunity,
	},
	data() {
		return {
			allCommunities: [],
		};
	},
	watch: {
		'$route.params.category': {
			handler: function () {
				if (this.$route.params.category == null) this.getAllCommunities();
				else this.getCategoryCommunities(this.$route.params.category);
			},
		},
		// $route: {
		// 	handler: function () {
		// 		if (this.$route == '/subreddit/leaderboard') this.getAllCommunities();
		// 	},
		// },
	},
	created() {
		let category = this.$route.params.category;
		console.log(category);
		if (!category) {
			// category = 'Sports';
			console.log('hi null');
			// this.getCategoryCommunities(category);
			this.getAllCommunities();
		}
	},

	methods: {
		async getAllCommunities() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('topCommunity/getAllCommunities', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.allCommunities =
				this.$store.getters['topCommunity/getAllCommunities'];
			console.log('--->', this.allCommunities);
		},
		async getCategoryCommunities(category) {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('topCommunity/getCategoryCommunities', {
				category: category,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.allCommunities =
				this.$store.getters['topCommunity/getCategoryCommunities'];
		},
	},
};
</script>

<style scoped>
.comm-top-1 {
	flex: 1 1 100%;
	min-width: 0;
	width: 100%;
	background-color: var(--color-white-1);
	border: var(--line-10);
}
.comm-top-2 {
	background-color: var(--color-blue-light-4);
	color: var(--color-grey-dark-1);

	font-size: 16px;
	font-weight: 550;
	line-height: 20px;

	border-bottom: var(--line-10);
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 40px;
	padding: 0 16px;
	position: sticky;
}
.text-grey {
	font-size: 14px;
	font-weight: 500;
	color: var(--color-grey-dark-2);
}
</style>
