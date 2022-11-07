<template>
	<!-- header component -->
	<div>
		<the-header :header-title="'u/asmaaadel0'"></the-header>
		<profile-nav :user-name="getUserName" :state="state" />
		<base-container>
			<div id="main-profile-box" class="profilebox">
				<main>
					<!-- <sortposts-bar></sortposts-bar> -->
					<router-view></router-view>
				</main>
				<aside id="profile-aside">
					<profile-card :user-name="getUserName" :state="state" />
					<user-moderators-card></user-moderators-card>
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
		};
	},
	computed: {
		getUserName() {
			console.log(this.$store.state.userName);
			return this.$store.getters.getUserName;
		},
		getUserData() {
			console.log(this.$store.getters['user/getUserData']);
			return this.$store.getters['user/getUserData'];
		},
	},
	methods: {
		async RequestUserData() {
			try {
				await this.$store.dispatch('user/getUserData', {
					baseurl: this.$baseurl,
					userName: this.$store.state.userName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
	},
	async created() {
		if (this.$route.params.userName) {
			/* at creation and before mounting the page we check for the name if it's same authenticated user or other user */
			if (this.$route.params.userName == this.$store.getters.getUserName)
				this.state = 'profile'; /* means same authenticated user */
			else this.state = 'user'; /* means other user */
			// console.log(this.state);
			/* after that we fetch data fetch user data */
			document.title = this.$store.state.userName + ' - Reddit';
			const requestStatus = await this.RequestUserData();
			if (requestStatus == 200) console.log('Sucessfully fetched data');
			else if (requestStatus == 404) console.log('not found');
			else if (requestStatus == 500) console.log(' internal server error');
			console.log(this.$store.getters['user/getUserData']);
			// console.log(this.$store.getters['user/getStaticSocialLinks']);
			// this.userData = this.$store.getters['user/getUserData'];
			// console.log(this.userData);
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
.sort-post-content {
	margin-top: 1px;
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
@media (max-width: 960px) {
	aside {
		display: none;
	}
}
</style>
