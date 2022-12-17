<template>
	<div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 50%"
			></the-spinner>
		</div>
		<div>
			<sent-messages
				v-for="(message, index) in sentMessages"
				:key="message"
				:message="message"
				:index="index"
			></sent-messages>
		</div>
		<button
			class="load-more"
			v-if="!loading && after"
			@click.prevent="loadSentMessages('after')"
		>
			load more
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-chevron-double-down"
				viewBox="0 0 16 16"
			>
				<path
					fill-rule="evenodd"
					d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
				/>
				<path
					fill-rule="evenodd"
					d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
				/>
			</svg>
		</button>
		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
	</div>
</template>

<script>
import SentMessages from '../../components/MessageComponents/SentMessages.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	components: {
		SentMessages,
		TheSpinner,
	},
	// @vuese
	//change title name and load messages
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			document.title = 'messages: sent';
			await this.loadSentMessages();
			this.loading = false;
		}
	},
	data() {
		return {
			noMessages: false,
			count: 0,
			errorResponse: null,
			loading: false,
			sentMessages: [],
		};
	},
	computed: {
		// // @vuese
		// //return all messages sent or recieved
		// // @type object
		// sentMessages() {
		// 	return this.$store.getters['messages/sentMessages'];
		// },

		// @vuese
		//return if there is messages after
		// @type string
		after() {
			return this.$store.getters['messages/after'];
		},
	},
	watch: {
		// @vuese
		//watch messages if it's empty
		// @arg no argument
		sentMessages() {
			if (this.sentMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load messages from the store
		// @arg no argument
		async loadSentMessages(title) {
			this.loading = true;
			let afterMod = '';
			if (title == 'after') {
				afterMod = this.after;
			}
			try {
				await this.$store.dispatch('messages/loadSentMessages', {
					baseurl: this.$baseurl,
					afterMod: afterMod,
				});
			} catch (error) {
				this.errorResponse = error.message || 'Something went wrong';
			}
			this.sentMessages = this.sentMessages.concat(
				this.$store.getters['messages/sentMessages']
			);
			this.loading = false;
		},
	},
};
</script>

<style scoped>
.load-more {
	font-size: 1.5rem;
	font-weight: bold;
	margin: 2rem;
	cursor: pointer;
	border: 1px solid #c0c0c0;
	padding: 0.5rem;
	border-radius: 2rem;
}
.load-more:hover {
	background-color: aliceblue;
}
</style>
