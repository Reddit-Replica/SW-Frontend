<template>
	<ul class="sub-menu" v-if="display">
		<li
			class="icon-box"
			v-for="title in titles"
			:key="title"
			@click="clickedFunction(title)"
			:class="{ clicked: clicked == title }"
			:id="'sum-menu' + title"
		>
			<span :id="'sum-menu-title' + title">{{ title }}</span>
		</li>
	</ul>
</template>

<script>
export default {
	props: {
		// @vuese
		//titles in sub menu
		titles: {
			type: Array,
			required: true,
		},
		// @vuese
		//should sub menu display or not
		display: {
			type: Boolean,
			required: true,
		},
		// @vuese
		//choosen title
		clickedProp: {
			type: String,
			required: true,
		},
	},
	emits: ['change-title', 'change-sort', 'change-time'],
	data() {
		return {
			clicked: this.clickedProp,
		};
	},
	methods: {
		// @vuese
		//handle choosen title
		// @arg The argument is a string value representing choosen value from user
		clickedFunction(title) {
			this.clicked = title;
			// this.$router.push({
			// 	query: { q: this.$route.query.q, sort: this.clicked },
			// });
			this.$emit('change-title', title);
		},
		async secfunc() {
			// this.clicked = title;
			const actionPayload = {
				baseurl: this.$baseurl,
				q: this.$route.query.q,
				sort: this.clicked,
			};

			try {
				await this.$store.dispatch('sortAdd', actionPayload);
				this.$router.push({ query: { sort: this.clicked } });
				this.$emit('change-sort', this.clicked);
				// setTimeout(() => this.$router.replace('/main'), 1000);
				// if (response == 200) {
				// }
			} catch (err) {
				this.error = err;
			}
		},
		async timefunc() {
			if (this.$route.query.sort) {
				const actionPayload = {
					baseurl: this.$baseurl,
					q: this.$route.query.q,
					sort: this.this.$route.query.sort,
					time: this.clicked,
					isSorted: true,
				};
				try {
					await this.$store.dispatch('timeAdd', actionPayload);
					this.$router.push({ query: { time: this.clicked } });
					// setTimeout(() => this.$router.replace('/main'), 1000);
					// if (response == 200) {
					// }
					this.$emit('change-time', this.clicked);
				} catch (err) {
					this.error = err;
				}
			} else {
				const actionPayload = {
					baseurl: this.$baseurl,
					q: this.$route.query.q,
					time: this.clicked,
					isSorted: false,
				};
				try {
					await this.$store.dispatch('timeAdd', actionPayload);
					this.$router.push({ query: { time: this.clicked } });
					// setTimeout(() => this.$router.replace('/main'), 1000);
					// if (response == 200) {
					// }
					this.$emit('change-time', this.clicked);
				} catch (err) {
					this.error = err;
				}
			}
		},
	},
};
</script>

<style scoped>
.sub-menu {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 12px;
	line-height: 16px;
	font-weight: 400;
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: white;
	padding: 0px;
	left: -0.5rem;
	top: 2rem;
	box-shadow: 0px 2px 4px var(--color-grey-dark-2);
	border-radius: 5px;
	z-index: 10;
	min-width: max-content;
	width: 120px;
}
.sub-menu li {
	color: var(--color-grey-dark-2);
	font-size: 12px;
	font-weight: lighter;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	font-family: Sans, Arial, sans-serif;
}
.sub-menu li:hover {
	background-color: var(--color-blue-light-2);
	color: var(--color-dark-1);
}
.sub-menu li {
	padding: 0px 10px;
	height: 34px;
	min-width: 28px;
}
.sub-menu li.clicked {
	color: var(--color-blue-2);
}
.sub-menu li:last-of-type {
	border-radius: 0 0 5px 5px;
}
</style>
