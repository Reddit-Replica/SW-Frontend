<template>
	<the-header :header-title="subredditName"></the-header>
	<listmoderation-bar :subreddit-name="subredditName"></listmoderation-bar>
	<div>
		<unmoderator-view
			v-if="!moderatorByMe"
			:listOfModerators="listOfModerators"
			:subredditName="subredditName"
		></unmoderator-view>
		<div v-else>
			<leftside-bar :subredditName="subredditName"></leftside-bar>
		</div>
	</div>
</template>

<script>
import ListmoderationBar from '../../components/moderation/ListmoderationBar.vue';
// import SearchBar from '../../components/moderation/SearchBar.vue';
// import ListItem from '../../components/moderation/ListItem.vue';
import LeftsideBar from '../../components/moderation/LeftsideBar.vue';
import UnmoderatorView from '../../components/moderation/UnmoderatorView.vue';
export default {
	data() {
		return {
			search: '',
			count: 0,
			noItems: false,
		};
	},
	components: {
		ListmoderationBar,
		// SearchBar,
		// ListItem,
		LeftsideBar,
		UnmoderatorView,
	},
	beforeMount() {
		document.title = this.$store.state.subredditName;
		this.loadListOfModerators();
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			return this.$store.state.subredditName;
		},
		// @vuese
		//return list of moderators
		// @type object
		listOfModerators() {
			return this.$store.getters['moderation/listOfModerators'];
		},
		getUserName() {
			return this.$store.getters.getUserName;
		},
		moderatorByMe() {
			for (let i = 0; i < this.listOfModerators.length; i++) {
				if (this.listOfModerators[i].username == this.getUserName) {
					return true;
				}
			}
			return false;
		},
	},
	methods: {
		// @vuese
		//load moderators list from the store
		// @arg no argument
		async loadListOfModerators() {
			try {
				await this.$store.dispatch('moderation/loadListOfModerators', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		//access value of search
		// @arg The argument is a string value representing search input
		enterSearch(input) {
			this.search = input;
			for (let i = 0; i < this.listOfModerators.length; i++) {
				if (this.listOfModerators[i].username != input && input != '') {
					this.count = this.count + 1;
					this.noItems = false;
				}
			}
			if (this.count == this.listOfModerators.length) {
				this.noItems = true;
			}
			this.count = 0;
		},
		// @vuese
		//show all list of moderators
		// @arg no argument
		seeAll() {
			this.search = '';
			this.noItems = false;
		},
	},
};
</script>

<style scoped></style>
