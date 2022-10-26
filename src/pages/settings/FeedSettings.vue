<template>
	<div class="feed-settings-page">
		<div class="settings-block">
			<h2 class="h2-main-title">Feed Settings</h2>
			<h3 class="h3-main-title">CONTENT PREFERENCES</h3>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Adult content</h3>
					</label>
					<p class="p-title-description">
						Enable to view adult and NSFW (not safe for work) content in your
						feed and search results.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Safe browsing mode</h3>
					</label>
					<p class="p-title-description">
						Blur thumbnails and media preview for anything labeled NSFW (not
						safe for work).
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Enable home feed recommendations</h3>
					</label>
					<p class="p-title-description">
						Allow us to introduce recommended posts in your home feed.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Enable live recommendations</h3>
					</label>
					<p class="p-title-description">
						Allow us to feature recommended live events at the top of your home
						feed.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Autoplay media</h3>
					</label>
					<p class="p-title-description">
						Play videos and gifs automatically when in the viewport.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Reduce Animations</h3>
					</label>
					<p class="p-title-description">
						Reduce animations on posts, comments, and feeds.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Community themes</h3>
					</label>
					<p class="p-title-description">
						Use custom themes for all communities. You can also turn this off on
						a per community basis.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Community content sort</h3>
					</label>
					<p class="p-title-description">
						Choose how you would like content organized in communities you
						visit. This will not affect global feeds such as Home, or Popular.
					</p>
				</div>
				<div class="items-meny-curser" @click="itemsMenuOneFunction">
					<span class="items-span">{{ FirstitemChoice }}</span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-caret-down-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
							/>
						</svg>
					</span>
					<subMenu
						:titles="['Hot', 'New', 'Top', 'Rising']"
						:display="ShowFirstitemChoice"
						@change-title="changeFirstChoiceItem"
						clicked-prop="Hot"
					/>
				</div>
			</div>
			<div class="option-block new-option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Remember per community</h3>
					</label>
					<p class="p-title-description">
						Enable if you would like each community to remember and use the last
						content sort you selected for that community.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Global content view</h3>
					</label>
					<p class="p-title-description">
						Choose how you would like content displayed in feeds. This control
						is also found above your feed.
					</p>
				</div>
				<div class="items-meny-curser" @click="itemsMenuTwoFunction">
					<span class="items-span">{{ SecitemChoice }}</span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-caret-down-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
							/>
						</svg>
					</span>
					<subMenu
						:titles="['Card', 'Classic', 'Compact']"
						:display="ShowSecitemChoice"
						@change-title="changeSecChoiceItem"
						clicked-prop="Card"
					/>
				</div>
			</div>
			<div class="option-block new-option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Remember per community</h3>
					</label>
					<p class="p-title-description">
						Enable if you would like each community to remember and use the last
						content sort you selected for that community.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Open posts in new tab</h3>
					</label>
					<p class="p-title-description">
						Enable to always open posts in a new tab.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
			<h3 class="h3-main-title">CONTENT PREFERENCES</h3>
			<div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Default to markdown</h3>
					</label>
					<p class="p-title-description">
						When posting, your input will default to markdown text instead of
						fancy pants.
					</p>
				</div>
				<div class="second-half">
					<switch-button></switch-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SwitchButton from '../../components/SwitchButton.vue';
import SubMenu from '../../components/BaseComponents/SubMenu.vue';
export default {
	components: {
		SwitchButton,
		SubMenu,
	},
	data() {
		return {
			FirstitemChoice: 'Hot',
			ShowFirstitemChoice: false,
			SecitemChoice: 'Card',
			ShowSecitemChoice: false,
		};
	},
	methods: {
		itemsMenuOneFunction() {
			this.ShowFirstitemChoice = !this.ShowFirstitemChoice;
		},
		changeFirstChoiceItem(item) {
			this.FirstitemChoice = item;
		},
		itemsMenuSecFunction() {
			this.ShowSecitemChoice = !this.ShowSecitemChoice;
		},
		changeSecChoiceItem(item) {
			this.SecitemChoice = item;
		},
	},
};
</script>

<style scoped>
.option-block {
	display: flex;
	flex-flow: row wrap;
	margin-bottom: 32px;
	justify-content: space-between;
}
label {
	display: inline-block;
}
.first-half {
	display: flex;
	flex-direction: column;
	margin-right: 8px;
	max-width: 80%;
}
.second-half-menu {
	cursor: pointer;
}
.items-div {
	align-items: center;
	display: flex;
}
.items-button {
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 24px;
	text-transform: uppercase;
	border: none;
	padding: 4px;
}
.items-meny-curser {
	cursor: pointer;
	position: relative;
}
/* .items-meny-curser::before {
	-webkit-font-smoothing: antialiased;
	font-family: redesignFont2020;
	-moz-osx-font-smoothing: grayscale;
	content: '\f2b6';
} */
.items-span {
	font-size: 11.2px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 24px;
	text-transform: uppercase;
	border: none;
	padding: 4px;
	color: var(--color-blue);
}
.new-option-block {
	padding-left: 32px;
}
</style>
