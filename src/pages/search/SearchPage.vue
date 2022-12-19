<template>
	<div>
		<div v-if="loading">
			<the-spinner
				style="position: absolute; left: 50%; top: 50%"
			></the-spinner>
		</div>
		<div class="all" v-else>
			<div class="after-all">
				<the-header :header-title="userName"></the-header>
				<div class="page-release">
					<div class="page">
						<div>
							<div class="upper-nav">
								<div class="searchin-nav">
									<div class="search-nav now-page" role="tablist">
										<a
											class="search-nav-button"
											data-testid="tab_posts"
											aria-selected="true"
											role="tab"
											><button class="button-nav button-nav2">Posts</button></a
										>
									</div>
									<div class="search-nav" role="tablist">
										<a
											class="search-nav-button"
											data-testid="tab_posts"
											aria-selected="true"
											role="tab"
											><button
												class="button-nav button-nav2"
												@click="goSearch('coms')"
											>
												Comments
											</button></a
										>
									</div>
									<!-- href="/search/?q=Query&amp;type=comment" -->
									<div class="search-nav" role="tablist">
										<a
											class="search-nav-button"
											data-testid="tab_posts"
											aria-selected="true"
											role="tab"
											><button
												class="button-nav button-nav2"
												@click="goSearch('cm')"
											>
												Communities
											</button></a
										>
									</div>
									<!-- href="/search/?q=Query&amp;type=com" -->
									<div class="search-nav" role="tablist">
										<a
											class="search-nav-button"
											data-testid="tab_posts"
											aria-selected="true"
											role="tab"
											><button
												class="button-nav button-nav2"
												@click="goSearch('people')"
											>
												People
											</button></a
										>
									</div>
									<!-- href="/search/?q=Query&amp;type=ppl" -->
								</div>
							</div>
							<div class="sorting">
								<div class="type-sorting">
									<div class="items-meny-curser" @click="itemsMenuOneFunction">
										<span class="items-span">{{ FirstitemChoice }}</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-caret-down-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
												/>
											</svg>
										</span>
										<MenuSearchVue
											id="sub-menu-one"
											:titles="[
												'relevance',
												'hot',
												'new',
												'top',
												'most comments',
											]"
											:display="ShowFirstitemChoice"
											@change-title="changeFirstChoiceItem"
											clicked-prop="Sort"
										/>
									</div>
								</div>
								<div class="relevance-if" v-if="choiceRelevant">
									<div class="items-meny-curser" @click="itemsMenuTwoFunction">
										<span class="items-span">{{ SecitemChoice }}</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-caret-down-fill"
												viewBox="0 0 16 16"
											>
												<path
													d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
												/>
											</svg>
										</span>
										<MenuSearchVue
											id="sub-menu-two"
											:titles="[
												'All Time',
												'Last Year',
												'Last Month',
												'Last Week',
												'Last 24 Horus',
												'Last Hour',
											]"
											:display="ShowSecitemChoice"
											@change-title="changeSecChoiceItem"
											clicked-prop="Time"
										/>
									</div>
								</div>
							</div>
						</div>
						<div class="search-results">
							<div class="posts">
								<div class="post-results">
									<SearchPost id="searched-posts" :posts="SearchedPosts" />
								</div>
							</div>
							<div class="side-bars">
								<div class="search-result-sidebar">
									<div>
										<CommunitesNav
											id="community-nav"
											@change-joining="toggling"
										></CommunitesNav>
									</div>
									<PeopleNav></PeopleNav>
									<backtotop-button v-if="false"></backtotop-button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import SearchPost from '../../components/SearchComponents/SearchPost.vue';
