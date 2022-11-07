<template>
	<sortposts-bar></sortposts-bar>
	<!-- <base-post :post="post"></base-post> -->
	<!-- <base-post :post="post"></base-post> -->
	<base-post :post="post"></base-post>
	<div class="base-profile-post">
		<div class="box"></div>
	</div>
</template>

<script>
import SortpostsBar from '../../../components/bars/SortpostsBar.vue';
import BasePost from '../../../components/BaseComponents/BasePost.vue';
export default {
	components: {
		SortpostsBar,
		BasePost,
	},
	data() {
		return {
			post: {
				userName: 'mena',
				voteCount: 22,
				subredditName: 'sub-com',
				duration: '22 minutes',
				postName: 'Hello World',
				postDescription:
					'post description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
				commentsCount: 22,
			},
		};
	},
};
</script>
<style scoped>
.base-profile-post .box {
	border: thin solid #ccc;
	margin-bottom: -1px;
	background-color: rgba(255, 255, 255, 0.8);
}
</style>
