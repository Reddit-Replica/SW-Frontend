<template>
	<div class="catg-bar-1" id="catg-bar-1">
		<div class="catg-bar-2" id="catg-bar-2"><h2>Categories</h2></div>
		<ul
			:class="{ 'small-ul': smallList, 'large-ul': !smallList }"
			id="catg-bar-3"
		>
			<li id="catg-bar-4">
				<router-link
					id="catg-bar-5"
					to="/subreddits/leaderboard/"
					@click="setClicked('All Communities')"
					class="catg-links"
					:class="{ 'catg-selected': 'All Communities' === categoryClicked }"
					>All Communities</router-link
				>
			</li>
			<li
				v-for="category of categories"
				:key="category.name"
				:value="category.name"
				:id="category.name + '-top'"
			>
				<router-link
					:id="category.name + '-top-link'"
					:to="'/subreddits/leaderboard/' + category.name"
					@click="setClicked(category.name)"
					class="catg-links"
					:class="{ 'catg-selected': category.name === categoryClicked }"
					>{{ category.name }}</router-link
				>
			</li>
		</ul>
		<div>
			<base-button class="button" @click="toggleShow" id="catg-bar-6">{{
				buttonText
			}}</base-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			categories: [],
			categoryClicked: 'All Communities',
			smallList: true,
		};
	},
	computed: {
		buttonText() {
			return this.smallList ? 'Show More' : 'Show Less';
		},
	},
	//@vuese
	//Load community suggested categories when creating 'Create Community' dialog
	beforeMount() {
		this.loadCategories();
	},
	methods: {
		// @vuese
		//Loading Community suggested categories
		//@arg no argument
		async loadCategories() {
			try {
				const accessToken = localStorage.getItem('accessToken');
				await this.$store.dispatch('community/getSavedCategories', {
					baseurl: this.$baseurl,
					token: accessToken,
				});
			} catch (error) {
				this.error = error.message || 'Something failed!';
			}
			this.categories = this.$store.getters['community/categories'];
		},
		setClicked(category) {
			this.categoryClicked = category;
		},
		toggleShow() {
			this.smallList = !this.smallList;
		},
	},
};
</script>

<style scoped>
.catg-bar-1 {
	display: flex;
	flex-direction: column;

	max-height: none;
	height: 100%;
	width: 19.2rem;

	background-color: var(--color-white-1);
	color: var(--color-grey-dark-1);
	fill: var(--color-grey-dark-1);
	border: var(--line-10);

	border-radius: 0.4rem;
	overflow: visible;
	word-wrap: break-word;
	padding: 0;
}
.catg-bar-2 {
	font-size: 1.6rem;
	font-weight: 550;
	line-height: 2rem;

	background-color: var(--color-blue-light-4);
	color: var(--color-grey-dark-1);

	border-bottom: var(--line-10);
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;

	display: flex;
	align-items: center;
	height: 4rem;
	padding-left: 1.6rem;
}
.button {
	width: 100%;
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.7rem;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4rem 1.6rem;

	background-color: transparent;
	color: var(--color-blue-2);
}
.button:hover {
	background-color: var(--color-blue-light-4);
}
ul {
	list-style: none;
	padding-left: 0;
	transition: height 0.3s ease-out;
}
.small-ul {
	height: 43.2rem;
	overflow: hidden;
}
.large-ul {
	height: 111.1rem;
	overflow: auto;
}
.catg-links {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.6rem;
	display: flex;
	align-items: center;
	color: var(--color-grey-dark-1) !important;
	height: 3.6rem;
	padding-left: 1.2rem;
}
.catg-links:hover {
	background-color: var(--color-blue-light-4);
}
.catg-selected {
	background-color: var(--color-blue-light-4);
	border-left: 0.5rem solid var(--color-blue-2);
	font-weight: 550;
}
</style>
