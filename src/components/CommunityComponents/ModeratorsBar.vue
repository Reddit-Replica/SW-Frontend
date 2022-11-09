<template>
	<div class="about-bar" id="mods-community-form">
		<div class="about-header">
			<div class="about-title"><h2 class="about-h2">Moderators</h2></div>
		</div>
		<div class="about-body">
			<div class="box-body" id="message-mods">
				<base-button link to="/message/sent" class="button-message text"
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
			<div class="box-body flex-start">
				<router-link
					class="mod-link"
					v-for="(mod, index) in moderators"
					:key="mod.id"
					to="/user/Abd"
					:id="'mods-bar-' + index"
					>u/{{ mod.name }}</router-link
				>
			</div>
			<div class="box-body flex-end text text-view" id="view-mods">
				<router-link to="/message">VIEW ALL MODERATORS</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		moderators: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {};
	},
};
</script>

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
.button-message {
	align-items: center;
	display: flex;
	margin-bottom: 20px;
	justify-content: center;
	border: var(--line-5);
	color: var(--color-blue-2);
	fill: var(----color-blue-2);
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
svg {
	margin-right: 4px;
}
.flex-start {
	display: flex;
	flex-direction: column;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	margin-bottom: 16px;
	width: 100%;
}
.flex-end {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.mod-link {
	margin: 2px;
}
.text {
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
}
.text-view {
	font-size: 12px;
}
a {
	text-decoration: none;
	color: var(--color-blue-2);
}
</style>
