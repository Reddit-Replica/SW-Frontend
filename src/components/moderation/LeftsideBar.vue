<template>
	<div class="content">
		<div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-files icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"
					/>
				</svg>
				Queues
			</div>
			<router-link
				:to="'/r/' + subredditName + '/about/spam'"
				class="options"
				id="spam-button"
				@click="showFunction()"
				>Spam</router-link
			>
			<router-link
				:to="'/r/' + subredditName + '/about/edited'"
				class="options"
				id="edited-button"
				@click="showFunction()"
				>Edited</router-link
			>
			<router-link
				:to="'/r/' + subredditName + '/about/unmoderated'"
				class="options"
				id="unmoderated-button"
				@click="showFunction()"
				>Unmoderated</router-link
			>
		</div>
		<div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-person icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
					/>
				</svg>
				User Management
			</div>
			<router-link
				:to="'/r/' + subredditName + '/about/banned'"
				class="options"
				id="banned-button"
				@click="showFunction()"
				>Banned</router-link
			>
			<router-link
				:to="'/r/' + subredditName + '/about/muted'"
				class="options"
				id="muted-button"
				@click="showFunction()"
				>Muted</router-link
			>
			<router-link
				:to="'/r/' + subredditName + '/about/contributors'"
				class="options"
				id="approved-button"
				@click="showFunction()"
				>Approved</router-link
			>
			<router-link
				:to="'/r/' + subredditName + '/about/moderators'"
				class="options"
				id="moderators-button"
				@click="showFunction()"
			>
				Moderators</router-link
			>
		</div>
		<div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-tag icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z"
					/>
					<path
						d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z"
					/>
				</svg>
				Flair & emojis
			</div>
			<router-link
				:to="'/r/' + subredditName + '/about/postflair'"
				class="options"
				id="post-flair-button"
				@click="showFunction()"
				>Post flair</router-link
			>
		</div>
		<div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-file-earmark-ruled icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5v2zM3 12v-2h2v2H3zm0 1h2v2H4a1 1 0 0 1-1-1v-1zm3 2v-2h7v1a1 1 0 0 1-1 1H6zm7-3H6v-2h7v2z"
					/>
				</svg>
				Ruled and requlations
			</div>
			<router-link
				:to="'/r/' + subredditName + '/about/rules'"
				class="options"
				id="rules-button"
				@click="showFunction()"
				>Rules</router-link
			>
			<!-- <router-link
				:to="'/r/' + subredditName + '/about/settings'"
				class="options"
				id="content-controls-button"
				>Content controls</router-link
			> -->
		</div>
		<!-- <div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-list-ul icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
					/>
				</svg>
				Content
			</div>
			<router-link
				:to="'/r/' + subredditName + '/about/scheduledposts'"
				class="options"
				id="scheduled-posts-button"
				>Scheduled posts</router-link
			>
		</div> -->
		<div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-gear icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
					/>
					<path
						d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
					/>
				</svg>
				Other
			</div>
			<router-link
				:to="'/r/' + subredditName + '/about/edit/community'"
				class="options"
				id="community-settings-button"
				@click="showFunction()"
				>Community settings
				<div class="new">New</div>
				<svg class="icon-mod icon-arrow icon-right">
					<use xlink:href="../../../img/sprite.svg#icon-chevron-thin-right" />
				</svg>
			</router-link>
			<router-link
				:to="'/r/' + subredditName + '/about/edit/postsandcomments'"
				class="options"
				id="postsandcomments-button"
				@click="showFunction()"
				>Posts and Comments settings
				<div class="new">New</div>
				<svg class="icon-mod icon-arrow icon-right">
					<use xlink:href="../../../img/sprite.svg#icon-chevron-thin-right" />
				</svg>
			</router-link>
		</div>
		<!-- Modmail -->
		<!-- <div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-bar-chart icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5v12h-2V2h2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
					/>
				</svg>
				ModMail
			</div>
			<a href="#" class="options"
				>Modmail
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-up-right icon-arrow"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
					/>
				</svg>
			</a>
		</div> -->
		<!-- <div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-envelope icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
					/>
				</svg>
				Community Activity
			</div>
			<router-link
				:to="'/r/' + subredditName + '/about/traffic'"
				class="options"
				id="traffic-stats-button"
				>Traffic stats</router-link
			>
		</div> -->
		<!-- Mod Help -->
		<!-- <div class="box">
			<div class="head">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-question-circle icon-mod"
					viewBox="0 0 16 16"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
					/>
				</svg>
				Mod Help Center
			</div>
			<a href="#" class="options"
				>Mod help center
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-up-right icon-arrow icon-arrow"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
					/>
				</svg>
			</a>
			<a href="#" class="options"
				>Mod education site
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-up-right icon-arrow icon-arrow"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
					/>
				</svg>
			</a>
			<a href="#" class="options"
				>Moderator code of conduct
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-up-right icon-arrow"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
					/>
				</svg>
			</a>
			<a href="#" class="options"
				>r/ModSupport
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-up-right icon-arrow"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
					/>
				</svg>
			</a>
			<a href="#" class="options"
				>r/ModHelp
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-up-right icon-arrow"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
					/>
				</svg>
			</a>
			<a href="#" class="options"
				>Contact Reddit
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-box-arrow-up-right icon-arrow"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
					/>
					<path
						fill-rule="evenodd"
						d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
					/>
				</svg>
			</a>
		</div> -->
	</div>
