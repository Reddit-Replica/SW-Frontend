<template>
	<div>
		<div class="create-post-header">
			<div class="submit-title">Create a post</div>
			<!-- <base-button class="drafts-button"
				>DRAFTS
				<span class="drafts-count">5</span>
			</base-button> -->
		</div>
		<div class="choose-post-community-1">
			<div class="choose-post-community-2">
				<div class="choose-post-community-3" @click="setFocused">
					<span v-if="!inputFocused" class="dashed-circle"></span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-search"
						viewBox="0 0 16 16"
						v-else
					>
						<path
							d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
						/>
					</svg>
					<div class="input-box">
						<input
							class="choose-community-input"
							placeholder="Choose a community"
						/>
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chevron-down"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
						/>
					</svg>
				</div>
				<div class="input-drop-down-box-1" v-if="inputFocused">
					<div class="input-drop-down-box-2">
						<div class="title title-profile">YOUR PROFILE</div>
						<div class="section-box">
							<div class="image-box">
								<img
									src="https://camo.githubusercontent.com/549191c618ad8d5cd41e403e89bd080b10b9fb5c9fc3d6c260c4ce52cd86b40c/68747470733a2f2f696d672e6672656570696b2e636f6d2f667265652d766563746f722f666c61742d64657369676e2d796f756e672d6769726c2d70726f6772616d6d65722d776f726b696e675f32332d323134383236373135362e6a70673f773d32303030"
									alt="image"
									class="img-profile"
								/>
							</div>
							<div class="name-box">
								<span class="name"> u/{{ userName }}</span>
							</div>
						</div>
					</div>
					<div class="input-drop-down-box-2">
						<div class="title-community-header">
							<span class="title-community title">YOUR COMMUNITIES</span>
							<base-button
								class="create-button"
								@click="showCreateCommunity"
								id="create-community-sidebar"
								>Create New</base-button
							>
						</div>
						<create-community
							v-if="createCommunityShown"
							@exit="showCreateCommunity"
						></create-community>

						<div
							class="section-box"
							v-for="subreddit in subreddits"
							:key="subreddit.id"
							@click="setsubreddit(subreddit.title)"
						>
							<div class="image-box">
								<img
									:src="subreddit.picture"
									alt="image"
									class="img-community"
								/>
							</div>
							<div class="comm-box">
								<span class="name">r/{{ subreddit.title }}</span>
								<span class="name members-count">{{ subreddit.members }}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- {{ subreddits }} -->
	</div>
</template>

