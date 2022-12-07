<template>
	<pinned-posts></pinned-posts>
	<sortposts-bar @title="sortBarClicked"></sortposts-bar>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
import PinnedPosts from '../../../components/UserComponents/BaseUserComponents/PinnedPosts.vue';
// import BasePost from '../../../components/BaseComponents/BasePost.vue';
export default {
	components: {
		SortpostsBar,
		PinnedPosts,
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
