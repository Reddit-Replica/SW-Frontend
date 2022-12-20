<template>
	<div class="mod-card" id="user-moderator-card">
		<div class="mod-header" id="user-moderator-header">
			<div style="padding: 12px 0 0">
				<h2>
					{{
						state == 'profile'
							? "You're a moderator of these communities"
							: 'Moderator of these communities'
					}}
				</h2>
			</div>
		</div>
		<div class="mod-list" id="user-moderator-list">
			<ul>
				<li
					v-for="userModerator in userModerators"
					:key="userModerator.subredditName"
					:id="`user-mod-item-${userModerator.subredditName}`"
				>
					<i></i>
					<span>
						<router-link
							:to="`/r/${userModerator.subredditName}/`"
							:id="`moderator-name-${userModerator.subredditName}`"
							>r/{{ userModerator.subredditName }}</router-link
						>
						<p :id="`moderator-member-number-${userModerator.subredditName}`">
							{{ userModerator.numOfMembers }} member
						</p>
						<span v-if="userModerator.nsfw" class="post-nsfw"><p>nsfw</p></span>
					</span>
					<base-button
						:id="`moderator-join-button-${userModerator.subredditName}`"
						:button-text="userModerator.buttonText"
						class="join-button"
						:class="[userModerator.followed ? 'joined-button' : '']"
						@mouseover="hoverButton(userModerator.subredditName)"
						@mouseleave="unHoverButton"
						@click="
							changeButtonState(
								userModerator.subredditName,
								userModerator.subredditId
							)
						"
					></base-button>
				</li>
			</ul>
		</div>
		<div class="positioning">
			<SaveUnsavePopupMessage
				v-for="message in popupMessages"
				:key="message.id"
				:typeid="message.postid"
			>
				{{ message.state }}
			</SaveUnsavePopupMessage>
		</div>
	</div>
</template>
<script>
import BaseButton from '../../../BaseComponents/BaseButton.vue';
import SaveUnsavePopupMessage from '../../../../components/PostComponents/SaveUnsavePopupMessage.vue';

