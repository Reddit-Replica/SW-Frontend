<template>
	<div>
		<list-bar
			:title="'Moderators'"
			:subreddit-name="subredditName"
			@invite-mod="handleInviteMod()"
			@leave-mod="handleLeaveMod()"
		></list-bar>
		<div class="list-moderations">
			<div class="text-moderation">
				{{ title }}
				<a
					href="https://mods.reddithelp.com/hc/en-us/articles/360009381491"
					id="info-link"
					__blank="targe"
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
			<search-bar
				@enter-search="(search) => enterSearch(search)"
				:empty-input="search"
				:before="before"
				:after="after"
				@fetch-before="loadListOfModerators('before')"
				@fetch-after="loadListOfModerators('after')"
			></search-bar>
			<ul class="ul-items" v-if="!noItems">
				<list-item
					v-for="(moderator, index) in listOfModerators"
					:key="moderator"
					:moderator="moderator"
					:search="search"
					:index="index"
					:invited-mod="false"
				></list-item>
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
			<div v-if="invitedMod && notSearch" class="invited-box">
				<div class="invited-title">Invited moderators</div>
				<ul class="ul-items">
					<list-item
						v-for="(invitedModerator, index) in listOfInvitedModerators"
						:key="invitedModerator"
						:moderator="invitedModerator"
						:index="index"
						:invited-mod="true"
						@done-successfully="doneSuccessfully('canceled')"
					></list-item>
				</ul>
			</div>
		</div>
		<invite-moderator
			v-if="showInvitePopup"
			:subreddit-name="subredditName"
			@exit="handleInviteMod()"
			@done-successfully="doneSuccessfully('invited')"
		></invite-moderator>
		<div id="sure-popup-form">
			<base-dialog
				:show="showLeaveMod"
				@close="handleLeaveMod()"
				title="Leave as mod"
			>
				<div class="rule-dialog flex-column">
					<div class="rule-box-p flex-column">
						<p class="sure-text">
							Once you leave as a mod, you will lose mod permissions and will be
							unable to access any mod tools for this community. Are you sure
							you wish to leave as a mod of this community?
						</p>
					</div>
					<div class="rule-box box-buttons">
						<base-button
							@click="handleLeaveMod()"
							class="button-white"
							id="cancel-button"
							>Cancel</base-button
						>
						<base-button
							@click="leaveModFunction()"
							class="button-blue"
							id="leave-button"
							>Leave</base-button
						>
					</div>
					<div class="no-messages" v-if="errorResponse">
						{{ errorResponse }}
					</div>
				</div>
			</base-dialog>
		</div>
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
import ListItem from '../../components/moderation/ListItem.vue';
import ListBar from '../../components/moderation/ListBar.vue';
import InviteModerator from '../../components/moderation/InviteModerator.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
export default {
	components: {
		SearchBar,
		ListItem,
		ListBar,
		InviteModerator,
		SaveUnsavePopupMessage,
	},
	beforeMount() {
		this.loadListOfModerators();
		this.loadListOfInvitedModerators();
	},
	computed: {
		// @vuese
		//return list of moderators
		// @type object
		listOfModerators() {
			return this.$store.getters['moderation/listOfModerators'];
		},
		// @vuese
		//return list of invited moderators
		// @type object
		listOfInvitedModerators() {
			return this.$store.getters['moderation/listOfInvitedModerators'];
		},
		// @vuese
		//return if there is moderators before
		// @type string
		before() {
			return this.$store.getters['moderation/before'];
		},
		// @vuese
		//return if there is moderators after
		// @type string
		after() {
			return this.$store.getters['moderation/after'];
		},
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		// @vuese
		//return title to use in component
		// @type string
		title() {
			return 'Moderators of r/' + this.subredditName;
		},

		// @vuese
		//return true if there is no rules, false otherwise
		// @type boolean
		invitedMod() {
			if (this.listOfInvitedModerators.length != 0) {
				return true;
			}
			return false;
		},
	},
	data() {
		return {
			search: '',
			count: 0,
			noItems: false,
			notSearch: true,
			showInvitePopup: false,
			showLeaveMod: false,
			errorResponse: '',
			savedUnsavedPosts: [],
		};
	},
	methods: {
		// @vuese
		// handle load flairs instead of refreshing
		// @arg no argument
		doneSuccessfully(title) {
			this.loadListOfInvitedModerators();
			this.savePost(title);
		},
		// @vuese
		//load moderators list from the store
		// @arg no argument
		async loadListOfModerators(title) {
			let beforeMod = '',
				afterMod = '';
			if (title == 'before') {
				beforeMod = this.before;
			} else if (title == 'after') {
				afterMod = this.after;
			}
			try {
				await this.$store.dispatch('moderation/loadListOfModerators', {
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
		//load moderators invited list from the store
		// @arg no argument
		async loadListOfInvitedModerators() {
			try {
				await this.$store.dispatch('moderation/loadListOfInvitedModerators', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		// Used to handle save reorder rules action
		// @arg no argument
		async leaveModFunction() {
			try {
				await this.$store.dispatch('moderation/leaveMod', {
					baseurl: this.$baseurl,
					subreddit: this.subredditName,
				});
				if (this.$store.getters['moderation/leaveModSuccessfully']) {
					this.savePost('Leaved');
					window.location.reload();
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
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
			this.notSearch = true;
			for (let i = 0; i < this.listOfModerators.length; i++) {
				if (this.listOfModerators[i].username != input && input != '') {
					this.count = this.count + 1;
					this.noItems = false;
					this.notSearch = false;
				}
			}
			if (this.count == this.listOfModerators.length) {
				this.noItems = true;
				this.notSearch = false;
			}
			if (input == '') {
				this.noItems = false;
				this.notSearch = true;
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
		//handle clicking invite mod
		// @arg no argument
		handleInviteMod() {
			this.showInvitePopup = !this.showInvitePopup;
		},
		// @vuese
		//handle clicking leave mod
		// @arg no argument
		handleLeaveMod() {
			this.showLeaveMod = !this.showLeaveMod;
		},
	},
};
</script>

<style scoped>
.list-moderations {
	padding-top: 6.4rem;
	border-radius: 0 0 4px 4px;
	overflow: hidden;
}
.text-moderation {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	margin-bottom: 1.6rem;
}
.input-search {
	width: 60% !important;
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
.see-all-button {
	padding: 0 1.5rem;
	color: var(--color-blue-2);
	background-color: var(--color-white-1);
	font-weight: bold;
}
.invited-title {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: var(--color-dark-3);
	margin-bottom: 8px;
}
.invited-box {
	margin-top: 3.6rem;
}
.rule-dialog {
	max-height: 100%;
	max-width: 53.8rem;
	min-width: 41rem;
}
.sure-text {
	line-height: 2.2rem;
	margin: 1rem 0;
	white-space: pre-wrap;
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	color: var(--color-dark-3);
	font-size: 1.4rem;
	line-height: 2.1rem;
	display: block;
}
.rule-box-p {
	align-items: flex-start;
	margin-top: 1.2rem;
	margin-bottom: 3rem;
}
.box {
	margin-top: 1rem;
	width: 15rem;
	background-color: var(--color-dark-1);
	color: var(--color-white-1);
	font-size: 0.9rem;
	padding: 1rem;
	position: absolute;
	border-radius: 0.4rem;
	text-align: center;
	pointer-events: none;
	transform: translateX(-50%);
	z-index: 100;
	right: -16rem;
}
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 16px;
	margin: 16px -16px -16px;
	display: flex;
	justify-content: flex-end;
	border-bottom-right-radius: 4px;
	box-sizing: border-box;
}
button {
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
	margin-left: 8px;
	font-size: 14px;
	font-weight: 700;
}
.button-blue:hover {
	background-color: rgb(248, 89, 89);
	border: 1px solid rgb(248, 89, 89);
	padding: 0.4rem 1.6rem;
}
.button-white {
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
}
.button-white:hover {
	border: 1px solid var(--color-grey-dark-8);
	color: var(--color-grey-dark-8);
	padding: 0.4rem 1.6rem;
}
.button-blue {
	background-color: var(--color-blue-2);
	border: 1px solid var(--color-blue-2);
	color: var(--color-white-1);
	padding: 0.4rem 1.6rem;
}
.disabled {
	cursor: not-allowed;
	filter: grayscale(1);
	border: none;
	color: rgba(255, 255, 255, 0.5);
	fill: rgba(255, 255, 255, 0.5);
	background-color: var(--color-grey-light-5);
}
input:focus {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
}
.input-name {
	border: 1px solid var(--color-grey-light-2);
	max-height: 3.7rem;
	padding: 0.4rem 1rem;
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	box-sizing: border-box;
	margin-bottom: 8px;
	border-radius: 4px;
	width: 100%;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.1rem;
	height: 5rem;
}
.no-messages {
	margin-top: 2rem;
	padding: 1rem;
	color: red;
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
	.list-moderations {
		padding-top: 11.4rem;
	}
}
</style>
