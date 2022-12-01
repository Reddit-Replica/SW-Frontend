<template>
	<div class="content">
		<img
			src="../../../img/user-image.jpg"
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
