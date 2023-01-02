<!-- <template>
	<ul
		class="post-list"
		:class="[postKind == 'ov' ? 'm-left-8' : '']"
		:style="[pinnedPostFlag ? 'flex-wrap:nowrap' : '']"
	>
		<li
			id="post-options-bottom-vote-box"
			class="bottom-vote-box"
			:style="[
				pinnedPostFlag ? 'display:block !important;     margin-right: 0px' : '',
			]"
		>
			<div
				class="d-flex flex-row vote-box"
				style="width: auto; background-color: inherit"
			>
				<div
					class="upvote"
					id="post-options-bottom-vote-box-upvote"
					@click="upvote"
				>
					<svg class="icon icon-arrow-down p-1 up-clicked" v-if="upClicked">
						<use xlink:href="../../../../../img/vote.svg#icon-arrow-up"></use>
					</svg>
					<svg class="icon icon-shift" v-else>
						<use xlink:href="../../../../../img/shift.svg#icon-shift"></use>
					</svg>
				</div>
				<div
					class="p-2 vote-count"
					:class="upClicked ? 'up-clicked' : downClicked ? 'down-clicked' : ''"
					id="post-options-bottom-vote-down-clicked"
				>
					{{ getAbbreviationsOfNumber(counter) }}
				</div>
				<div
					class="downvote"
					id="post-options-bottom-vote-downvote-clicked"
					@click="downvote"
				>
					<svg
						class="icon icon-arrow-down p-1"
						:class="downClicked ? 'down-clicked' : ''"
						v-if="downClicked"
					>
						<use xlink:href="../../../../../img/vote.svg#icon-arrow-down"></use>
					</svg>
					<svg class="icon icon-shift" v-else>
						<use xlink:href="../../../../../img/shift.svg#icon-shift"></use>
					</svg>
				</div>
			</div>
		</li>
		<li
			v-if="!(pinnedPostFlag || postKind == 'ov')"
			class="post-option-item post-option-item-hover2"
			id="expand-post-option-in-options"
		>
			<div
				v-if="postDataOptions.data.kind == 'link'"
				id="post-options-postData-data-kind-link"
				class="post-options-icon"
			>
				<a
					class="post-link-href"
					:href="postDataOptions.data.link"
					target="_blank"
				>
					<i
						style="font-size: 20px"
						class="fa-solid fa-arrow-up-right-from-square"
					></i>
				</a>
			</div>
			<div
				v-else-if="!showPostContent"
				@click="expandPostContent"
				class="post-options-icon"
				id="post-options-expand-Post-Content"
				style="
					transform: rotate(90deg);
					stroke-width: 35px;
					stroke: rgb(135, 138, 140);
					color: transparent;
				"
			>
				<i class="fa-solid fa-up-right-and-down-left-from-center"></i>
			</div>
			<div
				v-else
				@click="collapsePostContent"
				id="post-options-collapse-Post-Content"
				class="post-options-icon"
			>
				<i
					style="
						transform: rotate(90deg);
						stroke-width: 35px;
						stroke: rgb(135, 138, 140);
						color: transparent;
					"
					class="fa-solid fa-down-left-and-up-right-to-center"
				></i>
			</div>
		</li>
		<li class="post-option-item post-option-item-hover2">
			<router-link
				id="post-options-postData-data-subreddit-comments"
				:to="
					postDataOptions.data.subreddit != null
						? `/r/${postDataOptions.data.subreddit}/comments/${postDataOptions.id}/${postDataOptions.data.title}`
						: `/user/${postDataOptions.data.postedBy}/comments/${postDataOptions.id}/${postDataOptions.data.title}`
				"
			>
				<div id="post-options-postData-data-comments" class="post-options-icon">
					<i
						style="
							stroke-width: 35px;
							stroke: rgb(135, 138, 140);
							color: transparent;
						"
						class="fa-solid fa-message"
					></i>
				</div>
				<div
					class="post-options-text"
					id="post-options-postData-data-comments-text"
				>
					<p>{{ postDataOptions.data.comments + ' comments' }}</p>
				</div>
			</router-link>
		</li>
		<li
			style="position: relative"
			id="share-post-options"
			:style="pinnedPost ? 'width:fit-content;' : ''"
			class="post-option-item-hover"
			@click="sharePost"
		>
			<router-link to="">
				<div class="post-options-icon">
					<i
						style="
							stroke-width: 35px;
							stroke: rgb(135, 138, 140);
							color: transparent;
						"
						class="fa-solid fa-share"
					></i>
				</div>
				<div class="post-options-text" id="share-post-options-text">
					<p>share</p>
				</div>
			</router-link>
			<div
				v-if="showShareOptions"
				class="options-box-list"
				id="show-share-more-post-options"
			>
				<ul>
					<li @click="CopyPostLink" class="options-box-item">
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-solid fa-link"
							></i>
						</div>
						<div class="options-box-text">Copy Link</div>
					</li>
					<li @click="Crosspost" class="options-box-item">
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-solid fa-shuffle"
							></i>
						</div>
						<div class="options-box-text">Crosspost</div>
					</li>
				</ul>
			</div>
		</li>
		<li
			v-if="!pinnedPostFlag && postDataOptions.data.inYourSubreddit"
			id="approve-user-post-button"
			@click="approvePost(postDataOptions.id)"
			:style="[ApprovedComment ? 'color: #46d160' : '']"
			class="post-option-item"
			:class="[
				ApprovedComment
					? 'post-option-item-unhover'
					: 'post-option-item-hover2',
			]"
		>
			<div class="post-options-icon">
				<i class="fa-solid fa-check"></i>
			</div>
			<div class="post-options-text">Approve</div>
		</li>
		<li
			v-if="!postDataOptions.data.inYourSubreddit && !pinnedPostFlag"
			id="savepost-ann-user-user-post-button"
			@click="savePost(postDataOptions.id)"
			class="post-option-item post-option-item-hover2"
		>
			<div class="post-options-icon">
				<i
					v-if="!saved"
					style="color: rgba(135, 138, 140); font-size: 20px"
					class="fa-regular fa-bookmark"
				></i>
				<i v-else>
					<svg
						style="color: rgba(135, 138, 140); width: 20px"
						:style="[saved ? 'color:#0079d3' : ' ']"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-bookmarks"
						viewBox="0 0 16 16"
					>
						<path
							d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
						/>
						<path
							d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
						/>
					</svg>
				</i>
			</div>
			<div
				class="post-options-text"
				:style="[
					saved ? 'color: #0079d3; font-size: 12px;' : ' font-size: 12px;',
				]"
			>
				{{ !saved ? 'Save' : 'Unsaved' }}
			</div>
		</li>
		<li
			v-if="!postDataOptions.data.inYourSubreddit && !pinnedPostFlag"
			id="savepost-ann-user-user-post-button"
			@click="hideUnhidePost(postDataOptions.id)"
			class="post-option-item post-option-item-hover2"
		>
			<div class="post-options-icon">
				<i
					style="color: rgba(135, 138, 140); font-size: 20px"
					class="fa-regular fa-eye-slash"
				></i>
			</div>
			<div style="font-size: 12px" class="post-options-text">Hide</div>
		</li>

		<li
			v-if="!pinnedPostFlag && postDataOptions.data.inYourSubreddit"
			id="remove-user-post-button"
			@click="removePost(postDataOptions.id)"
			:style="[
				RemovedComment ? 'color: #ff585b' : 'color: rgba(135, 138, 140)',
			]"
			class="post-option-item"
			:class="[RemovedComment ? '' : 'post-option-item-hover2']"
		>
			<div class="post-options-icon">
				<i style="color: inherit" class="fa-solid fa-ban"></i>
			</div>
			<div class="post-options-text">
				<p>Remove</p>
			</div>
		</li>
		<li
			v-if="!pinnedPostFlag && postDataOptions.data.inYourSubreddit"
			id="spam-user-post-button"
			@click="spamPost(postDataOptions.id)"
			:style="[
				SpammedComment ? 'color: #ff585b' : 'color: rgba(135, 138, 140)',
			]"
			class="post-option-item"
			:class="[SpammedComment ? '' : 'post-option-item-hover2']"
		>
			<div class="post-options-icon">
				<i class="fa-regular fa-calendar-xmark"></i>
			</div>
			<div class="post-options-text">
				<p>Spam</p>
			</div>
		</li>
		<li
			v-if="!pinnedPostFlag && postDataOptions.data.inYourSubreddit"
			id="insights-user-post-button"
			@click="insightsPostToggle"
			class="post-option-item post-option-item-hover2"
		>
			<div class="post-options-icon">
				<i style="color: #0079d3" class="fa-solid fa-chart-simple"></i>
			</div>
			<div class="post-options-text">
				<p>Insights</p>
			</div>
		</li>
		<li
			v-if="
				postDataOptions.data.inYourSubreddit && !postKind && !pinnedPostFlag
			"
			@click="safetyClicked"
			id="shield-user-post-button"
			class="post-option-item post-option-item-hover2"
			style="position: relative"
		>
			<div class="post-options-icon">
				<i
					style="
						stroke-width: 35px;
						stroke: rgb(135, 138, 140);
						color: transparent;
					"
					class="fa-solid fa-shield"
				></i>
			</div>
			<div v-if="showSafetyOptions" class="options-box-list">
				<ul>
					<li
						@click="lockUnLockComments(postDataOptions.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									:checked="LockedComment"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-oc">Lock Comments</label>
						</div>
					</li>
				</ul>
			</div>
		</li>
		<li
			class="post-option-item2"
			style="position: relative"
			@click="openOptionsBoxList"
		>
			<div
				class="post-options-icon three-dot-icon-box"
				v-if="postDataOptions.data.inYourSubreddit || pinnedPostFlag"
			>
				<i>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-three-dots"
						viewBox="0 0 16 16"
					>
						<path
							d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
						/>
					</svg>
				</i>
			</div>
			<div
				id="show-dots-options-BoxList"
				v-if="
					(showOptionsBoxList && postDataOptions.data.inYourSubreddit) ||
					(pinnedPostFlag && showOptionsBoxList)
				"
				class="options-box-list"
			>
				<ul>
					<li @click="editPost" class="options-box-item">
						<div class="options-box-icon">
							<i style="color: rgba(135, 138, 140)" class="fa-solid fa-pen"></i>
						</div>
						<div class="options-box-text">Edit Post</div>
					</li>
					<li @click="savePost" class="options-box-item">
						<div class="options-box-icon">
							<i
								v-if="!saved"
								style="color: rgba(135, 138, 140)"
								class="fa-regular fa-bookmark"
							></i>
							<i v-else>
								<svg
									style="color: rgba(135, 138, 140)"
									:style="[saved ? 'color: #0079d3;' : '']"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-bookmarks"
									viewBox="0 0 16 16"
								>
									<path
										d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1H4z"
									/>
									<path
										d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1z"
									/>
								</svg>
							</i>
						</div>
						<div
							class="options-box-text"
							:style="[saved ? 'color: #0079d3;' : '']"
						>
							{{ !saved ? 'Save' : 'Unsaved' }}
						</div>
					</li>
					<li
						@click="pinPostToProfile(postDataOptions.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-solid fa-thumbtack"
							></i>
						</div>
						<div class="options-box-text">
							{{ postDataOptions.data.pin ? 'unpin' : 'pin' }} Post to Profile
						</div>
					</li>
					<li
						@click="hideUnhidePost(postDataOptions.id)"
						id="hide-unhide-post-options"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-regular fa-eye-slash"
								:style="[postHiddenFlag ? 'color:#0079d3' : '']"
							></i>
						</div>
						<div
							class="options-box-text"
							:style="[postHiddenFlag ? 'color:#0079d3' : '']"
						>
							{{ postHiddenFlag ? 'Unhide' : 'Hide' }}
						</div>
					</li>
					<li
						v-if="postDataOptions.data.inYourSubreddit"
						@click="deletePost"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-solid fa-trash"
							></i>
						</div>
						<div class="options-box-text">Delete</div>
					</li>
					<li
						v-if="postDataOptions.data.inYourSubreddit"
						@click="markAsOC"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									checked
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-oc">Mark As OC</label>
						</div>
					</li>
					<li
						v-if="postDataOptions.data.inYourSubreddit"
						@click="markUnMarkAsSpoiler(postDataOptions.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-spoiler"
									name="mark-as-spoiler"
									:checked="spoilerPost"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-spoiler">Mark As Spoiler</label>
						</div>
					</li>
					<li
						v-if="postDataOptions.data.inYourSubreddit"
						@click="markUnMarkAsNSFW(postDataOptions.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-nsfw"
									name="mark-as-nsfw"
									:checked="nsfwPost"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-nsfw">Mark As NSFW</label>
						</div>
					</li>
					<li
						@click="markUnMarkSendMeReply(postDataOptions.id)"
						id="post-options-mark-UnMark-Send-MeReply"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="send-me-notifications"
									name="send-me-notifications"
									:checked="postDataOptions.data.sendReplies"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="send-me-notifications"
								>Send Me Replay Notifications</label
							>
						</div>
					</li>
					<li
						v-if="postDataOptions.data.inYourSubreddit"
						@click="lockUnLockComments(postDataOptions.id)"
						class="options-box-item"
					>
						<div class="options-box-icon" id="lock-post-comments-options">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									:checked="
										(postDataOptions.data.moderation &&
											postDataOptions.data.moderation.lock) ||
										postDataOptions.data.locked
									"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-oc">Lock Comments</label>
						</div>
					</li>
				</ul>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			postDataOptions: this.postData,
			counter: this.postDataOptions.data.votes,
			upClicked:
				(this.postDataOptions.data.votingType == 1 ? true : false) ||
				this.postDataOptions.data.vote == 1
					? true
					: false,
			downClicked: this.postDataOptions.data.votingType == -1 ? true : false,
			showShareOptions: false,
			showOptionsBoxList: false,
			showPostContent: false,
			spoilerCheckBox: false,
			nsfwCheckBox: false,
			showSafetyOptions: false,
			saved: this.postDataOptions.data.saved,
			postHiddenFlag: this.page == 'hidden' || this.postDataOptions.data.hidden,
			ApprovedCommentFlag: true,
			RemovedCommentFlag: true,
			SpammedCommentFlag: true,
			LockedCommentFlag: true,
			spoilerFlag: true,
			nsfwFlag: true,
		};
	},
	props: {
		postData: {
			type: Object,
			required: true,
		},
		pinnedPostFlag: {
			type: Boolean,
			required: false,
		},
		page: {
			type: String,
			required: true,
		},
		postKind: {
			type: String,
			required: true,
		},
	},
	mounted() {
		window.addEventListener('click', this.clicked);
	},
	unmounted() {
		window.removeEventListener('click', this.clicked);
	},
	computed: {
		LockedComment() {
			return (
				this.LockedCommentFlag &&
				this.postDataOptions.data.moderation &&
				this.postDataOptions.data.moderation.lock
			);
		},
		SpammedComment() {
			return (
				this.SpammedCommentFlag &&
				this.postDataOptions.data.moderation != null &&
				this.postDataOptions.data.moderation.spam != null &&
				this.postDataOptions.data.moderation.spam.spammedBy != null
			);
		},
		RemovedComment() {
			return (
				this.RemovedCommentFlag &&
				this.postDataOptions.data.moderation != null &&
				this.postDataOptions.data.moderation.remove != null &&
				this.postDataOptions.data.moderation.remove.removedBy != null
			);
		},
		ApprovedComment() {
			return (
				this.ApprovedCommentFlag &&
				this.postDataOptions.data.moderation != null &&
				this.postDataOptions.data.moderation.approve != null &&
				this.postDataOptions.data.moderation.approve.approvedBy != null
			);
		},
		nsfwPost() {
			return this.nsfwFlag && this.postDataOptions.data.nsfw;
		},
		spoilerPost() {
			return this.spoilerFlag && this.postDataOptions.data.spoiler;
		},
	},
	emits: [
		'insightsToggle',
		'expandPost',
		'collapsePost',
		'hidePost',
		'deletePost',
		'savePost',
		'sharePost',
		'editPost',
	],
	methods: {
		insightsPostToggle() {
			this.$emit('insightsToggle');
		},
		deletePost() {
			this.$emit('deletePost');
		},
		hidePost() {
			// this.$emit('hidePost');
		},
		sharePost() {
			//console.log('share');
			this.$emit('sharePost');
			this.showShareOptions = !this.showShareOptions;
		},
		async savePost() {
			this.saved = !this.saved;
			if (!this.postDataOptions.data.saved) {
				try {
					await this.$store.dispatch('userposts/savePostOrComment', {
						baseurl: this.$baseurl,
						savePostOrCommentData: {
							id: this.postDataOptions.id,
							type: 'post',
						},
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				try {
					await this.$store.dispatch('userposts/unSavePostOrComment', {
						baseurl: this.$baseurl,
						savePostOrCommentData: {
							id: this.postDataOptions.id,
							type: 'post',
						},
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
		editPost() {
			//console.log('edit');
			this.$emit('editPost');
		},
		openOptionsBoxList() {
			this.showOptionsBoxList = !this.showOptionsBoxList;
		},
		expandPostContent() {
			this.showPostContent = true;
			this.$emit('expandPost');
		},
		collapsePostContent() {
			this.showPostContent = false;
			this.$emit('collapsePost');
		},
		async approvePost(id) {
			//console.log('approve');
			let approveSatus = -1;
			if (!ApprovedComment) {
				try {
					approveSatus = await this.$store.dispatch(
						'userposts/approvePostOrComment',
						{
							baseurl: this.$baseurl,
							ApprovePostOrCommentData: {
								id: id,
								type: 'post',
								username: this.$route.params.userName,
							},
							page: this.page,
						}
					);
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
				if (approveSatus == 200) {
					this.$emit('emitPopup', id, 'approved post successfully');
					this.ApprovedCommentFlag = true;
				} else {
					this.$emit('emitPopup', id, 'failed to approve post');
					this.ApprovedCommentFlag = false;
				}
			}
		},
		async removePost(id) {
			//console.log('remove');
			let approveSatus = -1;
			if (!RemovedComment) {
				try {
					approveSatus = await this.$store.dispatch(
						'userposts/removePostOrComment',
						{
							baseurl: this.$baseurl,
							removePostOrCommentData: {
								id: id,
								type: 'post',
								username: this.$route.params.userName,
							},
							page: this.page,
						}
					);
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
				if (approveSatus == 200) {
					this.$emit('emitPopup', id, 'removed post successfully');
					this.RemovedCommentFlag = true;
				} else {
					this.$emit('emitPopup', id, 'failed to remove post');
					this.RemovedCommentFlag = false;
				}
			}
		},
		async markUnMarkAsNSFW(id) {
			let type = 'unMark';
			if (!this.postDataOptions.data.nsfw) {
				type = 'mark';
			}
			try {
				await this.$store.dispatch('userposts/markPostAsNSFW', {
					baseurl: this.$baseurl,
					nsfwData: {
						id: id,
						type: `${type}`, // mark UnMark
					},
					page: this.page,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async markUnMarkAsSpoiler(id) {
			// //console.log('MarkUnMArk', this.nsfwCheckBox);
			let type = 'unMark';
			if (!this.postDataOptions.data.spoiler) {
				type = 'mark';
			}
			try {
				await this.$store.dispatch('userposts/markUnMarkPostAsSpoiler', {
					baseurl: this.$baseurl,
					spoilerData: {
						id: id,
						type: `${type}`, // mark UnMark
					},
					page: this.page,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async markUnMarkSendMeReply(id) {
			// //console.log('MarkUnMArk', this.nsfwCheckBox);
			let state = false;
			if (!this.postDataOptions.data.sendReplies) {
				state = true;
			}
			try {
				await this.$store.dispatch('userposts/markUnMarkSendMeReply', {
					baseurl: this.$baseurl,
					sendReplyData: {
						id: id,
						type: `post`, // mark UnMark
						state,
					},
					page: this.page,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		safetyClicked() {
			this.showSafetyOptions = !this.showSafetyOptions;
		},
		async lockUnLockComments(id) {
			//console.log('lock un lock clicked');
			let approveSatus = -1;
			let key = 'unlock';
			if (
				!this.postDataOptions.data.moderation ||
				!this.postDataOptions.data.moderation.lock
			) {
				key = 'lock';
			}
			//console.log('main', key);
			try {
				approveSatus = await this.$store.dispatch(
					'userposts/lockUnLockPostOrComment',
					{
						baseurl: this.$baseurl,
						lockUnlockData: {
							id: id,
							type: `post`, // mark UnMark
						},
						key: `${key}`,
						page: this.page,
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (key == 'lock') {
				if (approveSatus == 200) {
					this.$emit('emitPopup', id, 'post locked successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to lock post');
				}
			} else if (approveSatus == 200) {
				this.$emit('emitPopup', id, 'post unlocked successfully');
			} else {
				this.$emit('emitPopup', id, 'failed to unlock post');
			}
		},
		async pinPostToProfile(id) {
			let key = false;
			if (!this.postDataOptions.data.pin) {
				key = true;
			}
			//console.log('pin un pin clicked', key);
			try {
				await this.$store.dispatch('userposts/pinUnpinPost', {
					baseurl: this.$baseurl,
					pinUnpinData: {
						id: id,
						pin: key, // mark UnMark
					},
					page: this.page,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async hideUnhidePost(id) {
			let approveSatus = -1;
			let key = 'hide';
			if (this.page == 'hidden') key = 'unhide';
			this.postHiddenFlag = !this.postHiddenFlag;
			this.$emit('hidePost');
			//console.log('hide un hide clicked', key);
			try {
				approveSatus = await this.$store.dispatch('userposts/hideUnhidePost', {
					baseurl: this.$baseurl,
					hideUnhideData: {
						id: id,
						key: key, // mark UnMark
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (key == 'unhide') {
				if (approveSatus == 200) {
					this.$emit('emitPopup', id, 'post hidden successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to hide post');
				}
			} else if (approveSatus == 200) {
				this.$emit('emitPopup', id, 'post unhide successfully');
			} else {
				this.$emit('emitPopup', id, 'failed to unhide post');
			}
		},
		async spamPost(id) {
			let approveSatus = -1;
			if (!this.SpammedComment) {
				try {
					approveSatus = await this.$store.dispatch('userposts/markSpam', {
						baseurl: this.$baseurl,
						markSpamData: {
							id: id,
							type: 'post',
							reason: '',
						},
						username: this.$route.params.userName,
						page: this.page,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
				if (approveSatus == 200) {
					this.$emit('emitPopup', id, 'Spammed post successfully');
					this.SpammedCommentFlag = true;
				} else {
					this.$emit('emitPopup', id, 'failed to Spam post');
					this.SpammedCommentFlag = false;
				}
			}
		},
		async upvote() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			if (this.downClicked) {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
				try {
					await this.$store.dispatch('postCommentActions/vote', {
						baseurl: this.$baseurl,
						id: this.postDataOptions.id,
						type: 'post',
						direction: 1,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				this.upClicked = false;
				this.counter--;
			}
		},
		async downvote() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
			if (this.downClicked == false) {
				this.downClicked = true;
				this.counter--;
				try {
					await this.$store.dispatch('postCommentActions/vote', {
						baseurl: this.$baseurl,
						id: this.postDataOptions.id,
						type: 'post',
						direction: -1,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				this.downClicked = false;
				this.counter++;
			}
		},
		getAbbreviationsOfNumber(num) {
			var abbreviate = require('number-abbreviate');
			//console.log(num);
			return abbreviate(num, 2); // => 1k
		},
	},
};
</script>

<style scoped>
span {
	display: inline-block;
}
p,
ul,
li,
a {
	margin: 0;
	padding: 0;
}
ul.post-list li,
ul.post-list li a {
	color: inherit;
	list-style: none;
	text-decoration: none;
	height: 36px;
	min-width: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
}
ul.post-list li.post-option-item,
.post-option-item-hover {
	/* padding: 8px; */
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}

ul.post-list li.post-option-item .post-options-text,
.post-option-item-hover .post-options-text {
	margin-left: 6px;
}
@media (max-width: 800px) {
	.post-options-text {
		display: none;
	}
}
ul.post-list li.post-option-item p,
.post-option-item-hover p {
	font-size: 12px;
}
ul.post-list li.post-option-item-hover2:hover,
.post-option-item-hover:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
li.post-option-item-unhover {
	background-color: unset;
}
.post-options-icon {
	font-size: 20px;
}
.post-options {
	margin-top: 8px;
}
ul.post-list {
	display: flex;
	flex-wrap: wrap;
}
ul.post-list li.post-option-item {
	display: flex;
}
.three-dot-icon-box {
	position: relative;
	display: flex;
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}
.three-dot-icon-box:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
.options-box-list {
	position: absolute;
	top: 35px;
	left: 0px;
	z-index: 15;
	border: 1px solid #edeff1;
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
	color: #1c1c1c;
	overflow: hidden;
	background-color: #ffffff;
}
.options-box-list ul {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
}
.options-box-list i input[type='checkbox'] {
	width: 14px !important;
	height: 14px !important;
	display: flex !important;
}
.options-box-list .options-box-text label {
	position: relative;
	bottom: -0.4px;
}
.options-box-list ul li.options-box-item {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	text-transform: capitalize;
	white-space: nowrap;
	color: #878a8c;
	cursor: pointer;
	padding: 8px 16px 8px 8px;
	text-align: left;
	width: 100%;
}
.options-box-list ul li.options-box-item:not(:first-child) {
	border-top: 1px solid #edeff1;
}
.options-box-list ul li.options-box-item:hover {
	color: #1c1c1c;
	background-color: #e9f5fd;
}
.options-box-list ul li.options-box-item .options-box-icon {
	margin-right: 10px;
	font-size: 14px;
	display: flex;
}
/* end-post-options */
.post-link-href a {
	color: #ffffff;
}
a.post-link-href:hover {
	color: unset;
}

@media (min-width: 640px) {
	li.bottom-vote-box {
		display: none !important;
	}
}
.vote-box {
	width: 40px;
	display: flex;
	/* align-items: center; */
	justify-content: flex-start;
	background-color: #ccc;
	/* background-color: rgba(255, 255, 255, 0.8); */
	background-color: var(--color-grey-light-2);
	padding: 8px 0px 8px 0px;

	/* opacity: 0.4; */
}

.post-card div.vote-box {
	/* background-color: var(--color-grey-light-2); */
	text-align: center;
	border-radius: 0px 0px 0px 0px !important;
	background-color: var(--color-grey-light-2);
	/* width: 40px; */
	/* padding-top: 10px; */
}
div.vote-box {
	border-radius: 0px 0px 0px 0px !important;
}

.vote-box .downvote svg,
.vote-box .upvote svg {
	width: 22px;
	height: 22px;
	fill: var(--color-grey-dark-2);
}
.downvote .icon-shift {
	transform: rotate(180deg);
}
.post-services .vote-services {
	display: none;
}
.vote-box .downvote:hover svg,
.vote-box .upvote:hover svg,
.vote-box .upvote svg.up-clicked,
.vote-box .downvote svg.down-clicked,
.post-services .downvote:hover svg,
.post-services .upvote:hover svg,
.post-services .upvote svg.up-clicked,
.post-services .downvote svg.down-clicked {
	background-color: var(--color-grey-light-4);
}
.vote-box .downvote:hover svg {
	fill: var(--color-blue);
}
.vote-box .upvote:hover svg {
	fill: var(--color-orange);
}
.vote-box svg.up-clicked {
	fill: var(--color-orange);
}
.vote-box .vote-count {
	color: black;
	font-weight: 700;
}
.vote-box .vote-count.up-clicked {
	color: var(--color-orange);
}

.vote-box svg.down-clicked {
	fill: var(--color-blue);
}

.vote-box .vote-count.down-clicked {
	color: var(--color-blue);
}
@media (max-width: 640px) {
	#expand-post-option-in-options,
	#approve-user-post-button,
	#insights-user-post-button,
	#spam-user-post-button,
	#remove-user-post-button,
	#shield-user-post-button {
		display: none !important;
	}
	#share-post-options {
		width: 20px;
	}
}
.m-left-8 {
	margin-left: 8px;
}
</style> -->
