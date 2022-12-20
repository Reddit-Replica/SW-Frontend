<template>
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
				v-if="postData.data.kind == 'link'"
				id="post-options-postData-data-kind-link"
				class="post-options-icon"
			>
				<a class="post-link-href" :href="postData.data.link" target="_blank">
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
					postData.data.subreddit != null
						? `/r/${postData.data.subreddit}/comments/${postData.id}/${postData.data.title}`
						: `/user/${postData.data.postedBy}/comments/${postData.id}/${postData.data.title}`
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
					<p>
						{{ postData.data.comments }}{{ !pinnedPostFlag ? ' comments' : '' }}
					</p>
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
					<li v-if="0" @click="CopyPostLink" class="options-box-item">
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
			v-if="
				(!pinnedPostFlag && postData.data.inYourSubreddit) ||
				(postedByAuthUser && !pinnedPostFlag)
			"
			id="approve-user-post-button"
			@click="approvePost(postData.id)"
			:style="[ApprovedPostFlag ? 'color: #46d160' : '']"
			class="post-option-item"
			:class="[
				ApprovedPostFlag
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
			v-if="
				(!postData.data.inYourSubreddit && !pinnedPostFlag) ||
				(!postedByAuthUser && !pinnedPostFlag)
			"
			id="savepost-ann-user-user-post-button"
			@click="savePost(postData.id)"
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
			v-if="
				(!postData.data.inYourSubreddit && !pinnedPostFlag) ||
				(!postedByAuthUser && !pinnedPostFlag)
			"
			id="savepost-ann-user-user-post-button"
			@click="hideUnhidePost(postData.id)"
			class="post-option-item post-option-item-hover2"
		>
			<div class="post-options-icon">
				<i
					style="color: rgba(135, 138, 140); font-size: 20px"
					:style="[postHiddenFlag ? 'color:#0079d3' : '']"
					class="fa-regular fa-eye-slash"
				></i>
			</div>
			<div
				style="font-size: 12px"
				:style="[postHiddenFlag ? 'color:#0079d3' : '']"
				class="post-options-text"
			>
				{{ postHiddenFlag ? 'unhide' : 'hide' }}
			</div>
		</li>

		<li
			v-if="
				(!pinnedPostFlag && postData.data.inYourSubreddit) ||
				(postedByAuthUser && !pinnedPostFlag)
			"
			id="remove-user-post-button"
			@click="removePost(postData.id)"
			:style="[
				RemovedPostFlag ? 'color: #ff585b' : 'color: rgba(135, 138, 140)',
			]"
			class="post-option-item"
			:class="[RemovedPostFlag ? '' : 'post-option-item-hover2']"
		>
			<div class="post-options-icon">
				<i style="color: inherit" class="fa-solid fa-ban"></i>
			</div>
			<div class="post-options-text">
				<p>Remove</p>
			</div>
		</li>
		<li
			v-if="
				(!pinnedPostFlag && postData.data.inYourSubreddit) ||
				(postedByAuthUser && !pinnedPostFlag)
			"
			id="spam-user-post-button"
			@click="spamPost(postData.id)"
			:style="[
				SpammedPostFlag ? 'color: #ff585b' : 'color: rgba(135, 138, 140)',
			]"
			class="post-option-item"
			:class="[SpammedPostFlag ? '' : 'post-option-item-hover2']"
		>
			<div class="post-options-icon">
				<i class="fa-regular fa-calendar-xmark"></i>
			</div>
			<div class="post-options-text">
				<p>Spam</p>
			</div>
		</li>
		<li
			v-if="
				(!pinnedPostFlag && postData.data.inYourSubreddit) ||
				(postedByAuthUser && !pinnedPostFlag)
			"
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
				(postData.data.inYourSubreddit && !postKind && !pinnedPostFlag) ||
				(postedByAuthUser && !pinnedPostFlag && !postKind)
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
			<div
				v-if="showSafetyOptions"
				id="show-Safety-Options-options-box-list"
				class="options-box-list"
			>
				<ul>
					<li
						v-if="page == 'subreddit'"
						@click="stickyPost(postData.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									:checked="LockedPostFlag"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-oc">Sticky Post</label>
						</div>
					</li>
					<li
						v-if="page == 'subreddit'"
						@click="distinguishAsMod(postData.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									:checked="LockedPostFlag"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-oc">DistinguishAsMod</label>
						</div>
					</li>
					<li @click="lockUnLockComments(postData.id)" class="options-box-item">
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									:checked="LockedPostFlag"
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
			id="post-option-item2-open-Options-BoxList"
			style="position: relative"
			@click="openOptionsBoxList"
		>
			<div
				class="post-options-icon three-dot-icon-box"
				id="post-options-icon-post-data-three-dot-icon-box"
				v-if="
					postData.data.inYourSubreddit || pinnedPostFlag || postedByAuthUser
				"
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
					(showOptionsBoxList && postData.data.inYourSubreddit) ||
					(pinnedPostFlag && showOptionsBoxList) ||
					(postedByAuthUser && showOptionsBoxList)
				"
				class="options-box-list"
			>
				<ul>
					<li
						v-if="postData.data.inYourSubreddit || postedByAuthUser"
						@click="editPost"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i style="color: rgba(135, 138, 140)" class="fa-solid fa-pen"></i>
						</div>
						<div class="options-box-text">Edit Post</div>
					</li>
					<li
						id="saved-user-options-icon"
						@click="savePost"
						class="options-box-item"
					>
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
						v-if="postData.data.inYourSubreddit || postedByAuthUser"
						id="options-box-icon-pin-to-profile"
						@click="pinPostToProfile(postData.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-solid fa-thumbtack"
							></i>
						</div>
						<div class="options-box-text">
							{{ postData.data.pin || pinnedPostFlag ? 'unpin' : 'pin' }} Post
							to Profile
						</div>
					</li>
					<li
						@click="hideUnhidePost(postData.id)"
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
						v-if="postData.data.inYourSubreddit || postedByAuthUser"
						id="delete-post-options-box-item"
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
						v-if="postData.data.inYourSubreddit && 0"
						id="mark-as-oc"
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
						v-if="postData.data.inYourSubreddit || postedByAuthUser"
						@click="markUnMarkAsSpoiler(postData.id)"
						ud="mark-unmark-as-spoiler-options-box"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-spoiler"
									name="mark-as-spoiler"
									:checked="MarkSpoilerFlag ? true : false"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-spoiler">Mark As Spoiler</label>
						</div>
					</li>
					<li
						v-if="postData.data.inYourSubreddit || postedByAuthUser"
						@click="markUnMarkAsNSFW(postData.id)"
						ud="mark-unmark-as-nsfw-options-box"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-nsfw"
									name="mark-as-nsfw"
									:checked="MarknsfwFlag"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-nsfw">Mark As NSFW</label>
						</div>
					</li>
					<li
						v-if="0 && postData.data.inYourSubreddit && !pinnedPostFlag"
						@click="markUnMarkSendMeReply(postData.id)"
						id="post-options-mark-UnMark-Send-MeReply"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="send-me-notifications"
									name="send-me-notifications"
									:checked="postData.data.sendReplies"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="send-me-notifications"
								>Send Me Replay Notifications</label
							>
						</div>
					</li>
					<li
						v-if="postData.data.inYourSubreddit || postedByAuthUser"
						@click="lockUnLockComments(postData.id)"
						id="lock-unlock-comments-post-data"
						class="options-box-item"
					>
						<div class="options-box-icon" id="lock-post-comments-options">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									:checked="LockedPostFlag || postData.data.locked"
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
			counter: this.postData.data.votes,
			upClicked:
				(this.postData.data.votingType == 1 ? true : false) ||
				this.postData.data.vote == 1
					? true
					: false,
			downClicked: this.postData.data.votingType == -1 ? true : false,
			showShareOptions: false,
			showOptionsBoxList: false,
			showPostContent: false,
			spoilerCheckBox: false,
			nsfwCheckBox: false,
			showSafetyOptions: false,
			saved: this.postData.data.saved,
			postHiddenFlag: this.page == 'hidden' || this.postData.data.hidden,

			LockedPostFlag:
				this.postData.data.moderation != null &&
				this.postData.data.moderation.lock,
			SpammedPostFlag:
				this.postData.data.moderation != null &&
				this.postData.data.moderation.spam != null &&
				this.postData.data.moderation.spam.spammedBy != null,
			RemovedPostFlag:
				this.postData.data.moderation != null &&
				this.postData.data.moderation.remove != null &&
				this.postData.data.moderation.remove.removedBy != null,
			ApprovedPostFlag:
				this.postData.data.moderation != null &&
				this.postData.data.moderation.approve != null &&
				this.postData.data.moderation.approve.approvedBy != null,
			MarknsfwFlag: this.postData.data.nsfw != null && this.postData.data.nsfw,
			MarkSpoilerFlag:
				this.postData.data.spoiler != null && this.postData.data.spoiler,
		};
	},
	props: {
		// @vuese
		// postData the full post Data
		postData: {
			type: Object,
			required: true,
		},
		// @vuese
		// to know if the type of the post use this component is pinned post
		pinnedPostFlag: {
			type: Boolean,
			required: false,
		},
		// @vuese
		// in which page this component
		page: {
			type: String,
			required: true,
		},
		// @vuese
		// the kind of the post
		postKind: {
			type: String,
			required: true,
		},
		// @vuese
		// the state authenticated or not
		state: {
			type: String,
			required: true,
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
		'emitPopup',
	],
	async mounted() {
		// await this.updatd();
	},
	computed: {
		postedByAuthUser() {
			if (localStorage.getItem('userName') == this.postData.data.postedBy)
				return 1;
			else return 0;
		},
		// async updatd() {
		// 	this.LockedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.lock;
		// 	this.SpammedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.spam != null &&
		// 		this.postData.data.moderation.spam.spammedBy != null;
		// 	this.RemovedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.remove != null &&
		// 		this.postData.data.moderation.remove.removedBy != null;
		// 	this.ApprovedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.approve != null &&
		// 		this.postData.data.moderation.approve.approvedBy != null;
		// 	this.MarknsfwFlag =
		// 		this.postData.data.nsfw != null && this.postData.data.nsfw;
		// 	this.MarkSpoilerFlag =
		// 		this.postData.data.spoiler != null && this.postData.data.spoiler;
		// },
	},
	methods: {
		// async updatd() {
		// 	this.LockedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.lock;
		// 	this.SpammedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.spam != null &&
		// 		this.postData.data.moderation.spam.spammedBy != null;
		// 	this.RemovedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.remove != null &&
		// 		this.postData.data.moderation.remove.removedBy != null;
		// 	this.ApprovedPostFlag =
		// 		this.postData.data.moderation != null &&
		// 		this.postData.data.moderation.approve != null &&
		// 		this.postData.data.moderation.approve.approvedBy != null;
		// 	this.MarknsfwFlag =
		// 		this.postData.data.nsfw != null && this.postData.data.nsfw;
		// 	this.MarkSpoilerFlag =
		// 		this.postData.data.spoiler != null && this.postData.data.spoiler;
		// },
		/**
		 * @vuese
		 * toggle the insights Post component
		 * @arg no arg
		 */
		insightsPostToggle() {
			this.$emit('insightsToggle');
		},
		/**
		 * @vuese
		 * triggered when click on the delete button to delete the post
		 * @arg no arg
		 */
		deletePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			this.$emit('deletePost');
		},
		/**
		 * @vuese
		 * triggered when click on the hide button to hide the post
		 * @arg no arg
		 */
		hidePost() {
			// this.$emit('hidePost');
		},
		/**
		 * @vuese
		 * triggered when click on the share button to share the post
		 * @arg no arg
		 */
		sharePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				console.log('unauth');
				return;
			}
			console.log('share');
			this.$emit('sharePost');
			this.showShareOptions = !this.showShareOptions;
		},
		/**
		 * @vuese
		 * triggered when click on the save button to save the post to the database
		 * @arg no arg
		 */
		async savePost() {
			let requestSatus = -1;
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			this.saved = !this.saved;
			if (this.saved) {
				try {
					requestSatus = await this.$store.dispatch(
						'userposts/savePostOrComment',
						{
							baseurl: this.$baseurl,
							savePostOrCommentData: {
								id: this.postData.id,
								type: 'post',
							},
						}
					);
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				try {
					requestSatus = await this.$store.dispatch(
						'userposts/unSavePostOrComment',
						{
							baseurl: this.$baseurl,
							savePostOrCommentData: {
								id: this.postData.id,
								type: 'post',
							},
						}
					);
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
			if (this.saved) {
				if (requestSatus == 200) {
					this.saved = true;
					this.$emit('emitPopup', 1, ' post saved successfully');
				} else {
					this.$emit('emitPopup', 1, 'failed to save');
				}
			} else {
				if (requestSatus == 200) {
					this.saved = false;
					this.$emit('emitPopup', 1, 'post  unsaved successfully');
				} else {
					this.$emit('emitPopup', 1, 'failed to unsaved ');
				}
			}
		},
		/**
		 * @vuese
		 * triggered when click on the edit button to edit the post
		 * @arg no arg
		 */
		editPost() {
			console.log('edit');
			// this.$emit('editPost');
			let path =
				this.postData.data.subreddit != null
					? `/r/${this.postData.data.subreddit}/comments/${this.postData.id}/${this.postData.data.title}`
					: `/user/${this.postData.data.postedBy}/comments/${this.postData.id}/${this.postData.data.title}`;
			this.$router.push({
				path: path,
				query: {
					edit: true,
				},
			});
		},
		/**
		 * @vuese
		 * triggered when click on the three dots button to show more  post		options
		 * @arg no arg
		 */
		openOptionsBoxList() {
			this.showOptionsBoxList = !this.showOptionsBoxList;
		},
		/**
		 * @vuese
		 * expand the post to show more details	 emits event
		 * @arg no arg
		 */
		expandPostContent() {
			this.showPostContent = true;
			this.$emit('expandPost');
		},
		collapsePostContent() {
			this.showPostContent = false;
			this.$emit('collapsePost');
		},
		/**
		 * @vuese
		 * collapse the post to show more details	 emits event
		 * @arg no arg
		 */
		async approvePost(id) {
			console.log('approve');
			let approveSatus = -1;
			// this.ApprovedPostFlag = true;
			if (!this.ApprovedPostFlag) {
				this.ApprovedPostFlag = true;
				this.RemovedPostFlag = false;
				this.SpammedPostFlag = false;
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
					// this.ApprovedPostFlag = true;
					this.$emit('emitPopup', id, 'approved post successfully');
				} else {
					// this.ApprovedPostFlag = false;
					this.$emit('emitPopup', id, 'failed to approve post');
				}
			}
		},
		/**
		 * @vuese
		 * triggered when click on the remove button to remove the post
		 * @arg no arg
		 */
		async removePost(id) {
			console.log('remove');
			let approveSatus = -1;
			if (!this.RemovedPostFlag) {
				this.RemovedPostFlag = true;
				console.log(this.RemovedPostFlag);
				this.ApprovedPostFlag = false;
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
					// this.RemovedPostFlag = true;
					// this.ApprovedPostFlag = false;
					this.$emit('emitPopup', id, 'removed post successfully');
				} else {
					// this.RemovedPostFlag = false;
					this.$emit('emitPopup', id, 'failed to remove post');
				}
			}
		},
		/**
		 * @vuese
		 * triggered when click on the nsfw button to mark the post as nsfw
		 * @arg no arg
		 */
		async markUnMarkAsNSFW(id) {
			let requestSatus = -1;
			let type = 'unMark';
			if (!this.MarknsfwFlag) {
				type = 'mark';
				this.MarknsfwFlag = true;
			} else {
				this.MarknsfwFlag = false;
			}
			try {
				requestSatus = await this.$store.dispatch('userposts/markPostAsNSFW', {
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
			if (this.pinnedPostFlag) this.RequestUserPinnedPostData();
			if (type == 'mark') {
				if (requestSatus == 200) {
					this.$emit('emitPopup', id, 'marked post nsfw successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to mark post as nsfw');
				}
			} else {
				if (requestSatus == 200) {
					this.$emit('emitPopup', id, 'unmarked post nsfw successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to unmark post as nsfw');
				}
			}
		},
		/**
		 * @vuese
		 * triggered when click on the spoiler button to mark the post as spoiler
		 * @arg no arg
		 */
		async markUnMarkAsSpoiler(id) {
			// console.log('MarkUnMArk', this.nsfwCheckBox);
			let requestSatus = -1;
			let type = 'unMark';
			if (!this.MarkSpoilerFlag) {
				type = 'mark';
				this.MarkSpoilerFlag = true;
			} else {
				this.MarkSpoilerFlag = false;
			}
			try {
				requestSatus = await this.$store.dispatch(
					'userposts/markUnMarkPostAsSpoiler',
					{
						baseurl: this.$baseurl,
						spoilerData: {
							id: id,
							type: `${type}`, // mark UnMark
						},
						page: this.page,
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (this.pinnedPostFlag) this.RequestUserPinnedPostData();
			if (type == 'mark') {
				if (requestSatus == 200) {
					this.$emit('emitPopup', id, 'marked post spoiler successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to mark post as spoiler');
				}
			} else {
				if (requestSatus == 200) {
					this.$emit('emitPopup', id, 'unmarked post spoiler successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to unmark post as spoiler');
				}
			}
		},
		/**
		 * @vuese
		 * triggered when click on the send me replies button to mark the post	to send replies
		 * @arg no arg
		 */
		async markUnMarkSendMeReply(id) {
			// console.log('MarkUnMArk', this.nsfwCheckBox);
			let requestSatus = -1;
			let state = false;
			if (!this.postData.data.sendReplies) {
				state = true;
			}
			try {
				requestSatus = await this.$store.dispatch(
					'userposts/markUnMarkSendMeReply',
					{
						baseurl: this.$baseurl,
						sendReplyData: {
							id: id,
							type: `post`, // mark UnMark
							state,
						},
						page: this.page,
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (state) {
				if (requestSatus == 200) {
					this.$emit('emitPopup', id, 'marked post send replies successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to mark post send replie');
				}
			} else {
				if (requestSatus == 200) {
					this.$emit('emitPopup', id, 'unmarked post send replie successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to unmark post as send replies');
				}
			}
		},
		/**
		 * @vuese
		 * triggered when click on the moderator  button to show more moderator options
		 * @arg no arg
		 */
		safetyClicked() {
			this.showSafetyOptions = !this.showSafetyOptions;
		},
		/**
		 * @vuese
		 * triggered when click on the lock button to lock unlock the post
		 * @arg no arg
		 */
		async lockUnLockComments(id) {
			console.log('lock un lock clicked');
			let approveSatus = -1;
			let key = 'unlock';

			if (!this.LockedPostFlag) {
				key = 'lock';
			}
			console.log('main', key);
			if (this.pinnedPostFlag) {
				if (this.postData.data.locked) key = 'unlock';
				else key = 'lock';
			}
			if (key == 'lock') this.LockedPostFlag = true;
			else this.LockedPostFlag = false;
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
					this.LockedPostFlag = true;
					this.$emit('emitPopup', id, 'post locked successfully');
				} else {
					this.$emit('emitPopup', id, 'failed to lock post');
					this.LockedPostFlag = false;
				}
			} else if (approveSatus == 200) {
				if (this.pinnedPostFlag) {
					this.RequestUserPinnedPostData();
				}
				this.LockedPostFlag = false;
				this.$emit('emitPopup', id, 'post unlocked successfully');
			} else {
				this.$emit('emitPopup', id, 'failed to unlock post');
				this.LockedPostFlag = false;
			}
		},
		/**
		 * @vuese
		 * triggered when click on the pinned button to pin unpin the post in the pinned posts
		 * @arg no arg
		 */
		async RequestUserPinnedPostData() {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'userposts/getUserPinnedPostData',
					{
						baseurl: this.$baseurl,
						body: {
							username: this.$route.params.userName,
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log('req', requestStatus);
			return requestStatus;
		},
		/**
		 * @vuese
		 * triggered when click on the pin button to delete the post
		 * @arg no arg
		 */
		async pinPostToProfile(id) {
			let key = false;
			if (!this.postData.data.pin) {
				key = true;
			}
			if (this.pinPostFlag) {
				key = false;
			}
			console.log('pin un pin clicked', key);
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
		/**
		 * @vuese
		 * triggered when click on the hide button to hide un hide the post
		 * @arg no arg
		 */
		async hideUnhidePost(id) {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			let approveSatus = -1;
			let key = 'hide';
			if (this.page == 'hidden') key = 'unhide';
			this.postHiddenFlag = !this.postHiddenFlag;
			this.$emit('hidePost');
			console.log('hide un hide clicked', key);
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
		/**
		 * @vuese
		 * triggered when click on the spam button to spam the post
		 * @arg no arg
		 */
		async spamPost(id) {
			let approveSatus = -1;
			if (!this.SpammedPostFlag) {
				this.SpammedPostFlag = true;
				this.ApprovedPostFlag = false;
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
					// this.SpammedPostFlag = true;
					this.$emit('emitPopup', id, 'Spammed post successfully');
				} else {
					// this.SpammedPostFlag = false;
					this.$emit('emitPopup', id, 'failed to Spam post');
				}
			}
		},
		/**
		 * @vuese
		 * triggered when click on the upvote button to upvote the post
		 * @arg no arg
		 */
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
						id: this.postData.id,
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
		/**
		 * @vuese
		 * triggered when click on the down button to down the post
		 * @arg no arg
		 */
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
						id: this.postData.id,
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
		/**
		 * @vuese
		 * convert numbers to its abbreviations in K or M..
		 * @arg no arg
		 */
		getAbbreviationsOfNumber(num) {
			var abbreviate = require('number-abbreviate');
			console.log(num);
			return abbreviate(num, 2); // => 1k
		},
	},
	watch: {
		postData() {
			this.LockedPostFlag =
				this.postData.data.moderation != null &&
				this.postData.data.moderation.lock;
			this.SpammedPostFlag =
				this.postData.data.moderation != null &&
				this.postData.data.moderation.spam != null &&
				this.postData.data.moderation.spam.spammedBy != null;
			this.RemovedPostFlag =
				this.postData.data.moderation != null &&
				this.postData.data.moderation.remove != null &&
				this.postData.data.moderation.remove.removedBy != null;
			this.ApprovedPostFlag =
				this.postData.data.moderation != null &&
				this.postData.data.moderation.approve != null &&
				this.postData.data.moderation.approve.approvedBy != null;
			this.MarknsfwFlag =
				this.postData.data.nsfw != null && this.postData.data.nsfw;
			this.MarkSpoilerFlag =
				this.postData.data.spoiler != null && this.postData.data.spoiler;
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
</style>
