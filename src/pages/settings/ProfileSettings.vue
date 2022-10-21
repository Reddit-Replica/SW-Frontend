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
						<div class="box-icon-social-links">
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
						<div class="box-image-1">
							<label class="box-image-label" for="profile-picture">
								<div class="icon-plus-circle">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-plus-circle"
										viewBox="0 0 16 16"
									>
										<path
											d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
										/>
										<path
											d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
										/>
									</svg>
								</div>
								<div class="drag-drop-title">
									Drag and Drop or Upload
									<span class="bold">Profile</span> Image
								</div>
								<div class="initial-image-input">
									<input
										class="image-input"
										type="file"
										name="banner"
										accept="image/x-png,image/jpeg"
									/>
								</div>
							</label>
						</div>
						<div class="box-image-2">
							<label class="box-image-label" for="banner">
								<div class="icon-plus-circle">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-plus-circle"
										viewBox="0 0 16 16"
									>
										<path
											d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
										/>
										<path
											d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
										/>
									</svg>
								</div>
								<div class="drag-drop-title">
									Drag and Drop or Upload <span class="bold">Banner</span> Image
								</div>
								<div class="initial-image-input">
									<input
										class="image-input"
										type="file"
										name="banner"
										accept="image/x-png,image/jpeg"
									/>
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
						<switch-button></switch-button>
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
						<switch-button></switch-button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SwitchButton from '../../components/SwitchButton.vue';
export default {
	components: {
		SwitchButton,
	},
};
</script>

<style scoped>
.box-social-links {
	width: 1200px;
	display: flex;
	flex-wrap: wrap;
	row-gap: 8px;
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
}
.box-image-2 {
	height: 100%;
	margin: 0;
	width: 412px;
}
.box-image-label {
	border: 1px dashed #d7d7d7;
	border-radius: 8px;
	box-sizing: border-box;
	padding: 4px;
	cursor: pointer;
	align-items: center;
	background-color: white;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
	text-align: center;
	width: 100%;
}
.icon-plus-circle {
	margin-top: -8px;
	margin-bottom: 4px;
	cursor: pointer;
}
.bi-plus-circle {
	fill: var(--color-blue-2);
	height: 36px;
	stroke: var(--color-blue-2);
	width: 36px;
	border-radius: 50%;
}
.drag-drop-title {
	color: gray;
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
/* .image-input[type='file' i] {
	appearance: none;
	background-color: initial;
	cursor: default;
	align-items: baseline;
	color: inherit;
	text-overflow: ellipsis;
	white-space: pre;
	text-align: start !important;
	overflow: hidden !important;
} */
</style>
