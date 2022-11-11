<template>
	<div class="content">
		<img src="../../../img/user-image.jpg" alt="img" class="subreddit-img" />
		<h5 class="subreddit-title">
			<a href="#">
				<span class="subreddit-link" id="subreddit-link"
					>r/{{ subredditName }}</span
				></a
			>
			/ moderators
		</h5>
	</div>
</template>
<script>
export default {
	props: {
		// @vuese
		//subreddit name
		subredditName: {
			type: String,
			default: 'subredditName',
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
}
.subreddit-img {
	width: 2.5rem;
	height: 2.5rem;
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
