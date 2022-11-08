<template>
	<div class="card-prof">
		<div class="profile-card">
			<!-- cover picture has two margins default is for picture profile and other for avatar profile -->
			<div
				class="cover-pic"
				:class="[isAvatar ? 'avatar-margin' : '']"
				id="cover-picture"
			>
				<!-- add image icon at click it trigger input file which is hidden -->
				<span @click="addCoverImage" class="add-image">
					<input
						type="file"
						id="add-cover-button"
						ref="coverFile"
						hidden
						@change="loadCoverPic"
					/>
					<!-- add image icon (+) -->
					<i class="fa-regular fa-square-plus add-image-icon" />
				</span>
				<!-- ///////////////////////////////////////////////////////////// -->
				<!-- profile settings icon -->
				<router-link
					id="profile-settings-icon-card"
					to="/settings/profile"
					class="profile-settings"
					><i class="fa-solid fa-gear"
				/></router-link>
				<!-- ///////////////////// -->
				<!-- incase of  profile picture preview -->
				<div id="profile-picture-box" class="profile-picture" v-if="!isAvatar">
					<img src="../../../../assets/R.png" alt="" id="profile-picture" />
					<input
						type="file"
						hidden
						id="add-profile-button"
						ref="profileFile"
						@change="loadProfilePic"
					/>
					<span
						@click="addProfileImage"
						class="add-image"
						style="bottom: 0px; right: 0px"
						id="add-profile-image-button"
					>
						<i class="fa-regular fa-square-plus add-image-icon" />
					</span>
				</div>
				<!-- //////////////////////////////////// -->
				<!-- incase of avatar pic preview -->
				<div class="profile-avatar" v-else>
					<img src="../../../../assets/avatar.png" alt="" />
				</div>
				<!-- //////////////////////////// -->
				<!-- incase of profile picture display name , user name style -->
			</div>
			<div style="margin-bottom: 8px" v-if="!isAvatar">
				<h4 class="profile-displayedname">
					{{ userData.displayName || 'Abdelhameed_Emad' }}
					<svg
						v-if="userData.nsfw"
						id="profile-nsfw"
						class="Wb4wBt474lETdwG0YpWID"
						viewBox="0 0 40 40"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						width="20px"
						fill="#ff4500"
						margin-left="4px"
						vertical-align="middle"
						height="20px"
					>
						<title>NSFW - Adult Content</title>
						<g>
							<path
								fill="inherit"
								d="M38.5,16.5l-15-15c-2-2-5.1-2-7.1,0l-15,15c-2,2-2,5.1,0,7.1l15,15c2,2,5.1,2,7.1,0l15-15 C40.5,21.6,40.5,18.4,38.5,16.5z M17.7,8.3C17.7,7,18.7,6,20,6s2.3,1,2.3,2.3v14.3c0,1.3-1,2.3-2.3,2.3s-2.3-1-2.3-2.3V8.3z M20,33.7c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1s3.1,1.4,3.1,3.1C23.1,32.4,21.7,33.7,20,33.7z"
							></path>
						</g>
					</svg>
				</h4>
				<router-link
					:to="`/user/${userName}`"
					id="profile-pic-user-name"
					class="profile-username"
					>u/{{ userName }}</router-link
				>
			</div>
			<!-- /////////////////////////////// -->
			<!-- incase of Avatar display name , user name style -->
			<div v-else>
				<h2 class="profile-name" id="profile-name">
					{{ userName || 'Agile_Relative7435' }}
				</h2>
				<p class="profile-desc" id="profile-desc">u/Agile_Relative7435 · 8d</p>
			</div>
			<!-- ////////////////////////////////////////////// -->
			<!-- avatar styling button -->
			<div class="profile-button">
				<button id="style-avatar">
					<i class="fa-solid fa-shirt avatar-style" />Style Avatar
				</button>
			</div>
			<!-- //////////////////// -->
			<!-- about profile box -->
			<div
				class="profile-about"
				id="user-profile-about-box"
				v-if="this.userData.about != ''"
			>
				{{ this.userData.about }}
			</div>
			<!-- ///////////////// -->
			<!-- profile items karma and cake day has two alignment for pic , avatar -->
			<div class="profile-items" :class="[isAvatar ? 'align-center' : '']">
				<span class="i karma">
					<h5>Karma</h5>
					<span>
						<p id="karma">
							<span><i class="fa-solid fa-fan" /></span>{{ userData.karma }}
						</p>
					</span>
				</span>
				<span class="i cake-day">
					<h5>Cake day</h5>
					<span>
						<p id="birth-date">
							<span><i class="fa-solid fa-cake-candles" /></span
							>{{ getMonthName(userData.cakeDate.slice(5, 7)) }}
							{{ userData.cakeDate.slice(8, 10) }},{{
								userData.cakeDate.slice(0, 4)
							}}
						</p>
					</span>
				</span>
			</div>
			<!-- //////////////////////////////////////////// -->
			<!-- follow chat for other users -->
			<follow-chat-component v-if="0"></follow-chat-component>
			<!-- /////////////////////////// -->
			<!-- Social link block  -->
			<sociallinks-block
				:social-data="userData.socialLinks"
			></sociallinks-block>
			<!-- ///////////////// -->
			<!-- New post button -->
			<button
				class="new-post"
				@click="$router.push('/submit')"
				id="profile-new-post"
			>
				New post
			</button>
			<!-- ////////////// -->
			<!-- more options button -->
			<button
				id="more-options-button"
				class="more-options"
				@click="toggleShowMoreOptions"
				v-show="!showMoreOptions"
			>
				More options
			</button>
			<!-- /////////////////// -->
			<!-- profile options -->
			<ul id="profile-options" class="profile-options" v-show="showMoreOptions">
				<router-link
					v-for="profileOption in profileOptions"
					:key="profileOption.name"
					:to="`/user/${userName}${profileOption.toLink}`"
					:id="`profile-option-${profileOption.name}`"
					>{{ profileOption.name }}
				</router-link>
			</ul>
			<!-- /////////////// -->
			<!-- more options button -->
			<button
				id="fewer-options-button"
				class="fewer-options"
				v-show="showMoreOptions"
				@click="toggleShowMoreOptions"
			>
				Fewer options
			</button>
			<!-- ////////////////// -->
		</div>
	</div>