import CommunitesNav from '../../components/SearchComponents/CommunitesNav.vue';
import PeopleNav from '../../components/SearchComponents/PeopleNav.vue';
import MenuSearchVue from '@/components/SearchComponents/MenuSearch.vue';
import BacktotopButton from '../../components/BaseComponents/BacktotopButton.vue';
import TheSpinner from '../../components/BaseComponents/TheSpinner.vue';
export default {
	data() {
		return {
			commcontent: [],
			FirstitemChoice: 'Sort',
			ShowFirstitemChoice: false,
			SecitemChoice: 'Time',
			ShowSecitemChoice: false,
			choiceRelevant: true,
			Queue: '',
			loading: false,
			// myIndex: 0,
			// indexTrue: true,
		};
	},
	async created() {
		if (localStorage.getItem('accessToken')) {
			this.loading = true;
			this.search();
			this.usersearch();
			this.comsearch();
		}
		this.loading = false;
	},
	beforeMount() {
		this.search();
		this.usersearch();
		this.comsearch();
		// this.doSetQueue();
	},
	methods: {
		// doSetQueue() {
		// 	this.Queue = this.$router.query.q;
		// },
		async search() {
			try {
				await this.$store.dispatch('search/SearchPost', {
					baseurl: this.$baseurl,
					q: this.$route.query.q,
				});
			} catch (error) {
				console.log(error);
			}
		},
		async usersearch() {
			try {
				await this.$store.dispatch('search/SearchUser', {
					baseurl: this.$baseurl,
					q: this.$route.query.q,
				});
			} catch (error) {
				console.log(error);
			}
		},
		async comsearch() {
			try {
				await this.$store.dispatch('search/SearchSubreddit', {
					baseurl: this.$baseurl,
					q: this.$route.query.q,
				});
			} catch (error) {
				console.log(error);
			}
		},
		itemsMenuOneFunction() {
			this.ShowFirstitemChoice = !this.ShowFirstitemChoice;
			this.ShowSecitemChoice = false;
			if (
				this.FirstitemChoice == 'Relevance' ||
				this.FirstitemChoice == 'Top' ||
				this.FirstitemChoice == 'Most Comments' ||
				this.FirstitemChoice == 'Sort'
			) {
				this.choiceRelevant = true;
			} else {
				this.choiceRelevant = false;
			}
		},
		changeFirstChoiceItem(item) {
			this.FirstitemChoice = item;
		},
		itemsMenuTwoFunction() {
			this.ShowSecitemChoice = !this.ShowSecitemChoice;
			this.ShowFirstitemChoice = false;
		},
		changeSecChoiceItem(item) {
			this.SecitemChoice = item;
		},
		toggling(data) {
			this.commcontent.notjoined = data;
		},
		goSearch(value) {
			if (value == 'cm') {
				this.$router.replace({
					name: 'searchcm',
					query: { q: this.$route.query.q },
				});
			} else if (value == 'people') {
				this.$router.replace({
					name: 'searchuser',
					query: { q: this.$route.query.q },
				});
			} else if (value == 'coms') {
				this.$router.replace({
					name: 'searchcoms',
					query: { q: this.$route.query.q },
				});
			}
		},
		// PageReload() {
		// 	window.reload();
		// },
		async searchwithSort(value) {
			try {
				if (!(this.SecitemChoice == 'Time')) {
					await this.$store.dispatch('search/SearchPost', {
						baseurl: this.$baseurl,
						q: this.$route.query.q,
						sort: value,
						time: 'all',
					});
				} else {
					await this.$store.dispatch('search/SearchPost', {
						baseurl: this.$baseurl,
						q: this.$route.query.q,
						sort: value,
						time: this.SecitemChoice,
					});
				}
			} catch (error) {
				console.log(error);
			}
		},
		async searchwithtime(value) {
			let temp;
			if (value == 'All Time') temp = 'all';
			else if (value == 'Last Year') temp = 'year';
			else if (value == 'Last Week') temp = 'week';
			else if (value == 'Last 24 Horus') temp = 'day';
			else if (value == 'Last Hour') temp = 'hour';
			try {
				if (!(this.FirstitemChoice == 'Sort')) {
					await this.$store.dispatch('search/SearchPost', {
						baseurl: this.$baseurl,
						q: this.$route.query.q,
						sort: this.FirstitemChoice,
						time: temp,
					});
				} else {
					await this.$store.dispatch('search/SearchPost', {
						baseurl: this.$baseurl,
						q: this.$route.query.q,
						sort: 'new',
						time: temp,
					});
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
	components: {
		SearchPost,
		CommunitesNav,
		PeopleNav,
		MenuSearchVue,
		BacktotopButton,
		TheSpinner,
	},
	computed: {
		SearchedPosts() {
			console.log(this.$store.getters['search/GetPosts']);
			return this.$store.getters['search/GetPosts'];
		},
		SearchedUsers() {
			return this.$store.getters['search/Getusers'];
		},
		userName() {
			return localStorage.getItem('userName');
		},
	},
	watch: {
		FirstitemChoice(value) {
			this.searchwithSort(value);
		},
		SecitemChoice(value) {
			this.searchwithtime(value);
		},
		// Queue() {
		// 	this.PageReload();
		// },
	},
};
</script>

<style scoped>
.all {
	z-index: 3;
	min-height: 100%;
	display: flex;
}
.after-all {
	max-width: 1024px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
}
.page-release {
	max-width: 1024px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
}
.page {
	padding: 24px 24px 0;
	display: flex;
	flex-direction: column;
	max-width: 1024px;
	flex-grow: 1;
	margin-top: 18px;
}
div {
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	vertical-align: baseline;
}
a {
	color: inherit;
	text-decoration: inherit;
}
.upper-nav {
	display: flex;
	align-items: center;
	margin-bottom: 24px;
	margin-top: 24px;
}
.searchin-nav {
	display: flex;
}
.search-nav {
	display: flex;
}
.search-nav:hover {
	border-radius: 9999px;
	background-color: #ccc;
}
.now-page {
	border-radius: 9999px;
	background-color: #f6f7f8;
}
.search-nav-button {
	position: relative;
	margin-right: 4px;
}
.button-nav {
	background-color: var(--newCommunityTheme-field);
	opacity: 1;
	color: #000;
	font-weight: 700;
	padding: 12px 20px;
}
.button-nav::before {
	opacity: 0;
}
.button-nav2 {
	align-items: center;
	border-radius: 9999px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	text-align: center;
	width: auto;
	position: relative;
	background-color: var(--newCommunityTheme-button);
	border: none;
	color: #000;
	fill: var(--newCommunityTheme-body);
	font-family: 'Noto Sans', Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
}
.items-span {
	font-size: 12px;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 16px;
	min-height: 24px;
	height: 24px;
	padding-left: 12px;
	padding-right: 8px;
	border: none;
	padding: 4px;
	color: var(--color-grey-dark-2);
	font-family: Sans, Arial, sans-serif;
}
.items-meny-curser {
	cursor: pointer;
	position: relative;
}
.icon-caret-down {
	vertical-align: middle;
	margin-left: 4px;
	font-size: 20px;
	font-weight: 400;
	height: 20px;
	line-height: 20px;
	width: 20px;
}
.icon-caret-down::before {
	content: '\f13e';
	-webkit-font-smoothing: antialiased;
	font-family: redesignFont2020;
}
.sorting {
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 4px;
}
.relevance-if {
	margin-left: 17px;
}
.search-results {
	width: 95rem;
	max-width: 100%;
	display: flex;
	padding-top: 8px;
}
.posts {
	height: auto;
	min-width: 300px;
	display: flex;
	padding-top: 8px;
}
.post-results {
	margin-bottom: 16px;
	width: 100%;
}
.side-bars {
	display: block;
	flex: 0 0 312px;
	margin-left: 24px;
	max-width: 312px;
}
@media (max-width: 960px) {
	.side-bars {
		display: none;
	}
}
.search-result-sidebar {
	width: inherit;
	flex-direction: column;
	height: 100%;
	display: flex;
}
</style>
