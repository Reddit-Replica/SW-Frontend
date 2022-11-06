<template>
	<div
		class="message"
		:class="backcolor == 'grey' ? 'message-grey' : 'message-white'"
	>
		<li>
			<p class="subject-text">
				<span>{{ message.subject }}</span>
			</p>
			<div>
				<p class="md-details">
					<span class="sender">
						<span
							><span>to&nbsp;</span>
							<a href="" id="message-receiver">{{
								message.receiverUsername
							}}</a>
						</span></span
					><span>&nbsp;sent&nbsp;</span><time> {{ message.sendAt }}</time>
				</p>
				<p class="md">{{ message.text }}</p>
				<ul class="flat-list">
					<li><a href="">Permalink</a></li>
				</ul>
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
				receiverUsername: '',
				sendAt: '',
				subject: '',
			}),
		},
		// @vuese
		//counter to handel background color
		count: {
			type: Number,
			require: true,
			default: 1,
		},
	},
	data() {
		return {
			backcolor: 'grey',
		};
	},
	beforeMount() {
		if (this.count % 2 == 0) {
			this.backcolor = 'white';
		} else this.backcolor = 'grey';
	},
	methods: {},
};
</script>

<style scoped>
a:hover,
.link:hover {
	text-decoration: underline;
}
.subject-text:after {
	content: ':';
}
</style>
