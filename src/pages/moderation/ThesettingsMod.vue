<template>
	<div class="box">
		<p style="text-align: right">
			<span v-if="errorr" class="error"
				>you must fill Community topics, and Community Description.</span
			>
			<base-button
				id="save"
				button-text="Save Changes"
				:disable-button="buttonDisabled"
				class="save-button"
				@click="saveChanges"
			></base-button>
		</p>
		<h3 class="main-title">Community settings</h3>
		<h3 class="secondary-title">COMMUNITY PROFILE</h3>
		<h3 class="medium-font">Community name</h3>
		<input
			id="community-name-input"
			maxlength="93"
			type="text"
			class="community-name-input"
			v-model="communityName"
			:placeholder="subredditName"
		/>
		<div class="Characters-remaining">
			{{ communityNamecount }} Characters remaining
		</div>
		<h3 class="medium-font">Community topics</h3>
		<span class="description"
			>This will help Reddit recommend your community to relevant users and
			other discovery experiences.&nbsp;<a
				href=""
				rel="noopener nofollow ugc"
				target="_blank"
				class="_13svhQIUZqD9PVzFcLwOKT styled-outbound-link _2Tzl9XrmQzUn94gYHRUYMI"
				original_target=""
				waprocessedid="a53wog"
				waprocessedanchor="true"
				style="display: inline-block"
				id="des"
				>Learn more.</a
			>
			<div
				mcafee_wa_ann=""
				waprocessedid="a53wog"
				style="
					cursor: default;
					display: inline-block;
					float: none;
					padding: 0px 0px 0px 4px;
					position: relative;
					top: 2px;
					z-index: 1;
				"
			>
				<div
					id="0DE9E47C-871A-4F90-8440-B190C216800A_11"
					class="mcafee_ok"
					onselectstart="return false;"
					oncontextmenu="return false;"
					tabindex="0"
					style="outline: none"
				></div>
			</div>
			&nbsp;

			<span style="margin-left: auto; margin-right: 2px"
				>{{ subTopics.length }}/25</span
			></span
		>
		<v-select
			style="margin: 10px; width: max-content; color: #0079d3; fill: #0079d3"
			:options="topics"
			v-model="mainTopic"
			@click="getsuggestedTopics()"
			id="select-main"
		></v-select>
		<v-select
			class=""
			style="margin: 10px; height: 50px"
			:options="topics"
			v-model="subTopics"
			multiple
			@click="getsuggestedTopics()"
			id="select-sub"
		></v-select>
		<!-- <div class="_1oREjd5ToMFah-VfX5Zt1z">
			<div class="_1PLoXiZH4WKzHTfmYIt34X qWs3cMcSjquK-OXl-9jH5">
				<button class="apk_M-7ks6NcaiMN8cotM qWs3cMcSjquK-OXl-9jH5" role="menu">
					<span class="Ot99igbaJ5id3P1tw6wow" tabindex="-1"
						>Add a Primary Topic</span
					><i class="icon icon-caret_down"></i>
				</button>
				<div
					class="_3ssvFhIB2HAXL261eWf7G0 _1OISxDncG3tn4CibwqeC4e qWs3cMcSjquK-OXl-9jH5 _3sZzbLftdYnJNnJ7m7ImmO"
				></div>
			</div>
		</div> -->
		<h3 class="medium-font">Community description</h3>
		<p class="description">
			This is how new members come to understand your community.
		</p>
		<textarea
			maxlength="500"
			rows="2"
			class="text-area"
			style="margin-bottom: 0px"
			v-model="communityDescription"
			id="comm-des"
		></textarea>
		<div class="Characters-remaining">
			{{ communityDescriptioncount }} Characters remaining
		</div>
		<h3 class="medium-font">Send welcome message to new members</h3>
		<span class="description"
			>Create a custom welcome message to greet people the instant they join
			your community. New community members will see this in a direct message 1
			hour after joining.&nbsp;<a
				href=""
				rel="noopener nofollow ugc"
				target="_blank"
				class="_13svhQIUZqD9PVzFcLwOKT styled-outbound-link _2Tzl9XrmQzUn94gYHRUYMI"
				original_target=""
				waprocessedid="a53wog"
				waprocessedanchor="true"
				style="display: inline-block"
				id="mess"
				>Learn more.</a
			>
			<div
				mcafee_wa_ann=""
				waprocessedid="a53wog"
				style="
					cursor: default;
					display: inline-block;
					float: none;
					padding: 0px 0px 0px 4px;
					position: relative;
					top: 2px;
					z-index: 1;
				"
			>
				<div
					id="0DE9E47C-871A-4F90-8440-B190C216800A_11"
					class="mcafee_ok"
					onselectstart="return false;"
					oncontextmenu="return false;"
					tabindex="0"
					style="outline: none"
				></div>
			</div>
			&nbsp;
			<switch-button
				id="btn2"
				style="margin-left: 15px"
				@checked="getSendmessage"
				:val="sendWelcomeMessage"
				v-if="create"
			></switch-button>
		</span>
		<textarea
			id="welcome"
			v-if="sendWelcomeMessage"
			maxlength="50000"
			rows="5"
			class="text-area"
			style="
				margin: 10px auto;
				padding: 15px;
				font-size: 15px;
				font-weight: 100;
			"
			v-model="welcomeMessage"
			placeholder="Welcome to our community! We’re here to discuss our passion for all things related to grated cheese. (Heads up—we’re a text-only community, so sorry no image posts.) Get started by introducing yourself in our post for newbies, then check out our rules to learn more and dive in."
		></textarea>
		<h3 class="secondary-title">COMMUNITY LOCATION AND MAIN LANGUAGE</h3>
		<p class="description">
			Adding a location helps your community show up in search results and
			recommendations and helps local redditors find it easier.
		</p>

		<h3 class="medium-font">Language</h3>
		<!-- <input
			id="1"
			data-testid="autocomplete-input-73c89008-53dd-4eea-8ee5-a5e450cf90c7"
			class="language"
			name="1"
			placeholder="Type to search for a language"
			value="English"
		/> -->
		<v-select
			id="lang"
			class="land-drop"
			:options="languages"
			v-model="language"
		></v-select>
		<!-- <div class="parent-language">
			<ul
				class="lang_ul"
				id="autocomplete-dropdown-45a86af7-8d96-49ec-8e3b-bd8aa27fb18f"
			>
				<li class="lang_li">Other</li>
				<li class="lang_li">Afrikaans</li>
				<li class="lang_li">Azərbaycan</li>
				<li class="lang_li">Bahasa Indonesia</li>
				<li class="lang_li">Bahasa Melayu</li>
				<li class="lang_li">Bosanski</li>
				<li class="lang_li">Català</li>
				<li class="lang_li">Čeština</li>
				<li class="lang_li">Dansk</li>
				<li class="lang_li">Deutsch</li>
				<li class="lang_li">Eesti</li>
				<li class="lang_li">English</li>
				<li class="lang_li">English (India)</li>
				<li class="lang_li">English (UK)</li>
				<li class="lang_li">English (US)</li>
				<li class="lang_li">Español (España)</li>
				<li class="lang_li">Español (Latinoamérica)</li>
				<li class="lang_li">Español (US)</li>
				<li class="lang_li">Euskara</li>
				<li class="lang_li">Filipino</li>
				<li class="lang_li">Français</li>
				<li class="lang_li">Français (Canada)</li>
				<li class="lang_li">Galego</li>
				<li class="lang_li">Hrvatski</li>
				<li class="lang_li">IsiZulu</li>
				<li class="lang_li">Íslenska</li>
				<li class="lang_li">Italiano</li>
				<li class="lang_li">Kiswahili</li>
				<li class="lang_li">Latviešu</li>
				<li class="lang_li">Lietuvių</li>
				<li class="lang_li">Magyar</li>
				<li class="lang_li">Nederlands</li>
				<li class="lang_li">Norsk</li>
				<li class="lang_li">O‘zbek</li>
				<li class="lang_li">Polski</li>
				<li class="lang_li">Português</li>
				<li class="lang_li">Português (Brasil)</li>
				<li class="lang_li">Română</li>
				<li class="lang_li">Shqip</li>
				<li class="lang_li">Slovenčina</li>
				<li class="lang_li">Slovenščina</li>
				<li class="lang_li">Srpski</li>
				<li class="lang_li">Suomi</li>
				<li class="lang_li">Svenska</li>
				<li class="lang_li">Tiếng Việt</li>
				<li class="lang_li">Türkçe</li>
				<li class="lang_li">Ελληνικά</li>
				<li class="lang_li">Беларуская</li>
				<li class="lang_li">Български</li>
				<li class="lang_li">Кыргызча</li>
				<li class="lang_li">Қазақ Тілі</li>
				<li class="lang_li">Македонски</li>
				<li class="lang_li">Монгол</li>
				<li class="lang_li">Русский</li>
				<li class="lang_li">Српски</li>
				<li class="lang_li">Українська</li>
				<li class="lang_li">ქართული</li>
				<li class="lang_li">Հայերեն</li>
				<li class="lang_li lang_li2">עברית</li>
				<li class="lang_li lang_li2">اردو</li>
				<li class="lang_li lang_li2">العربية</li>
				<li class="lang_li lang_li2">فارسی</li>
				<li class="lang_li">አማርኛ</li>
				<li class="lang_li">नेपाली</li>
				<li class="lang_li">मराठी</li>
				<li class="lang_li">हिन्दी</li>
				<li class="lang_li">অসমীয়া</li>
				<li class="lang_li">বাংলা</li>
				<li class="lang_li">ਪੰਜਾਬੀ</li>
				<li class="lang_li">ગુજરાતી</li>
				<li class="lang_li">ଓଡ଼ିଆ</li>
				<li class="lang_li">தமிழ்</li>
				<li class="lang_li">తెలుగు</li>
				<li class="lang_li">ಕನ್ನಡ</li>
				<li class="lang_li">മലയാളം</li>
				<li class="lang_li">සිංහල</li>
				<li class="lang_li">ภาษาไทย</li>
				<li class="lang_li">ລາວ</li>
				<li class="lang_li">မြန်မာစကား</li>
				<li class="lang_li">ភាសាខ្មែរ</li>
				<li class="lang_li">한국어</li>
				<li class="lang_li">中文 (简体)</li>
				<li class="lang_li">中文 (繁體)</li>
				<li class="lang_li">中文 (香港)</li>
				<li class="lang_li">日本語</li>
			</ul>
		</div> -->
		<h3 class="medium-font">Region</h3>
		<div style="position: relative">
			<label class="loc-icon" for="location"
				><svg
					style="fill: #878a8c; width: 15px; padding-bottom: 2px"
					viewBox="0 0 13 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m10.4442 10.9445c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5m0-8.944c-3.554 0-6.444 2.891-6.444 6.444 0 3.32 5.143 8.658 5.73 9.256.189.192.446.3.714.3.269 0 .526-.108.714-.3.587-.598 5.73-5.936 5.73-9.256 0-3.553-2.89-6.444-6.444-6.444"
						fill="inherit"
						fill-rule="evenodd"
						transform="translate(-4 -2)"
					></path>
				</svg>
			</label>
			<input
				id="loca"
				class="location-input"
				name="location"
				placeholder="Add location"
				v-model="Region"
			/>
		</div>
		<h3 class="secondary-title">COMMUNITY TYPE</h3>
		<h3 class="medium-font">Type of Community</h3>
		<div class="community-box flex-column">
			<div class="community-box-title">
				<h3 class="title-black">Community type</h3>
			</div>
			<div class="community-box-input flex-column" role="radiogroup">
				<input id="check" type="hidden" />
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
		<h3 class="medium-font">
			<span
				>18+ year old community
				<div class="nsfw">NSFW</div></span
			>
		</h3>
		<p class="description">
			When your community is marked as an 18+ community, users must be flagged
			as 18+ in their user settings
			<switch-button
				id="btn500"
				style="margin-left: 15px"
				@checked="getNsfw"
				:val="nsfw"
				v-if="create"
			></switch-button>
		</p>
		<div v-if="communityType == 'Private'">
			<h3 class="secondary-title">PRIVATE COMMUNITY SETTINGS</h3>
			<h3 class="medium-font">Accepting requests to join</h3>

			<p class="description">
				Display a button on your private subreddit that allows users to request
				to join. Users may still send your subreddit modmail whether this is on
				or off.
				<switch-button
					id="btn1001"
					style="margin-left: 15px"
					@checked="getRequesttojoin"
					v-if="create"
					:val="acceptingRequestsToJoin"
				></switch-button>
			</p>
		</div>
		<div v-if="communityType == 'Restricted'">
			<h3 class="secondary-title">RESTRICTED COMMUNITY SETTINGS</h3>
			<h3 class="medium-font">
				Approved users have the ability to
				<!-- <p style="text-align: right"> -->
				<v-select
					id="approve"
					class=""
					style="margin-left: 50px"
					:options="approvedUsers"
					v-model="approvedUsersHaveTheAbilityTo"
				></v-select>
				<!-- </p> -->
			</h3>
			<p
				style="margin-left: 290px"
				v-if="approvedUsersHaveTheAbilityTo == 'POST ONLY (DEFAULT)'"
			>
				Only approved users can post. Anyone can comment
			</p>
			<p
				style="margin-left: 290px"
				v-if="approvedUsersHaveTheAbilityTo == 'COMMENT ONLY'"
			>
				Only approved users can comment. Anyone can post.
			</p>
			<p
				style="margin-left: 290px"
				v-if="approvedUsersHaveTheAbilityTo == 'POST & COMMENT'"
			>
				Only approved users can post and comment.
			</p>

			<h3 class="medium-font">
				Accepting new requests to post
				<switch-button
					id="btn3000"
					style="margin-left: 15px"
					@checked="getRequeststopost"
					v-if="create"
					:val="acceptingRequestsToPost"
				></switch-button>
			</h3>
		</div>
		<div class="positioning">
			<SaveUnsavePopupMessage
				v-for="message in savedUnsavedPosts"
				:key="message.id"
				:type="message.type"
				:state="message.state"
				:typeid="message.postid"
				@undo-action="undoSaveUnsave"
				id="popup"
			></SaveUnsavePopupMessage>
		</div>
	</div>
