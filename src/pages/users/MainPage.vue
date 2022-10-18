<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-6">
				<div class="left-col">
					<createpost-bar></createpost-bar>
					<sortposts-bar></sortposts-bar>
					<base-post :post="post"></base-post>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="right-col"><top-communities-bar></top-communities-bar></div>
			</div>
		</div>
	</div>
</template>

<script>
import CreatepostBar from '../../components/bars/CreatepostBar.vue';
import SortpostsBar from '../../components/bars/SortpostsBar.vue';
import BasePost from '../../components/BaseComponents/BasePost.vue';
import TopCommunitiesBar from '../../components/TopCommunities/TopCommunitiesBar.vue';

export default {
	components: {
		CreatepostBar,
		SortpostsBar,
		BasePost,
		TopCommunitiesBar,
	},
	data() {
		return {
			colorGreyDark2: '#0099CC',
			post: {
				userName: 'mena',
				voteCount: 22,
				subredditName: 'sub-com',
				duration: '22 minutes',
				postName: 'Hello World',
				postDescription: 'post description',
				commentsCount: 22,
			},
		};
	},
};
</script>

<style scoped>
/* .wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
} */
.left-col {
	/* margin-left: 5rem; */
}
.right-col {
	margin: 12px;
	/* padding: 20px;
  margin-left: 15rem;
  margin-top: 4rem; */
}
@media only screen and (max-width: 991px) {
	.container {
		max-width: 100%;
	}
	/* .wrapper {
    grid-template-columns: 100%;
  } */
	.right-col {
		display: none;
	}
	/* .left-col {
    margin: auto;
    width: 100%;
  }  */
}
</style>
