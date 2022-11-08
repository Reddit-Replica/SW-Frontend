<template>
	<div class="about-bar">
		<div class="about-header">
			<div class="about-title"><h2 class="about-h2">Moderators</h2></div>
		</div>
		<div class="about-body">
			<div class="box-body">
				<base-button link to="message/sent"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-envelope"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
						/>
					</svg>
					<span>Message The Mods</span>
				</base-button>
			</div>
		</div>
	</div>
</template>
<style scoped>
.about-bar {
	margin-top: 12px;
	background-color: var(--color-white-1);
	color: var(--color-dark-4);
	fill: var(--color-dark-4);
	border: var(--line-10);
	border-radius: 0.4rem;
	overflow: visible;
	word-wrap: break-word;
}
.about-header {
	background-color: var(--color-blue-2);
	border-radius: 3px 3px 0 0;
	color: var(--color-white-1);
	display: flex;
	fill: var(--color-white-1);
	padding: 0 12px 12px;
}
.about-title {
	padding: 12px 0 0;
}
.about-h2 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	font-weight: 700;
	text-transform: none;
}
.about-body {
	padding: 12px;
}
.box-body {
	margin-top: 12px;
}
</style>
