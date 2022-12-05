<template>
	<!-- header component -->
	<div v-if="loading">Loading</div>
	<div v-else>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<profile-nav
			:user-name="getUserName"
			:state="state"
			:check-in-overview-page="checkInOverviewPage"
		/>
		<base-container>
			<div id="main-profile-box" class="profilebox">
				<main
					:style="checkInOverviewPage ? 'flex-grow: 0;' : 'flex-grow : 2 ;'"
				>
					<!-- <sortposts-bar></sortposts-bar> -->
					<router-view></router-view>
				</main>
				<aside id="profile-aside">
					<profile-card
						:user-name="getUserName"
						:state="state"
						:user-data="getUserData.userData"
					/>
					<user-moderators-card
						v-if="getUserData.userModeratorData.length != 0"
						:user-moderators="getUserData.userModeratorData"
					></user-moderators-card>
				</aside>
			</div>
		</base-container>
	</div>
</template>

<script>
import ProfileCard from '../../components/UserComponents/BaseUserComponents/Cards/ProfileCard.vue';
import BaseContainer from '../../components/BaseComponents/BaseContainer.vue';
import profileNav from '../../components/UserComponents/ProfileNav.vue';
import UserModeratorsCard from '../../components/UserComponents/BaseUserComponents/Cards/UserModeratorsCard.vue';
export default {
	props: {},
	components: {
		ProfileCard,
		BaseContainer,
		profileNav,
		UserModeratorsCard,
	},
	data() {
		return {
			state: '' /* profile or user */,
			// userData: Array,
			loading: false,
		};
	},
	mounted() {
		// this.checkInOverviewPage;
	},
	watch: {
		/**
		 * @vuese
		 * we watch the changes of the route when the userName changes we reload the page
		 * @arg no arg
		 */
		'$route.params.userName'() {
			location.reload();
		},
	},
	computed: {
		/**
		 * @vuese
		 * we get the userName from the getter store
		 * @arg no arg
		 */
		getUserName() {
			// console.log(this.$store.state.userName);
			return this.$store.getters.getUserName;
		},
		/**
		 * @vuese
		 * this function gets the user Data from the getter store
		 * @arg no arg
		 */
		getUserData() {
			// console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserData'];
		},
		/**
		 * @vuese
		 * this function for the current route if it the Overview Page or not
		 * @arg no arg
		 */
		checkInOverviewPage() {
			if (
				this.$route.path == `/user/${this.$route.params.userName}/` ||
				this.$route.path == `/user/${this.$route.params.userName}`
			)
				return true;
			return false;
		},
	},
	methods: {
		/**
		 * @vuese
		 * this function send  call an action function from the store to make a get request to get user data
		 * @arg no arg
		 */
		async RequestUserData() {
			try {
				await this.$store.dispatch('user/getUserData', {
					baseurl: this.$baseurl,
					userName: this.$route.params.userName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
	/**
	 * @vuese
	 * at creation of the page we check if the searched username is the the authenticated user or not
	 * we make loading flag to true for future to make a loading spinner
	 * then we make a get request to get user data
	 * we check in the status code
	 * @arg no arg
	 */
	async created() {
		if (this.$route.params.userName) {
			this.loading = true;
			/* at creation and before mounting the page we check for the name if it's same authenticated user or other user */
			if (this.$route.params.userName == this.$store.getters.getUserName)
				this.state = 'profile';
			/* means same authenticated user */ else
				this.state = 'user'; /* means other user */
			// console.log(this.state);
			/* after that we fetch data fetch user data */
			document.title = this.$store.state.userName + ' - Reddit';
			const requestStatus = await this.RequestUserData();
			this.loading = false;
			if (requestStatus == 200) console.log('Sucessfully fetched data');
			else if (requestStatus == 404) console.log('not found');
			else if (requestStatus == 500) console.log(' internal server error');
			// console.log(this.$store.getters['user/getUserData']);
			// console.log(this.$store.getters['user/getStaticSocialLinks']);
			// this.userData = this.$store.getters['user/getUserData'];
			// console.log(this.userData);
			// this.checkInOverviewPage;
		}
	},
};
</script>

<style scoped>
.profilebox {
	display: flex;
	justify-content: center;
	margin: 0 auto;
	box-sizing: border-box;
}

.content {
	width: 640px;
	margin: 0px 0px 0px 15px;
	margin-top: 1px;
}
@media (max-width: 960px) {
	.content {
		width: 100%;
	}
	.profilebox {
		display: block;
	}
	main {
		width: 100%;
	}
	aside {
		display: none;
	}
}
body {
	min-width: 100%;
}
@media (min-width: 960px) {
	main {
		width: 640px;
	}
}

aside {
	width: 312px;
	margin-left: 24px;
	min-height: 2000px;
}
/* @media (max-width: 960px) {
	aside {
		display: none;
	}
} */
@media (max-width: 640) {
	.basecontainer {
		padding: 0 0;
	}
}
</style>
