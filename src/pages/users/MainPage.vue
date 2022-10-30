<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-lg-6">
				<div class="left-col">
					<createpost-bar></createpost-bar>
					<sortposts-bar></sortposts-bar>
					<base-post :post="post"></base-post>
					<base-post :post="post"></base-post>
					<base-post :post="post"></base-post>
					<base-post :post="post"></base-post>
					<base-post :post="post"></base-post>
					<base-post :post="post"></base-post>
				</div>
			</div>
			<div class="col-lg-3">
				<div class="right-col">
					<div class="component">
						<top-communities-bar></top-communities-bar>
					</div>
					<div class="component">
						<createpost-sidebar></createpost-sidebar>
					</div>
					<div class="component">
						<rightside-footer></rightside-footer>
					</div>
					<backtotop-button></backtotop-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CreatepostBar from '../../components/bars/CreatepostBar.vue';
import SortpostsBar from '../../components/bars/SortpostsBar.vue';
import BasePost from '../../components/BaseComponents/BasePost.vue';
import TopCommunitiesBar from '../../components/TopCommunities/TopCommunitiesBar.vue';
import CreatepostSidebar from '../../components/BaseComponents/CreatepostSidebar.vue';
import RightsideFooter from '../../components/BaseComponents/RightsideFooter.vue';
import BacktotopButton from '../../components/BaseComponents/BacktotopButton.vue';

export default {
	components: {
		CreatepostBar,
		SortpostsBar,
		BasePost,
		TopCommunitiesBar,
		CreatepostSidebar,
		RightsideFooter,
		BacktotopButton,
	},
	created() {
		document.title = 'Reddit - Dive into anything';
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
				postDescription:
					'post description Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
				commentsCount: 22,
			},
		};
	},
	methods: {},
};
</script>

<style scoped>
/* .wrapper {
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 30px;
} */
/* .left-col {
	margin-left: 5rem;
} */
.right-col {
	margin: 1.2rem;
	margin-top: 1.5rem;
	margin-left: 8rem;
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	-ms-flex-direction: column;
	flex-direction: column;
	height: 100%;
	display: flex;
}

.component {
	margin-bottom: 1.3rem;
}

@media only screen and (max-width: 75em) {
	.right-col {
		margin-left: 12rem;
	}
}

@media only screen and (max-width: 991px) {
	.container {
		max-width: 100%;
	}

	.right-col {
		display: none;
	}
}
</style>
