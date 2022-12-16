<template>
	<div>
		<top-communities
			:top-communities="communities"
			top-communities-image="../../../img/banner-background_top.png"
			:top-communities-caption="category"
			src="../../../img/banner-background_top.png"
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
	beforeMount() {
		this.getOneCommunities();
	},
	methods: {
		async getOneCommunities() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('topCommunity/getOneCommunities', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.communities = this.$store.getters['topCommunity/oneCategory'];
			this.category = this.$store.getters['topCommunity/oneCommunities'];
		},
	},
};
</script>
<style>
a {
	text-decoration: none;
}
</style>
