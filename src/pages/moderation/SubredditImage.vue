<template>
	<div class="settings-page">
		<div class="settings-block">
			<h3 class="h3-main-title" style="margin-top: 20px">IMAGES</h3>
			<div class="box-1">
				<h3 class="h3-title">Subreddit picture and banner image</h3>
				<p class="p-title-description">Images must be .png or .jpg format</p>
			</div>
			<button class="add-more">
				<input
					id="image2"
					type="file"
					accept="image/png,image/jpg"
					hidden
					@change="loadProfilePic"
				/>
				<label class="new" for="image2" v-if="!image">
					<svg class="svg" viewBox="0 0 20 20" version="1.1">
						<g stroke="none">
							<g transform="translate(-34.000000, -136.000000)" fill="inherit">
								<path
									d="M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
								></path>
							</g>
						</g>
					</svg>
				</label>
				<label class="one-image" for="image2" v-if="image">
					<img
						:src="image"
						alt=""
						id="profile-picture_user"
						style="width: 100%; height: 100%"
					/>
				</label>
			</button>
			<button class="add-more2">
				<input
					id="cover-picture"
					type="file"
					accept="image/png,image/jpg"
					hidden
					@change="loadCoverPic"
				/>
				<label for="cover-picture" v-if="!cover">
					<svg class="svg" viewBox="0 0 20 20" version="1.1">
						<g stroke="none">
							<g transform="translate(-34.000000, -136.000000)" fill="inherit">
								<path
									d="M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
								></path>
							</g>
						</g>
					</svg>
				</label>
				<label class="big-image" for="cover-picture" v-if="cover">
					<img
						:src="cover"
						alt=""
						id="profile-picture_user"
						style="width: 100%; height: 100%"
					/>
				</label>
			</button>
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
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue'; //
export default {
	async created() {
		await this.getSettings();
		await this.getUserData();
		this.socialData = await this.$store.getters['user/getUserData'];
		if (this.userData) {
			if (this.userData.picture != '')
				this.image = this.$baseurl + '/' + this.userData.picture;
			if (this.userData.banner != '')
				this.cover = this.$baseurl + '/' + this.userData.banner;
		}

		this.create = true;
	},
	computed: {
		user() {
			return this.$store.getters['user/getUserData'];
		},
	},
	// },
	components: {
		SaveUnsavePopupMessage,
	},
	props: {},
	data() {
		return {
			displayName: '',
			about: '',
			// havePassword: false,
			nsfw: null,
			allowToFollowYou: null,
			userData: null,
			create: false,
			savedUnsavedPosts: [],
			image: null,
			cover: null,
			nameCount: 30,
			aboutCount: 200,
			socialData: null,
			// links: [
			// 	{
			// 		imageUrl:
			// 			'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png',
			// 		title: 'Reddit',
			// 		placeholder1: 'r/community, u/user',
			// 		placeholder2: '',
			// 	},
			// ],
			// images: [
			// 	{
			// 		image: null,
			// 		imageUrl: null,
			// 	},
			// 	{
			// 		image: null,
			// 		imageUrl: null,
			// 	},
			// ],
		};
	},
	watch: {
		user(val) {
			this.userData = val;
		},
		displayName(value) {
			this.nameCount = 30;
			this.displayName = value;
			this.nameCount = this.nameCount - this.displayName.length;
		},
		about(value) {
			this.aboutCount = 200;
			this.about = value;
			this.aboutCount = this.aboutCount - this.about.length;
		},
	},
	methods: {
		//@vuese
		//Change images
		//Index of image to change
		// onChange(e, index) {
		// 	const file = e.target.files[0];
		// 	this.images[index].image = file;
		// 	this.images[index].imageUrl = URL.createObjectURL(file);
		// },
		async getdisplayName() {
			const actionPayload = {
				displayName: this.displayName,
				baseurl: this.$baseurl,
			};
			console.log('enter get user data');
			try {
				const response = await this.$store.dispatch(
					'setting/changedisplayName',
					actionPayload
				);

				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				console.log(this.err);
			}
		},
		async getAbout() {
			const actionPayload = {
				about: this.about,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeAbout',
					actionPayload
				);

				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				console.log(this.err);
			}
		},
		async getNsfw(value) {
			this.nsfw = value;
			console.log('this.nsfw');
			console.log(this.nsfw);
			const actionPayload = {
				nsfw: this.nsfw,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeNsfw',
					actionPayload
				);

				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				console.log(this.err);
			}
		},

		async getAllowfollow(value) {
			this.allowToFollowYou = value;
			console.log('this.allowToFollowYou');
			console.log(this.allowToFollowYou);
			const actionPayload = {
				allowToFollowYou: this.allowToFollowYou,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/changeAllowfollow',
					actionPayload
				);

				if (response == 200) {
					console.log(response);
					console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				console.log(this.err);
			}
		},

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
			this.displayName = this.setting.displayName;
			this.about = this.setting.about;
			this.nsfw = this.setting.nsfw;
			this.allowToFollowYou = this.setting.allowToFollowYou;
			console.log(this.displayName);
			console.log(this.about);
			console.log(this.nsfw);
			console.log(this.allowToFollowYou);
		},
		////////////////////////////////
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
		async loadProfilePic(e) {
			// const file2 = await e.target.files[0];
			const file1 = e.target.files;
			const file = file1[0];
			this.image = URL.createObjectURL(file);

			// const file = await this.$refs.profileFile.files[0];
			const profilePictureUrl = await URL.createObjectURL(file);
			// console.log(profilePictureUrl);
			// document.querySelector('#profile-picture_user').src = profilePictureUrl;
			// document.querySelector(
			// 	'#image2'
			// ).style.backgroundImage = `url(${profilePictureUrl})`;
			try {
				await this.$store.dispatch('user/AddProfilePicture', {
					baseurl: this.$baseurl,
					file,
					profilePictureUrl: this.$baseurl + profilePictureUrl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			// try {
			// 	await this.$store.dispatch('user/getUserData', {
			// 		baseurl: this.$baseurl,
			// 		userName: this.$route.params.userName,
			// 	});
			// } catch (error) {
			// 	this.error = error.message || 'Something went wrong';
			// }
		},
		/**
		 * @vuese
		 * this function for upload an Cover Image for testing only after connecting to APi
		 * it will be removed
		 * @arg no arg
		 */
		async loadCoverPic(e) {
			const file = e.target.files[0];
			//const file2 = this.$refs.coverFile.files[0];
			const bannerImageUrl = URL.createObjectURL(file);
			this.cover = URL.createObjectURL(file);
			// const bannerImageUrl = URL.createObjectURL(file);
			// document.querySelector(
			// 	'#cover-picture'
			// ).style.backgroundImage = `url(${bannerImageUrl})`;
			let responseStatus;
			try {
				responseStatus = await this.$store.dispatch('user/AddProfileBanner', {
					baseurl: this.$baseurl,
					file,
					bannerImageUrl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			console.log(responseStatus);
		},
		async getUserData() {
			const actionPayload = {
				userName: localStorage.getItem('userName'),
				baseurl: this.$baseurl,
			};
			console.log(actionPayload);
			let response = null;
			try {
				response = await this.$store.dispatch(
					'user/getUserTempData',
					actionPayload
				);
				if (response) {
					// this.userData = this.$store.getters['user/getUserData'];
					this.userData = response;
					console.log(response);
					console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
	},
};
</script>

<style scoped>
.settings-block {
	margin-top: 5rem;
}
.bi-plus {
	margin-right: 8px;
}
.box-images {
	display: flex;
	height: 120px;
}
.box-image-1 {
	height: 100%;
	margin: 0;
	width: 120px;
	margin: 0 12px 0 0;
	overflow: hidden;
}
.box-image-2 {
	height: 100%;
	margin: 0;
	width: 412px;
}
.box-image-label-noimage {
	border: 1px dashed #d7d7d7;
	box-sizing: border-box;
	padding: 4px;
	align-items: center;
	background-color: var(--color-grey-light-1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
}
.box-image-label-both {
	cursor: pointer;
	border-radius: 8px;
	height: 100%;
	width: 100%;
	position: relative;
}
.drag-drop-title {
	color: var(--color-blue-2);
	font-size: 11px;
}
.bold {
	font-weight: 700;
}
.initial-image-input {
	display: none;
}
.image-input {
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
}

.moderation-link {
	font-size: 15px;
	color: black;
}
a {
	text-decoration: underline;
}
.image {
	height: 100%;
	width: 100%;
	object-fit: cover;
	object-position: top;
	box-sizing: border-box;
	border: 1px solid lightgray;
	border-radius: 8px;
	/* z-index: 1; */
}
.icon-circle {
	align-items: center;
	background-color: var(--color-white-1);
	border: 1px solid var(--color-blue-2);
	border-radius: 50%;
	display: flex;
	height: 36px;
	justify-content: center;
	width: 36px;
	box-sizing: border-box;
}
.icon-before {
	margin-top: -8px;
	margin-bottom: 4px;
	position: relative;
}
.icon-after {
	right: 8px;
	bottom: 8px;
	position: absolute;
}
.bi-plus-lg {
	color: var(--color-blue-2);
}
.nsfw-dialog-paragraph {
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	max-width: 500px;
	margin-bottom: 16px;
}
.dialog-buttons {
	display: flex;
	justify-content: flex-end;
}
.dialog-button {
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 32px;
	text-transform: uppercase;
	position: relative;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
	border: 1px solid;
	margin-left: 8px;
}
.dialog-button-white {
	border-color: var(--color-blue-2);
	color: var(--color-blue-2);
	fill: var(--color-white-1);
	background-color: var(--color-white-1);
}
.dialog-button-blue {
	border-color: var(--color-blue-2);
	color: var(--color-white-1);
	fill: var(--color-blue-2);
	background-color: var(--color-blue-2);
}
.social-links-dialog {
	display: flex;
	flex-wrap: wrap;
}
/* .social-link {
	margin: 6px 2px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	align-items: center;
	background-color: var(--color-grey-light-2);
	border-radius: 100px;
	color: var(--color-dark-1);
	cursor: pointer;
	display: flex;
	height: 20px;
	margin-right: 8px;
	padding: 10px 12px;
	white-space: nowrap;
	box-sizing: content-box;
} */
/* .social-link-image {
	margin-right: 8px;
} */
.bi-arrow-left {
	cursor: pointer;
	color: var(--color-grey-dark-1);
}
.save-button {
	font-size: 14px;
	font-weight: 700;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--color-white-1);
}
.h2-social-links {
	color: var(--color-dark-1);
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	margin: 0;
	flex: 1 1 100%;
	width: 100%;
	text-align: center;
}
.positioning {
	position: fixed;
	bottom: 0;
}

.add-more {
	align-items: center;
	border: 1px dashed #d6d6d6;
	border-radius: 4px;
	/*display: -ms-flexbox;
	display: flex;*/
	height: 100px;
	/*-ms-flex-pack: center;
	justify-content: center;*/
	width: 100px;
	background-color: white;
	margin: 20px;
}
.add-more2 {
	align-items: center;
	border: 1px dashed #d6d6d6;
	border-radius: 4px;
	height: 100px;
	width: 50%;
	background-color: white;
	margin: 20px;
}

.svg {
	fill: #d6d6d6;
	height: 36px;
	opacity: 0.8;
	width: 36px;
}
.add-more:hover .svg {
	fill: black;
}
.add-more2:hover .svg {
	fill: black;
}
/*.big-image {
	align-items: center;
	background-color: #f6f7f8;
	border-radius: 4px;
	display: flex;
	height: 250px;
	justify-content: center;
	margin: 12px 12px 12px 0;
	width: 70%;
}*/
.bottom-preview .big-image img {
	width: 100%;
	height: 100%;
}
.bottom-preview {
	position: absolute;
	top: 40%;
	left: 0%;
	display: flex;
}
.image-caption {
	resize: none;
	box-sizing: border-box;
	overflow: hidden;
	/*display: block;*/
	outline: none;
	border: 1px solid #edeff1;
	border-radius: 4px;
	color: #878a8c;
	margin: 10px;
	display: flex;
	padding: 30px;
}
.images-preview {
	display: inline-flex;
	/*display: inline-flex;*/
	overflow-x: auto;
	width: 100%;

	position: absolute;
	top: 5%;
	/*display: inline-flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: wrap;*/
	max-height: 200px;
}
.out {
	overflow: auto;

	display: block;
	box-sizing: border-box;
	width: 100%;
}
.one-image {
	padding: 10px;
	display: block;
	box-sizing: border-box;
	width: 100px;
	height: 100px;
	border-radius: 4px;
	border: 1px solid black;
}
.big-image {
	padding: 10px;
	display: block;
	box-sizing: border-box;
	height: 100px;
	border-radius: 4px;
	border: 1px solid black;
}

.dot {
	text-align: center;
	padding: 2px;
	height: 15px;
	color: white;
	width: 15px;
	background-color: black;
	border-radius: 50%;
	display: inline-block;
	position: absolute;
	text-align: center;
	left: 85%;
	top: 0%;
	z-index: 1;
	cursor: pointer;
}
@media only screen and (max-width: 768px) {
	.settings-block {
		margin-top: 10rem;
	}
}
</style>
