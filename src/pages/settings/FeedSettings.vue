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
					<switch-button
						id="button-one"
						@checked="getadultContent"
						v-if="create"
						:val="adultContent"
					></switch-button>
				</div>
			</div>
			<!-- <div class="option-block">
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
					<switch-button id="button-two"></switch-button>
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
					<switch-button id="button-three"></switch-button>
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
					<switch-button id="button-four"></switch-button>
				</div>
			</div> -->
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
					<switch-button
						id="button-five"
						@checked="getautoplayMedia"
						:val="autoplayMedia"
						v-if="create"
					></switch-button>
				</div>
			</div>
			<!-- <div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Reduce Animations</h3>
					</label>
					<p class="p-title-description">
						Reduce animations on posts, comments, and feeds.
					</p>
				</div>
				<div class="second-half">
					<switch-button id="button-six"></switch-button>
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
					<switch-button id="button-seven"></switch-button>
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
						id="sub-menu-one"
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
					<switch-button id="button-eight"></switch-button>
				</div>
			</div> -->
			<!-- <div class="option-block">
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
			</div> -->
			<!-- <div class="option-block">
				<div class="first-half">
					<label>
						<h3 class="h3-title">Open posts in new tab</h3>
					</label>
					<p class="p-title-description">
						Enable to always open posts in a new tab.
					</p>
				</div>
				<div class="second-half">
					<switch-button id="button-nine"></switch-button>
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
					<switch-button id="button-ten"></switch-button>
				</div>
			</div>-->
		</div>
		<div class="positioning">
			<SaveUnsavePopupMessage
				v-for="message in savedUnsavedPosts"
				:key="message.id"
				:type="message.type"
				:state="message.state"
				:typeid="message.postid"
				@undo-action="undoSaveUnsave"
			></SaveUnsavePopupMessage>
		</div>
	</div>
</template>

<script>
import SwitchButton from '../../components/BaseComponents/SwitchButton.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue'; //
// import SubMenu from '../../components/BaseComponents/SubMenu.vue';
export default {
	async created() {
		await this.getSettings();
		console.log('after creation');
		console.log(this.adultContent);
		console.log(this.autoplayMedia);
		this.create = true;
	},
	components: {
		SwitchButton,
		SaveUnsavePopupMessage,
		// SubMenu,
	},
	data() {
		return {
			// FirstitemChoice: 'Hot',
			// ShowFirstitemChoice: false,
			// SecitemChoice: 'Card',
			// ShowSecitemChoice: false,
			adultContent: false,
			autoplayMedia: false,
			create: false,
			savedUnsavedPosts: [],
		};
	},
	methods: {
		// @vuese
		// get adult Content
		// @arg The argument is a Boolean value representing adult Content
		getadultContent(value) {
			this.adultContent = value;
			console.log('this.adultContent');
			console.log(this.adultContent);
			this.changeadultContent();
		},
		// @vuese
		// get autoplay Media
		// @arg The argument is a Boolean value representing  autoplay Media
		getautoplayMedia(value) {
			this.autoplayMedia = value;
			console.log('this.autoplayMedia');
			console.log(this.autoplayMedia);
			this.changegetautoplayMedia();
		},
		// @vuese
		// send request to change adult Content
		async changeadultContent() {
			const actionPayload = {
				adultContent: this.adultContent,

				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeneadultContent',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
		// @vuese
		// send request to change autoplay Media
		async changegetautoplayMedia() {
			const actionPayload = {
				autoplayMedia: this.autoplayMedia,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeautoplayMedia',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
		// @vuese
		//send a request to get the settings
		async getSettings() {
			const actionPayload = {
				baseurl: this.$baseurl,
			};
			console.log(actionPayload);
			try {
				const response = await this.$store.dispatch(
					'setting/fetchAccountSettings',
					actionPayload
				);
				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
			this.setting = await this.$store.getters['setting/getAccountSettings'];
			console.log(this.setting);
			this.adultContent = this.setting.adultContent;
			this.autoplayMedia = this.setting.autoplayMedia;
			console.log(this.adultContent);
			console.log(this.autoplayMedia);
		},
		// @vuese
		//send a request to get the settings
		doneSuccessfully(title) {
			this.savePost(title);
		},
		// @vuese
		// Used to show handle save action popup
		// @arg the argument is the title used in show popup
		savePost(title) {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: 'settings',
				state: title,
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
		// @vuese
		// Used to show handle unsave action popup
		// @arg no argument
		unsavePost() {
			this.savedUnsavedPosts.push({
				id: this.savedUnsavedPosts.length,
				postid: '1',
				type: 'post',
				state: 'unsaved',
			});
			setTimeout(() => {
				this.savedUnsavedPosts.shift();
			}, 10000);
		},
		// itemsMenuOneFunction() {
		// 	this.ShowFirstitemChoice = !this.ShowFirstitemChoice;
		// },
		// changeFirstChoiceItem(item) {
		// 	this.FirstitemChoice = item;
		// },

		// itemsMenuSecFunction() {
		// 	this.ShowSecitemChoice = !this.ShowSecitemChoice;
		// },
		// changeSecChoiceItem(item) {
		// 	this.SecitemChoice = item;
		// },
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
.positioning {
	position: fixed;
	bottom: 0;
	/* display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	display: flex;
	flex-direction: column; */
}
</style>
