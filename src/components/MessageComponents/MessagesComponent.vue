<template>
	<div class="message">
		<li>
			<p class="subject-text">
				<a href="" id="message-sender" class="sender-box">{{
					message.senderUsername
				}}</a>
				<span>{{ message.subject }}</span>
			</p>
			<p class="expand-p">
				<span class="expand" id="expand-all" @click="expand('expand')"
					>expand all</span
				>
				<span class="expand" id="collapse-all" @click="expand('collapse')"
					>collapse all</span
				>
			</p>
			<div class="box">
				<p class="md-details">
					<span class="sign" id="sign" @click="expand('')"
						>[<span v-if="!expandAll">+</span><span v-else>-</span>]</span
					>
					from&nbsp;
					<span class="sender"
						><a href="" id="message-sender">{{
							message.senderUsername
						}}</a> </span
					>&nbsp;sent&nbsp;<time> {{ message.sendAt }}</time>
				</p>
				<div v-if="expandAll">
					<p class="md">{{ message.text }}</p>
					<ul class="flat-list">
						<li><a href="">Permalink</a></li>
						<li>
							<form action="#">
								<input
									type="hidden"
									name="deleted"
									id="delete-message"
									value="deleted"
								/>
							</form>
							<span class="sure-block" v-if="deleteUSer"
								>are you sure?
								<span class="link" id="yes-delete-message">Yes</span> /
								<span
									class="link"
									@click="deleteAction()"
									id="no-delete-message"
									>No</span
								></span
							>
							<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
							<span
								class="link"
								v-else
								@click="deleteAction()"
								id="click-delete"
								>Delete</span
							>
						</li>
						<li><a href="" id="report">Report</a></li>
						<li>
							<span class="sure-block" v-if="blockUSer"
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
							<span class="link" id="mark-as-read">Mark Unread</span>
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
	// @vuese
	//details of message
	props: {
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
			deleteUSer: false,
			blockUSer: false,
			expandAll: true,
		};
	},
	methods: {
		// @vuese
		//toggle delete action
		deleteAction() {
			this.deleteUSer = !this.deleteUSer;
		},
		// @vuese
		//toggle block action
		blockAction() {
			this.blockUSer = !this.blockUSer;
		},
		// @vuese
		//expand or collapse message details
		expand(action) {
			if (action == 'expand') {
				this.expandAll = true;
			} else if (action == 'collapse') {
				this.expandAll = false;
			} else {
				this.expandAll = !this.expandAll;
			}
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
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
.box {
	display: flex;
	flex-direction: column;
	margin: 0;
	border-left: var(--line-dashed-3);
}
.sender-box {
	color: var(--color-blue);
	border: var(--line-9);
	text-decoration: none;
	border-radius: 0.5rem;
	padding: 0.4rem;
	margin: 0.5rem;
}
.sender-box:hover {
	text-decoration: none;
}
.subject-text {
	font-weight: bold;
	font-size: 1.3rem;
}
.expand-p {
	margin: 1rem;
	color: var(--color-blue-2);
	font-weight: bold;
	font-size: 1.1rem;
}
.expand {
	margin-right: 1rem;
	cursor: pointer;
}
.sign {
	color: var(--color-blue);
	margin-right: 0.3rem;
	font-size: 1.4rem;
	cursor: pointer;
}
.subject-text:after {
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
.sender a {
	color: var(--color-blue);
	font-size: 1.1rem;
	font-weight: bold;
}
</style>