export default {
	emits: ['reload'],
	components: {
		BaseButton,
		SaveUnsavePopupMessage,
	},
	// @vuese
	// userModerators is an array of useModerators subreddit (name of subreddit , number of members , joined or not )
	props: {
		userModerators: {
			type: Array,
			required: true,
		},
		state: {
			type: String,
			required: true,
		},
	},
	// @vuese
	// at mounting we loop for each moderator to add button text if joined or not
	mounted() {
		// console.log(this.userModerators);
		this.userModerators.forEach((element) => {
			element.buttonText = 'joined';
			if (!element.followed) element.buttonText = 'join';
		});
	},
	data() {
		return {
			// userModerators: '',
			popupMessages: [],
		};
	},
	watch: {
		/**
		 * @vuese
		 * we watch changes of to set again if change happened button text
		 * @arg no arg
		 */
		userModerators() {
			this.userModerators.forEach((element) => {
				element.buttonText = 'joined';
				if (!element.followed) element.buttonText = 'join';
			});
		},
	},
	computed: {},
	methods: {
		/**
		 * @vuese
		 * at hover in button we chage button text if joined to leave
		 * @arg no arg
		 */
		hoverButton(key) {
			this.userModerators.forEach((element) => {
				if (element.subredditName == key) {
					if (element.followed) {
						element.buttonText = 'leave';
					}
				}
			});
		},
		/**
		 * @vuese
		 * we reset button text we unhover
		 * @arg no arg
		 */
		unHoverButton() {
			this.userModerators.forEach((element) => {
				if (element.followed) {
					element.buttonText = 'joined';
				}
			});
		},
		/**
		 * @vuese
		 * at clicking on the button we change it state  joined <-> join
		 * @arg no arg
		 */
		changeButtonState(key, id) {
			if (this.state == 'unauth') {
				this.$router.push('/');
				return;
			}
			this.userModerators.forEach((element) => {
				if (element.subredditName == key) {
					if (element.followed) {
						element.buttonText = 'join';
						this.leaveSubreddit(key);
					} else {
						element.buttonText = 'leave';
						this.joinsubreddit(id, key);
					}
					element.followed = !element.followed;
				}
			});
		},
		emitPopup(id, message) {
			this.popupMessages.push({
				id: this.popupMessages.length,
				postid: id,
				type: 'post',
				state: message,
			});
			setTimeout(() => {
				this.popupMessages.shift();
			}, 10000);
		},
		async joinsubreddit(id, key) {
			// this.toogleJoin();
			console.log('join');
			let response = -1;
			const accessToken = localStorage.getItem('accessToken');
			response = await this.$store.dispatch('community/joinSubreddit', {
				message: '',
				subredditId: id,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			if (response == 200) {
				this.emitPopup('1', `Successfully joined ${key}`);
			} else {
				this.emitPopup('1', 'error occured');
				this.userModerators.forEach((element) => {
					if (element.subredditName == key) {
						if (element.followed) {
							element.buttonText = 'join';
						} else {
							element.buttonText = 'leave';
						}
						element.followed = !element.followed;
					}
				});
			}
		},
		async leaveSubreddit(subredditName) {
			let response;
			const accessToken = localStorage.getItem('accessToken');
			response = await this.$store.dispatch('community/leaveSubreddit', {
				subredditName: subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			if (response == 200) {
				this.emitPopup('1', `Successfully left ${subredditName}`);
			} else {
				this.emitPopup('1', 'error owner cannot left');
				this.userModerators.forEach((element) => {
					if (element.subredditName == subredditName) {
						if (element.followed) {
							element.buttonText = 'join';
						} else {
							element.buttonText = 'leave';
						}
						element.followed = !element.followed;
					}
				});
			}
		},
	},
};
</script>
<style scoped>
ul {
	flex-flow: row wrap;
}
.mod-card {
	margin-top: 16px;
	background-color: var(--main-white-color);
	width: 100%;
	border: 1px solid #ccc;
	border-radius: 4px;
}
.mod-header {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	border-radius: 3px 3px 0 0;
	color: var(--color-dark-4);
	display: flex;
	padding: 0 12px 12px;
}
.mod-header h2 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	font-weight: 700;
}
.mod-list {
	padding: 12px;
}
ul,
li,
p {
	list-style: none;
	text-decoration: none;
	margin: 0;
	padding: 0;
}
.mod-list i {
	display: inline-block;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: var(--color-blue-2);
	margin-right: 9px;
	position: relative;
}
.mod-list i::after {
	content: 'r';
	color: var(--main-white-color);
	background-color: transparent;
	width: 30px;
	height: 30px;
	position: absolute;
	font-size: 30px;
	z-index: 5;
	left: 0;
	top: 0;
	transform: translate(25%, -30%);
}
li {
	display: flex;
	width: 100%;
	margin-bottom: 12px;
}
span {
	display: flex;
	flex-direction: column;
	flex-basis: 1;
	flex-grow: 1;
	justify-content: flex-start;
	align-items: flex-start;
	color: var(--color-dark-4);
}
a,
p {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	color: var(--color-dark-4);
}
li span a:hover {
	text-decoration: underline;
}
.join-button {
	background-color: var(--color-blue-2);
	border: 1px solid var(--color-blue-2);
	border-radius: 9999px;
	color: var(--main-white-color);
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
	margin-right: 8px;
	padding: 4px 16px;
	text-align: center;
	line-height: 16px;
	border: none;
	width: 104px;
	height: 30px;
}
.joined-button {
	background-color: var(--main-white-color);
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	position: relative;
}
.joined-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background: var(--color-blue-2);
	opacity: 0;
}
.joined-button:hover::before {
	opacity: 0.04;
}
span.post-nsfw {
	border: 1px solid #a4a7a8;
	/* color: #a4a7a8; */
	display: inline-block;
	/* height: 16px; */
	font-size: 12px;
	font-weight: 500;
	/* line-height: 16px; */
	border-radius: 2px;
	margin-right: 5px;
	line-height: 14px;
	padding: 0 4px;
	border: 1px solid rgb(255, 88, 91) !important;
	color: rgb(255, 88, 91) !important;
}
span.post-nsfw p {
	color: rgb(255, 88, 91) !important;
}
.positioning {
	position: fixed;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* right: 2000px; */
	left: 0;
	display: flex;
	flex-direction: column;
}
</style>
