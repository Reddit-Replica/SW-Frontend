<template>
	<the-header :header-title="subredditName"></the-header>
	<listmoderation-bar :subreddit-name="subredditName"></listmoderation-bar>
	<div>
		<h3 class="heading-3">
			Moderators of r/{{ subredditName }}
			<a
				href="https://mods.reddithelp.com/hc/en-us/articles/360009381491"
				__blank="targe"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon-info"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</a>
		</h3>
		<div class="page-content">
			<search-bar></search-bar>
			<ul class="ul-items">
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
				<list-item></list-item>
			</ul>
		</div>
	</div>
</template>

<script>
import ListmoderationBar from '../../components/moderation/ListmoderationBar.vue';
import SearchBar from '../../components/moderation/SearchBar.vue';
import ListItem from '../../components/moderation/ListItem.vue';
export default {
	components: {
		ListmoderationBar,
		SearchBar,
		ListItem,
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

<style scoped>
.page-content {
	width: 95%;
	margin: auto;
}
.icon-info {
	width: 2rem;
	height: 2rem;
	fill: var(--color-blue-2);
	cursor: pointer;
}
.heading-3 {
	margin-left: 1rem;
	margin-top: 5rem;
}
.ul-items {
	list-style: none;
	background-color: var(--color-white-1);
	padding-left: 0rem;
}
/* 635px */
@media only screen and (max-width: 40em) {
	.content {
		width: 100%;
	}
}
</style>
