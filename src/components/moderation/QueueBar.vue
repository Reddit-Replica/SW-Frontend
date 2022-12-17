<template>
	<div class="content">
		<h3 class="heading-3">
			{{ title }}
			<a
				href="https://mods.reddithelp.com/hc/en-us/articles/360009381491"
				__blank="targe"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon-info"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</a>
		</h3>
		<div class="content-menu">
			<div class="submenu">
				<div class="choice" @click="showFirstMenuFunction" id="time">
					<span class="title" :id="'title-' + titleFirst">{{
						titleFirst
					}}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-caret-down-fill icon"
						viewBox="0 0 16 16"
						id="icon-down-1"
					>
						<path
							d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
						/>
					</svg>
					<subMenu
						:titles="['Newest First', 'Older First']"
						:display="showFirstMenu"
						@change-title="changeFirstTitle"
						clicked-prop="Everyone"
					/>
				</div>
				<div
					class="choice"
					@click="showSecondMenuFunction"
					id="type"
					v-if="!(title == 'Unmoderated')"
				>
					<span class="title" :id="'title-' + titleSecond">{{
						titleSecond
					}}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-caret-down-fill icon"
						viewBox="0 0 16 16"
						id="icon-down-2"
					>
						<path
							d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
						/>
					</svg>
					<subMenu
						:titles="['Posts', 'Comments']"
						:display="showSecondMenu"
						@change-title="changeSecondTitle"
						clicked-prop="Everyone"
					/>
				</div>
			</div>
			<!-- <div class="white-bar">
				<div class="icon-white">
					<div @click="showThirdMenuFunction" id="type-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-app icon"
							viewBox="0 0 16 16"
						>
							<path
								d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z"
							/>
						</svg>
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
							:titles="[
								'Spam Filtered',
								'Has Reports',
								'Self Posts',
								'Posts',
								'Comments',
								'Chat Posts',
							]"
							:display="showThirdMenu"
						/>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</template>

<script>
import SubMenu from '../../components/BaseComponents/SubMenu.vue';
export default {
	components: { SubMenu },
	computed: {
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
	},
	props: {
		// @vuese
		// title for bar
		// @type string
		title: {
			type: String,
			default: '',
			required: true,
		},
	},
	data() {
		return {
			showFirstMenu: false,
			showSecondMenu: false,
			showThirdMenu: false,
			titleFirst: 'Newest First',
			titleSecond: 'Posts',
		};
	},
	watch: {
		titleFirst(value) {
			if (value == 'Older First' && this.title == 'Unmoderated') {
				this.unmod('old');
			} else if (value == 'Newest First' && this.title == 'Unmoderated') {
				this.unmod('new');
			} else if (value == 'Older First' && this.title == 'Edited') {
				this.edit('old');
			} else if (value == 'Newest First' && this.title == 'Edited') {
				this.edit('new');
			} else if (value == 'Older First' && this.title == 'Spam') {
				this.spam('old');
			} else if (value == 'Newest First' && this.title == 'Spam') {
				this.spam('new');
			}
		},
		titleSecond(value) {
			this.editing(value);
			this.spaming(value);
		},
	},
	emits: ['getarr'],
	methods: {
		async spaming(value) {
			try {
				let temp;
				if (this.titleFirst == 'Newest First') temp = 'new';
				else temp = 'old';
				await this.$store.dispatch('moderation/loadListOfSpams', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					sortSpam: temp,
					only: value,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		async spam(value) {
			try {
				let temp;
				if (this.titleSecond == 'Posts') temp = 'posts';
				else temp = 'comments';
				await this.$store.dispatch('moderation/loadListOfSpams', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					sortSpam: value,
					only: temp,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		editing(value) {
			this.$emit('getarr', value);
		},
		async edit(val) {
			try {
				await this.$store.dispatch('moderation/EditedPosts', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					sort: val,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		//show menu of time
		// @arg no argument
		showFirstMenuFunction() {
			this.showFirstMenu = !this.showFirstMenu;
			this.showSecondMenu = false;
			this.showThirdMenu = false;
		},
		// @vuese
		//show menu of type posts or comments
		// @arg no argument
		showSecondMenuFunction() {
			this.showSecondMenu = !this.showSecondMenu;
			this.showFirstMenu = false;
			this.showThirdMenu = false;
		},
		// @vuese
		//show menu of type
		// @arg no argument
		showThirdMenuFunction() {
			this.showThirdMenu = !this.showThirdMenu;
			this.showFirstMenu = false;
			this.showSecondMenu = false;
		},
		// @vuese
		//change title choosen value in First Menu
		// @arg The argument is a string value representing choosen title in first sub menu
		changeFirstTitle(title) {
			this.titleFirst = title;
		},
		// @vuese
		//change title choosen value in second Menu
		// @arg The argument is a string value representing choosen title in second sub menu
		changeSecondTitle(title) {
			this.titleSecond = title;
		},
		async unmod(value) {
			try {
				await this.$store.dispatch('moderation/unModerated', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
					sort: value,
				});
				window.location.reload();
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
};
</script>

<style scoped>
.content-menu {
	margin-left: 2rem;
}
.choice {
	position: relative;
	cursor: pointer;
	color: var(--color-dark-3);
	font-size: 1.2rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 2.4rem;
	text-transform: uppercase;
	margin-right: 2rem;
}
.submenu {
	display: flex;
	height: 4rem;
	min-width: 26rem;
	align-items: center;
}
.white-bar {
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.6rem;
	background-color: var(--color-white-1);
	color: var(--color-grey-dark-8);
	display: -ms-flexbox;
	display: flex;
	height: 3.2rem;
	margin-bottom: 0.5rem;
	padding: 2px;
	position: relative;
	align-items: center;
}
.icon-white {
	-ms-flex-align: center;
	align-items: center;
	border-right: 1px solid #edeff1;
	height: 3.2rem;
	cursor: pointer;
	display: -ms-flexbox;
	display: flex;
	padding: 0 2px 0 6px;
}
@media only screen and (max-width: 768px) {
	.content {
		padding-top: 2.4rem;
	}
}
</style>
