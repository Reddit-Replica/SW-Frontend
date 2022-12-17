<template>
	<div>
		<div class="comment" v-if="!deleted">
			<div class="left">
				<div class="image">
					<router-link
						:to="{ name: 'user', params: { userName: comment.commentedBy } }"
						><img src="../../../img/user-image.jpg" alt="" id="user"
					/></router-link>
				</div>
				<div class="vertical-line"></div>
			</div>
			<div class="right">
				<div class="user-name">
					<router-link
						:to="{ name: 'user', params: { userName: comment.commentedBy } }"
						id="userName"
						>{{ comment.commentedBy }}</router-link
					>
					<span>. {{ handleTime }} </span>
				</div>
				<div class="content" v-if="!editing" v-html="renderingHTML"></div>
				<div class="services" v-if="!editing">
					<ul>
						<li :class="upClicked ? 'clicked' : ''">
							<svg
								class="icon icon-shift vote"
								v-if="!upClicked"
								@click="upClick"
								id="upvote"
							>
								<use xlink:href="../../../img/shift.svg#icon-shift"></use>
							</svg>
							<svg
								class="icon icon-arrow-up p-1 vote"
								v-else
								@click="upClick"
								id="cancel-upvote"
							>
								<use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
							</svg>
						</li>
						<li :class="upClicked ? 'up' : downClicked ? 'down' : ''">
							{{ voteCounter }}
						</li>
						<li :class="downClicked ? 'clicked' : ''">
							<svg
								class="icon icon-shift vote"
								v-if="!downClicked"
								@click="downClick"
								id="downvote"
							>
								<use xlink:href="../../../img/shift.svg#icon-shift"></use>
							</svg>
							<svg
								class="icon icon-arrow-down p-1 vote"
								v-else
								@click="downClick"
								id="cancel-downvote"
							>
								<use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
							</svg>
						</li>
						<li @click="addReply">
							<font-awesome-icon icon="fa-regular fa-message" /><span
								class="reply"
								>Reply</span
							>
						</li>
						<li>Share</li>
						<li @click="save" id="save" v-if="!saved">Save</li>
						<li @click="save" id="unsave" v-else>Unsave</li>
						<li
							@click="edit"
							id="edit"
							v-if="comment.commentedBy == getuserName"
						>
							Edit
						</li>
						<li @click="follow" id="follow" v-if="!followed">Follow</li>
						<li @click="follow" id="unfollow" v-else>UnFollow</li>
						<li
							@click="displaySubmenu"
							id="dots"
							v-if="comment.commentedBy == getuserName"
						>
							<font-awesome-icon icon="fa-solid fa-ellipsis" />
							<ul class="sub-menu" v-if="display">
								<li
									class="icon-box"
									id="sub-menu-delete"
									@click="deletingComment"
								>
									<font-awesome-icon
										icon="fa-regular fa-trash-can"
										class="submenu-icon"
									/>Delete Comment
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<comment-submit
					type="edit"
					v-if="editing"
					:parent-id="this.$route.path.split('/')[4]"
					:level="1"
					:identifier="'edit' + comment.commentId"
					:current-text="newComment"
					@save-editing="saveEditing"
					@cancel-editing="cancelEditing"
				/>
				<comment-submit
					type="Reply"
					v-if="replying"
					:parent-id="comment.commentId"
					parent-type="comment"
					:level="comment.level + 1"
					:identifier="'reply' + comment.commentId"
					:current-text="{ ops: [{ insert: '\n' }] }"
					@new-comment="newReply"
					@cancel-editing="cancelReplying"
				/>
				<div class="replies">
					<my-comment
						v-for="reply in replies"
						:key="reply.commentId"
						:comment="reply"
						:post-id="postId"
					></my-comment>
				</div>
			</div>
		</div>
	</div>
	<base-dialog
		:show="deleting"
		title="Delete comment"
		@close="cancelDelete"
		dialog-class="delete"
	>
		<div class="body">Are you sure you want to delete your comment?</div>
		<div class="buttons">
			<base-button button-text="Keep" @click="cancelDelete" />
			<base-button button-text="Delete" @click="deleteComment" />
		</div>
	</base-dialog>
