<template>
	<div
		v-if="!DeletedComment"
		class="comment-body"
		id="comment-content-comment-body"
		:class="[commentType ? '' : 'comment-body-hover']"
	>
		<div
			class="comment-body-container"
			id="comment-content-comment-body-container"
			:style="[
				commentType && 1
					? 'padding: 0px 0px 0px 8px;'
					: 'padding: 10px 0 8px 8px;',
			]"
		>
			<div class="comment-box" id="comment-content-comment-box">
				<div
					class="nested-comment-order"
					:class="[commentType ? 'nested-comment-order-ov' : '']"
				>
					<div v-for="i in commentContent.level" :key="i"></div>
					<!-- <div></div> -->
				</div>
				<div
					id="comment-content-comment-body-content"
					class="comment-content"
					:class="[
						RemovedComment || SpammedComment
							? 'comment-content-removed'
							: commentType
							? 'comment-overview-content'
							: '',
					]"
				>
					<div
						class="comment-body-title"
						id="comment-content-comment-body-title"
					>
						<router-link :to="'/user/' + $route.params.userName">
							{{ $route.params.userName }}</router-link
						>
						<span class="comment-op">op</span>
						<p>{{ commentContent.points }} point</p>
						<router-link class="comment-date" to="">{{
							getMoment(commentContent.publishTime)
						}}</router-link>
						<moderation-title
							v-if="commentContent.moderation != null"
							:moderation="moderation"
							:pinned-post="false"
						></moderation-title>
					</div>
					<div
						class="comment-content-data"
						v-html="PostHybridContent"
						id="comment-content-comment-body-content-hybrid"
					></div>
					<!-- <p>{{ PostHybridContent }} fdkjbfjhg skjdfnskd sjdnfksjd</p> -->
					<div
						class="comment-options"
						id="comment-content-comment-body-comment-options"
					>
						<ul>
							<li
								@click="ReplyCommentHandler"
								class="underline"
								id="comment-content-comment-reply-comment"
							>
								Replay
							</li>
							<li class="underline">Share</li>
							<li
								id="comment-content-open-Options-BoxList"
								class="post-option-item2"
								style="position: relative"
								@click="openOptionsBoxList"
							>
								<div
									class="post-options-icon three-dot-icon-box"
									id="open-options-boxList-three-dot-icon-box"
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
									v-if="showOptionsBoxList"
									class="options-box-list"
									id="comment-content-options-box-list"
								>
									<ul>
										<li v-if="0" @click="editPost" class="options-box-item">
											<div class="options-box-icon">
												<i
													style="color: rgba(135, 138, 140)"
													class="fa-solid fa-pen"
												></i>
											</div>
											<div class="options-box-text">Edit Post</div>
										</li>
										<li
											id="comment-content-save-comment"
											@click="saveComment"
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
											<div class="options-box-text">
												{{ !saved ? 'Save' : 'Unsaved' }}
											</div>
										</li>
										<li
											v-if="commentContent.inYourSubreddit"
											id="comment-content-save-comment-delete-Post"
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
									</ul>
								</div>
							</li>
						</ul>
						<div v-if="commentContent.inYourSubreddit" class="post-options">
							<ul
								class="comment-moderator-options"
								id="comment-moderator-options"
							>
								<li
									v-if="!ApprovedComment"
									@click="approveComment"
									:style="['aa' == '' ? 'color: #46d160' : '']"
									class="post-option-item"
									id="comment-moderator-options-approved-comment"
								>
									<div class="post-options-icon">
										<i class="fa-solid fa-check"></i>
									</div>
									<div id="approve-text-comment" class="post-options-text">
										Approve
									</div>
								</li>
								<li
									id="comment-moderator-options-remove-comment"
									v-if="!RemovedComment"
									@click="removeComment"
									:style="[
										'aa' == ''
											? 'color: #ff585b'
											: 'color: rgba(135, 138, 140)',
									]"
									class="post-option-item"
								>
									<div class="post-options-icon">
										<i style="color: inherit" class="fa-solid fa-ban"></i>
									</div>
									<div id="remove-text-comment" class="post-options-text">
										<p>Remove</p>
									</div>
								</li>
								<li
									id="comment-moderator-options-spam-comment"
									v-if="!RemovedComment"
									@click="spamComment"
									:style="[
										'aa' == ''
											? 'color: #ff585b'
											: 'color: rgba(135, 138, 140)',
									]"
									class="post-option-item"
								>
									<div class="post-options-icon">
										<i class="fa-regular fa-calendar-xmark"></i>
									</div>
									<div id="spam-text-comment" class="post-options-text">
										<p>Spam</p>
									</div>
								</li>
								<li
									id="comment-moderator-options-lock-unlock-comment"
									@click="lockUnLockComment"
									:style="[
										'aa' == ''
											? 'color: #ff585b'
											: 'color: rgba(135, 138, 140)',
									]"
									class="post-option-item"
								>
									<div class="post-options-icon">
										<i class="fa-solid fa-lock"></i>
									</div>
									<div id="lock-text-comment" class="post-options-text">
										<p>{{ LockedComment ? 'unlock' : 'Lock' }}</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import * as moment from 'moment';
