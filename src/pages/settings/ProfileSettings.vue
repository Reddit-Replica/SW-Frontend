<template>
	<div class="settings-page" id="1">
		<div class="settings-block" id="2">
			<h2 class="h2-main-title" id="3">Customize profile</h2>
			<h3 class="h3-main-title" id="4">PROFILE INFORMATION</h3>

			<div class="box box-flex-column" id="5">
				<div class="box-1">
					<h3 class="h3-title" id="6">Display name (optional)</h3>
					<p class="p-title-description" id="7">
						Set a display name. This does not change your username.
					</p>
				</div>
				<div class="box-2" id="8">
					<input
						placeholder="Display name (optional)"
						maxlength="30"
						type="text"
						name="dispalyname"
						id="dispalyname"
						class="input-field"
						v-model="displayName"
						@blur="getdisplayName"
					/>
					<div class="p-comment" id="9">
						{{ nameCount }} Characters remaining
					</div>
				</div>
			</div>

			<div class="box box-flex-column" id="10">
				<div class="box-1" id="11">
					<h3 class="h3-title" id="12">About (optional)</h3>
					<p class="p-title-description" id="13">
						A brief description of yourself shown on your profile.
					</p>
				</div>
				<div class="box-2" id="14">
					<textarea
						placeholder="About (optional)"
						maxlength="200"
						name="about"
						id="about"
						rows="4"
						style="resize: vertical; display: block; width: 100%; padding: 10px"
						v-model="about"
						@blur="getAbout"
					></textarea>
					<div class="p-comment">{{ aboutCount }} Characters remaining</div>
				</div>
			</div>

			<!--  -->
			<h3 class="h3-title" id="15">Social links (5 max)</h3>
			<p class="p-title-description" id="16">
				People who visit your profile will see your social links.
			</p>
			<sociallinks-block
				style="margin: 20px 0"
				:social-data="getUserDataGetter.userData.socialLinks"
				v-if="socialData"
				id="17"
			></sociallinks-block>

			<h3 class="h3-main-title" style="margin-top: 20px" id="18">IMAGES</h3>

			<!-- <img :src="image" class="one-image" alt=""  /> -->

			<!-- <input
				id="image2"
				type="file"
				accept="image/png,image/gif,image/jpeg,image/webp,video/mp4,video/quicktime"
				multiple
				hidden
				@change="fileChange"
			/> -->
			<div class="box-1" id="19">
				<h3 class="h3-title" id="20">Profile picture and banner image</h3>
				<p class="p-title-description" id="21">
					Images must be .png or .jpg format
				</p>
			</div>
			<button class="add-more" id="22">
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
			<!-- <div class="box box-flex-column">
				<div class="box-1">
					<h3 class="h3-title">Profile picture and banner image</h3>
					<p class="p-title-description">Images must be .png or .jpg format</p>
				</div>
				<div class="box-2">
					<div class="box-images">
						<div
							class="box-image-1"
							@click="$refs.image1.click()"
							id="image-1-profile-settings"
						>
							<label
								:class="{ 'box-image-label-noimage': !images[0].imageUrl }"
								class="box-image-label-both"
								for="profile-picture"
							>
								<div v-if="!images[0].imageUrl" class="icon-circle icon-before">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-plus-lg"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
										/>
									</svg>
								</div>
								<div v-if="!images[0].imageUrl" class="drag-drop-title">
									Drag and Drop or Upload
									<span class="bold">Profile</span> Image
								</div>
								<img
									v-if="images[0].imageUrl"
									:src="images[0].imageUrl"
									class="image"
								/>
								<div class="initial-image-input">
									<input
										class="image-input"
										type="file"
										name="banner"
										accept="image/x-png,image/jpeg"
										ref="image1"
										@change="onChange($event, 0)"
									/>
								</div>
								<div v-if="images[0].imageUrl" class="icon-circle icon-after">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-plus-lg"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
										/>
									</svg>
								</div>
							</label>
						</div>
						<div
							class="box-image-2"
							@click="$refs.image2.click()"
							id="image-2-profile-settings"
						>
							<label
								:class="{ 'box-image-label-noimage': !images[1].imageUrl }"
								class="box-image-label-both"
								for="banner"
							>
								<div v-if="!images[1].imageUrl" class="icon-circle icon-before">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-plus-lg"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
										/>
									</svg>
								</div>
								<div v-if="!images[1].imageUrl" class="drag-drop-title">
									Drag and Drop or Upload <span class="bold">Banner</span> Image
								</div>
								<img
									v-if="images[1].imageUrl"
									:src="images[1].imageUrl"
									class="image"
								/>
								<div class="initial-image-input">
									<input
										class="image-input"
										type="file"
										name="banner"
										accept="image/x-png,image/jpeg"
										ref="image2"
										@change="onChange($event, 1)"
									/>
								</div>
								<div v-if="images[1].imageUrl" class="icon-circle icon-after">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-plus-lg"
										viewBox="0 0 16 16"
									>
										<path
											fill-rule="evenodd"
											d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
										/>
									</svg>
								</div>
							</label>
						</div>
					</div>
				</div>
			</div> -->

			<h3 class="h3-main-title">PROFILE CATEGORY</h3>

			<div class="box">
				<div class="box-1">
					<div>
						<label for="nsfw">
							<h3 class="h3-title">NSFW</h3>
						</label>
					</div>
					<p class="p-title-description">
						This content is NSFW (may contain nudity, pornography, profanity or
						inappropriate content for those under 18)
					</p>
				</div>
				<div class="box-switch-button">
					<div>
						<switch-button
							@checked="getNsfw"
							id="nsfw-profile-settings"
							v-if="create"
							:val="nsfw"
						></switch-button>
						<base-dialog
							:show="nsfwClicked"
							title="SWITCH ACCOUNT TO SFW"
							@close="nsfwClick"
						>
							<div>
								<p class="nsfw-dialog-paragraph">
									If your account contains <a href="">NSFW content</a> (contains
									nudity, pornography, profanity or inappropriate content for
									those under 18) and it’s not set to NSFW, this will result in
									actions up to and including suspension of your account.
								</p>
								<div class="dialog-buttons">
									<base-button
										button-text="CANCEL"
										class="dialog-button dialog-button-white"
										@click="nsfwSetCancel"
										id="nsfw-cancel"
									></base-button>
									<base-button
										button-text="I UNDERSTAND"
										class="dialog-button dialog-button-blue"
										@click="nsfwSetUnderstand"
										id="nsfw-understand"
									></base-button>
								</div>
							</div>
						</base-dialog>
					</div>
				</div>
			</div>

			<h3 class="h3-main-title">ADVANCED</h3>

			<div class="box">
				<div class="box-1">
					<div>
						<label for="allow">
							<h3 class="h3-title">Allow people to follow you</h3>
						</label>
					</div>
					<p class="p-title-description">
						Followers will be notified about posts you make to your profile and
						see them in their home feed.
					</p>
				</div>
				<div class="box-switch-button">
					<div>
						<switch-button
							id="allow-profile-settings"
							@checked="getAllowfollow"
							v-if="create"
							:val="allowToFollowYou"
						></switch-button>
					</div>
				</div>
			</div>

			<!-- <div class="box">
				<div class="box-1">
					<div>
						<label for="visibility">
							<h3 class="h3-title">Content visibility</h3>
						</label>
					</div>
					<p class="p-title-description">
						Posts to this profile can appear in <a href="">r/all</a> and your
						profile can be discovered in <a href="">/users</a>
					</p>
				</div>
				<div class="box-switch-button">
					<div>
						<switch-button id="visibility-profile-settings"></switch-button>
					</div>
				</div>
			</div>

			<div class="box">
				<div class="box-1">
					<div>
						<label for="active">
							<h3 class="h3-title">Active in communities visibility</h3>
						</label>
					</div>
					<p class="p-title-description">
						Show which communities I am active in on my profile
					</p>
				</div>
				<div class="box-switch-button">
					<div>
						<switch-button id="active-profile-settings"></switch-button>
					</div>
				</div>
			</div>

			<h3 class="h3-main-title">PROFILE MODERATION</h3>

			<div>
				<p class="moderation-link">
					For moderation tools please visit our
					<a href="" id="moderation-profile-settings"
						>Profile Moderation page</a
					>
				</p>
			</div> -->
		</div>
		<div class="positioning">
			<SaveUnsavePopupMessage
				v-for="message in savedUnsavedPosts"
				:key="message.id"
				:type="message.type"
				:state="message.state"
				:typeid="message.postid"
				@undo-action="undoSaveUnsave"
				id="save"
			></SaveUnsavePopupMessage>
		</div>
	</div>
