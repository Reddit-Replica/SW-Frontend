<template>
	<div id="sure-popup-form">
		<base-dialog :show="sureShown" @close="cancelInvitation()" title="">
			<div class="rule-dialog flex-column">
				<div class="rule-box-p flex-column center-box">
					<div>
						<img src="../../../img/invitiaiton-img.png" alt="Congrats" />
					</div>
					<p class="sure-text">
						Congrats! You are invited to become a moderator!
					</p>
				</div>
				<div class="rule-box box-buttons">
					<base-button
						@click="cancelInvitation()"
						class="button-white"
						id="cancel-button"
						>Decline</base-button
					>
					<base-button
						@click="acceptInvitation()"
						class="button-blue"
						id="delete-button"
						>Accept</base-button
					>
				</div>
				<div class="no-messages" v-if="errorResponse">{{ errorResponse }}</div>
			</div>
		</base-dialog>
	</div>
</template>

<script>
export default {
	data() {
		return {
			sureShown: true,
			errorResponse: null,
		};
	},
	beforeMount() {
		if (!localStorage.getItem('accessToken')) {
			this.$router.push('/login');
			document.title = 'reddit';
		} else {
			document.title = this.subredditName;
		}
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
	},
	methods: {
		//@vuese
		//cancel invitation
		//@arg no argument
		cancelInvitation() {
			let route = '/r/' + this.subredditName + '/about/moderators';
			this.$router.push(route);
		},
		//@vuese
		//accept invitation
		//@arg no argument
		async acceptInvitation() {
			this.errorResponse = null;
			try {
				await this.$store.dispatch('moderation/acceptInvitation', {
					subreddit: this.subredditName,
					baseurl: this.$baseurl,
				});
				if (this.$store.getters['moderation/acceptSuccessfully']) {
					this.cancelInvitation();
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
		},
	},
};
</script>

<style scoped>
.rule-dialog {
	max-height: 100%;
	max-width: 53.8rem;
	min-width: 41rem;
}
.sure-text {
	line-height: 2.2rem;
	margin: 1rem 0;
	white-space: pre-wrap;
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	color: var(--color-dark-3);
	font-size: 1.4rem;
	line-height: 2.1rem;
	display: block;
}
.rule-box-p {
	align-items: flex-start;
	margin-top: 1.2rem;
	margin-bottom: 3rem;
}
.box {
	margin-top: 1rem;
	width: 15rem;
	background-color: var(--color-dark-1);
	color: var(--color-white-1);
	font-size: 0.9rem;
	padding: 1rem;
	position: absolute;
	border-radius: 0.4rem;
	text-align: center;
	pointer-events: none;
	transform: translateX(-50%);
	z-index: 100;
	right: -16rem;
}
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 16px;
	margin: 16px -16px -16px;
	display: flex;
	justify-content: flex-end;
	border-bottom-right-radius: 4px;
	box-sizing: border-box;
}
button {
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
	margin-left: 8px;
	font-size: 14px;
	font-weight: 700;
}
.button-blue:hover {
	background-color: rgb(248, 89, 89);
	border: 1px solid rgb(248, 89, 89);
	padding: 0.4rem 1.6rem;
}
.button-white {
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
}
.button-white:hover {
	border: 1px solid var(--color-grey-dark-8);
	color: var(--color-grey-dark-8);
	padding: 0.4rem 1.6rem;
}
.button-blue {
	background-color: var(--color-blue-2);
	border: 1px solid var(--color-blue-2);
	color: var(--color-white-1);
	padding: 0.4rem 1.6rem;
}
.disabled {
	cursor: not-allowed;
	filter: grayscale(1);
	border: none;
	color: rgba(255, 255, 255, 0.5);
	fill: rgba(255, 255, 255, 0.5);
	background-color: var(--color-grey-light-5);
}
.no-messages {
	margin-top: 2rem;
	padding: 1rem;
}
.center-box {
	align-items: center;
	text-align: center;
	margin: auto;
}
</style>
