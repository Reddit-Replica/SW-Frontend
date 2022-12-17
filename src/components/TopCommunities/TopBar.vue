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
	height: 130px;
	padding: 0;
}
.top-bar-2 {
	box-sizing: border-box;
	display: flex;
	flex: 1 1 100%;
	flex-direction: column;
	justify-content: center;
	height: 170px;
	margin: 0 24px;
	max-width: 1200px;
	padding: 0 16px;
}
h1 {
	color: var(--color-grey-dark-1);
	padding-bottom: 6px;
	font-size: 22px;
	font-weight: 550;
	line-height: 26px;
}
p {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: var(--color-grey-dark-2);
}
</style>
