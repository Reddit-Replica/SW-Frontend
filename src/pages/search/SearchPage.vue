<template>
	<div class="all">
		<div class="after-all">
			<the-header :header-title="'u/asmaaadel0'"></the-header>
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
										><button class="button-nav button-nav2">Comments</button></a
									>
								</div>
								<!-- href="/search/?q=Query&amp;type=comment" -->
								<div class="search-nav" role="tablist">
									<a
										class="search-nav-button"
										data-testid="tab_posts"
										aria-selected="true"
										role="tab"
										href="/search/type=cm"
										><button class="button-nav button-nav2">
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
										href="/search/type=user"
										><button class="button-nav button-nav2">People</button></a
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
											'Relevance',
											'Hot',
											'New',
											'Top',
											'Most Comments',
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
								<SearchPost
									id="searched-posts"
									:community="salah"
									:profile="Hamada"
								/>
							</div>
						</div>
						<div class="side-bars">
							<div class="search-result-sidebar">
								<div>
									<CommunitesNav
										id="community-nav"
										:commcontents="commcontent"
										@change-joining="toggling"
									></CommunitesNav>
								</div>
								<PeopleNav></PeopleNav>
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
export default {
	data() {
		return {
			commcontent: [
				{
					id: 1,
					community: 'Salah',
					members: '12k',
					notjoined: true,
				},
				{
					id: 2,
					community: 'Mohammed',
					members: '23k',
					notjoined: true,
				},
				{
					id: 3,
					community: 'Karim',
					members: '22k',
					notjoined: false,
				},
				{
					id: 4,
					community: 'Medo',
					members: '2k',
					notjoined: true,
				},
				// {
				// 	id: 5,
				// 	community: 'Deiaa',
				// 	members: '12k',
				// },
				// {
				// 	id: 6,
				// 	community: 'Ibrahim',
				// 	members: '12k',
				// },
			],
			FirstitemChoice: 'Sort',
			ShowFirstitemChoice: false,
			SecitemChoice: 'Time',
			ShowSecitemChoice: false,
			choiceRelevant: true,
			Profile_Name: '',
			// myIndex: 0,
			// indexTrue: true,
		};
	},
	methods: {
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
	},
	components: {
		SearchPost,
		CommunitesNav,
		PeopleNav,
		MenuSearchVue,
	},
};
</script>

<style scoped>
.all {
	z-index: 3;
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
	width: 100%;
	max-width: 100%;
	display: flex;
	padding-top: 8px;
}
.posts {
	height: auto;
	width: 640px;
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