</template>
<script>
//import NestedReply from './NestedReply.vue';
import CommentSubmit from './CommentSubmit.vue';
import BaseDialog from '../BaseComponents/BaseDialog.vue';
export default {
	name: 'MyComment',
	components: {
		//NestedReply,
		CommentSubmit,
		BaseDialog,
	},
	computed: {
		//@vuese
		//get userName
		getuserName() {
			return localStorage.getItem('userName');
		},
		handleTime() {
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.comment.publishTime);
			if (currentDate.getFullYear() != myTime.getFullYear()) {
				returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
			} else if (currentDate.getMonth() != myTime.getMonth()) {
				returnValue = currentDate.getMonth() - myTime.getMonth() + ' Month ago';
			} else if (currentDate.getDate() != myTime.getDate()) {
				returnValue = currentDate.getDate() - myTime.getDate() + ' Days ago';
			} else if (currentDate.getHours() != myTime.getHours()) {
				returnValue = currentDate.getHours() - myTime.getHours() + ' Hours ago';
			} else if (currentDate.getMinutes() != myTime.getMinutes()) {
				returnValue =
					currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
			} else {
				returnValue = 'Just now';
			}
			return returnValue;
		},
		//@vuese
		//chceks if there is a written text in text area or not to edit the comment
		noComment() {
			if (this.edittedComment == '') return true;
			return false;
		},
		renderingHTML() {
			var QuillDeltaToHtmlConverter =
				require('quill-delta-to-html').QuillDeltaToHtmlConverter;

			// TypeScript / ES6:
			// import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';

			var deltaOps = this.newComment.ops;

			var cfg = {};

			var converter = new QuillDeltaToHtmlConverter(deltaOps, cfg);

			var html = converter.convert();
			return html;
		},
	},
	props: {
		//@vuese
		//the comment data object that will get displayed in this component
		comment: {
			type: Object,
			required: true,
			default() {
				return {};
			},
		},
		postId: {
			type: String,
			required: true,
			default: '',
		},
	},
	data() {
		return {
			upClicked: this.comment.vote == 1 ? true : false,
			downClicked: this.comment.vote == -1 ? true : false,
			voteCounter: this.comment.votes,
			newComment: this.comment.commentBody,
			replies: [],
			edittedComment: '',
			editing: false,
			replying: false,
			display: false,
			deleted: false,
			deleting: false,
			savedUnsavedPosts: [],
			saved: this.comment.saved,
			followed: this.comment.followed,
		};
	},
	//@vuese
	//before mount fetch posts according to type of sorting
	created() {
		if (this.comment.numberofChildren != 0) this.fetchPostComments();
	},
	methods: {
		async follow() {
			this.followed = !this.followed;
			if (this.followed) {
				try {
					await this.$store.dispatch('postCommentActions/followComment', {
						baseurl: this.$baseurl,
						commentId: this.comment.commentId,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				try {
					await this.$store.dispatch('postCommentActions/unfollowComment', {
						baseurl: this.$baseurl,
						commentId: this.comment.commentId,
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
		async save() {
			this.saved = !this.saved;
			if (this.saved == true) {
				try {
					await this.$store.dispatch('postCommentActions/save', {
						baseurl: this.$baseurl,
						id: this.comment.commentId,
						type: 'comment',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			} else {
				try {
					await this.$store.dispatch('postCommentActions/unsave', {
						baseurl: this.$baseurl,
						id: this.comment.commentId,
						type: 'comment',
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
			}
		},
		async fetchPostComments() {
			try {
				await this.$store.dispatch('comments/fetchPostReplies', {
					baseurl: this.$baseurl,
					postId: this.$route.path.split('/')[4],
					commentId: this.comment.commentId,
					beforeMod: '',
					afterMod: '',
					sort: this.$route.query.sort,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.replies = this.$store.getters['comments/getListOfReplies'].children;
			console.log(this.replies);
		},
		newReply(reply) {
			this.replies.unshift(reply);
			this.replying = false;
		},
		//@vuese
		//show services submenu of comments
		displaySubmenu() {
			this.display = !this.display;
		},
		//@vuese
		//called when upvote is clicked to change the style of upvote icon and increment vote counter
		async upClick() {
			if (this.downClicked) this.downClick();
			this.upClicked = !this.upClicked;
			if (this.upClicked) this.voteCounter++;
			else this.voteCounter--;
			try {
				await this.$store.dispatch('postCommentActions/vote', {
					baseurl: this.$baseurl,
					id: this.comment.commentId,
					type: 'comment',
					direction: 1,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		//@vuese
		//called when downvote is clicked to change the style of downvote icon and decrement vote counter
		async downClick() {
			if (this.upClicked) this.upClick();
			this.downClicked = !this.downClicked;
			if (this.downClicked) this.voteCounter--;
			else this.voteCounter++;
			try {
				await this.$store.dispatch('postCommentActions/vote', {
					baseurl: this.$baseurl,
					id: this.comment.commentId,
					type: 'comment',
					direction: -1,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		//@vuese
		//sets comment in editting mode (stlye is changed)
		edit() {
			this.editing = true;
			this.edittedComment = this.newComment;
		},
		//@vuese
		//cancel editting done to comment and assign comment's old value back to it
		cancelEditing() {
			this.editing = false;
		},
		cancelReplying() {
			this.replying = false;
		},
		//@vuese
		//save edittings done to comment
		async saveEditing(edittedComment) {
			this.editing = false;
			this.newComment = edittedComment;
			console.log(edittedComment);
			try {
				await this.$store.dispatch('comments/editUserText', {
					baseurl: this.$baseurl,
					content: edittedComment,
					id: this.comment.commentId,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		addReply() {
			this.replying = !this.replying;
		},
		deletingComment() {
			this.deleting = true;
		},
		//@vuese
		//delete comment
		async deleteComment() {
			this.deleting = false;
			this.deleted = true;
			try {
				await this.$store.dispatch('comments/deleteComment', {
					baseurl: this.$baseurl,
					id: this.comment.commentId,
					type: 'comment',
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		cancelDelete() {
			this.deleting = false;
		},
	},
};
</script>
<style scoped>
.comment {
	display: flex;
	margin: 2px 2px 0 2px;
}
.left {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.right {
	margin: 7px 7px 0 7px;
}
.image img {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	margin: 6px 0 6px 0;
}
.vertical-line {
	width: 2.2px;
	background-color: var(--color-grey-light-8);
	height: fill-available;
}
.vertical-line:hover {
	background-color: var(--color-pink);
}
.user-name a {
	color: black;
	font-weight: 500;
	text-decoration: none;
	font-size: 12px;
	line-height: 33px;
}
.user-name a:hover {
	text-decoration: underline;
}
.user-name span {
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	color: var(--color-grey-light-5);
	margin-left: 2px;
}
.content {
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	word-break: break-word;
	color: black;
}
.services > ul {
	margin: 0;
	padding: 0;
}
.services > ul > li {
	list-style: none;
	display: inline-block;
	height: 24px;
	padding: 0 4px;
	border-radius: 2px;
	text-align: center;
	font-size: 12.2px;
	font-weight: 700;
	margin: 0 4px;
	line-height: 24px;
}
.services > ul > li svg.vote {
	font-weight: 400;
	height: 20px;
	line-height: 20px;
	width: 20px;
	fill: var(--color-grey-dark-9);
}
.services > ul > li:first-of-type:hover svg,
.services > ul > li:first-of-type svg.icon-arrow-up {
	fill: var(--color-red-dark-2);
}
.services > ul > li:nth-of-type(3):hover svg,
.services > ul > li:nth-of-type(3) svg.icon-arrow-down {
	fill: var(--color-blue);
}
.services > ul > li:not(:nth-of-type(2)):hover,
.services > ul > li.clicked {
	background-color: #e8e8e8;
}
.services > ul li:not(:nth-of-type(2)) {
	cursor: pointer;
}
.services > ul > li:nth-of-type(3) .icon-shift {
	transform: rotate(180deg);
}
.services > ul > li:nth-of-type(2) {
	color: black;
}
.services > ul > li:nth-of-type(2).up {
	color: var(--color-red-dark-2);
}
.services > ul > li:nth-of-type(2).down {
	color: var(--color-blue);
}
.sub-menu {
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: white;
	padding: 0px;
	left: -0.5rem;
	top: 2rem;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
	z-index: 10;
	width: max-content;
}
.sub-menu li {
	color: var(--color-grey-dark-2);
	font-size: 15px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	border-bottom: var(--line);
	width: 100%;
}
.sub-menu li:hover {
	background-color: var(--color-blue-light-2);
	color: var(--color-dark-1);
}
.sub-menu li {
	padding: 0px 10px;
	height: 34px;
}
.sub-menu li.clicked {
	color: var(--color-blue-2);
}
.sub-menu li:last-of-type {
	border-radius: 0 0 5px 5px;
}
.sub-menu li .submenu-icon {
	margin-right: 5px;
}
.services > ul > li:last-of-type {
	position: relative;
}
.reply {
	margin-left: 2px;
}
.delete .body {
	font-size: 12px;
	width: 360px;
}
.delete .buttons {
	display: flex;
	justify-content: end;
	margin-top: 30px;
}
.delete .buttons button {
	font-weight: bolder;
	height: 30px;
	width: 90px;
	font-size: 14px;
}
.delete .buttons button:first-of-type {
	border: 1px solid var(--color-blue-2);
	background-color: white;
	color: var(--color-blue-2);
}
.delete .buttons button:last-of-type {
	border: 2px solid white;
	background-color: var(--color-blue-2);
	color: white;
}
</style>
