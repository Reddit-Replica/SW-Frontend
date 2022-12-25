<template>
	<div class="page-container" style="min-height: 100vh">
		<div class="page-box">
			<h2 class="h2-main-title">Safety & Privacy</h2>
			<p class="main-trans-p">
				Manage how we use data to personalize your Reddit experience, and
				control how other redditors interact with you. To learn more, visit our
				<span
					><a href="" id="privacy-security-faqs-link">
						Privacy & Security FAQs</a
					>
				</span>
				.
			</p>
			<h3 class="h3-main-title" text-transform="capitalize">safety</h3>
			<div class="blocked-people">
				<h4>People You’ve Blocked</h4>
				<p>Blocked people can’t send you chat requests or private messages.</p>
				<div class="block-user-block">
					<div class="input-area">
						<input
							type="text"
							v-model="BlockedNewUserName"
							@blur="focusOut"
							id="block-new-user-input"
						/>
						<label :class="focusInOut" for="">BLOCK NEW USER</label>
						<button
							id="Add-block-new-user-button"
							:class="activeAddButton ? 'buttonActive' : 'buttonDisActive'"
							@click="addBlockedUser"
						>
							ADD
						</button>
					</div>
					<ul class="blocked-users">
						<li v-for="blockedUser in blockedUsers" :key="blockedUser.userId">
							<div class="blocked-container">
								<router-link
									:to="`/user/${blockedUser.username}`"
									class="blocked-user-info"
								>
									<img :src="$baseurl + '/' + blockedUser.avatar" alt="" />
									<span>{{ blockedUser.username }}</span>
								</router-link>
								<span>{{ getMoment(blockedUser.blockDate) }}</span>
							</div>
							<button
								:id="`remove-${blockedUser.id}`"
								@click="removeBlockedUser(blockedUser.username)"
							>
								REMOVE
							</button>
						</li>
					</ul>
				</div>
			</div>

			<!-- <h3 class="h3-main-title" text-transform="capitalize">privacy</h3>
			<div class="privacy-item">
				<div class="privacy-desc">
					<label for="">
						<h3>Show up in search results</h3>
					</label>
					<p>
						Allow search engines like Google to link to your profile in their
						search results
					</p>
				</div>
				<div class="privacy-button">
					<switch-button id="show-up-search-results"></switch-button>
				
				</div>
			</div> -->
			<!-- <div class="privacy-item">
				<div class="privacy-desc">
					<label for="">
						<h3>
							Personalize all of Reddit based on the outbound links you click on
						</h3>
					</label>
					<p>
						Allow us to use the links to other sites you click on for
						operational purposes (that help us better understand how you and
						others use Reddit) and to show you better ads and recommendations.
					</p>
				</div>
				<div class="privacy-button">
					<switch-button id="Personalize-outbound-links"></switch-button>
					
				</div>
			</div>
			<div class="privacy-item">
				<div class="privacy-desc">
					<label for="">
						<h3>Personalize ads based on information from our partners</h3>
					</label>
					<p>
						Allow us to use information that our advertising partners send us to
						show you better ads.
					</p>
				</div>
				<div class="privacy-button">
					<switch-button id="Personalize-ads-information"></switch-button>
				</div>
			</div> -->
			<!-- <div class="privacy-item">
				<div class="privacy-desc">
					<label for="">
						<h3>Personalize ads based on your activity with our partners</h3>
					</label>
					<p>
						Allow us to use your interactions with sites and apps we partner
						with to show you better ads.
					</p>
				</div>
				<div class="privacy-button">
					<switch-button id="Personalize-ads-activity "></switch-button>
				
				</div>
			</div> -->
			<!-- <div class="privacy-item">
				<div class="privacy-desc">
					<label for="">
						<h3>Personalize recommendations based on your general location</h3>
					</label>
					<p>
						Allow us to use your city, state, or country (based on your IP) to
						recommend better posts and communities.
					</p>
				</div>
				<div class="privacy-button">
					<switch-button
						id="Personalize-recommendations-general"
					></switch-button>
					
				</div>
			</div> -->
			<!-- <div class="privacy-item">
				<div class="privacy-desc">
					<label for="">
						<h3>
							Personalize recommendations based on your activity with our
							partners
						</h3>
					</label>
					<p>
						Allow us to use your interactions with sites and apps we partner
						with to recommend better posts and communities.
					</p>
				</div>
				<div class="privacy-button">
					<switch-button
						id="Personalize-recommendations-activity"
					></switch-button>
			
				</div>
			</div> -->
			<!-- <h3 class="h3-main-title" text-transform="capitalize">
				Advanced security
			</h3>
			<div class="privacy-item">
				<div class="privacy-desc">
					<label for="">
						<h3>Use two-factor authentication</h3>
					</label>
					<p>
						Help protect your account (even if someone gets your password) by
						requiring a verification code and a password to log in.
					</p>
				</div>
				<div class="privacy-button">
					<switch-button id="Use-two-factor-authentication"></switch-button>
				
				</div>
			</div> -->
			<!-- <div class="privacy-item">
				<div class="privacy-desc">
					<a href="">
						<h3 id="third-party">
							Manage third-party app authorization
							<i
								class="fa-solid fa-arrow-up-right-from-square up-right-arrow"
							></i>
						</h3>
					</a>
				</div>
				<div class="privacy-button">
					<a href="">
						<i id="third-party-button" class="fa-solid fa-arrow-right"></i>
					</a>
				</div>
			</div> -->
			<!-- </div> -->
			<div class="positioning">
				<SaveUnsavePopupMessage
					v-for="message in popupMessages"
					:key="message.id"
					:typeid="message.postid"
				>
					{{ message.state }}
				</SaveUnsavePopupMessage>
			</div>
		</div>
	</div>