import ModerationTitle from '../PostComponents/ModerationTitle.vue';
export default {
	components: {
		ModerationTitle,
	},
	props: {
		commentContent: {
			type: Object,
			required: true,
		},
		commentType: {
			type: String,
			required: true,
		},
		postId: {
			type: String,
			required: true,
		},
		postTitle: {
			type: String,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			showOptionsBoxList: false,
			PostHybridContent: '',
			DeletedComment: false,
			ApprovedCommentFlag: true,
			RemovedCommentFlag: true,
			SpammedCommentFlag: true,
			LockedCommentFlag: true,
			removedBy: '',
			spammedBy: '',
			approvedBy: '',
			moderation: this.commentContent.moderation,
			saved: this.commentContent.saved,
		};
	},
	computed: {
		LockedComment() {
			return this.LockedCommentFlag && this.moderation && this.moderation.lock;
		},
		SpammedComment() {
			return (
				this.SpammedCommentFlag &&
				this.moderation != null &&
				this.moderation.spam != null &&
				this.moderation.spam.spammedBy != null
			);
		},
		RemovedComment() {
			return (
				this.RemovedCommentFlag &&
				this.moderation != null &&
				this.moderation.remove != null &&
				this.moderation.remove.removedBy != null
			);
		},
		ApprovedComment() {
			return (
				this.ApprovedCommentFlag &&
				this.moderation != null &&
				this.moderation.approve != null &&
				this.moderation.approve.approvedBy != null
			);
		},
	},
	mounted() {
		this.setPostHybridContent();
	},
	methods: {
		editPost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
		},
		ReplyCommentHandler() {
			console.log('reply clicked', this.postId);
			if (!this.commentContent.subreddit) {
				this.$router.push(
					`/user/${this.$route.params.userName}/comments/${this.postId}/comment/${this.commentContent.commentId}`
				);
			} else {
				this.$router.push(
					`/r/${this.commentContent.subreddit}/comments/${this.postId}/comment/${this.commentContent.commentId}`
				);
			}
		},
		openOptionsBoxList() {
			this.showOptionsBoxList = !this.showOptionsBoxList;
		},
		getMoment(date) {
			return moment(date).fromNow();
		},
		setPostHybridContent() {
			// if (this.postData.data.kind == 'hybrid') {
			if (this.commentContent.commentBody) {
				let QuillDeltaToHtmlConverter =
					require('quill-delta-to-html').QuillDeltaToHtmlConverter;
				console.log('comment body', this.commentContent.commentBody);

				let deltaOps = this.commentContent.commentBody.ops;

				let cfg = {};
				let converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);
				console.log('converter', converter.convert());
				this.PostHybridContent = converter.convert();
			}
			// }
		},
		deletePost() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			this.DeletedComment = true;
			this.RequestDeleteComment();
		},
		async RequestDeleteComment() {
			let responseStatus;
			try {
				responseStatus = await this.$store.dispatch('comments/deleteComment', {
					baseurl: this.$baseurl,
					id: this.commentContent.commentId,
					type: 'comment',
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			return responseStatus;
		},
		saveComment() {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			if (!this.saved) this.RequestSaveComment();
			else this.RequestUnsaveComment();
		},
		async RequestSaveComment() {
			this.saved = true;
			let responseStatus;
			try {
				responseStatus = await this.$store.dispatch(
					'userposts/savePostOrComment',
					{
						baseurl: this.$baseurl,
						savePostOrCommentData: {
							id: this.commentContent.commentId,
							type: 'comment',
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			// return responseStatus;
			if (responseStatus != 200) {
				this.saved = false;
			}
		},
		async RequestUnsaveComment() {
			let responseStatus;
			this.saved = false;
			try {
				responseStatus = await this.$store.dispatch(
					'userposts/unSavePostOrComment',
					{
						baseurl: this.$baseurl,
						savePostOrCommentData: {
							id: this.commentContent.commentId,
							type: 'comment',
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			// return responseStatus;
			if (responseStatus != 200) {
				this.saved = true;
			}
		},
		async approveComment() {
			this.moderation = this.moderation || {};
			this.moderation.approve = this.moderation.approve || {};
			this.moderation.approve.approvedBy = this.$route.params.userName;
			this.moderation.approve.approvedDate = 'now';
			let responseStatus;
			if (this.moderation.remove) {
				delete this.moderation.remove;
			}
			if (this.moderation.spam) {
				delete this.moderation.spam;
			}
			try {
				responseStatus = await this.$store.dispatch(
					'userposts/approvePostOrComment',
					{
						baseurl: this.$baseurl,
						ApprovePostOrCommentData: {
							id: this.commentContent.commentId,
							type: 'comment',
							username: this.$route.params.userName,
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (responseStatus != 200) {
				delete this.moderation.approve;
			}
		},
		async removeComment() {
			this.moderation = this.moderation || {};
			this.moderation.remove = this.moderation.remove || {};
			this.moderation.remove.removedBy = this.$route.params.userName;
			this.moderation.remove.removedDate = 'now';
			let responseStatus;
			if (this.moderation.approve) {
				delete this.moderation.approve;
			}
			console.log('removeComment');
			try {
				responseStatus = await this.$store.dispatch(
					'userposts/removePostOrComment',
					{
						baseurl: this.$baseurl,
						removePostOrCommentData: {
							id: this.commentContent.commentId,
							type: 'comment',
							username: this.$route.params.userName,
						},
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (responseStatus != 200) {
				delete this.moderation.remove;
			}
		},
		async spamComment() {
			this.moderation = this.moderation || {};
			this.moderation.spam = this.moderation.spam || {};
			this.moderation.spam.spammedBy = this.$route.params.userName;
			this.moderation.spam.spammedDate = 'now';
			let responseStatus;
			if (this.moderation.approve) {
				delete this.moderation.approve;
			}
			try {
				responseStatus = await this.$store.dispatch('userposts/markSpam', {
					baseurl: this.$baseurl,
					markSpamData: {
						id: this.commentContent.commentId,
						type: 'comment',
						reason: '',
					},
					username: this.$route.params.userName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (responseStatus != 200) {
				delete this.moderation.spam;
			}
		},
		async lockUnLockComment() {
			console.log('lock un lock clicked');
			let key = 'lock';
			if (this.moderation.lock) {
				key = 'unlock';
			}
			this.moderation.lock = !this.moderation.lock;
			// if (1) {
			// 	key = 'lock';
			// }
			console.log('main', key);
			try {
				await this.$store.dispatch('userposts/lockUnLockPostOrComment', {
					baseurl: this.$baseurl,
					lockUnlockData: {
						id: this.commentContent.commentId,
						type: `comment`, // mark UnMark
					},
					key: `${key}`,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>
<style scoped>
P,
a,
ul,
li {
	padding: 0;
	margin: 0;
}
.comment-container {
	width: 100%;
	background-color: #ffffff;
}
.comment-container header {
	border: thin solid #edeff1;
	/* border-width: 1px 1px 0; */
	margin-bottom: 0;
	margin-top: 4px;
	padding: 1px 1px 2px;
}
.comment-container header:hover {
	border: thin solid #898989 !important;
}
.comment-container header .content {
	padding: 8px 8px;
	display: flex;
	align-items: center;
	width: 100%;
}
.comment-icon {
	display: inline-block;
	font-size: 20px;
	margin-right: 8px;
}
.title-container {
	display: flex;
	align-items: center;
	line-height: 16px;
	font-size: 12px;
	flex-wrap: wrap;
}
.post-status span {
	border: 1px solid #a4a7a8;
	color: #a4a7a8;
	display: inline-block;
	height: 16px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	border-radius: 2px;
	margin-right: 5px;
	line-height: 14px;
	padding: 0 4px;
}
.title-container .user-comment-name a {
	color: #0079d3;
	margin-right: 4px;
}
.title-container .user-comment-name a:hover {
	text-decoration: underline;
}
.post-status {
	display: flex;
	align-items: center;
	margin-left: 5px;
}
.posted-by {
	display: flex;
	align-items: center;
	margin-left: 5px;
	color: inherit;
}
.posted-by a {
	color: inherit;
}
.posted-by a:hover {
	text-decoration: underline;
}
.subreddit-name a {
	color: #1c1c1c;
	font-weight: 700;
	/* font-weight: bold; */
}

.subreddit-name a:hover {
	text-decoration: underline;
}
span.post-nsfw {
	border: 1px solid rgb(255, 88, 91) !important;
	color: rgb(255, 88, 91) !important;
}
span.post-oc {
	border: 1px solid rgb(0, 121, 211) !important;
	background-color: rgb(0, 121, 211) !important;
	color: rgb(255, 255, 255) !important;
	/* text-align: center; */
}
.flair-box {
	border-radius: 20px;
	padding: 2px 8px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	display: inline-block;
	margin-right: 5px;
	overflow: hidden;
	/* background-color: rgb(100, 109, 115);
	color: rgb(255, 255, 255); */
	width: fit-content;
	transition: background-color 0.25s;
	/* display: flex; */
}
.flair-box:hover {
	opacity: 85%;
}

.comment-body {
	width: 100%;
}
.comment-body:hover {
	border: unset;
}
.comment-body-hover:hover {
	border: thin solid #898989;
}
.comment-body-container {
	padding: 10px 0 8px 8px;
}
.comment-box {
	display: flex;
	align-items: center;
}
.nested-comment-order {
	display: flex;
	align-self: stretch;
}
.nested-comment-order div {
	border-left: 2px dashed #edeff1;
	margin-right: 16px;
	align-self: stretch;
}
.nested-comment-order div:first-child {
	margin-left: 8px;
}
.nested-comment-order-ov div:last-child {
	margin-top: 8px;
}
.comment-body-title {
	display: flex;
	align-items: center;
	font-size: 12px;
	color: #7c7c7c;
}
.comment-body-title a {
	color: inherit;
}
.comment-body-title a:first-child {
	color: #1c1c1c;
}
.comment-body-title a:hover {
	text-decoration: underline;
}
.comment-op {
	margin-left: 4px;
	color: #0079d3;
	text-transform: uppercase;
	font-weight: 700;
}
.comment-body-title p {
	margin-left: 4px;
}
.comment-date {
	margin-left: 4px;
}
.comment-content-data {
	padding: 2px 0;
	width: 100%;
	font-size: 14px;
	font-weight: 500;
	line-height: 21px;
	word-break: break-word;
	overflow: auto;
	/* padding-bottom: 1px;
	margin-bottom: -1px; */
}
.comment-options {
	display: flex;
	align-items: center;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	color: #878a8c;
	margin-left: -4px;
	margin-top: 8px;
}
.comment-options > ul {
	list-style: none;
	display: flex;
	cursor: pointer;
	align-items: center;
}
.comment-options > ul li {
	margin: 4px;
	transition: color 0.1s;
}
.comment-options > ul li.underline:not(:last-child):hover {
	text-decoration: underline;
	color: #1c1c1c;
}
/* .comment-options ul li:last-child:hover {
	background-color: rgba(26, 26, 27, 0.1);
} */
/* Post Options */
.post-options ul li,
.post-options ul li a {
	color: inherit;
	list-style: none;
	text-decoration: none;
	height: 36px;
	min-width: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.post-options ul li.post-option-item {
	/* padding: 8px; */
	padding: 0 8px 0 8px;
	margin-right: 4px;
	border-radius: 2px;
}
.post-options ul li.post-option-item .post-options-icon {
}
.post-options ul li.post-option-item .post-options-text {
	margin-left: 6px;
}
.post-options ul li.post-option-item p {
	font-size: 12px;
}
.post-options ul li.post-option-item:hover {
	background-color: rgba(26, 26, 27, 0.1);
}
.post-options-icon {
	font-size: 20px;
}
.post-options {
	/* margin-top: 8px; */
}
.post-options ul {
	display: flex;
	flex-wrap: wrap;
	cursor: pointer;
}
.post-options ul li.post-option-item {
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
/* End post Options */
/* tool tip  */
.post-tooltip {
	position: relative;
	display: inline-block;
	/* border-bottom: 1px dotted black; */
}

.post-tooltip .post-tooltiptext {
	visibility: hidden;
	width: 120px;
	background-color: black;
	color: #fff;
	text-align: center;
	border-radius: 6px;
	padding: 5px 0;
	position: absolute;
	z-index: 10;
	bottom: 150%;
	left: 50%;
	margin-left: -60px;
}

.post-tooltip .post-tooltiptext::after {
	content: '';
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -5px;
	border-width: 5px;
	border-style: solid;
	border-color: black transparent transparent transparent;
}

.post-tooltip:hover .post-tooltiptext {
	visibility: visible;
} /* End post Options */
.comment-overview-content {
	flex: 1;
	background-color: rgba(0, 121, 211, 0.05);
	padding: 4px 8px;
	margin-top: 8px;
	margin-right: 8px;
}
.comment-content-removed {
	flex: 1;
	background-color: rgba(255, 88, 91, 0.05);
	border: 2px solid #ff585b;
	padding: 4px 8px;
	margin-top: 8px;
	margin-right: 8px;
}
@media (max-width: 640px) {
	#approve-text-comment,
	#remove-text-comment,
	#spam-text-comment,
	#lock-text-comment {
		display: none;
	}
}
</style>
