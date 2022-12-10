<template>
	<div class="box">
		<h3 class="main-title">Community settings</h3>
		<h3 class="secondary-title">COMMUNITY PROFILE</h3>
		<h3 class="medium-font">Community name</h3>
		<input
			maxlength="100"
			type="text"
			class="community-name-input"
			value="nono58"
		/>
		<div class="Characters-remaining">93 Characters remaining</div>
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
			&nbsp;<span style="margin-left: auto; margin-right: 2px">0/25</span></span
		>
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
		></textarea>
		<div class="Characters-remaining">500 Characters remaining</div>
		<h3 class="medium-font">Send welcome message to new members</h3>
		<!-- <p class="description">
			This is how new members come to understand your community.
		</p> -->
		<h3 class="secondary-title">COMMUNITY LOCATION AND MAIN LANGUAGE</h3>
		<p class="description">
			Adding a location helps your community show up in search results and
			recommendations and helps local redditors find it easier.
		</p>
		<!-- <div class="community-box flex-column">
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
		</div> -->
		<h3 class="medium-font">Language</h3>
		<input
			id="1"
			data-testid="autocomplete-input-73c89008-53dd-4eea-8ee5-a5e450cf90c7"
			class="language"
			name="1"
			placeholder="Type to search for a language"
			value="English"
		/>
		<!-- <ul
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
			<li class="lang_li2 lang_li">English</li>
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
			<li class="lang_li _3e5-Tc_WqzN-NNzAg8R7T6">עברית</li>
			<li class="lang_li _3e5-Tc_WqzN-NNzAg8R7T6">اردو</li>
			<li class="lang_li _3e5-Tc_WqzN-NNzAg8R7T6">العربية</li>
			<li class="lang_li _3e5-Tc_WqzN-NNzAg8R7T6">فارسی</li>
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
		</ul> -->
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
					></path></svg
			></label>
			<input
				class="location-input"
				name="location"
				placeholder="Add location"
				value=""
			/>
		</div>
		<h3 class="secondary-title">COMMUNITY TYPE</h3>
		<h3 class="medium-font">Type of Community</h3>
		<h3 class="secondary-title">PRIVATE COMMUNITY SETTINGS</h3>
		<h3 class="medium-font">Accepting requests to join</h3>

		<p class="description">
			Display a button on your private subreddit that allows users to request to
			join. Users may still send your subreddit modmail whether this is on or
			off.
			<switch-button id="btn2"></switch-button>
		</p>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
	margin: 10px auto;
}
.box {
	background-color: #ffffff;
	border-radius: 4px;
	box-sizing: border-box;
	max-width: 856px;
	padding: 16px 24px;
	display: block;
}
.main-title {
	font-size: 18px;
	font-weight: 500;
	line-height: 22px;
	color: #1c1c1c;
	margin-bottom: 16px;
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
	margin-bottom: 4px;
}
.community-name-input {
	background-color: #ffffff;
	border: 1px solid #edeff1;
	color: #1c1c1c;
	box-sizing: border-box;
	height: 48px;
	margin-bottom: 8px;
	border-radius: 4px;
	padding: 12px 24px 4px 12px;
	width: 100%;
}
.Characters-remaining {
	font-weight: 400;
	color: #7c7c7c;
	padding-top: 5px;
	margin: 1x;
}
.description {
	display: flex;
	font-weight: 400;
	color: #7c7c7c;
	padding-top: 5px;
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
}
.lang_ul {
	background-color: #ffffff;
	border: 1px solid #edeff1;
	border-radius: 4px;
	box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
	box-sizing: border-box;
	-ms-flex: none;
	flex: none;
	max-height: 35vh;
	overflow-y: auto;
	position: absolute;
	scroll-behavior: auto;
	top: 100%;
	width: 100%;
	z-index: 3;
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
}
.lang_li2 {
	direction: rtl;
}
.lang_li3 {
	direction: rtl;
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
}
.loc-icon {
	left: 8px;
	margin-top: -6px;
	position: absolute;
	top: 30%;
}
/*.community-box-input {
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
}*/
</style>
