<template>
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<subreddit-top
			subreddit-name="Subreddit"
			subreddit-image-url="https://b.thumbs.redditmedia.com/voAwqXNBDO4JwIODmO4HXXkUJbnVo_mL_bENHeagDNo.png"
		></subreddit-top>
		<div class="subreddit-page">
			<div class="subreddit-page-left">
				<createpost-bar></createpost-bar>
				<sortposts-bar></sortposts-bar>
			</div>
			<div class="subreddit-page-right">
				<rightside-footer></rightside-footer>
			</div>
		</div>
	</div>
</template>

<script>
import SubredditTop from '../../components/CommunityComponents/SubredditTop.vue';
import CreatepostBar from '../../components/bars/CreatepostBar.vue';
import SortpostsBar from '../../components/bars/SortpostsBar.vue';
import RightsideFooter from '../../components/BaseComponents/RightsideFooter.vue';
export default {
	components: {
		SubredditTop,
		CreatepostBar,
		SortpostsBar,
		RightsideFooter,
	},
};
</script>

<style scoped>
.subreddit-page {
	max-width: 100%;
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: center;
	margin: 0 auto;
}
.subreddit-page-left {
	width: 50%;
	height: 100%;
}
.subreddit-page-right {
	width: 25%;
	height: 100%;
	margin-left: 24px;
	margin-top: 15px;
}
</style>
