<template>
	<div>
		<the-header></the-header>
		<top-bar></top-bar>
		<div class="top-page">
			<categories-bar></categories-bar>
		</div>
	</div>
</template>
<script>
import TopBar from '../../components/TopCommunities/TopBar.vue';
import CategoriesBar from '../../components/TopCommunities/CategoriesBar.vue';

export default {
	components: {
		TopBar,
		CategoriesBar,
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
}
@media (min-width: 640px) {
	.top-page {
		padding: 20px 24px;
	}
}
</style>
