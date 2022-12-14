<template>
	<div>
		<list-bar
			:title="'flair'"
			:flairs-count="listOfFlairs.length"
			@show-add-flair-function="showAddFlairFunction()"
			@reorder-flairs="reorderFlairs()"
			@save-reorder-flairs="saveReorderFlairs()"
			:subreddit-name="subredditName"
			:show-add-flair="showAddFlair"
			:drag-drop="dragDrop"
		></list-bar>
		<div class="content">
			<div class="text">
				Post flair management
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
			<div class="disabled">
				<div class="yellow-bar"></div>
				<div class="icon-box">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-exclamation-triangle yellow-icon"
						viewBox="0 0 16 16"
						id="yellow-icon"
					>
						<path
							d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"
						/>
						<path
							d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"
						/>
					</svg>
				</div>
				<div class="text-warn">
					<div class="text-1">Post flair is disabled</div>
					<div class="text-2">
						Post flairs will not be visible until feature is enabled
						{{ showAddFlair }}
					</div>
				</div>
			</div>
			<div class="base-box">
				<div class="first-section">Post flair preview</div>
				<!-- <div class="first-section">
				CSS class<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</div> -->
				<!-- <div class="first-section">
				Settings<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</div> -->
				<!-- <div class="first-section">
				Flair ID<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</div> -->
				<div class="first-section"></div>
			</div>
			<ul class="ul-items" v-if="!noFlairs && !dragDrop">
				<flair-item
					v-for="(flair, index) in listOfFlairs"
					:key="flair"
					:flair="flair"
					@done-successfully="(title) => doneSuccessfully(title)"
					:index="index"
				></flair-item>
			</ul>
			<div class="center-box" v-if="noFlairs && !showAddFlair">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-tag icon-tag"
					viewBox="0 0 16 16"
					id="icon-tag"
				>
					<path
						d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
					/>
					<path
						d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"
					/>
				</svg>
				<h3 class="heading-3-postflair">You do not have any post flair</h3>
				<p class="text-p-postflair">
					Create post flair in your community today
				</p>
			</div>
			<draggable
				v-if="!noFlairs && dragDrop"
				class="dragArea list-group w-full"
				:list="listOfFlairs"
				@change="log(listOfFlairs)"
			>
				<div
					class="list-group-item bg-gray-300 m-1 p-3 rounded-md item drag-item"
					v-for="flair in listOfFlairs"
					:key="flair.flairName"
				>
					<div class="flair-text-box">
						<span
							class="flair-text"
							:style="{
								background: flair.backgroundColor,
								color: flair.textColor,
							}"
							>{{ flair.flairName }}</span
						>
					</div>
				</div>
				<!-- <list-rules
				class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
				v-for="rule in listOfRules"
				:key="rule"
				:rule="rule"
			></list-rules> -->
			</draggable>
			<div class="add-flair" v-if="showAddFlair && !dragDrop">
				<add-flair
					@done-successfully="doneSuccessfully('added')"
					@exit="showAddFlairFunction()"
					:flair-name-edit="''"
					:background-color-edit="'#dadada'"
					:text-color-edit="'black'"
					:flair-id="''"
					:edit="false"
				></add-flair>
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
	</div>
</template>

