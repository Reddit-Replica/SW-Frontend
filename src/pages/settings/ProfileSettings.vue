<template>
	<div class="settings-page">
		<div class="settings-block">
			<h2 class="h2-main-title">Customize profile</h2>
			<h3 class="h3-main-title">PROFILE INFORMATION</h3>

			<div class="box box-flex-column">
				<div class="box-1">
					<h3 class="h3-title">Display name (optional)</h3>
					<p class="p-title-description">
						Set a display name. This does not change your username.
					</p>
				</div>
				<div class="box-2">
					<input
						placeholder="Display name (optional)"
						maxlength="30"
						type="text"
						name="dispalyname"
						id="dispalyname"
						class="input-field"
						v-model="name"
					/>
					<div class="p-comment">30 Characters remaining</div>
				</div>
			</div>

			<div class="box box-flex-column">
				<div class="box-1">
					<h3 class="h3-title">About (optional)</h3>
					<p class="p-title-description">
						A brief description of yourself shown on your profile.
					</p>
				</div>
				<div class="box-2">
					<textarea
						placeholder="About (optional)"
						maxlength="200"
						name="about"
						id="about"
						rows="4"
						class="text-area-field"
						v-model="about"
					></textarea>
					<div class="p-comment">200 Characters remaining</div>
				</div>
			</div>

			<div class="box box-flex-column">
				<div class="box-1">
					<h3 class="h3-title">Social links (5 max)</h3>
					<p class="p-title-description">
						People who visit your profile will see your social links.
					</p>
				</div>
				<div class="box-2">
					<div class="box-social-links">
						<!-- <div class="social-link">
							<img
								class="social-link-image"
								src="https://www.redditstatic.com/desktop2x/img/social-links/reddit.png"
							/>
							Custom URL
						</div> -->
						<div
							class="box-icon-social-links"
							@click="socialLinksClick"
							id="links-profile-settings"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-plus"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
								/>
							</svg>
							Add social link
						</div>
						<base-dialog
							:show="socialLinksClicked"
							@close="socialLinksClick"
							title="Add Social Links"
							center
						>
							<div class="social-links-dialog">
								<social-link
									v-for="link in links"
									:key="link.title"
									:title="link.title"
									:image-url="link.imageUrl"
									@click="chooseLink"
								>
								</social-link>
							</div>
						</base-dialog>
						<base-dialog :show="isLinkChosen" @close="chooseLink" center>
							<template #header>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-arrow-left"
									viewBox="0 0 16 16"
									@click="chooseLink"
								>
									<path
										fill-rule="evenodd"
										d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
									/>
								</svg>
								<h2 class="h2-social-links">Add Social Links</h2>
								<base-button
									class="save-button"
									button-text="Save"
								></base-button>
							</template>
							<div class="social-links-dialog">
								<!-- <social-link > </social-link> -->
							</div>
						</base-dialog>
					</div>
				</div>
			</div>

			<h3 class="h3-main-title">IMAGES</h3>

			<div class="box box-flex-column">
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
			</div>

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
							@click="nsfwClick"
							id="nsfw-profile-settings"
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
						<switch-button id="allow-profile-settings"></switch-button>
					</div>
				</div>
			</div>

			<div class="box">
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
			</div>
		</div>
	</div>
</template>

<script>
// import BaseDialog from '../../components/BaseComponents/BaseDialog.vue';
import SocialLink from './SocialLink.vue';
export default {
	components: {
		// BaseDialog,
		SocialLink,
	},
	props: {},
	data() {
		return {
			links: [
				{
					imageUrl:
						'https://www.redditstatic.com/desktop2x/img/social-links/reddit.png',

					title: 'Reddit',
					placeholder1: 'r/community, u/user',
					placeholder2: '',
				},
			],
			images: [
				{
					image: null,
					imageUrl: null,
				},
				{
					image: null,
					imageUrl: null,
				},
			],
			name: '',
			about: '',
			nsfwClicked: false,
			nsfwCancel: false,
			nsfwUnderstand: false,
			socialLinksClicked: false,
			isLinkChosen: false,
		};
	},
	methods: {
		//@vuese
		//Change images
		//Index of image to change
		onChange(e, index) {
			const file = e.target.files[0];
			this.images[index].image = file;
			this.images[index].imageUrl = URL.createObjectURL(file);
		},
		//@vuese
		//Toggle Choosing NSFW
		nsfwClick() {
			this.nsfwClicked = !this.nsfwClicked;
		},
		//@vuese
		//Click on cancel button in NSFW dialog
		nsfwSetCancel() {
			this.nsfwCancel = !this.nsfwCancel;
			this.nsfwClick();
		},
		//@vuese
		//Click on I understand button in NSFW dialog
		nsfwSetUnderstand() {
			this.nsfwUnderstand = !this.nsfwUnderstand;
			this.nsfwClick();
		},
		//@vuese
		//Show/Hide social links dialog
		socialLinksClick() {
			this.socialLinksClicked = !this.socialLinksClicked;
		},
		//@vuese
		//Show/Hide chosen social link dialog
		chooseLink() {
			this.isLinkChosen = !this.isLinkChosen;
			this.socialLinksClicked = false;
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
</style>