<script>
import CreateCommunity from '../CommunityComponents/CreateCommunity.vue';
export default {
	components: {
		CreateCommunity,
	},
	data() {
		return {
			inputFocused: false,

			createCommunityShown: false,
			subreddits: [],
			subredditTitle: null,
		};
	},
	methods: {
		async setFocused() {
			this.inputFocused = !this.inputFocused;
			const actionPayload = {
				baseurl: this.$baseurl,
			};
			await this.$store.dispatch('posts/getAllsubreddits', actionPayload);
			this.getSubreddit();
		},
		// @vuese
		// Used to show create community popup
		// @arg no argument
		showCreateCommunity() {
			this.createCommunityShown = !this.createCommunityShown;
		},
		getSubreddit() {
			this.subreddits = this.$store.getters['posts/getallSubreddits'];
		},
		setsubreddit(title) {
			this.subredditTitle = title;
			this.$store.commit('posts/setSubreddit', {
				subreddit: title,
			});
		},
	},
	computed: {
		// @vuese
		// Get usename
		// @type string
		userName() {
			// return this.$store.getters.getUserName;
			return localStorage.getItem('userName');
		},
	},
};
</script>
<style scoped>
.create-post-header {
	padding: 4px;
	margin: 1.6rem 0;
	border-bottom: 1px solid var(--color-grey-light-1);
	display: flex;
	margin-top: 6.6rem;
}
.submit-title {
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: var(--color-grey-dark-1);
	flex: 1;
}
.drafts-button {
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 24px;
	text-transform: uppercase;
	margin-left: 10px;

	position: relative;
	border: 1px solid transparent;
	background-color: transparent;
	color: var(--color-blue-2);
	fill: var(--color-blue-2);

	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
.drafts-button:hover {
	background-color: var(--color-grey-light-4);
}
.drafts-count {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	background: var(--color-grey-dark-3);
	border-radius: 2px;
	color: var(--color-white-1);
	margin-left: 4px;
	padding: 1px 3px;
}
.choose-post-community-1 {
	margin-bottom: 8px;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.choose-post-community-2 {
	margin-right: 16px;
	position: relative;
	box-sizing: border-box;
	min-width: 300px;
	height: 40px;
	border-radius: 4px;
	transition: box-shadow 0.2s ease;
	box-shadow: 0 0 0 0 var(--color-white-1);
	border: 1px solid var(--color-grey-light-3);
	background-color: var(--color-white-1);
}
.choose-post-community-3 {
	display: flex;
	align-items: center;
	height: 100%;
	padding: 0 8px;
}
.choose-community-input {
	color: var(--color-grey-dark-1);
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	width: 100%;
	vertical-align: middle;
	background-color: transparent;
	border: none;

	position: relative;
}
/* input[placeholder] {
	color: var(--color-grey-dark-1);
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
} */
.choose-community-input:focus {
	outline: none;
}
.dashed-circle {
	box-sizing: border-box;
	border-radius: 22px;
	border: 1px dashed var(--color-grey-dark-2);
	margin: 0;
	height: 22px;
	width: 22px;
	font-size: 22px;
	line-height: 22px;
}
.input-box {
	flex: 1;
	padding-left: 6px;
}
.bi-chevron-down {
	cursor: pointer;
}
.bi {
	height: 20px;
	width: 20px;
}
.input-drop-down-box-1 {
	/* visibility: visible; */
	border-color: var(--color-grey-light-3);
	position: absolute;
	z-index: 11;
	background-color: var(--color-white-1);
	border-radius: 0 0 4px 4px;
	top: 100%;
	left: -1px;
	right: -1px;
	max-height: 400px;
	overflow-y: scroll;
	border: 1px solid var(--color-grey-light-3);
	box-shadow: 0 -3px 0 -1px var(--color-white-1),
		0 0 2px 1px var(--color-grey-light-3);
}
.input-drop-down-box-2 {
	border-bottom: 1px solid var(--color-grey-light-3);
}
/* .h3-main-title {
	margin-bottom: 0;
	padding-bottom: 0;
} */
.title {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase;
	color: var(--color-grey-dark-2);
	width: 200px;
}
.title-profile {
	padding: 16px 16px 3px;
}
.title-community-header {
	display: flex;
	flex-direction: row;
	padding: 8px 8px 3px 16px;
}
.title-community {
	align-items: center;
	display: flex;
}
.section-box {
	cursor: pointer;

	padding: 8px;
	color: var(--color-grey-dark-1);
	display: flex;
	align-items: center;
	position: relative;
}
.image-box {
	position: relative;
	height: 100%;
}
img {
	margin: 2px 8px 2px 0;
	height: 32px;
	max-height: 32px;
	max-width: 32px;
	width: 32px;
	font-size: 18px;
	line-height: 24px;
}
.img-profile {
	/* color: var(--color-white-1); */
	/* text-indent: -9999px; */

	border-radius: 4px;
	border: 1px solid var(--color-grey-light-3);
	object-fit: cover;
	object-position: center;
}
.img-community {
	border-radius: 50%;
	vertical-align: middle;
}
.name-box {
	display: flex;
	flex-grow: 1;
	flex-flow: column nowrap;
	min-width: 100px;
}
.name {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	overflow: hidden;
	text-overflow: ellipsis;
}
.create-button {
	margin-left: 0;
	position: relative;
	border: 1px solid transparent;
	color: var(--color-blue-2);
	fill: var(--color-blue-2);
	background-color: transparent;
	font-size: 12px;
	font-weight: 700;
	width: 100px;
	padding: 4px 8px;
}
.create-button:hover {
	background-color: var(--color-grey-light-3);
}
.comm-box {
	display: flex;
	flex-grow: 1;
	flex-flow: column nowrap;
	min-width: 100px;
}
.members-count {
	color: var(--color-grey-dark-3);
}
button {
	width: 100%;
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
</style>
