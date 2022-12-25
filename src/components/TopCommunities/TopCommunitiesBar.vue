<template>
	<div id="top-comm-bar-1">
		<top-communities
			id="top-comm-bar-2"
			@reload-component="reloadPage"
			:top-communities="communities"
			:top-communities-caption="category"
		></top-communities>
	</div>
</template>

<script>
import TopCommunities from '../TopCommunities/TopCommunities.vue';
export default {
	components: {
		TopCommunities,
	},
	data() {
		return {
			communities: [],
			category: '',
		};
	},
	// @vuese
	//load trending communities if user logged in
	beforeMount() {
		if (localStorage.getItem('accessToken')) this.getOneCommunities();
	},
	methods: {
		// @vuese
		//load trending communities
		async getOneCommunities() {
			const accessToken = localStorage.getItem('accessToken');
			// await this.$store.dispatch('topCommunity/getOneCommunities', {
			// 	baseurl: this.$baseurl,
			// 	token: accessToken,
			// });
			// this.communities = this.$store.getters['topCommunity/oneCategory'];
			// this.category = this.$store.getters['topCommunity/oneCommunities'];

			await this.$store.dispatch('topCommunity/getTrendingCommunities', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.communities =
				this.$store.getters['topCommunity/getTrendingCommunities'];
			//console.log(this.communities);
		},
		// @vuese
		//reload trending communities
		reloadPage() {
			this.getOneCommunities();
		},
	},
};
</script>
<style>
a {
	text-decoration: none;
}
</style>
