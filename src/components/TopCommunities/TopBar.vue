<template>
	<div class="top-bar-1" id="top-bar-1">
		<div class="top-bar-2" id="top-bar-2">
			<h1>Today's Top Growing Communities</h1>
			<p>
				Browse Reddit's top growing communities. Find the top communities in
				your favorite category.
			</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-bar-1 {
	background-color: var(--color-white-1);
	display: flex;
	justify-content: center;
	height: 13rem;
	padding: 0;
}
.top-bar-2 {
	box-sizing: border-box;
	display: flex;
	flex: 1 1 100%;
	flex-direction: column;
	justify-content: center;
	height: 17rem;
	margin: 0 2.4rem;
	max-width: 120rem;
	padding: 0 1.6rem;
}
h1 {
	color: var(--color-grey-dark-1);
	padding-bottom: 0.6rem;
	font-size: 2.2rem;
	font-weight: 550;
	line-height: 2.6rem;
}
p {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	color: var(--color-grey-dark-2);
}
</style>
