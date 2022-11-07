<template>
	<div class="mod-card" id="user-moderator-card">
		<div class="mod-header" id="user-moderator-header">
			<div style="padding: 12px 0 0">
				<h2>You're a moderator of these communities</h2>
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
							to=""
							:id="`moderator-name-${userModerator.subredditName}`"
							>r/{{ userModerator.subredditName }}</router-link
						>
						<p :id="`moderator-member-number-${userModerator.subredditName}`">
							{{ userModerator.numOfMembers }} member
						</p>
					</span>
					<base-button
						:id="`moderator-join-button-${userModerator.subredditName}`"
						:button-text="userModerator.buttonText"
						class="join-button"
						:class="[userModerator.joined ? 'joined-button' : '']"
						@mouseover="hoverButton(userModerator.subredditName)"
						@mouseleave="unHoverButton"
						@click="changeButtonState(userModerator.subredditName)"
					></base-button>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import BaseButton from '../../../BaseComponents/BaseButton.vue';
export default {
	components: {
		BaseButton,
	},
	props: {},
	async created() {
		await this.RequestUserData();
		this.userModerators = this.$store.getters['user/getUserData'].moderatorOf;
		console.log(this.userModerators);
		const newUserModerators = this.userModerators.map((el) => ({
			...el,
			buttonText: 'joined',
		}));
		this.userModerators = newUserModerators;
		this.userModerators.forEach((element) => {
			if (!element.joined) element.buttonText = 'join';
		});
		console.log(this.userModerators);
	},
	data() {
		return {
			userModerators: '',
		};
	},
	computed: {},
	methods: {
		hoverButton(key) {
			this.userModerators.forEach((element) => {
				if (element.subredditName == key) {
					if (element.joined) {
						element.buttonText = 'leave';
					}
				}
			});
		},
		unHoverButton() {
			this.userModerators.forEach((element) => {
				if (element.joined) {
					element.buttonText = 'joined';
				}
			});
		},
		changeButtonState(key) {
			this.userModerators.forEach((element) => {
				if (element.subredditName == key) {
					if (element.joined) {
						element.buttonText = 'join';
					} else {
						element.buttonText = 'leave';
					}
					element.joined = !element.joined;
				}
			});
		},
		async RequestUserData() {
			try {
				await this.$store.dispatch('user/getUserData', {
					baseurl: this.$baseurl,
					userName: this.$store.state.userName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
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
	background-color: #ffffff;
	width: 100%;
}
.mod-header {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	border-radius: 3px 3px 0 0;
	color: #1a1a1b;
	display: flex;
	fill: var(--newCommunityTheme-widgetColors-sidebarWidgetTitleColor);
	padding: 0 12px 12px;
}
.mod-header h2 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	font-weight: 700;
}
/* li::before {
	content: '\f174';
	width: 20px;
	height: 20px;
} */
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
	background-color: #0079d3;
	margin-right: 9px;
	position: relative;
}
.mod-list i::after {
	content: 'r';
	color: #ffffff;
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
	color: #1a1a1b;
}
a,
p {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	color: #1a1a1b;
}
li span a:hover {
	text-decoration: underline;
}
.join-button {
	background-color: #0079d3;
	border: 1px solid #0079d3;
	border-radius: 9999px;
	color: #ffffff;
	font-size: 14px;
	font-weight: 700;
	cursor: pointer;
	margin-right: 8px;
	padding: 4px 16px;
	text-align: center;
	line-height: 16px;
	border: none;
	width: 104px;
}
.joined-button {
	background-color: #ffffff;
	border: 1px solid #0079d3;
	color: #0079d3;
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
	background: #0079d3;
	opacity: 0;
}
.joined-button:hover::before {
	opacity: 0.04;
}
</style>
