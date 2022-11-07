<template>
	<div class="about-bar" id="about-community-form">
		<div class="about-header">
			<div class="about-title"><h2 class="about-h2">About Community</h2></div>
			<div class="about-options">
				<router-link to="/subreddit" class="mod-tools">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-shield"
						viewBox="0 0 16 16"
					>
						<path
							d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
						/>
					</svg>
					<span>MOD TOOLS</span>
				</router-link>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-three-dots"
					viewBox="0 0 16 16"
					@click="dotsClick"
				>
					<path
						d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
					/>
				</svg>
				<div class="box-options" v-if="dotsClicked">
					<button class="button-option" @click="addToCustomFeed">
						Add To Custom Feed
					</button>
					<button class="button-option" @click="addToFavourite">
						Add To Favourites
					</button>
				</div>
			</div>
		</div>
		<div class="about-body">
			<div class="description-1" @click="showTextarea" v-if="!textareaShown">
				<div class="description-1-text">Add description</div>
			</div>

			<div class="description-1 blue-border" v-else>
				<textarea
					placeholder="Tell us about your community"
					maxlength="500"
					rows="1"
					class="description-textarea"
					@keyup="charCount()"
					v-model.trim="description"
				></textarea>
				<div class="flex">
					<span class="span-char"
						>{{ charRemaining }} Characters remaining</span
					>
					<span class="span-cancel-save span-cancel" @click="hideTextarea"
						>Cancel</span
					>
					<span class="span-cancel-save span-save" @click="saveDescription"
						>Save</span
					>
				</div>
			</div>

			<div class="box-body">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-calendar4"
					viewBox="0 0 16 16"
				>
					<path
						d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
					/>
				</svg>
				<span class="text-grey text space">Created Oct 28, 2022</span>
			</div>

			<div class="box-body">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-eye-slash"
					viewBox="0 0 16 16"
				>
					<path
						d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
					/>
					<path
						d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
					/>
					<path
						d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
					/>
				</svg>
				<span class="text space">Private</span>
			</div>

			<div class="line"></div>

			<div class="flex-between">
				<div>
					<div class="text-bold">0</div>
					<div class="text-grey">Members</div>
				</div>
				<div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-dot"
							viewBox="0 0 16 16"
						>
							<path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
						</svg>
						<span class="text-bold">1</span>
					</div>
					<div class="text-grey">Online</div>
				</div>
				<div></div>
				<div></div>
			</div>

			<div class="line"></div>

			<div class="box-body">
				<span class="span-new">NEW</span>
				<span class="text-bold">Community topics</span>
				<span class="info-span">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-info-circle"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
						/>
						<path
							d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
						/>
					</svg>
				</span>
			</div>

			<div class="box-body box-topic">
				<span
					class="text-bold span-save"
					@click="toogleTopicsList"
					v-if="!topicChosen"
					>Add a Primary Topic</span
				>
				<span
					class="text-bold span-save"
					@click="toogleTopicsList"
					v-if="topicChosen"
					>{{ communityTopic.name }}</span
				>
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
				<div class="topics-list" v-if="topicsShown">
					<button
						v-for="topic in topics"
						:key="topic.id"
						class="button-topic text"
						@click="setTopic(topic)"
					>
						{{ topic.name }}
					</button>
				</div>
				<div class="sub-topic" v-if="!subtopicsShown && topicChosen">
					<base-button class="button-subtopic">
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
						<span class="text span-save" @click="toogleSubtopics"
							>Add subtopic</span
						>
					</base-button>
				</div>
				<div class="blue-border description-1 box-topic" v-if="subtopicsShown">
					<input v-if="!subtopicChosen" />
					<div v-if="subtopicChosen">
						<base-button
							v-for="subtopic in communitySubtopics"
							:key="subtopic.id"
							class="subtopic text"
							@click="deleteSubtopic(subtopic)"
							>{{ subtopic.name }}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-x"
								viewBox="0 0 16 16"
							>
								<path
									d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</base-button>
					</div>
					<div class="flex">
						<span class="span-char">{{ subtopicsCount }}/25</span>
						<span
							class="span-cancel-save span-cancel"
							@click="toogleSubtopicsCancel"
							>Cancel</span
						>
						<span class="span-cancel-save span-save" @click="saveSubtopics"
							>Save</span
						>
					</div>
				</div>
				<div class="topics-list" v-if="subtopicsShown">
					<div class="text-grey sug-subtopic">SUGGESTED TOPICS</div>
					<button
						v-for="subtopic in topics"
						:key="subtopic.id"
						class="button-topic text"
						@click="setSubtopic(subtopic)"
					>
						{{ subtopic.name }}
					</button>
				</div>
				<base-dialog
					:show="saveDialogShown"
					title="Save changes before leaving?"
					@close="toogleSaveDialog"
					transparent-background
				>
					<div class="text">
						You have made some changes to your community, do you wish to leave
						this menu without saving?
					</div>
					<div class="box-buttons">
						<base-button class="button-white-2 text" @click="toogleSaveDialog"
							>Discard</base-button
						>
						<base-button class="button-blue-2 text" @click="saveSubtopics"
							>Save</base-button
						>
					</div>
				</base-dialog>
			</div>

			<div class="line"></div>

			<div class="box-body">
				<base-button
					class="button-blue-2 text button-create-post"
					link
					to="/submit"
					button-text="Create Post"
				></base-button>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { BaseButton },
	props: {
		topics: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			dotsClicked: false,
			addedToCustomFeed: false,
			addedToFavourite: false,
			charRemaining: 500,
			textareaShown: false,
			communityDescription: '',
			description: '',
			communityTopic: {},
			topicChosen: false,
			topicsShown: false,
			subtopicsShown: false,
			communitySubtopics: [],
			savedCommunitySubtopics: [],
			subtopicChosen: false,
			subtopicsCount: 0,
			saveDialogShown: false,
			isSubtopicsSaved: false,
		};
	},
	methods: {
		dotsClick() {
			this.dotsClicked = !this.dotsClicked;
		},
		addToCustomFeed() {
			this.addedToCustomFeed = true;
		},
		addToFavourite() {
			this.addedToFavourite = true;
		},
		charCount() {
			this.charRemaining--;
		},
		showTextarea() {
			this.textareaShown = true;
		},
		hideTextarea() {
			this.textareaShown = false;
		},
		saveDescription() {
			this.communityDescription = this.description;
		},
		setTopic(topic) {
			this.communityTopic = topic;
			this.topicChosen = true;
			this.toogleTopicsList();
		},
		setSubtopic(subtopic) {
			if (this.subtopicsCount < 25) {
				const index = this.communitySubtopics.findIndex(
					(topic) => topic.id === subtopic.id
				);
				if (index != '') {
					this.communitySubtopics.push(subtopic);
					this.subtopicChosen = true;
					this.subtopicsCount++;
				}
			}
		},
		toogleTopicsList() {
			this.topicsShown = !this.topicsShown;
		},
		toogleSubtopics() {
			this.subtopicsShown = !this.subtopicsShown;
		},
		deleteSubtopic(subtopic) {
			const index = this.communitySubtopics.findIndex(
				(topic) => topic.id === subtopic.id
			);
			this.communitySubtopics.splice(index, 1);
			this.subtopicsCount--;
		},
		saveSubtopics() {
			this.isSubtopicsSaved = true;
			this.savedCommunitySubtopics = this.communitySubtopics;
		},
		toogleSaveDialog() {
			this.saveDialogShown = !this.saveDialogShown;
		},
		toogleSubtopicsCancel() {
			this.toogleSubtopics();
			if (!this.isSubtopicsSaved) {
				this.toogleSaveDialog();
			}
		},
	},
};
</script>

