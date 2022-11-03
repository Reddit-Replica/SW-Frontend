<template>
	<div class="message">
		<li>
			<p class="subject-text">
				<span>{{ message.subject }}</span>
			</p>
			<div>
				<p class="md-details">
					from&nbsp;
					<span class="sender"
						><a href="">{{ message.senderUsername }}</a>
						<span v-if="message.receiverUsername != ''"
							>&nbsp;via&nbsp; <a href="">{{ message.receiverUsername }}</a>
						</span></span
					>&nbsp;sent&nbsp;<time> {{ message.sendAt }}</time>
				</p>
				<p class="md">{{ message.text }}</p>
				<ul class="flat-list">
					<li><a href="">Permalink</a></li>
					<li>
						<form action="#">
							<input
								type="hidden"
								name="deleted"
								id="deleted"
								value="deleted"
							/>
						</form>
						<span class="sure-block" v-if="deleteUSer"
							>are you sure? <span class="link">Yes</span> /
							<span class="link" @click="deleteAction()">No</span></span
						>
						<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
						<span class="link" v-else @click="deleteAction()">Delete</span>
					</li>
					<li><a href="">Report</a></li>
					<li>
						<span class="sure-block" v-if="blockUSer"
							>are you sure? <span class="link">Yes</span> /
							<span class="link" @click="blockAction()">No</span></span
						>
						<!-- <a href="" v-else @click="deleteAction()">Delete</a> -->
						<span class="link" v-else @click="blockAction()">Block User</span>
					</li>
					<li>
						<span class="link">Mark Unread</span>
					</li>
					<li><span class="link">Reply</span></li>
				</ul>
			</div>
		</li>
	</div>
</template>

<script>
export default {
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
		};
	},
	methods: {
		deleteAction() {
			this.deleteUSer = !this.deleteUSer;
		},
		blockAction() {
			this.blockUSer = !this.blockUSer;
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
.subject-text {
	font-weight: bold;
	font-size: 1.3rem;
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
</style>
