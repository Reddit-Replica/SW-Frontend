<template>
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<subreddit-top
			subreddit-name="Subreddit"
			subreddit-image-url="https://b.thumbs.redditmedia.com/voAwqXNBDO4JwIODmO4HXXkUJbnVo_mL_bENHeagDNo.png"
		></subreddit-top>
	</div>
</template>

<script>
import SubredditTop from '../../components/CommunityComponents/SubredditTop.vue';
export default {
	components: {
		SubredditTop,
	},
};
</script>

<style scoped></style>
