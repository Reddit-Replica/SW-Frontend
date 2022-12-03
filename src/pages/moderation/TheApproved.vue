<template>
	<div class="list-moderations">
		<div class="text-moderation">
			{{ title }}
			<a
				href="https://mods.reddithelp.com/hc/en-us/articles/360009381491"
				id="info-link"
				__blank="targe"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-info-circle icon-info"
					viewBox="0 0 16 16"
					id="icon-info"
				>
					<path
						d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
					/>
					<path
						d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
					/>
				</svg>
			</a>
		</div>
		<search-bar
			@enter-search="(search) => enterSearch(search)"
			:empty-input="search"
		></search-bar>
		<ul class="ul-items" v-if="!noItems">
			<approved-item
				v-for="(moderator, index) in listOfModerators"
				:key="moderator"
				:moderator="moderator"
				:search="search"
				:index="index"
			></approved-item>
		</ul>
		<div class="no-items" v-else>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-search icon-search"
				viewBox="0 0 16 16"
				id="search-icon"
			>
				<path
					d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
				/>
			</svg>
			<span>No results for u/{{ search }}</span>
			<base-button class="see-all-button" id="see-all-button" @click="seeAll()"
				>See all</base-button
			>
		</div>
	</div>
</template>

<script>
import SearchBar from '../../components/moderation/SearchBar.vue';
import ApprovedItem from '../../components/moderation/ApprovedItem.vue';
export default {
	components: { SearchBar, ApprovedItem },
	computed: {
		// @vuese
		//return list of moderators
		// @type object
		listOfModerators() {
			return this.$store.getters['moderation/listOfModerators'];
		},
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			// return this.$store.state.subredditName;
			return this.$route.params.subredditName;
		},
		// @vuese
		//return title page
		// @type string
		title() {
			return 'Approved users';
		},
	},
	data() {
		return {
			search: '',
			count: 0,
			noItems: false,
		};
	},
	methods: {
		// @vuese
		//load moderators list from the store
		// @arg no argument
		async loadListOfModerators() {
			try {
				await this.$store.dispatch('moderation/loadListOfModerators', {
					baseurl: this.$baseurl,
					subredditName: this.subredditName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
		},
		// @vuese
		//access value of search
		// @arg The argument is a string value representing search input
		enterSearch(input) {
			this.search = input;
			for (let i = 0; i < this.listOfModerators.length; i++) {
				if (this.listOfModerators[i].username != input && input != '') {
					this.count = this.count + 1;
					this.noItems = false;
				}
			}
			if (this.count == this.listOfModerators.length) {
				this.noItems = true;
			}
			this.count = 0;
		},
		// @vuese
		//show all list of moderators
		// @arg no argument
		seeAll() {
			this.search = '';
			this.noItems = false;
		},
	},
};
</script>

<style>
.list-moderations {
	padding-top: 6.4rem;
	border-radius: 0 0 4px 4px;
	overflow: hidden;
}
.text-moderation {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	margin-bottom: 1.6rem;
}
.input-search {
	width: 60% !important;
}
.ul-items {
	list-style: none;
	background-color: var(--color-white-1);
	padding-left: 0rem;
}
.no-items {
	background-color: var(--color-white-1);
	height: 25rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 2rem;
	font-weight: bold;
}
.see-all-button {
	padding: 0 1.5rem;
	color: var(--color-blue-2);
	background-color: var(--color-white-1);
	font-weight: bold;
}
</style>
