<template>
	<div class="catg-bar-1">
		<div class="catg-bar-2"><h2>Categories</h2></div>
		<ul :class="{ 'small-ul': smallList, 'large-ul': !smallList }">
			<li>
				<router-link
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
					:to="'/subreddits/leaderboard/' + category.name"
					@click="setClicked(category.name)"
					class="catg-links"
					:class="{ 'catg-selected': category.name === categoryClicked }"
					>{{ category.name }}</router-link
				>
			</li>
		</ul>
		<div>
			<base-button class="button" @click="toggleShow">{{
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
	width: 192px;

	background-color: var(--color-white-1);
	color: var(--color-grey-dark-1);
	fill: var(--color-grey-dark-1);
	border: var(--line-10);

	border-radius: 4px;
	overflow: visible;
	word-wrap: break-word;
	padding: 0;
}
.catg-bar-2 {
	font-size: 16px;
	font-weight: 550;
	line-height: 20px;

	background-color: var(--color-blue-light-4);
	color: var(--color-grey-dark-1);

	border-bottom: var(--line-10);
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;

	display: flex;
	align-items: center;
	height: 40px;
	padding-left: 16px;
}
.button {
	width: 100%;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;

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
	height: 432px;
	overflow: hidden;
}
.large-ul {
	height: 1111px;
	overflow: auto;
}
.catg-links {
	font-size: 14px;
	font-weight: 500;
	line-height: 16px;
	display: flex;
	align-items: center;
	color: var(--color-grey-dark-1) !important;
	height: 36px;
	padding-left: 16px;
}
.catg-links:hover {
	background-color: var(--color-blue-light-4);
}
.catg-selected {
	background-color: var(--color-blue-light-4);
	border-left: 5px solid var(--color-blue-2);
	font-weight: 550;
}
</style>