</template>

<script>
export default {
	emits: ['showFunction'],
	props: {
		// @vuese
		//subreddit name
		// @type string
		subredditName: {
			type: String,
			default: 'Subreddit Name',
			requiered: true,
		},
	},
	methods: {
		showFunction() {
			this.$emit('showFunction');
		},
	},
};
</script>

<style scoped>
.content {
	background-color: var(--color-blue-light-4);
	bottom: 0;
	box-sizing: border-box;
	color: var(--color-dark-3);
	overflow: auto;
	padding-top: 1.6rem;
	padding-bottom: 3.2rem;
	position: fixed;
	top: 8.8rem;
	width: 28rem;
	z-index: 30;
}
.box {
	margin-bottom: 0.8rem;
	padding-bottom: 0.8rem;
	display: flex;
	flex-direction: column;
}
.head {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.2rem;
	text-transform: uppercase;
	-ms-flex-align: center;
	align-items: center;
	color: var(--color-grey-dark-8);
	display: -ms-flexbox;
	display: flex;
	padding: 0.8rem 2.4rem;
}
.icon-mod {
	color: var(--color-grey-dark-8);
	margin-right: 0.8rem;
	font-size: 2rem;
	font-weight: 400;
	height: 2rem;
	line-height: 2rem;
	vertical-align: middle;
	width: 2rem;
}
.icon-mod:before {
	content: '\f211';
}

.options {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 1.8rem;
	-ms-flex-align: center;
	align-items: center;
	border-left: 0.4rem solid transparent;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
	padding: 0.8rem 2.4rem;
	color: inherit;
	text-decoration: inherit;
}
.options:hover {
	background-color: var(--color-grey-light-10);
}
.selected,
a.router-link-active {
	border-left: 0.4rem solid var(--color-blue-2);
	display: -ms-flexbox;
	display: flex;
	background-color: var(--color-grey-light-10);
}
.icon-arrow {
	color: var(--color-grey-dark-8);
	fill: var(--color-grey-dark-8);
	font-size: 1.6rem;
	margin-left: auto;
}
.new {
	font-size: 1.2rem;
	font-weight: 700;
	line-height: 1.6;
	background-color: var(--color-red-dark-3);
	border-radius: 2px;
	color: var(--main-white-color);
	display: -ms-flexbox;
	display: flex;
	-ms-flex-pack: center;
	justify-content: center;
	height: 1.8rem;
	line-height: inherit;
	margin-left: auto;
	padding: 0 2px;
	text-align: center;
	text-transform: uppercase;
	white-space: nowrap;
	flex: 0 1 4.5rem;
}
.icon-right {
	color: var(--color-grey-dark-8);
}
@media only screen and (max-width: 768px) {
	.content {
		top: 18.6rem;
		left: 0;
	}
}
</style>