</template>

<script>
// import BaseDialog from '../../components/BaseComponents/BaseDialog.vue';
// import SocialLink from './SocialLink.vue';
import SociallinksBlock from '../../components/UserComponents/BaseUserComponents/SocialLinksComponents/SociallinksBlock.vue';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue'; //
export default {
	// async created() {
	// 	this.userData = await this.$store.getters['user/getUserData'];
	// 	//console.log(this.userData);
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
		//console.log('after creation');
		//console.log(this.userData);
		//console.log(this.displayName);
		//console.log(this.about);
		//console.log(this.nsfw);
		//console.log(this.allowToFollowYou);

		this.create = true;
	},
	// },
	components: {
		// BaseDialog,
		// SocialLink,
		SociallinksBlock,
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
	computed: {
		// @vuese
		//return the tUser Data
		// @type object
		getUserDataGetter() {
			// //console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserData'];
		},
	},
	watch: {
		// @vuese
		// watch user
		// @arg The argument is an object value representing userData
		user(val) {
			this.userData = val;
		},
		// @vuese
		// watch display Name
		// @arg The argument is an string value representing display Name

		displayName(value) {
			this.nameCount = 30;
			this.displayName = value;
			this.nameCount = this.nameCount - this.displayName.length;
		},
		// @vuese
		// watch about
		// @arg The argument is an string value representing about
		about(value) {
			this.aboutCount = 200;
			this.about = value;
			this.aboutCount = this.aboutCount - this.about.length;
		},
	},
	methods: {
		//Change images
		//Index of image to change
		// onChange(e, index) {
		// 	const file = e.target.files[0];
		// 	this.images[index].image = file;
		// 	this.images[index].imageUrl = URL.createObjectURL(file);
		// },

		// @vuese
		// get display Name
		async getdisplayName() {
			const actionPayload = {
				displayName: this.displayName,
				baseurl: this.$baseurl,
			};
			//console.log('enter get user data');
			try {
				const response = await this.$store.dispatch(
					'setting/changedisplayName',
					actionPayload
				);

				if (response == 200) {
					//console.log(response);
					//console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				//console.log(this.err);
			}
		},
		// @vuese
		// get About
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
					//console.log(response);
					//console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				//console.log(this.err);
			}
		},
		// @vuese
		// get Nsfw
		async getNsfw(value) {
			this.nsfw = value;
			//console.log('this.nsfw');
			//console.log(this.nsfw);
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
					//console.log(response);
					//console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				//console.log(this.err);
			}
		},
		// @vuese
		// get Allow follow you
		// @arg The argument is a Boolean value representing  Allow follow you
		async getAllowfollow(value) {
			this.allowToFollowYou = value;
			//console.log('this.allowToFollowYou');
			//console.log(this.allowToFollowYou);
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
					//console.log(response);
					//console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				//console.log(this.err);
			}
		},
		// @vuese
		//send a request to get the settings
		async getSettings() {
			const actionPayload = {
				baseurl: this.$baseurl,
			};
			//console.log(actionPayload);
			try {
				const response = await this.$store.dispatch(
					'setting/fetchAccountSettings',
					actionPayload
				);
				if (response == 200) {
					//console.log(response);
					//console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
			this.setting = await this.$store.getters['setting/getAccountSettings'];
			//console.log(this.setting);
			this.displayName = this.setting.displayName;
			this.about = this.setting.about;
			this.nsfw = this.setting.nsfw;
			this.allowToFollowYou = this.setting.allowToFollowYou;
			//console.log(this.displayName);
			//console.log(this.about);
			//console.log(this.nsfw);
			//console.log(this.allowToFollowYou);
		},
		////////////////////////////////
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
		// @vuese
		// load Profile Pic
		// @arg The argument is e for ubload pic
		async loadProfilePic(e) {
			// const file2 = await e.target.files[0];
			const file1 = e.target.files;
			const file = file1[0];
			this.image = URL.createObjectURL(file);

			// const file = await this.$refs.profileFile.files[0];
			const profilePictureUrl = await URL.createObjectURL(file);
			// //console.log(profilePictureUrl);
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
		// @vuese
		// load cover
		// @arg The argument is e for ubload pic
		async loadCoverPic(e) {
			const file = e.target.files[0];
			//const file2 = this.$refs.coverFile.files[0];
			const bannerImageUrl = URL.createObjectURL(file);
			this.cover = URL.createObjectURL(file);
			// const bannerImageUrl = URL.createObjectURL(file);
			// document.querySelector(
			// 	'#cover-picture'
			// ).style.backgroundImage = `url(${bannerImageUrl})`;
			// let responseStatus;
			try {
				await this.$store.dispatch('user/AddProfileBanner', {
					baseurl: this.$baseurl,
					file,
					bannerImageUrl,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			//console.log(responseStatus);
		},
		// @vuese
		// get User Data
		// @arg The argument is a Boolean value representing User Data
		async getUserData() {
			const actionPayload = {
				userName: localStorage.getItem('userName'),
				baseurl: this.$baseurl,
			};
			//console.log(actionPayload);
			let response = null;
			try {
				response = await this.$store.dispatch(
					'user/getUserTempData',
					actionPayload
				);
				if (response) {
					// this.userData = this.$store.getters['user/getUserData'];
					this.userData = response;
					//console.log(response);
					//console.log('الحمد لله زى الفل');
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
.box-social-links {
	width: 1200px;
	display: flex;
	flex-wrap: wrap;
	row-gap: 8px;
	align-items: center;
}
.box-icon-social-links {
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	align-items: center;
	background-color: lightgray;
	border-radius: 100px;
	color: black;
	cursor: pointer;
	display: flex;
	height: 20px;
	margin-right: 8px;
	padding: 10px 12px;
	white-space: nowrap;
	box-sizing: content-box;
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
	/* display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	display: flex;
	flex-direction: column; */
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
	/*display: -ms-flexbox;
	display: flex;*/
	height: 100px;
	/*-ms-flex-pack: center;
	justify-content: center;*/
	width: 400px;
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
	width: 400px;
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
</style>
