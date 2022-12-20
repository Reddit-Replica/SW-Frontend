<template>
	<div class="message">
		<li>
			<p class="subject-text">
				<span>{{ message.subject }}</span>
			</p>
			<div>
				<p class="md-details">
					<span class="sender">
						<span
							><span>to&nbsp;</span>
							<a
								v-if="message.isReceiverUser"
								:href="'/user/' + message.receiverUsername + '/'"
								:id="'message-receiver-' + index"
								>/u/{{ message.receiverUsername }}</a
							><a
								v-else
								:href="'/r/' + message.receiverUsername"
								:id="'message-receiver-' + index"
								>/r/{{ message.receiverUsername }}</a
							>
						</span></span
					><span>&nbsp;sent&nbsp;</span
					><time :id="'time-' + index"> {{ handleTime }}</time>
				</p>
				<!-- <p class="md">{{ message.text }}</p> -->
				<Markdown class="md" :source="message.text" />
				<!-- <ul class="flat-list ul-messages">
					<li :id="'permalink-link-' + index">
						<a href="" :id="'permalink-a-' + index">Permalink</a>
					</li>
				</ul> -->
			</div>
		</li>
	</div>
</template>

<script>
import Markdown from 'vue3-markdown-it';
export default {
	components: {
		Markdown,
	},
	props: {
		// @vuese
		//details of message
		// @type object
		message: {
			type: Object,
			required: true,
			default: () => ({
				id: '',
				text: '',
				receiverUsername: '',
				sendAt: '',
				subject: '',
			}),
		},
		// @vuese
		//index to handle unique ids
		// @type number
		index: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	beforeMount() {
		this.calculateTime();
	},
	computed: {
		// @vuese
		//return handled time after calculated it
		// @type string
		// handleTime() {
		// 	return this.$store.getters['moderation/handleTime'];
		// },
	},
	data() {
		return { handleTime: '' };
	},
	methods: {
		// @vuese
		//calculate time
		// @arg no argument
		calculateTime() {
			// this.$store.dispatch('moderation/handleTime', {
			// 	time: this.message.sendAt,
			// });
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.message.sendAt);
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
			this.handleTime = returnValue;

			// this.time
			// let myTime = this.message.sendAt;
			// var currentDate = new Date();
			// if (currentDate.getFullYear() != myTime.getFullYear()) {
			// 	this.returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
			// } else if (currentDate.getMonth() != myTime.getMonth()) {
			// 	this.returnValue =
			// 		currentDate.getMonth() - myTime.getMonth() + ' Month ago';
			// } else if (currentDate.getDate() != myTime.getDate()) {
			// 	this.returnValue =
			// 		currentDate.getDate() - myTime.getDate() + ' Days ago';
			// } else if (currentDate.getHours() != myTime.getHours()) {
			// 	this.returnValue =
			// 		currentDate.getHours() - myTime.getHours() + ' Hours ago';
			// } else if (currentDate.getMinutes() != myTime.getMinutes()) {
			// 	this.returnValue =
			// 		currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
			// } else {
			// 	this.returnValue = 'Just now';
			// }
		},
	},
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
