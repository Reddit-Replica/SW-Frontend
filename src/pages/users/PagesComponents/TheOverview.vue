<template>
	<sortposts-bar @title="sortBarClicked"></sortposts-bar>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
// import BasePost from '../../../components/BaseComponents/BasePost.vue';
export default {
	components: {
		SortpostsBar,
		// BasePost,
	},
	data() {
		return {};
	},
	methods: {
		sortBarClicked(sortType) {
			console.log(sortType);
		},
	},
};
</script>
<style scoped>
.sort-post-content {
	margin-top: 2px !important;
}
</style>
