<template>
	<div id="create-community-form">
		<base-dialog
			:show="createCommunityShown"
			@close="hidecreateCommunity"
			title="Create a community"
		>
			<div class="community-dialog flex-column" id="comm-create">
				<div class="community-box flex-column">
					<div class="community-box-title flex-column">
						<h3 class="title-black">Name</h3>
						<p class="title-grey">
							<span
								>Community names including capitalization cannot be
								changed.</span
							>

							<span class="span-info">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									class="bi bi-info-circle"
									viewBox="0 0 16 16"
									@mouseover="showInfoBox"
									@mouseleave="showInfoBox"
									id="info-icon"
								>
									<path
										d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
									/>
									<path
										d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
									/>
								</svg>
								<div class="box arrow-top" v-if="InfoBoxShown">
									Names cannot have spaces (e.g., "r/bookclub" not "r/book
									club"), must be between 3-21 characters, and underscores ("_")
									are the only special characters allowed. Avoid using solely
									trademarked names (e.g., "r/FansOfAcme" not "r/Acme").
								</div>
							</span>
						</p>
					</div>
					<div class="community-box-input flex-column">
						<span class="r-span title-grey">r/</span>
						<input
							class="input-name"
							maxlength="21"
							type="text"
							v-model.trim="communityName"
							@blur="validateCommunityName"
							@keyup="charCount()"
							@click="resetName"
							id="name-input"
						/>
						<div class="title-grey">
							{{ charRemaining }} Characters remaining
						</div>
						<div
							v-if="communityNameRequiredError"
							class="title-grey title-red"
							id="required-name"
						>
							A community name is required
						</div>
						<div
							v-if="communityNameTakenError"
							class="title-grey title-red"
							id="taken-name"
						>
							Sorry, r/{{ communityName }} is taken. Try another.
						</div>
						<div
							v-if="communityNameCharError"
							class="title-grey name-error title-red"
							id="name-symbols"
						>
							<p class="title-red">
								Community names must be between 3–21 characters, and can only
								contain letters, numbers, or underscores.
							</p>
							<span class="more-text" @click="showMore" id="more">More</span>
						</div>
					</div>
					<div id="more-dialog">
						<base-dialog
							:show="moreIsShown"
							title="Error"
							@close="showMore"
							transparent-background
						>
							<div class="error-dialog">
								<div class="error-text">
									Community names must be between 3–21 characters, and can only
									contain letters, numbers, or underscores.
								</div>
								<div class="box-buttons box-ok">
									<base-button @click="showMore" class="button-blue" id="ok"
										>OK</base-button
									>
								</div>
							</div>
						</base-dialog>
					</div>
				</div>
				<div class="community-box flex-column">
					<div class="community-box-title">
						<h3 class="title-black">Community category</h3>
					</div>
					<div class="community-box-input flex-column">
						<select
							class="input-name"
							v-model.trim="communityCategory"
							@blur="validateCommunityCategory"
							@click="validateCommunityCategory"
							id="category-input"
						>
							<option
								v-for="category of categories"
								:key="category.name"
								:value="category.name"
								:id="category.name"
							>
								{{ category.name }}
							</option>
						</select>
						<div
							v-if="communityCategoryRequiredError"
							class="title-grey title-red"
							id="required-category"
						>
							A community category is required
						</div>
					</div>
				</div>
				<div class="community-box flex-column">
					<div class="community-box-title">
						<h3 class="title-black">Community type</h3>
					</div>
					<div class="community-box-input flex-column" role="radiogroup">
						<input type="hidden" />
						<div
							class="type-item"
							role="radio"
							value="public"
							@click="chooseType(0)"
							id="type-public"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-circle"
								id="bi-circle-1"
								viewBox="0 0 16 16"
								v-if="!typeChosen0"
							>
								<path
									d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-record-circle-fill"
								id="bi-record-circle-fill-1"
								viewBox="0 0 16 16"
								v-else
							>
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-person-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
							<div class="title-black">Public</div>
							<div class="title-grey">
								Anyone can view, post, and comment to this community
							</div>
						</div>
						<div
							class="type-item"
							role="radio"
							value="restricted"
							@click="chooseType(1)"
							id="type-restricted"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-circle"
								id="bi-circle-2"
								viewBox="0 0 16 16"
								v-if="!typeChosen1"
							>
								<path
									d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-record-circle-fill"
								id="bi-record-circle-fill-2"
								viewBox="0 0 16 16"
								v-else
							>
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-eye-fill"
								viewBox="0 0 16 16"
							>
								<path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
								<path
									d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
								/>
							</svg>
							<div class="title-black">Restricted</div>
							<div class="title-grey">
								Anyone can view this community, but only approved users can post
							</div>
						</div>
						<div
							class="type-item"
							role="radio"
							value="private"
							@click="chooseType(2)"
							id="type-private"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-circle"
								id="bi-circle-3"
								viewBox="0 0 16 16"
								v-if="!typeChosen2"
							>
								<path
									d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-record-circle-fill"
								id="bi-record-circle-fill-3"
								viewBox="0 0 16 16"
								v-else
							>
								<path
									d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-8 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-lock-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
								/>
							</svg>
							<div class="title-black">Private</div>
							<div class="title-grey">
								Only approved users can view and submit to this community
							</div>
						</div>
					</div>
				</div>
				<div class="community-box flex-column">
					<div class="community-box-title">
						<h3 class="title-black">Adult content</h3>
						<div
							class="community-box-input type-item pointer-cursor"
							@click="chooseNSFW"
							id="nsfw-input"
						>
							<input type="hidden" />
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-square"
								viewBox="0 0 16 16"
								v-if="!nsfwChosen"
							>
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								class="bi bi-check-square-fill"
								viewBox="0 0 16 16"
								v-else
							>
								<path
									d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
								/>
							</svg>
							<div class="red-block">NSFW</div>
							<div class="title-black">18+ year old community</div>
						</div>
					</div>
				</div>
				<div class="community-box box-buttons">
					<base-button
						@click="hidecreateCommunity"
						class="button-white"
						id="cancel-button"
						>Cancel</base-button
					>
					<base-button
						@click="submitCommunity"
						class="button-blue"
						id="create-button"
						>Create Community</base-button
					>
				</div>
			</div>
		</base-dialog>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { BaseButton },
	emits: ['exit'],
	data() {
		return {
			createCommunityShown: true,
			InfoBoxShown: false,
			typeChosen0: true,
			typeChosen1: false,
			typeChosen2: false,
			communityType: 'Public',
			nsfwChosen: false,
			communityName: '',
			communityNameValidity: true,
			communityNameRequiredError: false,
			communityNameCharError: false,
			charRemaining: '21',
			moreIsShown: false,
			communityNameTakenError: false,
			categories: [],
			communityCategory: '',
			communityCategoryRequiredError: false,
			selectIsShown: false,
		};
	},
	// // @vuese
	// // Load community suggested categories when creating 'Create Community' dialog
	// // created() {
	// // 	this.loadCategories();
	// // },
	beforeMount() {
		if (localStorage.getItem('accessToken') == null)
			this.$router.push('/login');
		else this.loadCategories();
	},
	methods: {
		// @vuese
		//Loading Community suggested categories
		//@arg no argument
		async loadCategories() {
			try {
				const accessToken = localStorage.getItem('accessToken');
				await this.$store.dispatch('community/getSavedCategories', {
					baseurl: this.$baseurl,
					token: accessToken,
				});
			} catch (error) {
				this.error = error.message || 'Something failed!';
			}
			this.categories = this.$store.getters['community/categories'];
		},
		//@vuese
		//Hide dialog
		//@arg no argument
		hidecreateCommunity() {
			//@vuese
			//Fire emit to close create community dialog
			this.$emit('exit');
		},
		//@vuese
		//Show Info box when hovering on title
		//@arg no argument
		showInfoBox() {
			this.InfoBoxShown = !this.InfoBoxShown;
		},
		//@vuese
		//Set chosen community type (public, restricted, private)
		//@arg index to indicate chosen type
		chooseType(index) {
			if (index == 2) {
				this.typeChosen2 = true;
				this.typeChosen1 = false;
				this.typeChosen0 = false;
				this.communityType = 'Private';
			} else if (index == 1) {
				this.typeChosen1 = true;
				this.typeChosen2 = false;
				this.typeChosen0 = false;
				this.communityType = 'Restricted';
			} else {
				this.typeChosen0 = true;
				this.typeChosen1 = false;
				this.typeChosen2 = false;
				this.communityType = 'Public';
			}
		},
		//@vuese
		//Check if NSFW chosen or not
		//@arg no argument
		chooseNSFW() {
			this.nsfwChosen = !this.nsfwChosen;
		},
		//@vuese
		//Check on community category not to be empty
		//@arg no argument
		validateCommunityCategory() {
			this.showSelect();
			if (this.communityCategory === '') {
				this.communityCategoryRequiredError = true;
			} else {
				this.communityCategoryRequiredError = false;
			}
		},
		// @vuese
		//Reset Validatation of  Subreddits Name.
		//@arg no argument
		resetName() {
			this.communityNameValidity = true;
			this.communityNameRequiredError = false;
			this.communityNameCharError = false;
			this.communityNameTakenError = false;
		},
		// @vuese
		//Validate Subreddits Name (Name should be between 3:20 characters and include only letters, numbers and underscores).
		//@arg no argument
		async validateCommunityName() {
			//check if name is empty
			if (this.communityName === '') {
				this.communityNameValidity = false;
				this.communityNameRequiredError = true;
				this.communityNameCharError = false;
			}
			//check if name between 3:20 and contain only letters, numbers and underscores
			else if (
				this.communityName.length < 3 ||
				this.communityName.length > 21 ||
				/[^a-zA-Z0-9_]/.test(this.communityName)
			) {
				this.communityNameValidity = false;
				this.communityNameRequiredError = false;
				this.communityNameCharError = true;
			} else {
				this.communityNameValidity = true;
				this.communityNameRequiredError = false;
				this.communityNameCharError = false;
			}
			//check if name is taken by another subreddit
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('community/checkSubredditName', {
				subredditName: this.communityName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.communityNameTakenError =
				this.$store.getters['community/subredditNameTaken'];

			if (this.communityNameTakenError) {
				this.communityNameRequiredError = false;
				this.communityNameCharError = false;
				this.communityNameValidity = false;
			}
		},
		//@vuese
		//Decrease characters count while typing
		//@arg no argument
		charCount() {
			// this.validateCommunityName();
			this.charRemaining = 21 - this.communityName.length;
			this.communityNameRequiredError = false;
			this.communityNameCharError = false;
		},
		// @vuese
		//Validate create community form and submit it.
		//@arg no argument
		async submitCommunity() {
			this.errorResponse = null;

			this.validateCommunityName();

			if (!this.communityNameValidity) {
				return;
			} else if (this.communityCategoryRequiredError) {
				return;
			}
			const accessToken = localStorage.getItem('accessToken');

			try {
				await this.$store.dispatch('community/createSubreddit', {
					subredditName: this.communityName,
					type: this.communityType,
					nsfw: this.nsfwChosen,
					category: this.communityCategory,
					baseurl: this.$baseurl,
					token: accessToken,
				});

				if (this.$store.getters['community/createdSuccessfully']) {
					this.$router.push({
						name: 'subreddit',
						params: { subredditName: this.communityName, firstCreated: true },
					});
				}
			} catch (err) {
				console.log(err);
				this.errorResponse = err;
			}
		},
		//@vuese
		//Show Error dialog when click on more when subreddit name contain symbols or not in range of 3:20 characters
		//@arg no argument
		showMore() {
			this.moreIsShown = !this.moreIsShown;
		},
		//@vuese
		//Show/Hide suggested categories list
		//@arg no argument
		showSelect() {
			this.selectIsShown = !this.selectIsShown;
		},
	},
};
</script>

<style scoped>
.flex-column {
	display: flex;
	flex-direction: column;
}
.community-dialog {
	max-height: 100%;
	max-width: 49.2rem;
}
.community-box {
	margin-bottom: 2rem;
}
.community-box-title {
	max-width: 100%;
	margin-bottom: -0.4rem;
	margin-right: 0.8rem;
}
.bi-info-circle {
	padding-left: 0.4rem;
	/* color: var(--color-grey-dark-2); */
	position: absolute;
}
.title-black {
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2rem;
	color: var(--color-dark-1);
	display: flex;
	margin-bottom: 0.4rem;
}
.title-grey {
	font-weight: 400;
	color: var(--color-grey-dark-2);
	font-size: 1.2rem;
	line-height: 1.6rem;
	height: 2.6rem;
}
.title-red {
	color: red;
	white-space: wrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
@media only screen and (min-width: 500px) {
	/* .title-red {
		white-space: wrap;
	} */
	select {
		width: 30rem;
		max-width: 30rem;
	}
}
.more-text {
	text-decoration: underline;
	cursor: pointer;
	padding-left: 0.4rem;
}
.name-error {
	display: flex;
}
.community-box-input {
	align-items: flex-start;
	margin-top: 1.2rem;
}
.box {
	width: 15rem;
	background-color: var(--color-dark-1);
	color: var(--color-white-1);
	font-size: 0.9rem;
	padding: 1rem;
	position: absolute;
	border-radius: 0.4rem;
	text-align: center;
	pointer-events: none;
	transform: translateX(-50%);
	z-index: 100;
	right: -16rem;
}
.box.arrow-top {
	margin-top: 1rem;
}
.box.arrow-top:after {
	content: ' ';
	position: absolute;
	right: 6rem;
	top: -0.5rem;
	border-top: none;
	border-right: 1.5rem solid transparent;
	border-left: 1.5rem solid transparent;
	border-bottom: 1.5rem solid black;
}
.r-span {
	color: var(--color-grey-dark-2);
	position: relative;
	top: 2.6rem;
	left: 1.2rem;
}
.span-info {
	position: relative;
}
.input-name {
	border: 0.1rem solid var(--color-grey-light-2);
	max-height: 3.7rem;
	padding: 0.4rem 2.4rem;
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	box-sizing: border-box;
	height: 4.8rem;
	margin-bottom: 0.8rem;
	border-radius: 0.4rem;
	width: 100%;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.1rem;
}
.type-item {
	outline: 0 none;
	align-items: flex-start;
	margin-bottom: 1.6rem;
	display: flex;
	flex-direction: row;
	column-gap: 0.5rem;
}
.bi {
	color: var(--color-grey-dark-2);
}
.bi-record-circle-fill {
	fill: var(--color-blue-2);
}
.bi-check-square-fill {
	fill: var(--color-blue-2);
}
.pointer-cursor {
	cursor: pointer;
	align-items: center;
}
.red-block {
	font-size: 1.2rem;
	line-height: 1.6rem;
	background-color: #ff585b;
	border-radius: 0.2rem;
	padding: 0 0.4rem;
	color: var(--color-white-1);
	font-weight: 500;
}
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 1.6rem;
	margin: 1.6rem -1.6rem -1.6rem;
	display: flex;
	justify-content: flex-end;
	border-bottom-right-radius: 0.4rem;
	box-sizing: border-box;
}
button {
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;
	margin-left: 0.8rem;
	font-size: 1.4rem;
	font-weight: 700;
}
button:hover {
	opacity: 0.92;
}
.button-white {
	border: 0.1rem solid var(--color-blue-2);
	color: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
}
.button-blue {
	background-color: var(--color-blue-2);
	border: none;
	color: var(--color-white-1);
	padding: 0.4rem 1.6rem;
}
.error-text {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.1rem;
	max-height: 50vh;
	overflow-wrap: break-word;
	overflow: auto;
}
.error-dialog {
	width: 31.8rem;
}
.box-ok {
	padding: 0.8rem 0.5rem;
}
</style>