<script>
import ListBar from '../../components/moderation/ListBar.vue';
import AddFlair from '../../components/moderation/AddFlair.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
import FlairItem from '../../components/moderation/FlairItem.vue';
import { VueDraggableNext } from 'vue-draggable-next';
export default {
	components: {
		AddFlair,
		SaveUnsavePopupMessage,
		ListBar,
		FlairItem,
		draggable: VueDraggableNext,
	},
	data() {
		return {
			showAddFlair: false,
			savedUnsavedPosts: [],
			dragDrop: false,
			newList: [],
		};
	},
	// @vuese
	//load List of Rules before mount
	beforeMount() {
		this.loadListOfFlairs();
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
		//return list of Rules
		// @type object
		listOfFlairs() {
			return this.$store.getters['moderation/listOfFlairs'];
		},
		// @vuese
		//return true if there is no flairs, false otherwise
		// @type boolean
		noFlairs() {
			if (this.listOfFlairs.length != 0) {
				return false;
			}
			return true;
		},
	},
	methods: {
		// @vuese
		//load Rules list from the store
		// @arg no argument
		async loadListOfFlairs() {
			try {
				await this.$store.dispatch('moderation/loadListOfFlairs', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		// handle load flairs instead of refreshing
		// @arg no argument
		doneSuccessfully(title) {
			this.loadListOfFlairs();
			this.savePost(title);
		},
		// @vuese
		// Used to show handle save action popup
		// @arg the argument is the title used in show popup
		savePost(title) {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: 'Flair',
				state: title,
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
		// Used to show add rule popup
		// @arg no argument
		showAddFlairFunction() {
			this.showAddFlair = !this.showAddFlair;
		},
		// @vuese
		// Used to handle re-order flairs action
		// @arg no argument
		reorderFlairs() {
			this.dragDrop = !this.dragDrop;
		},
		// @vuese
		// handle drag and drop action
		// @arg The argument is the list of rules
		log(listOfFlairs) {
			const rules = [];
			for (let i = 0; i < listOfFlairs.length; i++) {
				const flair = {
					flairId: listOfFlairs[i].FlairId,
					flairOrder: i,
				};
				rules.push(flair);
			}
			this.newList = listOfFlairs;
		},
		// @vuese
		// Used to handle save reorder rules action
		// @arg no argument
		async saveReorderFlairs() {
			try {
				await this.$store.dispatch('moderation/updateFlairsOrder', {
					flairsOrder: this.newList,
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
				if (this.$store.getters['moderation/updateFlairsSuccessfully']) {
					this.dragDrop = false;
					this.loadListOfFlairs();
					this.savePost('Reorder Saved');
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
		},
	},
};
</script>

<style scoped>
.content {
	padding-top: 6.4rem;
	border-radius: 0 0 0.4rem 0.4rem;
	overflow: hidden;
}
.ul-items {
	list-style: none;
	background-color: var(--color-white-1);
	padding-left: 0rem;
	margin-top: 0rem;
}
.text {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	margin-bottom: 1.6rem;
}
.disabled {
	border-color: rgb(255, 176, 0);
	margin: 1.6rem 0;
	background-color: var(--main-white-color);
	border: 1px solid rgb(255, 176, 0);
	border-radius: 0.4rem;
	position: relative;
	display: flex;
}
.yellow-bar {
	background-color: rgb(255, 176, 0);
	bottom: 0rem;
	display: inline-block;
	position: absolute;
	top: 0rem;
	width: 0.8rem;
}
.icon-box {
	display: inline-block;
	margin: 1.2rem 0.8rem 0.8rem 1.6rem;
}
.yellow-icon {
	fill: #ffb000;
	height: 2.4rem;
	width: 2.4rem;
	overflow: hidden;
}
.text-warn {
	display: inline-block;
	margin: 0.8rem 0rem;
}
.text-1 {
	font-weight: 700;
	font-size: 1.2rem;
	line-height: 1.6rem;
	color: var(--color-dark-3);
}
.text-2 {
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	color: var(--color-dark-3);
	padding-top: 0.4rem;
}
.base-box {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.2rem;
	text-transform: uppercase;
	-ms-flex-align: center;
	align-items: center;
	background-color: var(--color-grey-light-9);
	border-radius: 4px 4px 0 0;
	color: var(--color-grey-dark-8);
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1.6rem;
	white-space: nowrap;
}
.icon {
	margin-left: 4px;
	vertical-align: middle;
}
.first-section {
	margin-left: 0;
	/* width: 40rem; */
}
/* .second-section {
	width: 14.4rem;
} */
/* .third-section {
	 width: 28rem; 
} */
.forth-section {
	-ms-flex: 1;
	flex: 1;
	-ms-flex-pack: end;
	justify-content: flex-end;
	/* padding-right: 12rem; */
	margin-right: 0;
}
.center-box {
	-ms-flex-align: center;
	align-items: center;
	background-color: var(--main-white-color);
	color: var(--color-dark-3);
	display: -ms-flexbox;
	display: flex;
	-ms-flex-flow: column nowrap;
	flex-flow: column nowrap;
	-ms-flex-pack: center;
	justify-content: center;
	min-height: 40rem;
	border-radius: 0 0 4px 4px;
}
.icon-tag {
	color: var(--color-grey-dark-8);
	font-size: 4rem;
	margin: 2.4rem;
	width: 4rem;
	height: 4rem;
	font-size: 2rem;
	font-weight: 400;
	height: 2rem;
	line-height: 2rem;
	vertical-align: middle;
}
.heading-3-postflair {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
}
.text-p-postflair {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.8rem;
	margin-top: 0.8rem;
}
.add-flair {
	border-radius: 0 0 0.4rem 0.4rem;
	background-color: var(--color-grey-light-9);
	color: var(--color-dark-3);
	min-height: 60vh;
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
.flair-text-box {
	margin-left: 0;
	width: 40rem;
}
.flair-text {
	background-color: rgb(218, 218, 218);
	color: rgb(0, 0, 0);
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	border-radius: 2px;
	display: inline-block;
	margin-right: 5px;
	overflow: hidden;
	text-overflow: ellipsis;
	vertical-align: text-bottom;
	white-space: pre;
	word-break: normal;
	padding: 0 4px;
	max-width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
}
@media only screen and (max-width: 768px) {
	.content {
		padding-top: 11.4rem;
	}
}
</style>
