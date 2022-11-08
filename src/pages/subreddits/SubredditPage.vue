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
				<grow-community></grow-community>
			</div>
			<div class="subreddit-page-right">
				<about-community-bar
					:topics="topics"
					:members-count="1"
					:online-members-count="5"
					community-date="OCT 28, 2022"
					community-type="Private"
				></about-community-bar>
			</div>
		</div>
	</div>
</template>

<script>
import SubredditTop from '../../components/CommunityComponents/SubredditTop.vue';
import CreatepostBar from '../../components/bars/CreatepostBar.vue';
import SortpostsBar from '../../components/bars/SortpostsBar.vue';
import AboutCommunityBar from '../../components/CommunityComponents/AboutCommunityBar.vue';
import GrowCommunity from '../../components/CommunityComponents/GrowCommunity.vue';
export default {
	components: {
		SubredditTop,
		CreatepostBar,
		SortpostsBar,
		AboutCommunityBar,
		GrowCommunity,
	},
	data() {
		return {
			topics: [
				{ id: 0, name: 'Art' },
				{ id: 1, name: 'Anime' },
				{ id: 2, name: 'Beauty' },
				{ id: 3, name: 'Cars' },
				{ id: 4, name: 'Fashion' },
				{ id: 5, name: 'Music' },
				{ id: 6, name: 'Sports' },
				{ id: 7, name: 'Travel' },
			],
		};
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
	/* width: 25%; */
	width: 312px;
	height: 100%;
	margin-left: 24px;
	margin-top: 15px;
}
</style>
