<template>
	<ul class="post-list">
		<li
			class="bottom-vote-box"
			:style="[
				pinnedPostFlag
					? 'display:block !important;     margin-right: 10px'
					: '',
			]"
		>
			<div
				class="d-flex flex-row vote-box"
				style="width: auto; background-color: inherit"
			>
				<div class="upvote" @click="upvote">
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
				>
					{{ postData.data.votes }}
				</div>
				<div class="downvote" @click="downvote">
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
		<li v-if="!pinnedPostFlag" class="post-option-item post-option-item-hover2">
			<div v-if="postData.data.kind == 'link'" class="post-options-icon">
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
				style="
					transform: rotate(90deg);
					stroke-width: 35px;
					stroke: rgb(135, 138, 140);
					color: transparent;
				"
			>
				<i class="fa-solid fa-up-right-and-down-left-from-center"></i>
			</div>
			<div v-else @click="collapsePostContent" class="post-options-icon">
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
			<router-link to="">
				<div class="post-options-icon">
					<i
						style="
							stroke-width: 35px;
							stroke: rgb(135, 138, 140);
							color: transparent;
						"
						class="fa-solid fa-message"
					></i>
				</div>
				<div class="post-options-text">
					<p>{{ postData.data.comments }}</p>
				</div>
			</router-link>
		</li>
		<li
			style="position: relative"
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
				<div class="post-options-text">
					<p>share</p>
				</div>
			</router-link>
			<div v-if="showShareOptions" class="options-box-list">
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
			v-if="!pinnedPostFlag"
			id="approve-user-post-button"
			@click="approvePost(postData.id)"
			:style="[
				postData.data.moderation &&
				postData.data.moderation.approve &&
				postData.data.moderation.approve.approvedBy != ''
					? 'color: #46d160'
					: '',
			]"
			class="post-option-item"
			:class="[
				postData.data.moderation &&
				postData.data.moderation.approve &&
				postData.data.moderation.approvedBy != ''
					? ''
					: 'post-option-item-hover2',
			]"
		>
			<div class="post-options-icon">
				<i class="fa-solid fa-check"></i>
			</div>
			<div class="post-options-text">Approve</div>
		</li>
		<li
			v-if="!pinnedPostFlag"
			id="remove-user-post-button"
			@click="removePost(postData.id)"
			:style="[
				postData.data.moderation &&
				postData.data.moderation.remove &&
				postData.data.moderation.remove.removedBy != ''
					? 'color: #ff585b'
					: 'color: rgba(135, 138, 140)',
			]"
			class="post-option-item"
			:class="[
				postData.data.moderation &&
				postData.data.moderation.remove &&
				postData.data.moderation.removedBy != ''
					? ''
					: 'post-option-item-hover2',
			]"
		>
			<div class="post-options-icon">
				<i style="color: inherit" class="fa-solid fa-ban"></i>
			</div>
			<div class="post-options-text">
				<p>Remove</p>
			</div>
		</li>
		<li
			v-if="!pinnedPostFlag"
			id="spam-user-post-button"
			@click="spamPost"
			:style="[
				postData.data.moderation &&
				postData.data.moderation.spam &&
				postData.data.moderation.spam.spammedBy != ''
					? 'color: #ff585b'
					: 'color: rgba(135, 138, 140)',
			]"
			class="post-option-item post-option-item-hover2"
		>
			<div class="post-options-icon">
				<i class="fa-regular fa-calendar-xmark"></i>
			</div>
			<div class="post-options-text">
				<p>Spam</p>
			</div>
		</li>
		<li
			v-if="!pinnedPostFlag"
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
					<li @click="lockUnLockComments(postData.id)" class="options-box-item">
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-oc"
									name="mark-as-oc"
									:checked="
										postData.data.moderation && postData.data.moderation.lock
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
		<li
			class="post-option-item2"
			style="position: relative"
			@click="openOptionsBoxList"
		>
			<div class="post-options-icon three-dot-icon-box">
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
				v-if="showOptionsBoxList"
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
								style="color: rgba(135, 138, 140)"
								class="fa-regular fa-bookmark"
							></i>
						</div>
						<div class="options-box-text">Save</div>
					</li>
					<li @click="pinPostToProfile(postData.id)" class="options-box-item">
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-solid fa-thumbtack"
							></i>
						</div>
						<div class="options-box-text">
							{{ postData.data.pin ? 'unpin' : 'pin' }} Post to Profile
						</div>
					</li>
					<li @click="hidePost" class="options-box-item">
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-regular fa-eye-slash"
							></i>
						</div>
						<div class="options-box-text">Hide</div>
					</li>
					<li @click="deletePost" class="options-box-item">
						<div class="options-box-icon">
							<i
								style="color: rgba(135, 138, 140)"
								class="fa-solid fa-trash"
							></i>
						</div>
						<div class="options-box-text">Delete</div>
					</li>
					<li @click="markAsOC" class="options-box-item">
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
						@click="markUnMarkAsSpoiler(postData.id)"
						class="options-box-item"
					>
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-spoiler"
									name="mark-as-spoiler"
									:checked="postData.data.spoiler"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-spoiler">Mark As Spoiler</label>
						</div>
					</li>
					<li @click="markUnMarkAsNSFW(postData.id)" class="options-box-item">
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="mark-as-nsfw"
									name="mark-as-nsfw"
									:checked="postData.data.nsfw"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="mark-as-nsfw">Mark As NSFW</label>
						</div>
					</li>
					<li class="options-box-item">
						<div class="options-box-icon">
							<i>
								<input
									type="checkbox"
									id="send-me-notifications"
									name="send-me-notifications"
									v-model="sendMeNotificationCheckBox"
							/></i>
						</div>
						<div class="options-box-text">
							<label for="send-me-notifications"
								>Send Me Replay Notifications</label
							>
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
			showShareOptions: false,
			showOptionsBoxList: false,
			showPostContent: false,
			spoilerCheckBox: false,
			nsfwCheckBox: false,
			showSafetyOptions: false,
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
	},
	mounted() {
		window.addEventListener('click', this.clicked);
	},
	unmounted() {
		window.removeEventListener('click', this.clicked);
	},
	emits: ['insightsToggle', 'expandPost', 'collapsePost'],
	methods: {
		// clicked(event) {
		// if (this.showOptionsBoxList) {
		// 	if (
		// 		document
		// 			.getElementById('show-dots-options-BoxList')
		// 			.contains(event.target)
		// 	) {
		// 		// Clicked in box
		// 		console.log('ins');
		// 	} else {
		// 		// this.showOptionsBoxList = false;
		// 		// Clicked outside the box
		// 		console.log('out');
		// 	}
		// }
		// },
		insightsPostToggle() {
			this.$emit('insightsToggle');
		},
		sharePost() {
			console.log('share');
			this.showShareOptions = true;
		},
		openOptionsBoxList() {
			this.showOptionsBoxList = true;
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
			console.log('approve');
			try {
				await this.$store.dispatch('userposts/approvePostOrComment', {
					baseurl: this.$baseurl,
					ApprovePostOrCommentData: {
						id: id,
						type: 'post',
						username: this.$route.params.userName,
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async removePost(id) {
			console.log('remove');
			try {
				await this.$store.dispatch('userposts/removePostOrComment', {
					baseurl: this.$baseurl,
					removePostOrCommentData: {
						id: id,
						type: 'post',
						username: this.$route.params.userName,
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async markUnMarkAsNSFW(id) {
			// console.log('MarkUnMArk', this.nsfwCheckBox);
			let type = 'unMark';
			if (!this.postData.data.nsfw) {
				type = 'mark';
			}
			try {
				await this.$store.dispatch('userposts/markPostAsNSFW', {
					baseurl: this.$baseurl,
					nsfwData: {
						id: id,
						type: `${type}`, // mark UnMark
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async markUnMarkAsSpoiler(id) {
			// console.log('MarkUnMArk', this.nsfwCheckBox);
			let type = 'unMark';
			if (!this.postData.data.spoiler) {
				type = 'mark';
			}
			try {
				await this.$store.dispatch('userposts/markUnMarkPostAsSpoiler', {
					baseurl: this.$baseurl,
					spoilerData: {
						id: id,
						type: `${type}`, // mark UnMark
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		safetyClicked() {
			this.showSafetyOptions = true;
		},
		async lockUnLockComments(id) {
			console.log('lock un lock clicked');
			let key = 'unLock';
			if (
				!this.postData.data.moderation ||
				!this.postData.data.moderation.lock ||
				this.postData.data.moderation.lock == false
			) {
				key = 'lock';
			}
			try {
				await this.$store.dispatch('userposts/lockUnLockPostOrComment', {
					baseurl: this.$baseurl,
					lockUnlockData: {
						id: id,
						type: `post`, // mark UnMark
					},
					key: `${key}`,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async pinPostToProfile(id) {
			let key = false;
			if (!this.postData.data.pin) {
				key = true;
			}
			console.log('pin un pin clicked', key);
			try {
				await this.$store.dispatch('userposts/pinUnpinPost', {
					baseurl: this.$baseurl,
					pinUnpinData: {
						id: id,
						pin: key, // mark UnMark
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
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
.post-link-href {
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
</style>
