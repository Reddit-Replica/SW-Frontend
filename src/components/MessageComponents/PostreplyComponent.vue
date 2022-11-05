<template>
	<div class="message">
		<li>
			<p class="subject-text">
				<span class="post-reply">post reply</span>
				<span>{{ message.subject }}</span>
			</p>
			<div class="d-flex flex-row">
				<div class="d-flex flex-column vote-box">
					<div class="upvote" @click="upvote">
						<svg class="icon p-1" :class="upClicked ? 'up-clicked' : ''">
							<use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
						</svg>
					</div>
					<div class="downvote" @click="downvote">
						<svg class="icon p-1" :class="downClicked ? 'down-clicked' : ''">
							<use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
						</svg>
					</div>
				</div>
				<div>
					<p class="md-details">
						from&nbsp;
						<span class="sender"
							><a href="" id="message-sender">{{ message.senderUsername }}</a>
							<span
								>&nbsp;via&nbsp;
								<a href="" id="message-receiver">{{
									message.receiverUsername
								}}</a>
							</span></span
						>&nbsp;sent&nbsp;<time> {{ message.sendAt }}</time>
					</p>
					<p class="md">{{ message.text }}</p>
					<ul class="flat-list">
						<li><a href="">context</a></li>
						<li><a href="">Full Comments(5)</a></li>
						<li>
							<form action="#">
								<input
									type="hidden"
									name="spam"
									id="spam-message"
									value="spam"
								/>
							</form>
							<span class="sure-block" v-if="spamUser"
								>are you sure?
								<span class="link" id="yes-spam-message">Yes</span> /
								<span class="link" @click="spamAction()" id="no-spam-message"
									>No</span
								></span
							>
							<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
							<span class="link" v-else @click="spamAction()" id="click-spam"
								>Spam</span
							>
						</li>
						<li>
							<form action="#">
								<input
									type="hidden"
									name="deleted"
									id="delete-message"
									value="deleted"
								/>
							</form>
							<span class="sure-block" v-if="removeUser"
								>are you sure?
								<span class="link" id="yes-remove-message">Yes</span> /
								<span
									class="link"
									@click="removeAction()"
									id="no-remove-message"
									>No</span
								></span
							>
							<span
								class="link"
								v-else
								@click="removeAction()"
								id="click-remove"
								>Remove</span
							>
						</li>
						<li><a href="" id="report">Report</a></li>
						<li>
							<span class="sure-block" v-if="blockUser"
								>are you sure?
								<span class="link" id="yes-block-user">Yes</span> /
								<span class="link" @click="blockAction()" id="no-block-user"
									>No</span
								></span
							>
							<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
							<span class="link" v-else @click="blockAction()" id="block-user"
								>Block User</span
							>
						</li>
						<li>
							<span class="link" id="mark-un-read">Mark Unread</span>
						</li>
						<li><span class="link" id="reply">Reply</span></li>
					</ul>
				</div>
			</div>
		</li>
	</div>
</template>

<script>
export default {
	props: {
		// @vuese
		//details of message
		message: {
			type: Object,
			require: true,
			default: () => ({
				text: '',
				type: '',
				senderUsername: '',
				receiverUsername: '',
				subredditName: '',
				postTitle: '',
				subject: '',
				sendAt: '',
				isReply: '',
				isRead: '',
			}),
		},
	},
	data() {
		return {
			removeUser: false,
			blockUser: false,
			spamUser: false,
			upClicked: false,
			downClicked: false,
		};
	},
	methods: {
		// @vuese
		//toggle remove action
		removeAction() {
			this.removeUser = !this.removeUser;
		},
		// @vuese
		//toggle block action
		blockAction() {
			this.blockUser = !this.blockUser;
		},
		// @vuese
		//toggle spam action
		spamAction() {
			this.spamUser = !this.spamUser;
		},
		upvote() {
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
			} else {
				this.upClicked = false;
				this.counter--;
			}
			if (this.downClicked) {
				this.downClicked = false;
				this.counter++;
			}
		},
		downvote() {
			if (this.downClicked == false) {
				this.downClicked = true;
				this.counter--;
			} else {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	display: flex;
	flex-flow: row wrap;
}
.message {
	margin: 0;
	padding: 1rem 1.5rem;
	color: #373c3f;
	list-style: none;
}
.message:nth-child(odd) {
	background-color: var(--color-grey-light-2);
}
.message:nth-child(even) {
	background-color: var(--color-white-1);
}
.subject-text {
	font-weight: bold;
	font-size: 1.3rem;
}
.post-reply {
	margin: 1rem;
	font-weight: bold;
	font-size: larger;
}
.post-reply:after {
	content: ':';
}
.md-details {
	margin-left: 2.6rem;
	color: var(--color-grey-dark-2);
}
.md {
	margin-left: 2.6rem;
	font-size: 1.5rem;
}
.flat-list {
	font: normal x-small verdana, arial, helvetica, sans-serif;
	display: block;
	margin-top: 1rem;
	margin-bottom: 1rem;
	display: flex;
}
.flat-list li {
	margin: 1rem;
	font-size: 1rem;
	font-weight: bold;
}
.flat-list li a,
.link {
	color: var(--color-grey-dark-2);
	cursor: pointer;
}
a:hover,
.link:hover {
	text-decoration: underline;
}
.sure-block {
	color: var(--color-red-dark-1);
}
div.vote-box {
	text-align: center;
	border-radius: 0.5rem 0 0 0.5rem;
	cursor: pointer;
}

.vote-box .downvote svg,
.vote-box .upvote svg {
	width: 2rem;
	height: 2rem;
	fill: var(--color-grey-dark-4);
}
.downvote .icon-shift {
	transform: rotate(180deg);
}
.vote-box svg.up-clicked {
	fill: var(--color-Primary-light-2);
}

.vote-box svg.down-clicked {
	fill: var(--color-blue-5);
}
</style>