</template>

<script>
import SociallinksBlock from '../SocialLinksComponents/SociallinksBlock.vue';
import FollowChatComponent from './FollowChatComponent.vue';
export default {
	components: {
		SociallinksBlock,
		FollowChatComponent,
	},
	props: {
		// @vuese
		// user Name of the user
		userName: {
			type: String,
			required: true,
		},
		// userData: {
		// 	type: Array,
		// 	required: true,
		// },
	},
	/**
	 * @vuese
	 * when the component was created  we get user data from user store
	 * @arg no arg
	 */
	created() {
		this.userData = this.$store.getters['user/getUserData'];
		// console.log(this.userData);
	},
	data() {
		return {
			// NSFW: 'true',
			userData: {},
			showMoreOptions: false,
			addSocialLinkDialog: false,
			// mySocialLinks: [
			// 	{
			// 		id: '',
			// 		imagesUrl: '',
			// 		name: '',
			// 		type: '' /* there are three types username  */,
			// 	},
			// ],
			profileOptions: [
				{
					name: 'Profile to Moderation',
					toLink: '/about/edit/moderation',
				},
				{
					name: 'Add to Custom Feed',
					toLink: '/about/edit/moderation',
				},
				{
					name: 'Invite someone to chat',
					toLink: '/about/edit/moderation',
				},
			],
			isAvatar: false,
		};
	},
	methods: {
		/**
		 * @vuese
		 * it toggle to Show or Hide user Options
		 * @arg no arg
		 */
		toggleShowMoreOptions() {
			this.showMoreOptions = !this.showMoreOptions;
			// console.log(this.userName, this.$route.props.userName);
		},
		/**
		 * @vuese
		 * this function act as a path when it get clicked to will reflect this click to input field
		 * to open box for adding Profile Image
		 * @arg no arg
		 */
		addProfileImage() {
			document.querySelector('#add-profile-button').click();
		},
		/**
		 * @vuese
		 * this function act as a path when it get clicked to will reflect this click to input field
		 * to open box for adding Profile Cover Image
		 * @arg no arg
		 */
		addCoverImage() {
			document.querySelector('#add-cover-button').click();
		},
		/**
		 * @vuese
		 * this function for upload an Profile Image for testing only after connecting to APi
		 * it will be removed
		 * @arg no arg
		 */
		loadProfilePic() {
			const file = this.$refs.profileFile.files[0];
			// console.log('loadprofilepic');
			const reader = new FileReader();
			reader.onload = () => {
				const result = reader.result;
				document.querySelector('#profile-picture').src = result;
			};
			reader.readAsDataURL(file);
		},
		/**
		 * @vuese
		 * this function for upload an Cover Image for testing only after connecting to APi
		 * it will be removed
		 * @arg no arg
		 */
		loadCoverPic() {
			const file = this.$refs.coverFile.files[0];
			const reader = new FileReader();
			reader.onload = () => {
				const result = reader.result;
				document.querySelector(
					'#cover-picture'
				).style.backgroundImage = `url(${result})`;
			};
			reader.readAsDataURL(file);
		},
		getMonthName(monthNumber) {
			const monthNumberI = Number(monthNumber);
			const date = new Date();
			date.setMonth(monthNumberI - 1);
			return date.toLocaleString('en-US', { month: 'long' });
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
.align-center {
	align-items: center;
}
.card-prof {
	/* margin-left: 24px; */
	width: 100%;
}

.profile-card {
	/* width: 312px; */
	width: 100%;
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
	width: calc(100% + 22px);
	background-color: #2d97d8; /* cover picture default color */
	/* background-image: url(../../assets/R.png); */
	background-size: cover;
	border-radius: 4px 4px 0 0;
	position: relative;
	left: -11px;
	top: -12px;
	/* margin-bottom: calc(160px + 12px + 0px - 94px);  */ /* this for avatar */
	/* 160 pic hieght 12px -> top Avatar , 0 for margin bottom , -94 cover height*/
	margin-bottom: 15px; /* this for picture */
}
.avatar-margin {
	margin-bottom: calc(160px + 12px + 0px - 94px);
}

.cover-pic .add-image {
	font-size: 20px;
	position: absolute;
	right: 15px;
	bottom: 8px;
	/* color: var(--main-white-color); */
	color: var(--color-blue-2);
}

span.add-image {
	position: relative;
	z-index: 50;
	color: var(--main-white-color);
	cursor: pointer;
}
span.add-image i {
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
a.profile-settings:hover {
	color: #0d6efd;
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
.profile-displayedname {
	font-size: 16px;
	line-height: 20px;
	margin: 4px 0;
	font-weight: 500;
	color: #222222;
}
.profile-username {
	font-size: 12px;
	line-height: 16px;
	/* margin-top: 4px; */
	margin-bottom: 8px;
	font-weight: 500;
	color: #222222;
}
.profile-picture {
	position: absolute;
	width: 86px;
	height: 86px;
	padding: 3px;
	/* margin-left: -3px; */
	/* margin-top: 16px; */
	top: calc(16px + 15px);
	left: 12px;
	background-color: #ffffff;
	border-radius: 6px;
	box-sizing: border-box;
}
.profile-picture img {
	width: 100%;
	height: 100%;
	/* background-color: #ec0623; */
	border-radius: 4px;
	object-fit: cover;
	object-position: top;
	border: 1px solid #edeff1;
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

.profile-about {
	font-size: 14px;
	font-weight: 400;
	line-height: 18px;
	color: #1c1c1c;
	/* margin-bottom: 8px; */
	margin-top: 8px;
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
	/* align-items: center; */ /* in case if no abut un commet this  */
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
	display: block;
}

ul.profile-options a {
	display: block;
	height: 24px;
	width: fit-content;
	display: flex;
	align-items: center;
	margin-top: 8px;
	color: var(--color-blue-2);
	position: relative;
	padding: 4px 8px;
}
ul.profile-options a::before {
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
ul.profile-options a {
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
ul.profile-options a:hover::before {
	opacity: 0.08;
}

/* @media (max-width: 960px) {
	.profile-card {
		display: none;
	}
} */
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
