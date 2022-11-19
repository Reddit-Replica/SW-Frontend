<template>
	<div class="about-bar" id="mods-community-form">
		<div class="about-header">
			<div class="about-title"><h2 class="about-h2">Moderators</h2></div>
		</div>
		<div class="about-body">
			<div class="box-body" id="message-mods">
				<base-button link to="/message/compose" class="button-message text"
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
					to="/user/Abdalhameed"
					:id="'mods-bar-' + index"
					>u/{{ mod.username }}</router-link
				>
			</div>
			<div class="box-body flex-end text text-view" id="view-mods">
				<router-link :to="'/r/' + subredditName + '/about/moderators'"
					>VIEW ALL MODERATORS</router-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		//@vuese
		//Subreddit moderators list
		moderators: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {};
	},
	computed: {
		subredditName() {
			return this.$store.state.subredditName;
		},
	},
};
</script>

<style scoped>
.about-bar {
	margin-top: 1.2rem;
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
	border-radius: 0.3rem 0.3rem 0 0;
	color: var(--color-white-1);
	display: flex;
	fill: var(--color-white-1);
	padding: 0 1.2rem 1.2rem;
}
.about-title {
	padding: 1.2rem 0 0;
}
.about-h2 {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	font-weight: 700;
	text-transform: none;
}
.about-body {
	padding: 1.2rem;
}
.box-body {
	margin-top: 1.2rem;
}
.button-message {
	align-items: center;
	display: flex;
	margin-bottom: 2rem;
	justify-content: center;
	border: var(--line-5);
	color: var(--color-blue-2);
	fill: var(----color-blue-2);
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;
}
svg {
	margin-right: 0.4rem;
}
.flex-start {
	display: flex;
	flex-direction: column;
	font-size: 1.2rem;
	font-weight: 500;
	line-height: 1.6rem;
	margin-bottom: 1.6rem;
	width: 100%;
}
.flex-end {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.mod-link {
	margin: 0.2rem;
}
.text {
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.7rem;
}
.text-view {
	font-size: 1.2rem;
}
a {
	text-decoration: none;
	color: var(--color-blue-2);
}
</style>
