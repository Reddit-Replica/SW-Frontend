<template>
	<div id="page-leaderboard-1">
		<the-header></the-header>
		<top-bar></top-bar>
		<div class="top-page">
			<categories-bar></categories-bar>
			<communities-bar></communities-bar>
			<cards-bar></cards-bar>
		</div>
	</div>
</template>
<script>
import TopBar from '../../components/TopCommunities/TopBar.vue';
import CategoriesBar from '../../components/TopCommunities/CategoriesBar.vue';
import CommunitiesBar from '../../components/TopCommunities/CommunitiesBar.vue';
import CardsBar from '../../components/TopCommunities/CardsBar.vue';

export default {
	components: {
		TopBar,
		CategoriesBar,
		CommunitiesBar,
		CardsBar,
	},
};
</script>

<style scoped>
.top-page {
	max-width: 1248px;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 auto;
	gap: 15px;
}
@media (min-width: 640px) {
	.top-page {
		padding: 20px 24px;
	}
}
</style>
