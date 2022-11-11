<template>
	<the-header :header-title="subredditName"></the-header>
	<listmoderation-bar :subredditName="subredditName"></listmoderation-bar>
	<div>List of moderators</div>
</template>

<script>
import ListmoderationBar from '../../components/moderation/ListmoderationBar.vue';
export default {
	components: {
		ListmoderationBar,
	},
	created() {
		document.title = this.$store.state.subredditName;
	},
	computed: {
		subredditName() {
			return this.$store.state.subredditName;
		},
	},
};
</script>

<style></style>
