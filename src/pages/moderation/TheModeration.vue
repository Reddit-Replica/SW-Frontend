<template>
	<div v-if="loading">
		<the-spinner style="position: absolute; left: 50%; top: 50%"></the-spinner>
	</div>
	<the-header :header-title="subredditName"></the-header>
	<listmoderation-bar
		:subreddit-name="subredditName"
		:title="title"
	></listmoderation-bar>
	<div>
		<!-- ///////////change to !moderatorByMe/////////// -->
		<div v-if="!moderatorByMe">moderatorByMe</div>
		<unmoderator-view
			v-if="!moderatorByMe"
			:subreddit-name="subredditName"
		></unmoderator-view>
		<div v-else>
			<div class="container">
				<div class="row no-gutters first-show">
					<div class="col-4 bg-light">
						<leftside-bar :subreddit-name="subredditName"></leftside-bar>
					</div>

					<div class="col-12 col-md-8 col-sm-12 right">
						<router-view v-slot="slotProps">
							<div>
								<!-- <list-bar
									v-if="scheduledPosts || contentControls"
									:title="barTitle"
									:subreddit-name="subredditName"
								></list-bar> -->
								<!-- <transition name="route" mode="out-in"> -->
								<component :is="slotProps.Component"></component>
								<!-- </transition> -->
							</div>
						</router-view>
					</div>
				</div>
			</div>
			<div class="page-content">
				<router-view v-slot="slotProps">
					<div>
						<list-bar :left-bar="true" @show-bar="showBarFunction()"></list-bar>
						<leftside-bar
							:subreddit-name="subredditName"
							@show-function="showBarFunction()"
							v-if="showLiftBar"
						></leftside-bar>
						<!-- <transition name="route" mode="out-in"> -->
						<component :is="slotProps.Component"></component>
						<!-- </transition> -->
					</div>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script>
