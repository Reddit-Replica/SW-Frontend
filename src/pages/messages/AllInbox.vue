<template>
	<div>
		<div class="no-messages" v-if="noMessages">
			there doesn't seem to be anything here
		</div>
		<div
			v-for="(message, index) in inboxMessages"
			:key="message"
			:message="message"
		>
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
		<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
	</div>
</template>

<script>
import AllinboxComponent from '../../components/MessageComponents/AllinboxComponent.vue';
import PostreplyComponent from '../../components/MessageComponents/PostreplyComponent.vue';
import UserMentions from '../../components/MessageComponents/UserMentions.vue';
export default {
	components: {
		AllinboxComponent,
		PostreplyComponent,
		UserMentions,
	},
	// @vuese
	//change title name and load messages
	beforeMount() {
		if (localStorage.getItem('accessToken')) {
			document.title = 'messages: inbox';
			this.loadInboxMessages();
		}
	},
	data() {
		return {
			noMessages: false,
			errorResponse: null,
		};
	},
	computed: {
		// @vuese
		//return inbox messages
		// @type object
		inboxMessages() {
			return this.$store.getters['messages/inboxMessages'];
		},
	},
	watch: {
		// @vuese
		//watch compose messages if it's empty
		// @arg no argument
		inboxMessages() {
			if (this.inboxMessages.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load compose messages from the store
		// @arg no argument
		async loadInboxMessages() {
			try {
				await this.$store.dispatch('messages/loadInboxMessages', {
					baseurl: this.$baseurl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
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
</style>
