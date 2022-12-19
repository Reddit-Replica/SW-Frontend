<template>
	<div class="top-cards-1" id="top-cards-1">
		<div class="top-cards-2" id="top-cards-2">
			<top-communities
				id="top-cards-3"
				@reload-component="reloadPage"
				class="top-cards-3"
				:top-communities="firstCategoryCommunities"
				top-communities-image="../../../img/banner-background_top.png"
				:top-communities-caption="firstCategory"
			></top-communities>
			<top-communities
				id="top-cards-4"
				@reload-component="reloadPage"
				class="top-cards-4"
				:top-communities="secondCategoryCommunities"
				top-communities-image="../../../img/banner-background_top.png"
				:top-communities-caption="secondCategory"
			></top-communities>
		</div>
	</div>
</template>

<script>
import TopCommunities from './TopCommunities.vue';

export default {
	components: {
		TopCommunities,
	},
	data() {
		return {
			firstCategory: '',
			secondCategory: '',
			firstCategoryCommunities: [],
			secondCategoryCommunities: [],
		};
	},
	beforeMount() {
		this.getTwoCommunities();
	},
	methods: {
		async getTwoCommunities() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('topCommunity/getTwoCommunities', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.firstCategory = this.$store.getters['topCommunity/getFirstCategory'];
			this.secondCategory =
				this.$store.getters['topCommunity/getSecondCategory'];

			this.firstCategoryCommunities =
				this.$store.getters['topCommunity/getFirstCommunities'];
			this.secondCategoryCommunities =
				this.$store.getters['topCommunity/getSecondCommunities'];
		},
	},
	reloadPage() {
		this.getTwoCommunities();
	},
};
</script>

<style scoped>
.top-cards-1 {
	flex: 0 0 312px;
	margin-left: 24px;
	width: 312px;
}
.top-cards-2 {
	display: flex;
	flex-direction: column;
	height: 100%;
	gap: 15px;
}
</style>