<style scoped>
.about-bar {
	background-color: var(--color-white-1);
	color: var(--color-dark-4);
	fill: var(--color-dark-4);
	border: var(--line-10);
	border-radius: 0.4rem;
	overflow: visible;
	word-wrap: break-word;
}
.about-header {
	/* font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase; */
	background-color: var(--color-blue-2);
	border-radius: 3px 3px 0 0;
	color: var(--color-white-1);
	display: flex;
	fill: var(--color-white-1);
	padding: 0 12px 12px;
}
.about-title {
	padding: 12px 0 0;
}
.about-h2 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	font-weight: 700;
	text-transform: none;
}
.about-options {
	margin: auto 0 auto auto;
	padding-top: 10px;
	vertical-align: middle;
}
.mod-tools {
	color: var(--color-white-1);
	outline: none;
	border-radius: 2px;
	border-radius: 4px;
	display: inline-block;
	padding: 4px;
}
.mod-tools:hover {
	background-color: rgba(0, 53, 132, 0.2);
}
a {
	text-decoration: none;
}
.bi-shield {
	margin-right: 4px;
}
.bi-three-dots:hover {
	background-color: rgba(0, 53, 132, 0.2);
	border-radius: 2px;
	cursor: pointer;
}
.box-options {
	left: 788px;
	top: 220px;
	border: 1px solid var(--color-blue-light-2);
	border-radius: 4px;
	box-shadow: var(--shadow-menu);
	color: var(--color-dark-4);
	overflow: hidden;
	background-color: var(--color-white-1);
	position: absolute;
	z-index: 10;
}
.button-option {
	color: var(--color-grey-light-5);
	background-color: var(--color-white-1);
	outline: none;
	border: none;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	display: block;
	padding: 8px;
	text-transform: capitalize;
	width: 100%;
	text-align: left;
}
.button-option:hover {
	color: var(--color-dark-4);
	background-color: var(--color-blue-light-2);
}
.about-body {
	padding: 12px;
}
.description-1 {
	display: block;
	background-color: var(--color-blue-light-4);
	border-radius: 4px;
	padding: 8px;
	margin-bottom: 12px;
	margin-top: 8px;
	border: var(--line-10);
	cursor: pointer;
}
.description-1:hover {
	border: var(--line-5);
}
.blue-border {
	border: var(--line-5);
}
.description-1-text {
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	color: var(--color-blue-2);
}
.description-textarea {
	overflow: hidden;
	overflow-wrap: break-word;
	height: 21px;
	resize: none;
	cursor: auto;

	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	line-height: 21px;
	font-weight: 400;
	word-wrap: break-word;
	width: 100%;
	padding: 0;
	border: none;
	background-color: transparent;
	outline: none;
	color: var(--color-dark-4);
}
.span-char {
	flex: 100%;
	color: var(--color-grey-light-5);
	padding-top: 5px;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
}
.span-cancel {
	margin-right: 8px;
	color: red;
}
.span-save {
	color: var(--color-blue-2);
}
.span-cancel-save {
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	cursor: pointer;
	align-self: flex-end;
}
.flex {
	display: flex;
}
.box-body {
	margin-top: 12px;
}
.text-grey {
	color: var(--color-grey-light-5);
}
.text {
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
}
.text-bold {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
}
.space {
	margin-left: 8px;
}
.line {
	background-color: var(--color-grey-light-3);
	border: none;
	height: 1px;
	margin: 16px 0;
}
.flex-between {
	display: flex;
	justify-content: space-between;
}
.bi-dot {
	color: var(--color-green);
}
.span-new {
	font-size: 12px;
	line-height: 16px;
	font-weight: 700;
	color: red;
	text-transform: uppercase;
	margin-right: 4px;
}
.bi-info-circle {
	color: var(--color-grey-light-5);
	margin-left: 4px;
}
.info-span :hover {
	color: var(--color-blue-2);
}
.bi-chevron-down {
	margin-left: 4px;
	color: var(--color-blue-2);
}
.box-topic {
	position: relative;
	cursor: pointer;
}
.topics-list {
	max-height: 198px;
	overflow-y: auto;
	border-radius: 4px;
	min-width: 100%;
	position: absolute;
	z-index: 10;
	color: var(--color-dark-4);
	box-shadow: var(--shadow-menu);
	display: flex;
	flex-direction: column;
}
.button-topic {
	display: block;
	padding: 8px;
	text-transform: capitalize;
	white-space: nowrap;
	width: 100%;
	border: none;
	text-align: left;
	background-color: var(--color-white-1);
}
.button-topic:hover {
	color: var(--color-white-1);
	background-color: var(--color-blue-2);
}
.sub-topic {
	outline: none;
	border-radius: 4px;
	border: var(--line-10);
}
.bi-plus-lg {
	color: var(--color-blue-2);
}
.button-subtopic {
	margin-left: 8px;
	margin-top: 8px;
	margin-bottom: 8px;
	padding: 2px 12px 2px 6px;
}
input {
	outline: 0;
	border: none;
	background: transparent;
	width: 100%;
}
.sug-subtopic {
	padding: 12px 16px;
	background-color: var(--color-white-1);
}
.subtopic {
	outline: 0 solid transparent;
	background-color: var(--color-grey-light-3);
	color: var(--color-blue-2);
	border-radius: 12px;
	border: 1px solid transparent;
	cursor: pointer;
	display: inline-block;
	margin-bottom: 8px;
	margin-right: 4px;
	padding: 2px 10px;
	text-align: center;
	max-width: 245px;
}
.subtopic:hover {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
}
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 16px;
	margin: 16px -16px -16px;
	display: flex;
	justify-content: flex-end;
	border-bottom-right-radius: 4px;
	box-sizing: border-box;
}
.button-white-2 {
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
	padding: 4px 16px;
	margin-left: 8px;
}
.button-blue-2 {
	background-color: var(--color-blue-2);
	border: none;
	color: var(--color-white-1);
	padding: 4px 16px;
	margin-left: 8px;
}
.button-create-post {
	height: 32px;
	width: 100%;
	margin: 0;
}
</style>
