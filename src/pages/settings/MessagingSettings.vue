<template>
	<div class="box">
		<h2 class="heading-2">Chat & Messaging</h2>

		<div class="setting-box">
			<div class="setting-choice">Who can send you chat requests</div>
			<div class="choice" @click="showFirstMenuFunction">
				<span class="title">{{ titleFirst }}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-caret-down-fill icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
					/>
				</svg>
				<subMenu
					:titles="['Everyone', 'Accounts Older Than 30 Days', 'Nobody']"
					:display="showFirstMenu"
					@changeTitle="changeFirstTitle"
					clicked-prop="Everyone"
				/>
			</div>
		</div>

		<div class="setting-box">
			<div class="setting-choice">Who can send you private messages</div>
			<div class="choice" @click="showSecondMenuFunction">
				<span class="title">{{ titleSecond }}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-caret-down-fill icon"
					viewBox="0 0 16 16"
				>
					<path
						d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
					/>
				</svg>
				<subMenu
					:titles="['Everyone', 'Nobody']"
					:display="showSecondMenu"
					@changeTitle="changeSecondTitle"
					clicked-prop="Everyone"
				/>
			</div>
			<div class="choice-details">
				Heads up—Reddit admins and moderators of communities you've joined can
				message you even if they're not approved.
			</div>
		</div>

		<div class="setting-box">
			<div class="setting-choice">Invite someone to chat</div>
			<button class="button">Copy link</button>
			<div class="choice-details">
				Copy a link to invite someone to a direct chatroom with you.
			</div>
		</div>

		<div class="setting-box">
			<div class="setting-choice">Mark all as read</div>
			<button class="button button-2">Mark as Read</button>
			<div class="choice-details">
				Mark all conversations and invites as read.
			</div>
		</div>
	</div>
</template>

<script>
import SubMenu from '../../components/BaseComponents/SubMenu.vue';
export default {
	components: {
		SubMenu,
	},
	data() {
		return {
			showFirstMenu: false,
			showSecondMenu: false,
			titleFirst: 'Everyone',
			titleSecond: 'Everyone',
		};
	},
	methods: {
		showFirstMenuFunction() {
			this.showFirstMenu = !this.showFirstMenu;
		},
		showSecondMenuFunction() {
			this.showSecondMenu = !this.showSecondMenu;
		},
		changeFirstTitle(title) {
			this.titleFirst = title;
		},
		changeSecondTitle(title) {
			this.titleSecond = title;
		},
	},
	created() {
		document.title = 'Reddit Settings';
	},
};
</script>

<style scoped>
.box {
	background-color: #fff;
	border-bottom: var(--line);
	min-height: 57.5rem;
	padding: 3rem 0rem 0 7.5rem;
	/* max-width: 1500px; */
	display: flex;
	flex-direction: column;
}
.heading-2 {
	margin-bottom: 3rem;
	color: var(--color-dark-1);
}
.setting-box {
	display: grid;
	grid-template-columns: repeat(2, 4fr);
	grid-template-rows: repeat(2, 4fr);
	grid-row-gap: 0rem;
	align-items: center;
	justify-content: left;
}
.setting-choice {
	font-size: 1.6rem;
	color: var(--color-dark-1);
	margin: 0;
}
.choice {
	position: relative;
}
.title {
	font-size: 1.2rem;
	cursor: pointer;
	font-weight: bold;
	text-transform: uppercase;
}
.button {
	width: 10rem;
	height: 3.5rem;
	color: var(--color-blue-2);
	font-weight: 600;
	font-size: 1.5rem;
	border: var(--line-5);
	border-radius: 20rem;
	background-color: var(--color-white-1);
}
.button:hover {
	background-color: var(--color-blue-light-2);
}
.button-2 {
	width: 13rem;
}
.choice-details {
	font-size: 1.2rem;
	margin-bottom: 3rem;
	margin-top: -1rem;
}
.icon {
	height: 1rem;
	width: 1rem;
	margin: 1rem;
}
/* 900px */
@media only screen and (max-width: 56.25em) {
	.box {
		padding: 3rem 0rem 0 3rem;
	}
}
</style>
