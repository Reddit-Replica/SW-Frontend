<template>
	<div class="about-bar" id="about-community-form">
		<div class="about-header">
			<div class="about-title"><h2 class="about-h2">About Community</h2></div>
			<div class="about-options">
				<router-link
					:to="'/r/' + subredditName + '/about/moderators'"
					class="mod-tools"
					id="mod-tools"
				>
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
					width="20"
					height="20"
					fill="currentColor"
					class="bi bi-three-dots"
					viewBox="0 0 16 16"
					@click="dotsClick"
					id="three-dots"
				>
					<path
						d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
					/>
				</svg>
				<div class="box-options" v-if="dotsClicked">
					<button
						class="button-option"
						@click="addToCustomFeed"
						id="add-to-custom-feed"
					>
						Add To Custom Feed
					</button>
					<button
						class="button-option"
						@click="toogleFavourite"
						id="add-to-favourite"
					>
						{{ favouriteText }}
					</button>
				</div>
			</div>
		</div>

		<div class="about-body">
			<div
				class="description-1"
				@click="showTextarea"
				v-if="!textareaShown && emptyDescription"
				id="add-description-1"
			>
				<div class="description-1-text" id="add-desc">Add description</div>
			</div>

			<div
				class="description-1 blue-border"
				id="add-description-2"
				v-else-if="textareaShown"
			>
				<textarea
					placeholder="Tell us about your community"
					maxlength="500"
					rows="1"
					class="description-textarea"
					@keyup="charCount()"
					v-model.trim="description"
					id="add-desc-textarea"
				></textarea>
				<div class="flex">
					<span class="span-char" id="char-num"
						>{{ charRemaining }} Characters remaining</span
					>

					<span
						class="span-cancel-save span-cancel"
						@click="hideTextarea"
						id="cancel-description"
						>Cancel</span
					>
					<span
						class="span-cancel-save span-save"
						@click="saveDescription"
						id="save-description"
						>Save</span
					>
				</div>
			</div>

			<div
				v-if="!textareaShown && !emptyDescription"
				class="text desc-box"
				@click="showTextarea"
				id="add-description-3"
			>
				{{ communityDescriptionProp }}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-pencil"
					viewBox="0 0 16 16"
				>
					<path
						d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
					/>
				</svg>
			</div>

			<div class="box-body" id="created-date">
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
				<span
					class="text-grey text space"
					id="comm-date"
					@mouseover="toogleDateBox"
					@mouseleave="toogleDateBox"
					>Created {{ communityCreationDate }}</span
				>
				<div
					class="box arrow-top box-arrow-1"
					v-if="dateBoxShown"
					id="date-hover"
				>
					{{ communityDate }}
				</div>
			</div>

			<div class="box-body" id="created-type" v-if="isPrivate">
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
				<span class="text space" id="comm-type">{{ communityType }}</span>
			</div>

			<div class="line"></div>

			<div class="flex-between">
				<div id="members-num" class="relative-flex">
					<div
						class="text-bold"
						id="comm-mem"
						@mouseover="toogleMembersCountBox"
						@mouseleave="toogleMembersCountBox"
					>
						{{ calculateMembers(membersCount) }}
					</div>
					<div class="text-grey">Members</div>
					<div
						class="box arrow-top box-arrow-2"
						id="comm-mem-hover"
						v-if="MembersCountBoxShown"
					>
						{{ membersCount }} Members
					</div>
				</div>
				<div id="online-members-num" class="relative-flex">
					<div>
						<div class="point-green"></div>
						<span
							class="text-bold"
							id="comm-online-mem"
							@mouseover="toogleOnlineMembersCountBox"
							@mouseleave="toogleOnlineMembersCountBox"
							>{{ calculateMembers(membersCount) }}
						</span>
					</div>
					<div class="text-grey">Online</div>
					<div
						class="box arrow-top box-arrow-3"
						id="comm-online-mem-hover"
						v-if="onlineMembersCountBoxShown"
					>
						{{ membersCount }} Online
					</div>
				</div>
				<div></div>
				<div></div>
			</div>

			<div class="line"></div>

			<div class="box-body">
				<span class="span-new" v-if="isNew" id="new-comm">NEW</span>
				<span
					class="text-bold"
					id="comm-topics"
					@mouseover="toogleTopicsArrrowBox"
					@mouseleave="toogleTopicsArrrowBox"
					>Community topics</span
				>
				<span class="info-span" id="info-community-topics">
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
				<div
					class="box arrow-top box-arrow-4"
					v-if="topicsArrrowBoxShown"
					id="comm-topics-hover"
				>
					Adding community topics allow people to find your community. Add a
					primary topic and sub topics to be discovered more easily.
				</div>
			</div>

			<div class="box-body box-topic">
				<span
					class="text-bold span-save"
					@click="toogleTopicsList"
					v-if="!topicChosen"
					id="add-topic"
					>Add a Primary Topic</span
				>
				<span
					class="text-bold span-save"
					@click="toogleTopicsList"
					v-if="topicChosen"
					id="topic-added"
					>{{ communityTopicProp }}</span
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-chevron-down"
					viewBox="0 0 16 16"
					id="add-topic-icon"
				>
					<path
						fill-rule="evenodd"
						d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
					/>
				</svg>

				<div class="topics-list" v-if="topicsShown" id="topics-list">
					<button
						v-for="(topic, index) in topics"
						:key="topic.id"
						class="button-topic text"
						@click="setTopic(topic)"
						:id="'topic-' + index"
					>
						{{ topic }}
					</button>
				</div>

				<div
					class="sub-topic"
					v-if="!subtopicChosen && topicChosen && addSubtopicShown"
					id="subtopic-box-1"
				>
					<base-button class="button-subtopic" id="subtopic-box-2">
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
						<span class="text span-save" @click="showBoth">Add subtopic</span>
					</base-button>
				</div>

				<div
					class="blue-border description-1 box-topic"
					v-if="subtopicsBoxShown || subtopicChosen"
					id="subtopic-box-3"
				>
					<input v-if="!subtopicChosen" id="subtopic-box-4" />
					<div v-if="subtopicChosen" @click="showBoth">
						<base-button
							v-for="(subtopic, index) in communitySubtopics"
							:key="subtopic.id"
							class="subtopic text"
							@click="deleteSubtopic(subtopic)"
							:id="'chosen-subtopic-' + index"
							>{{ subtopic }}
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
						<span class="span-char" id="subtopic-box-count"
							>{{ subtopicsCount }}/25</span
						>
						<span
							class="span-cancel-save span-cancel"
							@click="toogleSubtopicsCancel"
							id="subtopic-box-cancel"
							>Cancel</span
						>
						<span
							class="span-cancel-save span-save"
							@click="saveSubtopics"
							id="subtopic-box-save"
							>Save</span
						>
					</div>
				</div>

				<div class="topics-list" v-if="subtopicsListShown" id="subtopics-list">
					<div class="text-grey sug-subtopic">SUGGESTED TOPICS</div>
					<button
						v-for="(subtopic, index) in topics"
						:key="subtopic.id"
						class="button-topic text"
						@click="setSubtopic(subtopic)"
						:id="'subtopic-' + index"
					>
						{{ subtopic }}
					</button>
				</div>

				<div id="dialog-to-save">
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
							<base-button
								class="button-white-2 text"
								@click="toogleSaveDialog"
								id="dialog-discard"
								>Discard</base-button
							>
							<base-button
								class="button-blue-2 text"
								@click="saveSubtopics"
								id="dialog-save"
								>Save</base-button
							>
						</div>
					</base-dialog>
				</div>
			</div>

			<div class="line"></div>

			<div class="box-body">
				<base-button
					class="button-blue-2 text button-create-post"
					link
					to="/submit"
					button-text="Create Post"
					id="create-post-subreddit-bar"
				></base-button>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	components: { BaseButton },
	emits: ['reload'],
	props: {
		//@vuese
		//Array of Subreddit suggested topics
		topics: {
			type: Array,
			default: () => [],
		},
		//@vuese
		//Number of members in subreddit
		membersCount: {
			type: Number,
			default: 1,
		},
		//@vuese
		//Number of online members in subreddit
		onlineMembersCount: {
			type: Number,
			default: 1,
		},
		//@vuese
		//Subreddit creation date
		communityDate: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit type (public, restricted, private)
		communityType: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit name
		subredditName: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit description
		communityDescriptionProp: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit main topic
		communityTopicProp: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit array of subtopics
		communitySubtopicsProp: {
			type: Array,
			default: () => [],
		},
		isFavorite: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			dotsClicked: false,
			addedToCustomFeed: false,
			charRemaining: 500,
			textareaShown: false,
			description: '',
			topicsShown: false,
			subtopicsShown: false,
			savedCommunitySubtopics: [],
			saveDialogShown: false,
			isSubtopicsSaved: false,
			isNew: true,
			dateBoxShown: false,
			MembersCountBoxShown: false,
			onlineMembersCountBoxShown: false,
			topicsArrrowBoxShown: false,
			addSubtopicShown: true,
			subtopicsBoxShown: false,
			subtopicsListShown: false,
		};
	},
	computed: {
		emptyDescription() {
			return (
				!this.communityDescriptionProp || this.communityDescriptionProp === ''
			);
		},
		topicChosen() {
			return this.communityTopicProp;
		},
		subtopicChosen() {
			return this.communitySubtopicsProp.length !== 0;
		},
		subtopicsCount() {
			return this.communitySubtopicsProp.length;
		},
		favouriteText() {
			if (!this.isFavorite) return 'Add To Favorites';
			else return 'Remove From Favorites';
		},
		communityCreationDate() {
			//extract year
			let year = this.communityDate.substring(0, 4);

			//extract month and write its name
			let month = this.communityDate.substring(5, 7);
			if (month == '01') month = 'Jan';
			else if (month == '02') month = 'Feb';
			else if (month == '03') month = 'Mar';
			else if (month == '04') month = 'Apr';
			else if (month == '05') month = 'May';
			else if (month == '06') month = 'Jan';
			else if (month == '07') month = 'Jul';
			else if (month == '08') month = 'Aug';
			else if (month == '09') month = 'Sep';
			else if (month == '10') month = 'Oct';
			else if (month == '11') month = 'Nov';
			else if (month == '12') month = 'Dec';

			//extract day
			let day = this.communityDate.substring(8, 10);
			if (day[0] == '0') day = day[1];

			return month + ' ' + day + ', ' + year;
		},
		isPrivate() {
			return this.communityType == 'Private';
		},
	},
	methods: {
		//@vuese
		//Toogle Show/hide options list in about community bar by clicking on dots icon.
		//@arg no argument
		dotsClick() {
			this.dotsClicked = !this.dotsClicked;
		},
		//@vuese
		//Mark subreddit added to custom feed
		//@arg no argument
		addToCustomFeed() {
			this.addedToCustomFeed = true;
		},
		//@vuese
		//Mark subreddit added to favourites
		//@arg no argument
		toogleFavourite() {
			//send request
			const accessToken = localStorage.getItem('accessToken');
			if (this.isFavorite) {
				this.$store.dispatch('community/removeFromFavourite', {
					subredditName: this.subredditName,
					baseurl: this.$baseurl,
					token: accessToken,
				});
			} else {
				this.$store.dispatch('community/addToFavourite', {
					subredditName: this.subredditName,
					baseurl: this.$baseurl,
					token: accessToken,
				});
			}

			//hide list
			this.dotsClick();
		},
		//@vuese
		//Decrease characters count while typing
		//@arg no argument
		charCount() {
			this.charRemaining--;
		},
		//@vuese
		//Mark text area shown
		//@arg no argument
		showTextarea() {
			this.textareaShown = true;
		},
		//@vuese
		//Mark text area hidden
		//@arg no argument
		hideTextarea() {
			this.textareaShown = false;
		},
		//@vuese
		//Save subreddit added description
		//@arg no argument
		async saveDescription() {
			//save description
			this.isSubtopicsSaved = true;
			//hide text area
			this.hideTextarea();

			//send request
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('community/AddDescription', {
				description: this.description,
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.$emit('reload');
			// }
		},
		//@vuese
		//Save subreddit chosen topic and hide topic list
		//@arg chosen topic to be saved
		setTopic(topic) {
			//set topic
			this.communityTopic = topic;
			//mark topic is chosen
			this.topicChosen = true;
			//hide topics list
			this.toogleTopicsList();
			//send request
			const accessToken = localStorage.getItem('accessToken');
			this.$store.dispatch('community/AddMainTopic', {
				topic: this.communityTopic,
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
		},
		//@vuese
		//Add subreddit subtopic if it isn't already chosen and number of chosen subtopics is less than 25
		//@arg chosen subtopic to be added to list
		setSubtopic(subtopic) {
			//check on nimber of added subtopics
			if (this.subtopicsCount < 25) {
				const index = this.communitySubtopics.findIndex(
					(topic) => topic === subtopic
				);
				//check if subreddit chosen before
				if (index === -1) {
					this.communitySubtopics.push(subtopic);
					this.subtopicsCount++;
				}
			}
		},
		//@vuese
		//Show/Hide topics list
		//@arg no argument
		toogleTopicsList() {
			this.topicsShown = !this.topicsShown;
		},
		//@vuese
		//Show/Hide subtopics list
		//@arg no argument
		toogleSubtopics() {
			this.subtopicsShown = !this.subtopicsShown;
		},
		//@vuese
		//Delete subtopics from chosen subtopics list
		//@arg no argument
		deleteSubtopic(subtopic) {
			const index = this.communitySubtopics.findIndex(
				(topic) => topic.id === subtopic.id
			);
			this.communitySubtopics.splice(index, 1);
			this.subtopicsCount--;
		},
		//@vuese
		//save chosen subtopics list
		//@arg no argument
		saveSubtopics() {
			this.subtopicsListShown = false;
			//mark sub topics as saved
			// this.isSubtopicsSaved = true;
			//set subtopics list
			// this.savedCommunitySubtopics = this.communitySubtopics;
			//send request
			const accessToken = localStorage.getItem('accessToken');
			this.$store.dispatch('community/AddSubTopic', {
				subtopics: this.communitySubtopics,
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
				token: accessToken,
			});
		},
		//@vuese
		//Hide add subtopic button and show subtopics list and input area
		//@arg no argument
		showBoth() {
			this.addSubtopicShown = false;
			this.subtopicsBoxShown = true;
			this.subtopicsListShown = !this.subtopicsListShown;
		},
		//@vuese
		//Show/Hide Save or Discard dialog
		//@arg no argument
		toogleSaveDialog() {
			this.saveDialogShown = !this.saveDialogShown;
		},
		//@vuese
		//Cancel chosen subtopics list and show dialog save or discard
		//@arg no argument
		toogleSubtopicsCancel() {
			this.subtopicsListShown = false;
			if (!this.isSubtopicsSaved) {
				this.toogleSaveDialog();
			}
		},
		//@vuese
		//Show/Hide date box while hovering on subreddit creation date
		//@arg no argument
		toogleDateBox() {
			this.dateBoxShown = !this.dateBoxShown;
		},
		//@vuese
		//Show/Hide members count box while hovering on subreddit members count
		toogleMembersCountBox() {
			this.MembersCountBoxShown = !this.MembersCountBoxShown;
		},
		//@vuese
		//Show/Hide online members count box while hovering on subreddit online members count
		//@arg no argument
		toogleOnlineMembersCountBox() {
			this.onlineMembersCountBoxShown = !this.onlineMembersCountBoxShown;
		},
		//@vuese
		//Show/Hide topics info box while hovering on subreddit topics title
		//@arg no argument
		toogleTopicsArrrowBox() {
			this.topicsArrrowBoxShown = !this.topicsArrrowBoxShown;
		},
		//@vuese
		//Show/Hide subreddit new mark
		//@arg no argument
		toogleNew() {
			this.isNew = !this.isNew;
		},
		//@vuese
		//calculate members count of subreddit
		//@arg no argument
		calculateMembers(count) {
			if (count >= 1000000) {
				return parseFloat((count / 1000000).toFixed(1)) + ' M';
			} else if (count >= 1000) {
				return parseFloat((count / 1000).toFixed(1)) + ' K';
			} else {
				return count;
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
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
	fill: var(--color-white-1);
	border-radius: 0.3rem 0.3rem 0 0;
	display: flex;
	padding: 0 1.2rem 1.2rem;
}
.about-title {
	padding: 1.2rem 0 0;
}
.about-h2 {
	font-size: 1.4rem;
	line-height: 1.8rem;
	font-weight: 700;
	text-transform: none;
}
.about-options {
	margin: auto 0 auto auto;
	padding-top: 1rem;
	vertical-align: middle;
}
.mod-tools {
	color: var(--color-white-1);
	outline: none;
	border-radius: 0.2rem;
	border-radius: 0.4rem;
	display: inline-block;
	padding: 0.4rem;
}
.mod-tools:hover {
	background-color: rgba(0, 53, 132, 0.2);
}
a {
	text-decoration: none;
}
.bi-shield {
	margin-right: 0.4rem;
}
.bi-three-dots:hover {
	background-color: rgba(0, 53, 132, 0.2);
	cursor: pointer;
}
.bi-three-dots {
	margin-left: 0.4rem;
	margin-right: 0.4rem;
	border-radius: 0.2rem;
}
.box-options {
	border: 1px solid var(--color-blue-light-2);
	box-shadow: var(--shadow-menu);
	background-color: var(--color-white-1);
	color: var(--color-dark-4);
	border-radius: 0.4rem;
	overflow: hidden;
	position: absolute;
	z-index: 10;
	margin-top: 0.5rem;
}
.button-option {
	color: var(--color-grey-light-5);
	background-color: var(--color-white-1);
	display: block;
	text-transform: capitalize;
	text-align: left;
	outline: none;
	border: none;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	padding: 0.8rem;
	width: 100%;
}
.button-option:hover {
	color: var(--color-dark-4);
	background-color: var(--color-blue-light-2);
}
.about-body {
	padding: 1.2rem;
}
.description-1 {
	display: block;
	cursor: pointer;
	background-color: var(--color-blue-light-4);
	border-radius: 0.4rem;
	padding: 0.8rem;
	margin-bottom: 1.2rem;
	margin-top: 0.8rem;
	border: var(--line-10);
}
.description-1:hover {
	border: var(--line-5);
}
.bi-pencil {
	fill: var(--color-blue-2);
}
.desc-box:hover {
	border: var(--line-5);
	border-radius: 0.4rem;
	padding: 1rem;
}
.blue-border {
	border: var(--line-5);
}
.description-1-text {
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.6rem;
	color: var(--color-blue-2);
}
.description-textarea {
	overflow: hidden;
	overflow-wrap: break-word;
	width: 100%;
	height: 2.1rem;
	resize: none;
	cursor: auto;
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	line-height: 2.1rem;
	font-weight: 400;
	word-wrap: break-word;
	padding: 0;
	border: none;
	outline: none;
	background-color: transparent;
	color: var(--color-dark-4);
}
.span-char {
	flex: 100%;
	color: var(--color-grey-light-5);
	padding-top: 0.5rem;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.6rem;
}
.span-cancel {
	margin-right: 0.8rem;
	color: red;
}
.span-save {
	color: var(--color-blue-2);
}
.span-cancel-save {
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.6rem;
	cursor: pointer;
	align-self: flex-end;
}
.flex {
	display: flex;
}
.box-body {
	margin-top: 1.2rem;
	position: relative;
}
.text-grey {
	color: var(--color-grey-light-5);
}
.text {
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.8rem;
}
.text-bold {
	font-size: 1.6rem;
	font-weight: 500;
	line-height: 2rem;
}
.space {
	margin-left: 0.8rem;
}
.line {
	background-color: var(--color-grey-light-3);
	border: none;
	height: 0.1rem;
	margin: 1.6rem 0;
}
.flex-between {
	display: flex;
	justify-content: space-between;
}
.bi-dot {
	color: var(--color-green);
}
.span-new {
	font-size: 1.2rem;
	line-height: 1.6rem;
	font-weight: 700;
	color: red;
	text-transform: uppercase;
	margin-right: 0.4rem;
}
.bi-info-circle {
	color: var(--color-grey-light-5);
	margin-left: 0.4rem;
}
.info-span :hover {
	color: var(--color-blue-2);
}
.bi-chevron-down {
	margin-left: 0.4rem;
	color: var(--color-blue-2);
}
.box-topic {
	position: relative;
	cursor: pointer;
}
.topics-list {
	max-height: 20rem;
	overflow-y: auto;
	border-radius: 0.4rem;
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
	padding: 0.8rem;
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
	border-radius: 0.4rem;
	border: var(--line-10);
}
.bi-plus-lg {
	color: var(--color-blue-2);
}
.button-subtopic {
	margin-left: 0.8rem;
	margin-top: 0.8rem;
	margin-bottom: 0.8rem;
	padding: 0.2rem 1.2rem 0.2rem 0.6rem;
}
input {
	outline: 0;
	border: none;
	background: transparent;
	width: 100%;
}
.sug-subtopic {
	padding: 1.2rem 1.6rem;
	background-color: var(--color-white-1);
}
.subtopic {
	outline: 0 solid transparent;
	background-color: var(--color-grey-light-3);
	color: var(--color-blue-2);
	border-radius: 1.2rem;
	border: 1px solid transparent;
	cursor: pointer;
	display: inline-block;
	margin-bottom: 0.8rem;
	margin-right: 0.4rem;
	padding: 0.2rem 1rem;
	text-align: center;
	max-width: 24.5rem;
}
.subtopic:hover {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
}
.box-buttons {
	background-color: var(--color-grey-light-2);
	padding: 16px;
	margin: 16px -16px -16px;
	border-bottom-right-radius: 4px;
	display: flex;
	justify-content: flex-end;
	box-sizing: border-box;
}
.button-white-2 {
	border: var(--line-5);
	color: var(--color-blue-2);
	padding: 0.4rem 1.6rem;
	margin-left: 0.8rem;
}
.button-blue-2 {
	background-color: var(--color-blue-2);
	color: var(--color-white-1);
	border: none;
	padding: 0.4rem 1.6rem;
	margin-left: 0.8rem;
}
.button-create-post {
	height: 3.2rem;
	width: 100%;
	margin: 0;
}
.box {
	background-color: var(--color-dark-1);
	color: var(--color-white-1);
	font-size: 9px;
	padding: 5px;
	position: absolute;
	border-radius: 4px;
	text-align: center;
	pointer-events: none;
	transform: translateX(-50%);
	z-index: 100;
}
.box.arrow-top {
	margin-top: 10px;
}
.box.arrow-top:after {
	content: ' ';
	position: absolute;
	right: 25%;
	top: -5px;
	border-top: none;
	border-right: 15px solid transparent;
	border-left: 15px solid transparent;
	border-bottom: 15px solid black;
}
.relative-flex {
	position: relative;
}
.box-arrow-1 {
	right: 20%;
}
.box-arrow-2 {
	right: -150%;
}
.box-arrow-3 {
	right: -200%;
	padding: 10px;
}
.box-arrow-4 {
	right: -10rem;
	width: 25rem;
	font-size: 1.4rem;
	padding: 1rem;
	text-align: left;
	background-color: var(--color-blue-2);
}
.box-arrow-4:after {
	right: 45% !important;
	border-bottom: 15px solid var(--color-blue-2) !important;
}
.point-green {
	background-color: var(--color-green);
	display: inline-block;
	border-radius: 50%;
	width: 4px;
	height: 4px;
	margin-right: 2px;
}
</style>
