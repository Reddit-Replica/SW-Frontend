<template>
	<div class="content">
		<img
			v-if="!subreddit.picture"
			src="../../../img/default_subreddit_image.png"
			alt="img"
			class="subreddit-img"
			id="subreddit-img"
		/>
		<img
			v-else
			:src="$baseurl + '/' + subreddit.picture"
			alt="img"
			class="subreddit-img"
			id="subreddit-img"
		/>
		<h5 class="subreddit-title">
			<a href="#">
				<span class="subreddit-link" id="subreddit-link"
					>r/{{ subredditName }}</span
				></a
			>
			/ {{ title }}
		</h5>
	</div>
</template>
<script>
export default {
	props: {
		// @vuese
		//subreddit name
		// @type string
		subredditName: {
			type: String,
			default: 'subredditName',
		},
		// @vuese
		//title bar name
		// @type string
		title: {
			type: String,
			default: 'moderator',
		},
	},
	beforeMount() {
		this.getSubreddit();
	},
	data() {
		return {
			subreddit: {},
		};
	},
	methods: {
		// @vuese
		//load subreddit img
		// @arg no argument
		async getSubreddit() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('community/getSubreddit', {
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.subreddit = this.$store.getters['community/getSubreddit'];
		},
	},
};
</script>
<style scoped>
.content {
	border-top: var(--line);
	background-color: var(--color-white-1);
	display: flex;
	align-items: center;
	justify-content: left;
	height: 4rem;

	-ms-flex-align: center;
	align-items: center;
	display: -ms-inline-flexbox;
	display: inline-flex;
	-ms-flex-direction: row;
	flex-direction: row;
	margin-top: 0;
	color: var(--color-dark-3);
	flex-grow: 0;
	flex-shrink: 0;
	right: 0;
	left: 0;
	top: 5rem;
	position: fixed;
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	z-index: 50;
}
.subreddit-img {
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
	margin-left: 2rem;
	margin-right: 1rem;
}
.subreddit-title {
	text-transform: uppercase;
	color: var(--color-dark-1);
}
.subreddit-link {
	color: var(--color-blue-2);
	cursor: pointer;
}
</style>