</template>

<script>
import * as moment from 'moment';
import SaveUnsavePopupMessage from '../../components/PostComponents/SaveUnsavePopupMessage.vue';

export default {
	components: {
		SaveUnsavePopupMessage,
	},
	data() {
		return {
			BlockedNewUserName: '',
			focusInOut: 'focus-out',
			popupMessages: [],
			blockedUsers: [],
			// blockedUsers: [
			// 	{
			// 		id: 1,
			// 		name: 'Karimsaqer',
			// 		blockedDate: '5 hours ago',
			// 		blockedPic:
			// 			'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
			// 	},
			// 	{
			// 		id: 2,
			// 		name: 'KarimMohamed',
			// 		blockedDate: '10 hours ago',
			// 		blockedPic:
			// 			'https://www.redditstatic.com/avatars/defaults/v2/avatar_default_1.png',
			// 	},
			// ],
		};
	},
	/**
	 * @vuese
	 * at creation of the page we request blocked user data
	 * @arg no arg
	 */
	async created() {
		this.loading = true;
		const requestStatus = await this.RequestListOfBlockedUsersData();
		this.loading = false;
		if (requestStatus == 200) console.log('done fetched alist of users');
		// this.requestStatusHandler(requestStatus, 'ListOfBlockedUsersData');
	},
	methods: {
		/**
		 * @vuese
		 * handles the status code of requested data
		 * @arg no arg
		 */
		requestStatusHandler(requestStatus /*, st*/) {
			if (requestStatus == 200) {
				// this.emitPopup('11', `Successfully  ${st}  a user`);
				// console.log(`Successfully fetched ${st} data`);
			} else if (requestStatus == 404) {
				// console.log(`Not found  ${st} user `);
				// this.emitPopup('11', `Not found a user with that name`);
			} else if (requestStatus == 500) {
				console.log(' internal server error');
				// this.emitPopup('11', `internal server error`);
			} else if (requestStatus == 401) {
				console.log(' access denied');
				// this.emitPopup('11', `access denied`);
			} else {
				// console.log(`Error !!!!  ${st} !!!!!`);
				// this.emitPopup('11', `Error !!!!  ${st} !!!!!`);
			}
			// this.emitPopup('11', `Error !!!!  ${st} !!!!!`);
		},
		/**
		 * @vuese
		 * convert the date to the moment from now
		 * @arg no arg
		 */
		getMoment(date) {
			return moment(date).fromNow();
		},
		/**
		 * @vuese
		 * make request to get blocked user data
		 * @arg no arg
		 */
		async RequestListOfBlockedUsersData() {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch(
					'user/FetchListOfBlockedUsers',
					{
						baseurl: this.$baseurl,
					}
				);
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.blockedUsers =
				this.$store.getters['user/getBlockedUsersData'].children;
			return requestStatus;
		},
		/**
		 * @vuese
		 * make a request to block new user
		 * @arg no arg
		 */
		async addBlockedUser() {
			let requestStatus = -1;
			if (this.activeAddButton) {
				try {
					requestStatus = await this.$store.dispatch('user/blockUnblockUser', {
						baseurl: this.$baseurl,
						blockUnblockData: {
							username: this.BlockedNewUserName,
							block: true,
						},
					});
				} catch (error) {
					this.error = error.message || 'Something went wrong';
				}
				if (requestStatus == 200)
					this.emitPopup('1', `${this.BlockedNewUserName} is now blocked`);
				else {
					this.emitPopup('1', `An error has occured. Please try again later`);
				}
				this.BlockedNewUserName = '';
				this.focusInOut = 'focus-out';
				this.requestStatusHandler(requestStatus, 'block');
				await this.RequestListOfBlockedUsersData();
				this.blockedUsers =
					this.$store.getters['user/getBlockedUsersData'].children;
			}
		},
		/**
		 * @vuese
		 * make request to remove block from a user
		 * @arg blockUsername  the name of the user that  want to remove the block from him
		 */
		async removeBlockedUser(blockUsername) {
			let requestStatus = -1;
			try {
				requestStatus = await this.$store.dispatch('user/blockUnblockUser', {
					baseurl: this.$baseurl,
					blockUnblockData: {
						username: blockUsername,
						block: false,
					},
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			this.requestStatusHandler(requestStatus, 'remove');
			if (requestStatus == 200)
				this.emitPopup('1', `${blockUsername} is now unblocked`);
			else {
				this.emitPopup('1', `An error has occured. Please try again later`);
			}
			if (requestStatus == 200) {
				for (let i = 0; i < this.blockedUsers.length; i++) {
					if (this.blockedUsers[i].username == blockUsername) {
						this.blockedUsers.splice(i, 1);
					}
					break;
				}
			}
		},
		/**
		 * @vuese
		 * change the state of the block user input text box
		 * @arg no arg
		 */
		focusOut() {
			if (this.BlockedNewUserName == '') {
				this.focusInOut = 'focus-out';
			} else {
				this.focusInOut = 'focus-in';
			}
		},
		/**
		 * @vuese
		 * used to emit popup message
		 * @arg no arg
		 */
		emitPopup(id, message) {
			this.popupMessages.push({
				id: this.popupMessages.length,
				postid: id,
				type: 'post',
				state: message,
			});
			setTimeout(() => {
				this.popupMessages.shift();
			}, 10000);
		},
	},
	computed: {
		/**
		 * @vuese
		 * active the add button in the block user text box
		 * @arg no arg
		 */
		activeAddButton() {
			if (this.BlockedNewUserName != '') {
				return true;
			}
			return false;
		},
		/**
		 * @vuese
		 * get block users data
		 * @arg no arg
		 */
		blockedUsersData() {
			// this.blockedUser = this.$store.getters['user/getBlockedUsersData'];
			return this.$store.getters['user/getBlockedUsersData'];
		},
	},
};
</script>

<style scoped>
ul,
li {
	margin: 0;
	padding: 0;
	font-weight: 200;
	border: none;
}
.page-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;
	display: flex;
}
.page-box {
	max-width: 688px;
}
.main-trans-p {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
	margin-bottom: 40px;
}
.main-trans-p span {
	color: #0079d3;
}

.blocked-people {
	margin-bottom: 30px;
}
.blocked-people h4 {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: #1c1c1c;
	margin-bottom: 8px;
}
.blocked-people p {
	margin-bottom: 16px;
	font-weight: 400;
	color: #7c7c7c;
	font-size: 12px;
	line-height: 16px;
}
.block-user-block .input-area {
	width: 100%;
	height: 52px;
	padding: 0 24px;
	position: relative;
	border-radius: 5px;
	border: 1px solid #edeff1;
	background-color: #ffffff;
	display: flex;
}
.block-user-block .input-area input {
	display: block;
	padding-top: 10px;
	font-size: 14px;
	font-weight: 400;
	line-height: 21px;
	background-color: #ffffff;
	color: #1c1c1c;
	flex-grow: 1;
	box-shadow: none;
}

.block-user-block .input-area label {
	font-size: 10px;
	color: #7c7c7c;
	font-weight: 700;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	position: relative;
	transition: top 0.4s;
	pointer-events: none;
	position: absolute;
	/* top: 18px; */
}

.focus-out {
	top: 18px;
}
.focus-in {
	top: 5px;
}

.block-user-block input:focus,
input {
	outline: none;
	border: none;
}
.block-user-block input:focus + label {
	top: 5px;
}

.block-user-block .input-area button {
	font-size: 14px;
	line-height: 32px;
	color: #0079d3;
	/* opacity: 0.4; */
	letter-spacing: 0.5px;
	text-transform: uppercase;
	cursor: pointer;
	background-color: transparent;
	border: none;
	transition: all 0.4s;
}
.buttonActive {
	opacity: 1;
	cursor: pointer;
}
.buttonDisActive {
	opacity: 0.4;
}
.blocked-users {
	margin-top: 16px;
	max-height: 240px;
}
.blocked-users li {
	margin-bottom: 8px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.blocked-users li span {
	display: inline-block;
}
.blocked-container {
	display: flex;
	align-items: center;
}
.blocked-container > span {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #7c7c7c;
}
a.blocked-user-info {
	display: flex;
	padding: 4px 8px 4px 4px;
	border-radius: 4px;
	text-decoration: none;
	color: #1c1c1c;
	align-items: center;
	font-size: 16px;
	cursor: pointer;
}
.blocked-user-info img {
	width: 24px;
	height: 24px;
	display: inline-block;
	margin-right: 6px;
}
a.blocked-user-info:hover {
	background-color: #edeff1;
}

.blocked-users button {
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 32px;
	color: #0079d3;
	background: transparent;
	text-transform: uppercase;
	cursor: pointer;
}
button {
	outline: none;
	border: none;
}
ul {
	padding-left: 0px;
}

.privacy-item {
	margin-bottom: 32px;
	display: flex;
	/* flex-flow: row wrap; */
}
.privacy-desc {
	display: flex;
	flex-direction: column;
	margin-right: 8px;
	max-width: 80%;
}
.privacy-desc h3 {
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	color: #1c1c1c;
	display: -ms-flexbox;
	display: flex;
	margin-bottom: 4px;
}
.privacy-desc p {
	font-weight: 400;
	color: #7c7c7c;
	font-size: 12px;
	line-height: 16px;
}
.privacy-button {
	align-items: center;
	display: flex;
	flex-grow: 1;
	justify-content: flex-end;
}
.switch-button {
	background-color: #0079d3;
	width: 48px;
	height: 24px;
	position: relative;
	border-radius: 9999px;
}
.switch-button-key {
	position: absolute;
	width: 24px;
	height: 24px;
	right: 0;
	top: 0;
	border-radius: 50%;
	background-color: white;
}
#third-party {
	color: #0079d3;
}
.up-right-arrow {
	color: #0079d3;
	margin-left: 4px;
	vertical-align: bottom;
	width: 18px;
}
#third-party-button {
	font-size: 24px;
	color: #0079d3;
}
</style>
