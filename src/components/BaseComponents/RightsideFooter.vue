<template>
	<div class="content">
		<div class="policy">
			<div class="policy-section">
				<a href="#" id="user-agreement-link">User Agreement</a>
				<a href="#" id="privacy-policy-link">Privacy policy</a>
			</div>
			<div class="policy-section">
				<a href="#" id="content-policy-link">Content policy</a>
				<a href="#" id="moderator-link">Moderator Code of conduct</a>
			</div>
		</div>
		<div class="line"></div>
		<div class="footer">
			<span>Reddit Inc © 2022. All rights reserved</span>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.content {
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	fill: var(--color-dark-1);
	width: 310px;
	border: 1px solid var(--color-grey-light-4);
	border-radius: 4px;
	overflow: visible;
	word-wrap: break-word;
	position: relative;
}
.policy {
	display: flex;
	padding-top: 0.8rem;
	padding-bottom: 0.8rem;
	margin-left: 1.2rem;
	margin-right: 1.2rem;
}
.policy-section {
	display: flex;
	flex-flow: column nowrap;
	width: 50%;
	padding: 0px 4px;
}
.policy-section a {
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	display: inline-block;
	text-decoration: none;
	text-transform: capitalize;
	margin-top: 3px;
	margin-bottom: 3px;
	color: var(--color-grey-dark-1);
}
.line {
	border-bottom: var(--line-8);
	margin: 1rem;
}
.footer {
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	display: flex;
	padding: 1.2rem;
	color: var(--color-grey-dark-1);
}
</style>
