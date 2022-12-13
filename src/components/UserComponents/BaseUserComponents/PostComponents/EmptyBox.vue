<template>
	<div style="position: relative">
		<div
			style="display: flex; align-items: center; padding: 0"
			class="container"
		>
			<div>
				<div style="width: 40px" class="vote-box left-vote-box">
					<div class="d-flex flex-column vote-box">
						<div class="upvote">
							<svg class="icon icon-shift">
								<use xlink:href="../../../../../img/shift.svg#icon-shift"></use>
							</svg>
						</div>
						<div style="height: 25px" class="p-2 vote-count"></div>
						<div class="downvote">
							<svg class="icon icon-shift">
								<use xlink:href="../../../../../img/shift.svg#icon-shift"></use>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div style="flex-grow: 1"></div>
		</div>
	</div>
</template>
<style scoped>
.container {
	width: 100%;
	border: thin solid #ccc;
	background-color: #e6eaee;
	margin-bottom: -1px;
	z-index: 0;
	position: relative;
	height: 90px;
}
.container:hover {
	border-color: #898989;
	z-index: 1;
}
</style>