import ListBar from '../../components/moderation/ListBar.vue';
import ListmoderationBar from '../../components/moderation/ListmoderationBar.vue';
import LeftsideBar from '../../components/moderation/LeftsideBar.vue';
import UnmoderatorView from '../../components/moderation/UnmoderatorView.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	data() {
		return {
			search: '',
			count: 0,
			noItems: false,
			showLiftBar: false,
			loading: false,
		};
	},
	components: {
		ListmoderationBar,
		LeftsideBar,
		UnmoderatorView,
		ListBar,
		TheSpinner,
	},
	// @vuese
	//load moderators list and change document title
	async created() {
		this.loading = true;
		if (localStorage.getItem('accessToken')) {
			document.title = this.$route.params.subredditName;
			await this.loadListOfAllModerators();
		} else {
			this.$router.push('/login');
			document.title = 'reddit';
		}
		this.loading = false;
	},
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		// @vuese
		//return list of moderators
		// @type object
		listOfAllModerators() {
			return this.$store.getters['moderation/listOfAllModerators'];
		},
		// // @vuese
		// //return list of invited moderators
		// // @type object
		// listOfInvitedModerators() {
		// 	return this.$store.getters['moderation/listOfInvitedModerators'];
		// },

		// @vuese
		//return user name
		// @type string
		getUserName() {
			return this.$store.getters.getUserName;
		},
		// @vuese
		//return if i'm a moderator in this subreddit or not
		// @type boolean
		moderatorByMe() {
			for (let i = 0; i < this.listOfAllModerators.length; i++) {
				if (this.listOfAllModerators[i].username == this.getUserName) {
					return true;
				}
			}
			return false;
		},
		// @vuese
		//return title of moderation bar
		// @type string
		title() {
			if (this.$route.path === '/r/' + this.subredditName + '/about/spam') {
				return 'Spam';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/edited'
			) {
				return 'Edited';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/unmoderated'
			) {
				return 'Unmoderated';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/banned'
			) {
				return 'banned';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/muted'
			) {
				return 'muted';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/contributors'
			) {
				return 'Approved';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/moderators'
			) {
				return 'moderators';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/postflair'
			) {
				return 'post flair';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/rules'
			) {
				return 'rules';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/settings'
			) {
				return 'Content Controls';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/scheduledposts'
			) {
				return 'scheduled posts';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/edit'
			) {
				return 'Community Settings';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/edit/community'
			) {
				return 'Community Settings';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/edit/postsandcomments'
			) {
				return 'Post and Comment settings';
			} else if (
				this.$route.path ===
				'/r/' + this.subredditName + '/about/traffic'
			) {
				return 'Trafic Stats';
			}
			return '';
		},
		// @vuese
		// return banned bath
		// @type boolean
		banned() {
			return this.$route.path === '/r/' + this.subredditName + '/about/banned';
		},
		// @vuese
		// return muted bath
		// @type boolean
		muted() {
			return this.$route.path === '/r/' + this.subredditName + '/about/muted';
		},
		// @vuese
		// return approved bath
		// @type boolean
		approved() {
			return (
				this.$route.path === '/r/' + this.subredditName + '/about/contributors'
			);
		},
		// @vuese
		// return moderators bath
		// @type boolean
		moderators() {
			return (
				this.$route.path === '/r/' + this.subredditName + '/about/moderators'
			);
		},

		// // @vuese
		// // return rules bath
		// // @type boolean
		// rules() {
		// 	return this.$route.path === '/r/' + this.subredditName + '/about/rules';
		// },

		// @vuese
		// return post flair bath
		// @type boolean
		postFlair() {
			return (
				this.$route.path === '/r/' + this.subredditName + '/about/postflair'
			);
		},

		// // @vuese
		// // return scheduled posts bath
		// // @type boolean
		// scheduledPosts() {
		// 	return (
		// 		this.$route.path ===
		// 		'/r/' + this.subredditName + '/about/scheduledposts'
		// 	);
		// },
		// // @vuese
		// // return content controls bath
		// // @type boolean
		// contentControls() {
		// 	return (
		// 		this.$route.path === '/r/' + this.subredditName + '/about/settings'
		// 	);
		// },

		// @vuese
		//return title of button in fixed bar
		// @type string
		// barTitle() {
		// 	// if (
		// 	// 	this.$route.path ===
		// 	// 	'/r/' + this.subredditName + '/about/moderators'
		// 	// ) {
		// 	// 	return 'Moderators of t/' + this.subredditName;
		// 	// } else
		// 	// if (
		// 	// 	this.$route.path ===
		// 	// 	'/r/' + this.subredditName + '/about/scheduledposts'
		// 	// ) {
		// 	// 	return 'Schedule Post';
		// 	// } else
		// 	if (this.$route.path === '/r/' + this.subredditName + '/about/settings') {
		// 		return 'Content controls';
		// 	}
		// 	return '';
		// },
	},
	methods: {
		// @vuese
		//load moderators list from the store
		// @arg no argument
		async loadListOfAllModerators() {
			try {
				await this.$store.dispatch('moderation/loadListOfAllModerators', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.$router.push('/notFound');
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		//load moderators invited list from the store
		// @arg no argument
		// async loadListOfInvitedModerators() {
		// 	try {
		// 		await this.$store.dispatch('moderation/loadListOfInvitedModerators', {
		// 			baseurl: this.$baseurl,
		// 			subredditName: this.subredditName,
		// 		});
		// 	} catch (error) {
		// 		this.error = error.message || 'Something went wrong';
		// 	}
		// },

		// @vuese
		// Used to handle show left bar action
		// @arg no argument
		showBarFunction() {
			this.showLiftBar = !this.showLiftBar;
		},
	},
};
</script>

<style scoped>
.page-content {
	width: 95%;
	margin: auto;
	display: none;
	margin-top: 9rem;
}
.container {
	margin: 0;
	padding: 0;
}
.right {
	margin-top: 9rem;
}
.bg-light {
	--bs-bg-opacity: 0;
}
.second-show {
	margin-top: 10rem;
	display: none;
}
/* 768 */
@media only screen and (max-width: 768px) {
	.first-show {
		display: none;
	}
	.second-show {
		display: block;
	}
	.page-content {
		display: block;
	}
}
</style>
