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
		<no-list :title="'Muted users'" v-if="noMuted">
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
		<div v-else>
			<search-bar
				@enter-search="(search) => enterSearch(search)"
				:empty-input="search"
				:before="before"
				:after="after"
				@fetch-before="loadListOfMuted('before')"
				@fetch-after="loadListOfMuted('after')"
			></search-bar>
			<ul class="ul-items" v-if="!noItems">
				<mute-item
					v-for="(mute, index) in listOfMuted"
					:key="mute"
					:mute="mute"
					:search="search"
					:index="index"
					@done-successfully="doneSuccessfully('unmuted')"
				></mute-item>
			</ul>
			<div class="no-items" v-else>
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
		<mute-user
			v-if="showMuteUser"
			:subreddit-name="subredditName"
			@exit="showMuteUserFunction()"
			@done-successfully="doneSuccessfully('added')"
		></mute-user>
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
import NoList from '../../components/moderation/NoList.vue';
import MuteUser from '../../components/moderation/MuteUser.vue';
import ListBar from '../../components/moderation/ListBar.vue';
import MuteItem from '../../components/moderation/MuteItem.vue';
import SearchBar from '../../components/moderation/SearchBar.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
export default {
	components: {
		NoList,
		MuteUser,
		ListBar,
		MuteItem,
		SearchBar,
		SaveUnsavePopupMessage,
	},
	data() {
		return {
			showMuteUser: false,
			search: '',
			count: 0,
			savedUnsavedPosts: [],
			noItems: false,
		};
	},
	beforeMount() {
		this.loadListOfMuted();
	},
	computed: {
		// @vuese
		//return list of moderators
		// @type object
		listOfMuted() {
			return this.$store.getters['moderation/listOfMuted'];
		},
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		// @vuese
		//return true if there is no approved, false otherwise
		// @type boolean
		noMuted() {
			if (this.listOfMuted.length != 0) {
				return false;
			}
			return true;
		},
		// @vuese
		//return if there is approved before
		// @type string
		before() {
			return this.$store.getters['moderation/before'];
		},
		// @vuese
		//return if there is approved after
		// @type string
		after() {
			return this.$store.getters['moderation/after'];
		},
	},
	methods: {
		// @vuese
		//load approved list from the store
		// @arg no argument
		async loadListOfMuted() {
			try {
				await this.$store.dispatch('moderation/loadListOfMuted', {
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
			this.noItems = false;
			for (let i = 0; i < this.listOfMuted.length; i++) {
				if (this.listOfMuted[i].username != input && input != '') {
					this.count = this.count + 1;
					this.noItems = false;
				}
			}
			if (this.count == this.listOfMuted.length) {
				this.noItems = true;
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
		// Used to show add rule popup
		// @arg no argument
		showMuteUserFunction() {
			this.showMuteUser = !this.showMuteUser;
		},
		// @vuese
		// handle load muted list instead of refreshing
		// @arg no argument
		doneSuccessfully(title) {
			if (!title) {
				this.savePost('Done');
			} else {
				this.savePost(title);
			}
			this.loadListOfMuted();
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
