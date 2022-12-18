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
			<user-mentions
				v-for="(message, index) in userMentions"
				:key="message"
				:message="message"
				:index="index"
				@done-successfully="doneSuccessfully()"
			></user-mentions>
		</div>
		<button
			class="load-more"
			v-if="!loading && after"
			@click.prevent="loadUserMentions('after')"
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
import UserMentions from '../../components/MessageComponents/UserMentions.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	components: {
		UserMentions,
		TheSpinner,
	},
	// @vuese
	//change title name and load mentions
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			document.title = 'messages: mentions';
			await this.loadUserMentions();
			this.loading = false;
		}
	},
	data() {
		return {
			noMessages: false,
			errorResponse: null,
			loading: false,
			userMentions: [],
		};
	},
	computed: {
		// // @vuese
		// //return user mentions
		// // @type object
		// userMentions() {
		// 	return this.$store.getters['messages/userMentions'];
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
		//watchmentions if it's empty
		// @arg no argument
		userMentions() {
			if (this.userMentions.length == 0) this.noMessages = true;
		},
	},
	methods: {
		// @vuese
		//load user mentions from the store
		// @arg no argument
		async loadUserMentions(title) {
			this.loading = true;
			let afterMod = '';
			if (title == 'after') {
				afterMod = this.after;
			}
			try {
				await this.$store.dispatch('messages/loadUserMentions', {
					baseurl: this.$baseurl,
					afterMod: afterMod,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.userMentions = this.userMentions.concat(
				this.$store.getters['messages/userMentions']
			);
			this.loading = false;
		},
		// @vuese
		//reload compose messages from the store
		// @arg no argument
		doneSuccessfully() {
			this.loadUserMentions();
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
.no-more {
	font-size: 1.5rem;
	font-weight: bold;
	margin: 2rem;
	padding: 0.5rem;
	border-radius: 2rem;
}
</style>
