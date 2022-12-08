<template>
	<div>
		<list-bar
			:title="'banned'"
			@show-ban-user="showBanUserFunction()"
			:subreddit-name="subredditName"
		></list-bar>
		<div class="text">
			Banned users
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
		<no-list :title="'Banned users'">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-slash-circle-fill icon"
				viewBox="0 0 16 16"
			>
				<path
					d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.646-2.646a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 .708.708l6-6z"
				/>
			</svg>
		</no-list>
		<add-ban
			v-if="showBanUser"
			:subreddit-name="subredditName"
			@exit="showBanUserFunction()"
			@done-successfully="doneSuccessfully('added')"
		></add-ban>
	</div>
</template>

<script>
import NoList from '../../components/moderation/NoList.vue';
import ListBar from '../../components/moderation/ListBar.vue';
import AddBan from '../../components/moderation/AddBan.vue';
export default {
	components: { NoList, ListBar, AddBan },
	data() {
		return {
			showBanUser: false,
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
		showBanUserFunction() {
			this.showBanUser = !this.showBanUser;
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
