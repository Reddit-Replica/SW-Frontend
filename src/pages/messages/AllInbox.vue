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
		<div v-for="(message, index) in messages" :key="message" :message="message">
			<allinbox-component
				v-if="message.type == 'Messages'"
				:message="message"
				:index="index"
				@done-successfully="doneSuccessfully()"
			></allinbox-component>
			<PostreplyComponent
				v-if="message.type == 'Post replies'"
				:message="message"
				:index="index"
				@done-successfully="doneSuccessfully()"
			></PostreplyComponent>
			<user-mentions
				v-if="message.type == 'Mentions'"
				:message="message"
				:index="index"
				@done-successfully="doneSuccessfully()"
			></user-mentions>
		</div>
		<button
			class="load-more"
			v-if="!loading && after"
			@click.prevent="loadInboxMessages('after')"
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
		<div class="no-more" v-if="!loading && !after && !noMessages">
			No more messages...
		</div>
		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
	</div>
</template>

<script>
import AllinboxComponent from '../../components/MessageComponents/AllinboxComponent.vue';
import PostreplyComponent from '../../components/MessageComponents/PostreplyComponent.vue';
import UserMentions from '../../components/MessageComponents/UserMentions.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	components: {
		AllinboxComponent,
		PostreplyComponent,
		UserMentions,
		TheSpinner,
	},
	// @vuese
	//change title name and load messages
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			document.title = 'messages: inbox';
			await this.loadInboxMessages();
		}
		this.loading = false;
	},
	data() {
		return {
			noMessages: false,
			errorResponse: null,
			loading: false,
			messages: [],
		};
	},
	computed: {
		// // @vuese
		// //return inbox messages
		// // @type object
		// inboxMessages() {
		// 	return this.$store.getters['messages/inboxMessages'];
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
		//watch compose messages if it's empty
		// @arg no argument
		messages() {
			if (this.messages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load compose messages from the store
		// @arg no argument
		async loadInboxMessages(title) {
			this.loading = true;
			let afterMod = '';
			if (title == 'after') {
				afterMod = this.after;
			}
			try {
				await this.$store.dispatch('messages/loadInboxMessages', {
					baseurl: this.$baseurl,
					afterMod: afterMod,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.messages = this.messages.concat(
				this.$store.getters['messages/inboxMessages']
			);
			this.loading = false;
		},
		// @vuese
		//reload inbox messages from the store
		// @arg no argument
		doneSuccessfully() {
			this.loadInboxMessages();
		},
	},
};
</script>

<style scoped>
/* 296px */
@media only screen and (max-width: 296px) {
	.row > * {
		padding-right: 0;
		padding-left: 0;
	}
}
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
.no-more {
	font-size: 1.5rem;
	font-weight: bold;
	margin: 2rem;
	padding: 0.5rem;
	border-radius: 2rem;
}
</style>
