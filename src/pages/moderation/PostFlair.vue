<template>
	<div class="content">
		<div class="text">
			Post flair management
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
		</div>
		<div class="disabled">
			<div class="yellow-bar"></div>
			<div class="icon-box">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-exclamation-triangle yellow-icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
					/>
					<path
						d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
					/>
				</svg>
			</div>
			<div class="text-warn">
				<div class="text-1">Post flair is disabled</div>
				<div class="text-2">
					Post flairs will not be visible until feature is enabled
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
	padding-top: 6.4rem;
	border-radius: 0 0 0.4rem 0.4rem;
	overflow: hidden;
}
.text {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	margin-bottom: 1.6rem;
}
.disabled {
	border-color: rgb(255, 176, 0);
	margin: 1.6rem 0;
	background-color: var(--main-white-color);
	border: 1px solid rgb(255, 176, 0);
	border-radius: 0.4rem;
	position: relative;
	display: flex;
}
.yellow-bar {
	background-color: rgb(255, 176, 0);
	bottom: 0rem;
	display: inline-block;
	position: absolute;
	top: 0rem;
	width: 0.8rem;
}
.icon-box {
	display: inline-block;
	margin: 1.2rem 0.8rem 0.8rem 1.6rem;
}
.yellow-icon {
	fill: #ffb000;
	height: 2.4rem;
	width: 2.4rem;
	overflow: hidden;
}
.text-warn {
	display: inline-block;
	margin: 0.8rem 0rem;
}
.text-1 {
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: var(--color-dark-3);
}
.text-2 {
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	color: var(--color-dark-3);
	padding-top: 0.4rem;
}
</style>