</template>

<script>
import BaseButton from '@/components/BaseComponents/BaseButton.vue';
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue'; //
export default {
	watch: {
		communityName(value) {
			this.communityNamecount = 93;
			this.communityName = value;
			this.communityNamecount =
				this.communityNamecount - this.communityName.length;
		},
		communityDescription(value) {
			this.communityDescriptioncount = 500;
			this.communityDescription = value;
			this.communityDescriptioncount =
				this.communityDescriptioncount - this.communityDescription.length;
		},
	},
	async created() {
		await this.getSettings();
		this.create = true;
	},
	computed: {
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		nsfww() {
			return this.$store.getters['setting/getmoderationSettings'].NSFW;
		},
	},
	components: {
		vSelect,
		BaseButton,
		SaveUnsavePopupMessage,
	},
	data() {
		return {
			errorr: false,
			communityName: '',
			mainTopic: '',
			subTopics: [],
			communityDescription: '',
			sendWelcomeMessage: false,
			welcomeMessage: '',
			language: 'English',
			Region: '',
			nsfw: false,
			acceptingRequestsToJoin: false,
			acceptingRequestsToPost: false,
			approvedUsersHaveTheAbilityTo: 'Post only',
			languages: [
				'Afrikaans',
				'Azərbaycan',
				'Bahasa Indonesia',
				'Bahasa Melayu',
				'Bosanski',
				'Català',
				'Čeština',
				'Dansk',
				'Deutsch',
				'Eesti',
				'English',
				'English (India)',
				'English (UK)',
				'English (US)',
				'Español (España)',
				'Español (Latinoamérica)',
				'Español (US)',
				'Euskara',
				'Filipino',
				'Français',
				'Français (Canada)',
				'Galego',
				'Hrvatski',
				'IsiZulu',
				'Íslenska',
				'Italiano',
				'Kiswahili',
				'Latviešu',
				'Lietuvių',
				'Magyar',
				'Nederlands',
				'Norsk',
				'O‘zbek',
				'Polski',
				'Português',
				'Português (Brasil)',
				'Română',
				'Shqip',
				'Slovenščina',
				'Srpski',
				'Suomi',
				'Svenska',
				'Tiếng Việt',
				'Türkçe',
				'Ελληνικά',
				'Беларуская',
				'Български',
				'Кыргызча',
				'Қазақ Тілі',
				'Македонски',
				'Монгол',
				'Русский',
				'Српски',
				'Українська',
				'ქართული',
				'Հայերեն',
				'עברית',
				'اردو',
				'العربية',
				'فارسی',
				'አማርኛ',
				'नेपाली',
				'मराठी<',
				'हिन्दी',
				'অসমীয়া',
				'বাংলা',
				'ਪੰਜਾਬੀ',
				'ગુજરાતી',
				'ଓଡ଼ିଆ',
				'தமிழ்',
				'తెలుగు',
				'ಕನ್ನಡ',
				'മലയാളം',
				'සිංහල',
				'ภาษาไทย',
				'ລາວ',
				'မြန်မာစကား',
				'ភាសាខ្មែរ',
				'한국어',
				'中文 (简体)',
				'中文 (繁體)',
				'中文 (香港)',
				'日本語',
			],
			approvedUsers: ['Post only', 'Comment only', 'Post & Comment'],
			topics: [],
			typeChosen0: true,
			typeChosen1: false,
			typeChosen2: false,
			communityType: 'Public',
			buttonDisabled: false,
			setting: {},
			savedUnsavedPosts: [],
			create: false,
			communityNamecount: 93,
			communityDescriptioncount: 500,
		};
	},
	methods: {
		async getsuggestedTopics() {
			try {
				await this.$store.dispatch('community/getsuggestedTopics', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.topics = this.$store.getters['community/getTopics'];
		},
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
		getSendmessage(value) {
			this.sendWelcomeMessage = value;
			// console.log('this.sendWelcomeMessage');
			// console.log(this.sendWelcomeMessage);
		},
		getNsfw(value) {
			console.log('val', value);
			this.nsfw = value;
			// console.log(this.nsfw);
		},
		getRequesttojoin(value) {
			this.acceptingRequestsToJoin = value;
			// console.log('this.acceptingRequestsToJoin');
			// console.log(this.acceptingRequestsToJoin);
		},
		getRequeststopost(value) {
			this.acceptingRequestsToPost = value;
			// console.log('this.acceptingRequestsToPost');
			// console.log(this.acceptingRequestsToPost);
		},
		async saveChanges() {
			this.errorr = false;
			if (this.communityName == '') this.communityName = this.subredditName;
			if (!this.subTopics || !this.mainTopic || !this.communityDescription) {
				console.log(
					this.subTopics,
					this.mainTopic,
					this.communityDescription,
					this.Region
				);
				this.errorr = true;
				return;
			}
			this.errorr = false;
			// console.log(this.NSFW, 'nnnn');
			const actionPayload = {
				communityName: this.communityName,
				mainTopic: this.mainTopic,
				subTopics: this.subTopics,
				communityDescription: this.communityDescription,
				sendWelcomeMessage: this.sendWelcomeMessage,
				welcomeMessage: this.welcomeMessage,
				language: this.language,
				Region: this.Region,
				Type: this.communityType,
				NSFW: this.nsfw,
				acceptingRequestsToJoin: this.acceptingRequestsToJoin,
				acceptingRequestsToPost: this.acceptingRequestsToPost,
				approvedUsersHaveTheAbilityTo: this.approvedUsersHaveTheAbilityTo,
				subredditName: this.subredditName,
				baseurl: this.$baseurl,
			};
			try {
				const response = await this.$store.dispatch(
					'setting/communitySettings',
					actionPayload
				);
				if (response == 200) {
					// console.log(response);
					// console.log('الحمد لله زى الفل');
					this.doneSuccessfully('changed');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
		},
		async getSettings() {
			if (this.communityName == '') this.communityName = this.subredditName;
			const actionPayload = {
				communityName: this.communityName,
				baseurl: this.$baseurl,
			};
			// console.log(actionPayload);
			console.log(actionPayload);
			try {
				const response = await this.$store.dispatch(
					'setting/fetchmoderationSettings',
					actionPayload
				);
				if (response == 200) {
					// console.log(response);
					// console.log('الحمد لله زى الفل');
				}
			} catch (err) {
				this.error = err;
				console.log(err);
			}
			this.setting = this.$store.getters['setting/getmoderationSettings'];
			// console.log('settings', this.setting);
			this.communityName = this.setting.communityName;
			this.mainTopic = this.setting.mainTopic;
			this.subTopics = this.setting.subTopics;
			this.communityDescription = this.setting.communityDescription;
			this.sendWelcomeMessage = this.setting.sendWelcomeMessage;
			this.welcomeMessage = this.setting.welcomeMessage;
			this.language = this.setting.language;
			this.Region = this.setting.region;
			this.nsfw = this.setting.NSFW;
			this.communityType = this.setting.type;
			this.acceptingRequestsToJoin = this.setting.acceptingRequestsToJoin;
			this.acceptingRequestsToPost = this.setting.acceptingRequestsToPost;
			this.approvedUsersHaveTheAbilityTo =
				this.setting.approvedUsersHaveTheAbilityTo;

			if (!this.acceptingRequestsToJoin) {
				this.acceptingRequestsToJoin = false;
			}
			if (!this.acceptingRequestsToPost) {
				this.acceptingRequestsToPost = false;
			}
			if (!this.approvedUsersHaveTheAbilityTo) {
				this.approvedUsersHaveTheAbilityTo = 'Post only';
			}
			if (!this.NSFW) {
				this.NSFW = false;
			}
			if (!this.sendWelcomeMessage) {
				this.sendWelcomeMessage = false;
			}
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
	},
};
</script>

<style scoped>
.box {
	background-color: #ffffff;
	border-radius: 4px;
	box-sizing: border-box;
	max-width: 856px;
	padding: 16px 24px;
	display: block;
	margin: 10px auto;
	height: max-content;
	overflow-y: auto;
}
.main-title {
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: #1c1c1c;
	margin-bottom: 16px;
	/*margin: 10px auto;*/
}
.secondary-title {
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 12px;
	text-transform: uppercase;
	border-bottom: 1px solid #edeff1;
	color: #7c7c7c;
	margin-bottom: 32px;
	padding-bottom: 6px;
}
.medium-font {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: #1c1c1c;
	display: -ms-flexbox;
	display: flex;
	margin-bottom: 10px;
}
.community-name-input {
	background-color: #ffffff;
	border: 1px solid #edeff1;
	color: #1c1c1c;
	box-sizing: border-box;
	height: 48px;
	margin-bottom: 10px;
	border-radius: 4px;
	padding: 12px 24px 4px 12px;
	width: 100%;
}
.Characters-remaining {
	font-weight: 400;
	color: #7c7c7c;
	padding-top: 5px;
	margin-bottom: 10px;
}
.description {
	display: flex;
	font-weight: 400;
	color: #7c7c7c;
	padding-top: 5px;
	margin: 10px;
}
.text-area {
	background-color: #ffffff;
	border: 1px solid #edeff1;
	border-radius: 4px;
	box-sizing: border-box;
	color: #1c1c1c;
	display: block;
	width: 100%;
	padding: 8px;
	resize: vertical;
	margin: 10px;
}
.language {
	background-color: #ffffff;
	border: 1px solid #edeff1;
	border-radius: 4px;
	color: #1c1c1c;
	-ms-flex: auto;
	flex: auto;
	font-size: 14px;
	line-height: 21px;
	padding: 5px 8px 5px 10px;
	width: 100%;
	margin-top: 10px;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 0;
}
.lang_ul {
	background-color: #ffffff;
	border: 1px solid #edeff1;
	border-radius: 4px;
	box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
	box-sizing: border-box;
	flex: none;
	max-height: 35vh;
	overflow-y: auto;
	position: absolute;
	scroll-behavior: auto;
	top: 100%;
	width: 100%;
	z-index: 3;
	margin-top: 0;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
}
ul,
ol {
	list-style: none;
}
.land-drop {
	margin: 10px;
}
.lang_li {
	cursor: pointer;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	font-size: 14px;
	line-height: 24px;
	padding: 8px 36px 8px 10px;
	margin: 10px;
}
.lang_li2 {
	direction: rtl;
}
.language:focus ~ .lang_ul {
	display: nono;
}
.parent-language {
	display: flex;
	flex: auto;
	position: relative;
}
.location-input {
	background-color: #ffffff;

	border: 1px solid #edeff1;

	border-radius: 4px;
	color: #1c1c1c;
	flex: auto;
	font-size: 14px;
	padding: 5px 8px 5px 36px;
	width: 100%;
	margin-bottom: 20px;
}
.loc-icon {
	left: 8px;
	margin-top: -6px;
	position: absolute;
	top: 30%;
}
.community-box-input {
	align-items: flex-start;
	margin-top: 12px;
}

.flex-cloumn {
	display: flex;
	flex-direction: column;
}
.community-box {
	margin-bottom: 20px;
}
.community-box-title {
	max-width: 100%;
	margin-bottom: -4px;
	margin-right: 8px;
}
.title-black {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: var(--color-dark-1);
	display: flex;
	margin-bottom: 4px;
}

.title-grey {
	font-weight: 400;
	color: var(--color-grey-dark-2);
	font-size: 12px;
	line-height: 16px;
}
.title-red {
	color: red;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.input-name {
	border: 1px solid var(--color-grey-light-2);
	max-height: 37px;
	padding: 4px 24px;
	background-color: var(--color-white-1);
	color: var(--color-dark-1);
	box-sizing: border-box;
	height: 48px;
	margin-bottom: 8px;
	border-radius: 4px;
	width: 100%;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
}
.type-item {
	/*outline: 0 none;
	align-items: flex-start;*/
	margin-bottom: 16px;
	display: flex;
	flex-direction: row;
	/*column-gap: 1px;*/
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
.bi-info-circle {
	padding-left: 4px;
	/* color: var(--color-grey-dark-2); */
	position: absolute;
}
.nsfw {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	border-radius: 2px;
	color: #fff;
	display: inline-block;
	margin: 0 4px 0 8px;
	padding: 0 4px;
	background-color: #ff585b;
}
.save-button {
	width: max-content;
	height: 30px;
	background-color: #0079d3;
	color: white;
	padding: 10px;
	font-size: medium;
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
@media only screen and (max-width: 768px) {
	.box {
		padding: 86px 24px;
	}
}
.error {
	color: var(--color-red-dark-1);
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	margin: 0rem 2rem;
}
</style>
