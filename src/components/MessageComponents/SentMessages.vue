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
							<a href="" :id="'message-receiver-' + index">{{
								message.receiverUsername
							}}</a>
						</span></span
					><span>&nbsp;sent&nbsp;</span><time> {{ message.sendAt }}</time>
				</p>
				<p class="md">{{ message.text }}</p>
				<ul class="flat-list ul-messages">
					<li :id="'permalink-link-' + index">
						<a href="" :id="'permalink-a-' + index">Permalink</a>
					</li>
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
				id: '',
				text: '',
				receiverUsername: '',
				sendAt: '',
				subject: '',
			}),
		},
		// @vuese
		//counter to handle background color
		count: {
			type: Number,
			require: true,
			default: 1,
		},
		// @vuese
		//index to handle unique ids
		index: {
			type: Number,
			require: true,
			default: 0,
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
