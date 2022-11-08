<template>
	<div class="main">
		<div class="header"></div>
		<div class="image-name">
			<div class="image">
				<img src="../../img/reddit.png" alt="" />
			</div>
			<div class="name"></div>
		</div>
		<p>{{ sd }}</p>
		<div class="birth"></div>
		<div class="members"></div>
		<base-button></base-button>
		<div class="options"></div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			sd: '',
		};
	},
	beforeMount() {
		this.loadSubredditInfo();
	},
	computed: {},
	methods: {
		async loadSubredditInfo() {
			try {
				await this.$store.dispatch('comments/getSubreddit', {
					baseurl: this.$baseurl,
					subredditName: 'subredditName',
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log(this.$store.getters['comments/getSubredditDescription']);
			this.sd = this.$store.getters['comments/getSubredditDescription'];
		},
	},
};
</script>
<style scoped>
.main {
	background-color: white;
	border-radius: 22px;
}
.header {
	background-color: var(--color-green-2);
	height: 22px;
	border-radius: 22px 22px 0 0;
}
.image-name {
	display: flex;
}
.image {
	width: 22px;
	height: 22px;
	border-radius: 50%;
}
.name {
	font-weight: bold;
	color: black;
}
</style>
