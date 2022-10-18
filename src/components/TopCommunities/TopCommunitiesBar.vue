<template>
	<top-communities
		:top-communities="topCommunities"
		top-communities-image="	https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png"
		top-communities-caption="Games"
		top-communities-link="https://www.google.com/"
		:top-communities-recommendations="topCommunitiesRecommendations"
	></top-communities>
</template>

<script>
import TopCommunities from '../TopCommunities/TopCommunities.vue';
export default {
	components: {
		TopCommunities,
	},
	data() {
		return {
			topCommunities: [
				{
					id: 'com1',
					name: 'r/programming',
					image:
						'https://b.thumbs.redditmedia.com/voAwqXNBDO4JwIODmO4HXXkUJbnVo_mL_bENHeagDNo.png',
					link: 'https://www.google.com/',
				},
				{
					id: 'com2',
					name: 'r/learn',
					image:
						'https://b.thumbs.redditmedia.com/voAwqXNBDO4JwIODmO4HXXkUJbnVo_mL_bENHeagDNo.png',
					link: 'https://www.google.com/',
				},
			],
			topCommunitiesRecommendations: [
				{
					id: 'r1',
					name: 'news',
					link: 'https://www.google.com/',
				},
				{
					id: 'r2',
					name: 'sports',
					link: 'https://www.google.com/',
				},
			],
		};
	},
};
</script>
<style>
a {
	text-decoration: none;
}
</style>
