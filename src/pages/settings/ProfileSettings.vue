<template>
	<div class="settings-page">
		<div class="settings-block">
			<h2 class="h2-main-title">Customize profile</h2>
			<h3 class="h3-main-title">PROFILE INFORMATION</h3>

			<div>
				<div>
					<h3 class="h3-title">Display name (optional)</h3>
					<p class="p-title-description">
						Set a display name. This does not change your username.
					</p>
				</div>
				<div>
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

			<div>
				<div>
					<h3 class="h3-title">About (optional)</h3>
					<p class="p-title-description">
						A brief description of yourself shown on your profile.
					</p>
				</div>
				<div>
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

			<div>
				<div>
					<h3 class="h3-title">Social links (5 max)</h3>
					<p class="p-title-description">
						People who visit your profile will see your social links.
					</p>
				</div>
				<div>
					<div>
						<div>
							<!-- icon -->
							Add social link
						</div>
					</div>
				</div>
			</div>

			<h3 class="h3-main-title">IMAGES</h3>

			<div>
				<div>
					<h3 class="h3-title">Profile picture and banner image</h3>
					<p class="p-title-description">Images must be .png or .jpg format</p>
				</div>
				<div>
					<div>
						<div>
							<label for=""></label>
						</div>
						<div>
							<label for="">
								<!-- <div>icon</div> -->
								<div></div>
								<div>
									<input type="file" name="" accept="image/x-png,image/jpeg" />
								</div>
							</label>
						</div>
					</div>
				</div>
			</div>

			<h3 class="h3-main-title">PROFILE CATEGORY</h3>

			<div>
				<div>
					<div>
						<label for="">
							<h3 class="h3-title">NSFW</h3>
						</label>
					</div>
					<p class="p-title-description">
						This content is NSFW (may contain nudity, pornography, profanity or
						inappropriate content for those under 18)
					</p>
				</div>
				<div>
					<div>
						<button></button>
					</div>
				</div>
			</div>

			<h3 class="h3-main-title">ADVANCED</h3>

			<div>
				<div>
					<div>
						<label for="">
							<h3 class="h3-title">Allow people to follow you</h3>
						</label>
					</div>
					<p class="p-title-description">
						Followers will be notified about posts you make to your profile and
						see them in their home feed.
					</p>
				</div>
				<div>
					<div>
						<button></button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.settings-page {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
}
.settings-block {
	max-width: 688px;
	flex: 1 1 auto;
}
</style>
