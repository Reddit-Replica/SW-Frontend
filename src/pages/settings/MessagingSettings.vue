<template>
	<div class="settings-page">
		<div class="settings-block">
			<h2 class="h2-main-title">Chat & Messaging</h2>

			<div class="section">
				<div>
					<h3 class="h3-title">Who can send you chat requests</h3>
				</div>
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
						@change-title="changeFirstTitle"
						clicked-prop="Everyone"
					/>
				</div>
			</div>

			<div class="section">
				<div>
					<h3 class="h3-title">Who can send you private messages</h3>
					<p class="p-title-description">
						Heads up—Reddit admins and moderators of communities you’ve joined
						can message you even if they’re not approved.
					</p>
				</div>
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
						@change-title="changeSecondTitle"
						clicked-prop="Everyone"
					/>
				</div>
			</div>

			<div class="section">
				<div>
					<h3 class="h3-title">Invite someone to chat</h3>
					<p class="p-title-description">
						Copy a link to invite someone to a direct chatroom with you.
					</p>
				</div>
				<div>
					<base-button class="section-button" button-text="Copy link" />
				</div>
			</div>

			<div class="section">
				<div>
					<h3 class="h3-title">Mark all as read</h3>
					<p class="p-title-description">
						Mark all conversations and invites as read.
					</p>
				</div>
				<div>
					<base-button class="section-button" button-text="Mark as Read" />
				</div>
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
};
</script>

<style scoped>
.settings-page {
	min-height: 45.7rem;
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
.icon {
	height: 1rem;
	width: 1rem;
	margin: 1rem;
}
</style>
