<template>
	<div class="content">
		<queue-bar :title="title"></queue-bar>
		<div class="clean">
			<div class="img"></div>
			<div class="text-clean">The queue is clean!</div>
			<div class="text-small">Kitteh is pleased</div>
		</div>
	</div>
</template>

<script>
import QueueBar from './QueueBar.vue';
export default {
	components: { QueueBar },
	props: {
		// @vuese
		// title for bar
		// @type string
		title: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped>
.clean {
	background-color: var(--main-white-color);
	border-radius: 4px;
	border: 1px solid var(--color-grey-light-10);
	padding: 8.5rem;
	text-align: center;
	margin-left: 2rem;
	margin-bottom: 5rem;
}
.img {
	background-image: url(../../../img/cat_blep.png);
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: contain;
	display: inline-block;
	height: 15rem;
	margin-bottom: 20px;
	width: 15rem;
}
.text-clean {
	font-weight: 500;
	font-size: 1.8rem;
	line-height: 2.2rem;
	margin-bottom: 4px;
	color: var(--color-dark-2);
}
.text-small {
	font-size: 1.4rem;
	line-height: 1.8rem;
	color: var(--color-grey-light-5);
}
</style>
