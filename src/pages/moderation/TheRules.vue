<template>
	<div>
		<list-bar
			:title="'Rules'"
			:rules-count="listOfRules.length"
			@show-add-rule-function="showAddRuleFunction()"
			@reorder-rules="reorderRules()"
			@save-reorder-rules="saveReorderRules()"
			:drag-drop="dragDrop"
			:subreddit-name="subredditName"
		></list-bar>
		<div class="text">
			Rules
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
		<!-- should be noRules -->
		<no-list :title="'Rules'" v-if="noRules">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-list-ol icon"
				viewBox="0 0 16 16"
				id="no-rules-icon"
			>
				<path
					fill-rule="evenodd"
					d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
				/>
				<path
					d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"
				/>
			</svg>
		</no-list>
		<!-- should be !noRules && !dragDrop -->
		<div v-if="!noRules && !dragDrop">
			<span class="rules-description">
				These are rules that visitors must follow to participate. They can be
				used as reasons to report or ban posts, comments, and users. Communities
				can have a maximum of 15 rules.</span
			>
			<ul class="ul-items">
				<list-rules
					v-for="(rule, index) in listOfRules"
					:key="rule"
					:rule="rule"
					:index="index"
					:list-of-rules="listOfRules"
					@done-successfully="(title) => doneSuccessfully(title)"
				></list-rules>
			</ul>
		</div>
		<!-- should be !noRules && dragDrop -->
		<draggable
			v-if="!noRules && dragDrop"
			class="dragArea list-group w-full"
			:list="listOfRules"
			@change="log(listOfRules)"
		>
			<div
				class="list-group-item bg-gray-300 m-1 p-3 rounded-md item drag-item"
				v-for="rule in listOfRules"
				:key="rule.ruleName"
			>
				<span class="rule-order"> {{ rule.ruleOrder + 1 }}</span>
				<span class="rule-name"> {{ rule.ruleName }}</span>
			</div>
			<!-- <list-rules
				class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
				v-for="rule in listOfRules"
				:key="rule"
				:rule="rule"
			></list-rules> -->
		</draggable>
		<addrule-popup
			v-if="showAddRule"
			:subreddit-name="subredditName"
			:list-of-rules="listOfRules"
			@exit="showAddRuleFunction()"
			@done-successfully="doneSuccessfully('added')"
			:rule-name="''"
			:report-reason="''"
			:applies-to="''"
			:description="''"
			:edit="false"
		></addrule-popup>

		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>

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
import ListBar from '../../components/moderation/ListBar.vue';
import NoList from '../../components/moderation/NoList.vue';
import AddrulePopup from '../../components/moderation/AddrulePopup.vue';
import ListRules from '../../components/moderation/ListRules.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';
import { VueDraggableNext } from 'vue-draggable-next';
export default {
	components: {
		NoList,
		AddrulePopup,
		ListBar,
		ListRules,
		draggable: VueDraggableNext,
		SaveUnsavePopupMessage,
	},
	data() {
		return {
			showAddRule: false,
			dragDrop: false,
			errorResponse: null,
			newList: [],
			savedUnsavedPosts: [],
		};
	},
	// @vuese
	//load List of Rules before mount
	beforeMount() {
		this.loadListOfRules();
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
		listOfRules() {
			return this.$store.getters['moderation/listOfRules'];
		},
		// @vuese
		//return true if there is no rules, false otherwise
		// @type boolean
		noRules() {
			if (this.listOfRules.length != 0) {
				return false;
			}
			return true;
		},
	},
	methods: {
		// @vuese
		// Used to show add rule popup
		// @arg no argument
		showAddRuleFunction() {
			this.showAddRule = !this.showAddRule;
		},
		// @vuese
		//load Rules list from the store
		// @arg no argument
		async loadListOfRules() {
			try {
				await this.$store.dispatch('moderation/loadListOfRules', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		// Used to handle re-order rules action
		// @arg no argument
		reorderRules() {
			this.dragDrop = !this.dragDrop;
		},
		// @vuese
		// handle drag and drop action
		// @arg The argument is the list of rules
		log(listOfRules) {
			const rules = [];
			for (let i = 0; i < listOfRules.length; i++) {
				const rule = {
					ruleId: listOfRules[i].ruleId,
					ruleOrder: i,
				};
				rules.push(rule);
			}
			this.newList = listOfRules;
		},
		// @vuese
		// Used to handle save reorder rules action
		// @arg no argument
		async saveReorderRules() {
			try {
				await this.$store.dispatch('moderation/updateRulesOrder', {
					rulesOrder: this.newList,
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
				if (this.$store.getters['moderation/updateRulesSuccessfully']) {
					this.dragDrop = false;
					this.loadListOfRules();
					this.savePost('Reorder Saved');
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
		},

		// @vuese
		// handle load rules instead of refreshing, add show save sucessfully popup
		// @arg the argument is the title used in show popup
		doneSuccessfully(title) {
			this.loadListOfRules();
			this.savePost(title);
		},

		// @vuese
		// Used to show handle save action popup
		// @arg the argument is the title used in show popup
		savePost(title) {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: 'Rule',
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
	},
};
</script>

<style scoped>
.item {
	display: flex;
	align-items: center;
	height: 5rem;
	border-bottom: var(--line);
	color: var(--color-dark-3);
}
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
	margin-bottom: 1rem;
}
.ul-items {
	list-style: none;
	background-color: var(--color-white-1);
	padding-left: 0rem;
	margin-top: 1rem;
}
.rules-description {
	font-size: 1.3rem;
	font-weight: 400;
	line-height: 1.8rem;
	color: var(--color-dark-3);
}
.rule-order {
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 2rem;
	-ms-flex-align: center;
	align-items: center;
	display: -ms-flexbox;
	display: flex;
	-ms-flex: 0 0 4.8rem;
	flex: 0 0 4.8rem;
	height: 100%;
	-ms-flex-pack: center;
	justify-content: center;
	width: 4.8rem;
}
.rule-name {
	font-size: 1.4rem;
	line-height: 1.8rem;
	margin: 1.6rem 0.8rem;
	word-break: break-word;
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
}
.drag-item {
	cursor: pointer;
	border-bottom: 1px solid var(--color-grey-light-9);
	padding: 1.2rem 0;
	margin: 1.2rem 0 !important;
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
</style>
