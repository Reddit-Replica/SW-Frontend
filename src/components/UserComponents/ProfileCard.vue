<template>
	<div class="card-prof">
		<div class="profile-card">
			<div class="cover-pic">
				<a href="" class="add-image">
					<input type="file" class="insert-cover-image" id="5" />
					<i class="fa-regular fa-square-plus add-image-icon" />
				</a>
				<a href="" class="profile-settings"><i class="fa-solid fa-gear" /></a>
				<div class="profile-avatar">
					<img src="../../assets/avatar.png" alt="" />
				</div>
			</div>
			<div>
				<h2 class="profile-name" id="profile-name">
					{{ userName || 'Agile_Relative7435' }}
				</h2>
				<p class="profile-desc" id="profile-desc">u/Agile_Relative7435 · 8d</p>
			</div>
			<div class="profile-button">
				<button id="style-avatar">
					<i class="fa-solid fa-shirt avatar-style" />Style Avatar
				</button>
			</div>
			<div class="profile-items">
				<span class="i karma">
					<h5>Karma</h5>
					<span>
						<i />
						<p id="karma">
							<span><i class="fa-solid fa-fan" /></span>1
						</p>
					</span>
				</span>
				<span class="i cake-day">
					<h5>Cake day</h5>
					<span>
						<p id="birth-date">
							<span><i class="fa-solid fa-cake-candles" /></span>october 2,2022
						</p>
					</span>
				</span>
			</div>
			<ul class="social-link" id="social-media-links">
				<li>
					<button id="social-media-button">
						<span class="social-link-image"
							><img
								id="social-media-image"
								src="https://www.google.com.eg/search?q=instagram+icon&sxsrf=ALiCzsbUQL3AUT9Mw2XMxdeRynTtcYzi1w:1665686772149&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiymvHi7t36AhUQhf0HHV6vCqUQ_AUoAXoECAMQAw&biw=1536&bih=722&dpr=1.25#imgrc=IoO0WgvsFBSIIM"
								alt="" /></span
						>socail media
					</button>
				</li>
				<li>
					<button>
						<span class="social-link-image"
							><img
								src="https://www.google.com.eg/search?q=instagram+icon&sxsrf=ALiCzsbUQL3AUT9Mw2XMxdeRynTtcYzi1w:1665686772149&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiymvHi7t36AhUQhf0HHV6vCqUQ_AUoAXoECAMQAw&biw=1536&bih=722&dpr=1.25#imgrc=z3ESiuXOiGuxXM"
								alt="" /></span
						>hhh
					</button>
				</li>
				<li>
					<button>
						<span class="social-link-image"><img src="" alt="" /></span>hhh
					</button>
				</li>
				<li>
					<button class="add-social-link" @click="openSocialLinkDialog">
						<span><i class="fa-solid fa-plus" /></span>Add social link
					</button>
				</li>
			</ul>
			<button class="new-post">New post</button>
			<button
				id="more-options-button"
				class="more-options"
				@click="toggleShowMoreOptions"
				v-show="!showMoreOptions"
			>
				More options
			</button>
			<ul id="profile-options" class="profile-options" v-show="showMoreOptions">
				<li>
					<a href="">Profile to Moderation</a>
				</li>
				<li>
					<a href="">Add to Custom Feed</a>
				</li>
				<li>
					<a href="">Invite someone to chat</a>
				</li>
			</ul>
			<button
				id="fewer-options-button"
				class="fewer-options"
				v-show="showMoreOptions"
				@click="toggleShowMoreOptions"
			>
				Fewer options
			</button>
		</div>
	</div>
	<social-links
		:show="addSocialLinkDialog"
		@close="closeSocialLinkDialog"
	></social-links>
</template>

<script>
import SocialLinks from './SocialLinks.vue';
export default {
	components: {
		SocialLinks,
	},
	props: {
		userName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			showMoreOptions: false,
			addSocialLinkDialog: false,
			mySocialLinks: [
				{
					id: '',
					imagesUrl: '',
					Name: '',
				},
			],
		};
	},
	methods: {
		toggleShowMoreOptions() {
			this.showMoreOptions = !this.showMoreOptions;
			console.log(this.userName, this.$route.props.userName);
		},
		openSocialLinkDialog() {
			this.addSocialLinkDialog = true;
		},
		closeSocialLinkDialog() {
			this.addSocialLinkDialog = false;
		},
	},
};
</script>

