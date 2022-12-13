<template>
	<div class="the-comp">
		<img class="image-nf" src="../../../img/n-r.png" />
		<h2 class="head-two">
			Hm... we couldn’t find any results for “{{ query }}”
		</h2>
	</div>
</template>
<script>
export default {
	data() {
		return {
			query: this.$route.query.q,
		};
	},
};
</script>
<style>
div h2 {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/*
@media (min-width: 640px) {
	.the-comp {
		width: calc(100vw - 48px);
	}
}*/
.the-comp {
	align-items: center;
	background: var(--newRedditTheme-post);
	border: thin solid var(--newRedditTheme-postLine);
	border-radius: 4px;
	box-sizing: border-box;
	color: #1c1c1c;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 24px 16px;
	text-align: center;
}
.image-nf {
	width: 134px;
	height: 126px;
}
.head-two {
	font-size: 20px;
	font-weight: 500;
	line-height: 24px;
	padding: 16px 0;
}
</style>
