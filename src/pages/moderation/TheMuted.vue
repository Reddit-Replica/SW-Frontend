<template>
	<div>
		<list-bar
			:title="'muted'"
			@mute-user="showMuteUserFunction()"
			:subreddit-name="subredditName"
		></list-bar>
		<div class="text">
			Muted users
			<a
				href="https://mods.reddithelp.com/hc/en-us/articles/360009381491"
				__blank="targe"
				id="info-link"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon-info"
					viewBox="0 0 16 16"
					id="icon-info"
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
		<no-list :title="'Muted users'">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-bell-slash icon"
				viewBox="0 0 16 16"
			>
				<path
					d="M5.164 14H15c-.299-.199-.557-.553-.78-1-.9-1.8-1.22-5.12-1.22-6 0-.264-.02-.523-.06-.776l-.938.938c.02.708.157 2.154.457 3.58.161.767.377 1.566.663 2.258H6.164l-1 1zm5.581-9.91a3.986 3.986 0 0 0-1.948-1.01L8 2.917l-.797.161A4.002 4.002 0 0 0 4 7c0 .628-.134 2.197-.459 3.742-.05.238-.105.479-.166.718l-1.653 1.653c.02-.037.04-.074.059-.113C2.679 11.2 3 7.88 3 7c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0c.942.19 1.788.645 2.457 1.284l-.707.707zM10 15a2 2 0 1 1-4 0h4zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75L.625 15.625z"
				/>
			</svg>
		</no-list>
		<mute-user
			v-if="showMuteUser"
			:subreddit-name="subredditName"
			@exit="showMuteUserFunction()"
			@done-successfully="doneSuccessfully('added')"
		></mute-user>
	</div>
</template>

<script>
import NoList from '../../components/moderation/NoList.vue';
import MuteUser from '../../components/moderation/MuteUser.vue';
import ListBar from '../../components/moderation/ListBar.vue';
export default {
	components: { NoList, MuteUser, ListBar },
	data() {
		return {
			showMuteUser: false,
		};
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
	},
	methods: {
		// @vuese
		// Used to show add rule popup
		// @arg no argument
		showMuteUserFunction() {
			this.showMuteUser = !this.showMuteUser;
		},
	},
};
</script>

<style scoped>
.icon {
	color: var(--color-grey-dark-8);
	font-size: 3rem;
	height: 3rem;
	width: 3rem;
}
.text {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	padding-top: 9rem;
}
</style>
