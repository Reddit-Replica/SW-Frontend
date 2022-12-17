<template>
	<div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 50%"
			></the-spinner>
		</div>
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

		<no-list :title="'Banned users'" v-if="noBanned">
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

		<div v-else>
			<search-bar
				@enter-search="(search) => enterSearch(search)"
				:empty-input="search"
				:before="before"
				:after="after"
				@fetch-before="loadListOfBanned('before')"
				@fetch-after="loadListOfBanned('after')"
			></search-bar>
			<ul class="ul-items" v-if="!noItems && !noBanned">
				<ban-item
					v-for="(ban, index) in listOfBanned"
					:key="ban"
					:ban="ban"
					:search="search"
					:index="index"
					@done-successfully="doneSuccessfully()"
				></ban-item>
			</ul>
			<div class="no-items" v-if="noItems">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-search icon-search"
					viewBox="0 0 16 16"
					id="search-icon"
				>
					<path
						d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
					/>
				</svg>
				<span>No results for u/{{ search }}</span>
				<base-button
					class="see-all-button"
					id="see-all-button"
					@click="seeAll()"
					>See all</base-button
				>
			</div>
		</div>
		<add-ban
			v-if="showBanUser"
			:subreddit-name="subredditName"
			@exit="showBanUserFunction()"
			@done-successfully="doneSuccessfully('banned')"
		></add-ban>
		<div class="positioning">
			<SaveUnsavePopupMessage
				v-for="message in savedUnsavedPosts"
				:key="message.id"
				:type="message.type"
				:state="message.state"
				:typeid="message.postid"
				@undo-action="undoSaveUnsave"
			></SaveUnsavePopupMessage>
		</div>
	</div>
</template>

<script>
import SearchBar from '../../components/moderation/SearchBar.vue';
import NoList from '../../components/moderation/NoList.vue';
import ListBar from '../../components/moderation/ListBar.vue';
import AddBan from '../../components/moderation/AddBan.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
import BanItem from '../../components/moderation/BanItem.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	components: {
		NoList,
		ListBar,
		AddBan,
		SaveUnsavePopupMessage,
		BanItem,
		SearchBar,
		TheSpinner,
	},
	data() {
		return {
			showBanUser: false,
			savedUnsavedPosts: [],
			search: '',
			count: 0,
			noItems: false,
			errorResponse: '',
			loading: false,
		};
	},
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			await this.loadListOfBanned();
		}
		this.loading = false;
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		// @vuese
		//return list of moderators
		// @type object
		listOfBanned() {
			return this.$store.getters['moderation/listOfBanned'];
		},
		// @vuese
		//return true if there is no banned, false otherwise
		// @type boolean
		noBanned() {
			if (this.listOfBanned.length != 0) {
				return false;
			}
			return true;
		},
		// @vuese
		//return if there is banned before
		// @type string
		before() {
			return this.$store.getters['moderation/before'];
		},
		// @vuese
		//return if there is banned after
		// @type string
		after() {
			return this.$store.getters['moderation/after'];
		},
	},
	methods: {
		// @vuese
		// handle load banned list instead of refreshing
		// @arg the argument is the title used in show popup
		doneSuccessfully(title) {
			if (!title) {
				this.savePost('Done');
			} else {
				this.savePost(title);
			}
			this.loadListOfBanned();
		},
		// @vuese
		// Used to show handle save action popup
		// @arg the argument is the title used in show popup
		savePost(title) {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: title,
				state: '',
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
		// @vuese
		// Used to show handle unsave action popup
		// @arg no argument
		unsavePost() {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: 'post',
				state: 'unsaved',
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
		// @vuese
		// Used to show handle undo save action popup
		// @arg no argument
		async undoSaveUnsave(state, typeid) {
			if (state == 'saved') {
				this.unsavePost(typeid);
				this.$store.state.latestSavedUnsavedPost.id = typeid;
				this.$store.state.latestSavedUnsavedPost.saved = false;
				try {
					await this.$store.dispatch('postCommentActions/unsave', {
						baseurl: this.$baseurl,
						id: typeid,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				this.savePost(typeid);
				this.$store.state.latestSavedUnsavedPost.id = typeid;
				this.$store.state.latestSavedUnsavedPost.saved = true;
				try {
					await this.$store.dispatch('postCommentActions/save', {
						baseurl: this.$baseurl,
						id: typeid,
						type: 'post',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
		// @vuese
		//access value of search
		// @arg The argument is a string value representing search input
		enterSearch(input) {
			this.search = input;
			this.noItems = false;
			for (let i = 0; i < this.listOfBanned.length; i++) {
				if (this.listOfBanned[i].username != input && input != '') {
					this.count = this.count + 1;
					this.noItems = false;
				}
			}
			if (this.count == this.listOfBanned.length) {
				this.noItems = true;
				this.notSearch = false;
			}
			if (input == '') {
				this.noItems = false;
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
		// @vuese
		//load banned list from the store
		// @arg no argument
		async loadListOfBanned(title) {
			let beforeMod = '',
				afterMod = '';
			if (title == 'before') {
				beforeMod = this.before;
			} else if (title == 'after') {
				afterMod = this.after;
			}
			try {
				await this.$store.dispatch('moderation/loadListOfBanned', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					beforeMod: beforeMod,
					afterMod: afterMod,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		//access value of search
		// @arg The argument is a string value representing search input
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
.ul-items {
	list-style: none;
	background-color: var(--color-white-1);
	padding-left: 0rem;
}
.no-items {
	background-color: var(--color-white-1);
	height: 25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;
}
.positioning {
	position: fixed;
	bottom: 0;
	/* display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	display: flex;
	flex-direction: column; */
}
@media only screen and (max-width: 768px) {
	.text {
		padding-top: 11.4rem;
	}
}
</style>
