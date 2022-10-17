<template>
	<!-- <i class="fa-solid fa-shirt"></i>
  <i class="fa-regular fa-square-plus"></i>
  <i class="fa-solid fa-plus"></i>
  <i class="fa-solid fa-gear"></i> -->
	<aside>
		<div class="profile-card">
			<div class="cover-pic">
				<a href="" class="add-image">
					<i class="fa-regular fa-square-plus add-image-icon"
				/></a>
				<a href="" class="settings"><i class="fa-solid fa-gear" /></a>
				<div class="profile-avatar">
					<img src="../../assets/avatar.png" alt="" />
				</div>
			</div>
			<h2 class="profile-name">
				{{ userName || 'Agile_Relative7435' }}
			</h2>
			<p class="profile-desc">u/Agile_Relative7435 · 8d</p>
			<div class="profile-button">
				<button>
					<i class="fa-solid fa-shirt avatar-style" />Style Avatar
				</button>
			</div>
			<div class="profile-items">
				<span class="i karma">
					<h5>Karma</h5>
					<span>
						<i />
						<p>
							<span><i class="fa-solid fa-fan" /></span>1
						</p>
					</span>
				</span>
				<span class="i cake-day">
					<h5>Cake day</h5>
					<span>
						<p>
							<span><i class="fa-solid fa-cake-candles" /></span>october 2,2022
						</p>
					</span>
				</span>
			</div>
			<ul class="social-link">
				<li>
					<button>
						<span class="social-link-image"
							><img
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
					<button class="add-social-link">
						<span><i class="fa-solid fa-plus" /></span>Add social link
					</button>
				</li>
			</ul>
			<button class="new-post">New post</button>
			<button
				class="more-options"
				@click="toggleShowMoreOptions"
				v-show="!showMoreOptions"
			>
				More options
			</button>
			<ul class="profile-options" v-show="showMoreOptions">
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
				class="fewer-options"
				v-show="showMoreOptions"
				@click="toggleShowMoreOptions"
			>
				Fewer options
			</button>
		</div>
	</aside>
</template>

<script>
export default {
	props: {
		userName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			showMoreOptions: false,
			// showMoreOptionsButton:false,
		};
	},
	methods: {
		toggleShowMoreOptions() {
			this.showMoreOptions = !this.showMoreOptions;
			console.log(this.userName, this.$route.props.userName);
		},
	},
};
</script>

<style scoped>
/* :root {
  --back-color :#1A1A1B;
  --main-blue-color: #277e98;
  --main-black-color: #1f2021;
  --main-grey-color: #353235;
  --main-white-color: #ffffff;
  --main-transparent-color: rgb(15 116 143 / 70%);
  --gray-color: #777;
  --main-duration: 0.5s;
} */
* {
	--webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}

/* html {
  scroll-behavior: smooth;
} */

/* body {
  font-family: "Open Sans", sans-serif;
  background-color: var(--main-black-color);
} */

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

aside {
	/* display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  min-height: 80vh; */
	margin-left: 24px;
}

.profile-card {
	width: 312px;
	background-color: var(--back-color);
	display: flex;
	flex-direction: column;
	border: 1px solid #474748;
	padding: 12px;
	border-radius: 5px 5px 4px 4px;
	position: relative;
}

.cover-pic {
	height: 94px;
	width: calc(100% + 24px);
	background-color: #2d97d8;
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
	color: #d7dadc;
}

a.add-image {
	position: relative;
	z-index: 50;
	color: #d7dadc;
}
a.add-image i {
	z-index: 50;
	color: #d7dadc;
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
	background: #1a1a1b;
	border: 1px solid #d7dadc;
	border-radius: 50%;
	z-index: -1;
	/* opacity: 50%; */
}
.settings {
	font-size: 20px;
	height: fit-content;
	position: absolute;
	right: 15px;
	bottom: -36px;
	color: #d7dadc;
}
.profile-avatar img {
	height: 160px;
	/* max-width: 120px; */
	position: absolute;
	top: 12px;
	left: 50%;
	transform: translateX(-50%);
}

.profile-name {
	color: #d7dadc;
	text-align: center;
	margin: 5px;
	/* line-height: 40px; */
}

.profile-desc {
	color: #d7dadc;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	margin: 0px 4px 4px 4px;
	color: #818384;
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
	background-color: #1a1a1b;
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
	justify-content: space-between;
	align-items: center;
	color: #d7dadc;
	flex-wrap: wrap;
	/* margin-bottom: 13px; */
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
}
.social-link {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: wrap;
}

.social-link button {
	background-color: #343536;
	border-radius: 9999px;
	color: #d7dadc;
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
	height: 37px;
	text-align: center;
	color: #1a1a1b;
	background-color: #d7dadc;
	border-radius: 9999px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	padding: 4px 16px;
	cursor: pointer;
	position: relative;
}

button.new-post::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: #1a1a1b;
	z-index: 55;
	opacity: 0;
}

button.new-post:hover::before {
	opacity: 0.08;
}

button.more-options {
	position: relative;
	/* right: -266px; */
	/* transform: translateX(-50%); */
	left: calc(286px - 121.89px);
	background-color: transparent;
	border-radius: 9999px;
	width: fit-content;
	color: #d7dadc;
	padding: 4px 16px;
	border: 1px solid transparent;
	min-height: 32px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	margin-top: 12px;
	cursor: pointer;
	position: relative;
	/* display: none; */
}

ul.profile-options {
	margin-top: 12px;
	font-size: 12px;
	font-weight: 700;
	line-height: 16px;
	padding: 4px 8px;
	/* min-height: 26px; */
	/* display: none; */
}

ul.profile-options li {
	height: 24px;
	width: fit-content;
	display: flex;
	align-items: center;
	margin-top: 8px;
	color: #d7dadc;
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
	background-color: #d7dadc;
	z-index: 55;
	opacity: 0;
}
ul.profile-options li a {
	color: #d7dadc;
}

button.fewer-options {
	position: relative;
	/* right: -266px; */
	/* transform: translateX(-50%); */
	left: calc(286px - 121.89px);
	background-color: transparent;
	border-radius: 9999px;
	width: fit-content;
	color: #d7dadc;
	padding: 4px 16px;
	border: 1px solid transparent;
	min-height: 32px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	margin-top: 12px;
	cursor: pointer;
	position: relative;
	/* display: none; */
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
	background-color: #d7dadc;
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
</style>
