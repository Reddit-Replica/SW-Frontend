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
			style="margin-bottom: 0px; resize: both"
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
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
	margin: 5px;
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
}
</style>
