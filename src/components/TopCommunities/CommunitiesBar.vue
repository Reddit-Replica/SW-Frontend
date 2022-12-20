<template>
	<div class="comm-top-1" id="comm-top-1">
		<div class="comm-top-2" id="comm-top-2">
			<h2>{{ title }}</h2>
			<span class="text-grey">Rank Change</span>
		</div>
		<ol id="comm-top-3">
			<top-community
				@reload="reloadPage"
				v-for="(community, index) in allCommunities"
				:index="index"
				:key="community.id"
				:id="community.id"
				:name="community.data.title"
				:members="community.data.members"
				:is-member="community.data.isMember"
				:show-members="true"
			>
			</top-community>
		</ol>
	</div>
</template>

<script>
import TopCommunity from './TopCommunity.vue';
export default {
	components: {
		TopCommunity,
	},
	data() {
		return {
			allCommunities: [],
			textAll: "Today's Top Growing Communities",
			textCategory: "Today's Top Growing in ",
		};
	},
	watch: {
		'$route.params.category': {
			handler: function () {
				if (this.$route.params.category) {
					this.getCategoryCommunities(this.$route.params.category);
				} else {
					this.getAllCommunities();
				}
			},
		},
	},
	computed: {
		title() {
			if (this.$route.params.category) {
				return this.textCategory + this.$route.params.category;
			} else {
				return this.textAll;
			}
		},
	},
	created() {
		if (this.$route.params.category) {
			this.getCategoryCommunities(this.$route.params.category);
		} else {
			this.getAllCommunities();
		}
	},

	methods: {
		async getAllCommunities() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('topCommunity/getAllCommunities', {
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.allCommunities =
				this.$store.getters['topCommunity/getAllCommunities'];
		},
		async getCategoryCommunities(category) {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('topCommunity/getCategoryCommunities', {
				category: category,
				baseurl: this.$baseurl,
				token: accessToken,
			});
			this.allCommunities =
				this.$store.getters['topCommunity/getCategoryCommunities'];
		},
		reloadPage() {
			console.log('reloadPage');
			let category = this.$route.params.category;
			if (!category) {
				this.getAllCommunities();
			} else this.getCategoryCommunities(this.$route.params.category);
		},
	},
};
</script>

<style scoped>
.comm-top-1 {
	flex: 1 1 100%;
	min-width: 0;
	width: 100%;
	height: 100%;
	background-color: var(--color-white-1);
	border: var(--line-10);
}
.comm-top-2 {
	background-color: var(--color-blue-light-4);
	color: var(--color-grey-dark-1);

	font-size: 1.6rem;
	font-weight: 550;
	line-height: 2rem;

	border-bottom: var(--line-10);
	border-top-left-radius: 0.4rem;
	border-top-right-radius: 0.4rem;

	display: flex;
	align-items: center;
	justify-content: space-between;

	height: 4rem;
	padding: 0 1.6rem;
	position: sticky;
}
@media only screen and (max-width: 500px) {
	.comm-top-2 {
		font-size: 1.4rem;
		font-weight: 500;
	}
}
.text-grey {
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--color-grey-dark-2);
}
</style>