<style scoped>
* {
	--webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
ul {
	list-style: none;
	border-bottom: none;
}

a {
	text-decoration: none;
}

.card-prof {
	margin-left: 24px;
}

.profile-card {
	width: 312px;
	background-color: var(--main-white-color);
	display: flex;
	flex-direction: column;
	border: 1px solid var(--color-grey-light-4);
	padding: 12px;
	border-radius: 5px 5px 4px 4px;
	position: relative;
}

.cover-pic {
	height: 94px;
	width: calc(100% + 23px);
	background-color: #2d97d8; /* cover picture default color */
	border-radius: 4px 4px 0 0;
	position: relative;
	left: -12px;
	top: -12px;
	margin-bottom: calc(160px + 12px + 0px - 94px);
	/* 160 pic hieght 12px -> top Avatar , 0 for margin bottom , -94 cover height*/
}

.cover-pic .add-image {
	font-size: 20px;
	position: absolute;
	right: 15px;
	bottom: 8px;
	/* color: var(--main-white-color); */
	color: var(--color-blue-2);
}

a.add-image {
	position: relative;
	z-index: 50;
	color: var(--main-white-color);
}
a.add-image i {
	z-index: 50;
	color: var(--main-white-color);
}
.add-image::before {
	content: '';
	position: absolute;
	height: 35px;
	width: 35px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, calc(-50%));
	/* background: #ec0623; */
	background: var(--main-white-color);
	border: 1px solid var(--color-blue-2);
	border-radius: 50%;
	z-index: -1;
	/* opacity: 50%; */
}
.profile-settings {
	font-size: 20px;
	height: fit-content;
	position: absolute;
	right: 15px;
	bottom: -36px;
	/* color: var(--main-white-color); */
	/* border: 1px solid var(--color-blue-2); */
}
.profile-avatar img {
	height: 160px;
	/* max-width: 120px; */
	position: absolute;
	/* top: 12px;  this for handling*/
	top: 18px;
	left: 50%;
	transform: translateX(-50%);
}

.profile-name {
	color: var(--color-dark-2);
	text-align: center;
	/* margin: 5px; */
	/* line-height: 40px; */
}

.profile-desc {
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	margin: 0px 4px 4px 4px;
	color: var(--color-grey-light-4);
}

.profile-button {
	width: 100%;
}

.profile-button button {
	width: 100%;
	text-align: center;
	background: linear-gradient(90deg, #ec0623, #ff8717);
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: capitalize;
	line-height: 17px;
	border-radius: 999px;
	padding: 8px 16px;
	cursor: pointer;
	position: relative;
	border: none;
}

.avatar-style {
	position: absolute;
	left: 15px;
}

.profile-button button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
	/* opacity: .08; */
}

.profile-button button:hover::before {
	opacity: 0.08;
}

.profile-items {
	display: block;
	height: 52px;
}

.profile-items {
	display: flex;
	/* justify-content: space-between; */
	align-items: center;
	color: var(--color-dark-2);
	flex-wrap: wrap;
	/* margin-bottom: 13px; */
}
.profile-items span.i.karma {
	flex: 1 1 50%;
}
.profile-items span.i.cake-day {
	flex: 1 1 50%;
}
.profile-items h5 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
}

.profile-items .i {
	margin-top: 5px;
	min-width: fit-content;
	/* margin-left: 15px; */
	/* flex-basis: 1; */
}

.profile-items .i span p {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #818384;
	/* margin-left: 4px;  */
	/* will added later for icon */
}
.karma p span {
	margin-right: 4px;
	color: #24a0ed;
}

.cake-day p span {
	margin-right: 4px;
	color: #24a0ed;
	flex: 1 1 50%;
}
.social-link {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 8px;
}

.social-link button {
	background-color: var(--color-grey-dark-5);
	border-radius: 9999px;
	color: var(--color-dark-3);
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	cursor: pointer;
	margin-right: 8px;
	padding: 10px 12px;
	text-align: center;
	line-height: 16px;
	display: flex;
	align-items: center;
	border: none;
}
.social-link button span {
	font-size: 20px;
	margin-right: 8px;
	vertical-align: middle;
	font-weight: 500;
}
.social-link-image {
	height: 16px;
	width: 16px;
	margin-right: 8px;
}
button.new-post {
	width: 100%;
	margin-top: 10px;
	text-align: center;
	color: var(--main-white-color);
	background-color: var(--color-blue-2);
	border-radius: 9999px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	padding: 4px 16px;
	cursor: pointer;
	position: relative;
	border: none;
}

button.new-post::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}

button.new-post:hover::before {
	opacity: 0.08;
}

ul.profile-options {
	margin-top: 12px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	cursor: pointer;
}

ul.profile-options li {
	height: 24px;
	width: fit-content;
	display: flex;
	align-items: center;
	margin-top: 8px;
	color: var(--color-blue-2);
	position: relative;
	padding: 4px 8px;
}
ul.profile-options li::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--color-dark-3);
	z-index: 55;
	opacity: 0;
}
ul.profile-options li a {
	color: var(--color-blue-2);
}

button.more-options,
button.fewer-options {
	position: relative;
	left: calc(286px - 121.89px);
	background-color: transparent;
	border-radius: 9999px;
	width: fit-content;
	color: var(--color-blue-2);
	padding: 4px 16px;
	border: 1px solid transparent;
	min-height: 32px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	margin-top: 12px;
	cursor: pointer;
	position: relative;
}

button.more-options::before,
button.fewer-options::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--color-dark-3);
	z-index: 55;
	opacity: 0;
}

button.more-options:hover::before,
button.fewer-options:hover::before,
ul.profile-options li:hover::before {
	opacity: 0.08;
}

@media (max-width: 960px) {
	.profile-card {
		display: none;
	}
}
input.insert-cover-image {
	position: absolute;
	height: 35px;
	width: 35px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, calc(-50%));
	border-radius: 50%;
	opacity: 0;
	cursor: pointer;
}
</style>
