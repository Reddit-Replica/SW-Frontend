<template>
	<nav>
		<div class="basecontainer" id="profile-nav-bar-container">
			<ul id="profile-nave-bar">
				<li
					v-for="profileLink in viewedLinks"
					:key="profileLink.id"
					:class="{ active: profileLink.active }"
					:id="`viewed-profile-link-${profileLink.linkName}`"
				>
					<router-link
						:to="`/user/${this.$route.params.userName}` + profileLink.path"
						:class="{ linkactive: profileLink.active }"
					>
						{{ profileLink.linkName }}
					</router-link>
				</li>
				<li @click="showLinkBox = !showLinkBox" class="overflow">
					<!-- <span>...</span> -->
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="currentColor"
						class="bi bi-three-dots"
						viewBox="0 0 16 16"
					>
						<path
							d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
						/>
					</svg>
				</li>
			</ul>
		</div>
		<ul v-show="showLinkBox" class="linkbox">
			<li
				v-for="profileLink in hiddenLinks"
				:key="profileLink.id"
				:class="{ active: profileLink.active }"
				:id="`hidden-profile-link-${profileLink.linkName}`"
			>
				<router-link
					:to="$route.path + profileLink.path"
					:class="{ linkactive: profileLink.active }"
				>
					{{ profileLink.linkName }}
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	// @vuese
	// user Name of the user for routing
	props: {
		userName: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			showLinkBox: false,
			profileLinks: [
				{
					id: '1',
					linkName: 'overview',
					path: '/',
					active: false,
				},
				{
					id: '2',
					linkName: 'Posts',
					path: '/submitted',
					active: false,
				},
				{
					id: '3',
					linkName: 'Comments',
					path: '/comments',
					active: false,
				},
				{
					id: '4',
					linkName: 'history',
					path: '/history',
					active: false,
				},
				{
					id: '5',
					linkName: 'hidden',
					path: '/hidden',
					active: false,
				},
				{
					id: '6',
					linkName: 'saved',
					path: '/saved',
					active: false,
				},
				{
					id: '7',
					linkName: 'upvoted',
					path: '/upvoted',
					active: false,
				},
				{
					id: '8',
					linkName: 'Down voted',
					path: '/downvoted',
					active: false,
				},
				{
					id: '9',
					linkName: 'awards received',
					path: '/gilded',
					active: false,
				},
				{
					id: '10',
					linkName: 'awards given',
					path: '/gildedgiven',
					active: false,
				},
			],
			viewedLinks: [],
			hiddenLinks: [],
			windowWidths: window.innerWidth,
		};
	},
	/**
	 * @vuese
	 * at mounting page we first assign viewedLinks to all profile links , add event on resize page width
	 * @arg no arg
	 */
	mounted() {
		this.viewedLinks = this.profileLinks;
		this.onResize();
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize);
		});
	},
	/**
	 * @vuese
	 * at unmounting removed the resize event
	 * @arg no arg
	 */
	unmounted() {
		window.removeEventListener('resize', this.onResize);
	},
	methods: {
		/**
		 * @vuese
		 * this function calling  at resizing event , first calculate window width check if the window size
		 * less than 1000 px will calculate the count of viewed = width / 10000 and rest will be in hidden box
		 * if window width greater than 1000 px will add all to viewed links
		 * @arg no arg
		 */
		onResize() {
			this.windowWidths = window.innerWidth;
			const x = ++this.windowWidths / 100;
			if (this.windowWidths < 1000) {
				this.viewedLinks = this.profileLinks.slice(0, x);
				this.hiddenLinks = this.profileLinks.slice(x, this.profileLinks.length);
			} else {
				this.viewedLinks = this.profileLinks;
			}
		},
	},
};
</script>

<style scoped>
ul {
	flex-flow: unset;
}
a {
	text-decoration: none;
	text-decoration: none;
	display: inline-block;
	color: var(--color-dark-4);
	text-transform: uppercase;
	white-space: nowrap;
	/* word-wrap:initial; */
}

a.router-link-active {
	color: var(--color-blue-2);
}

li:has(> a.router-link-active) {
	box-shadow: inset 0 -2px 0 0 var(--color-blue-2);
}

nav {
	position: relative;
	width: 100%;
	background-color: var(--main-white-color);
	height: 39px;
	border-bottom: 1px solid var(--color-grey-light-10);
	border-top: 1px solid var(--color-grey-light-10);
}

nav ul:first-child {
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	font-size: 12px;
	list-style: none;
	margin: 0px 0px;
	padding: 0px 0px;
}

nav ul:first-child li:not(:last-child) {
	width: fit-content;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	align-items: center;
	display: flex;
	margin: 0 5px;
	padding: 0 5px;
	height: 100%;
}

nav ul:first-child li:hover a {
	color: var(--color-blue-2);
	/* box-shadow: inset 0 -2px 0 0 var( --color-blue-2 ); */
}

li.active {
	box-shadow: inset 0 -2px 0 0 var(--color-blue-2);
	/* border-bottom: 2px solid var( --color-blue-2 ); */
}

/* a.linkactive {
  color: var( --color-blue-2 );
} */

.basecontainer {
	width: 100%;
	height: 100%;
	position: relative;
	padding: 0px 24px;
}

.overflow span {
	display: inline-block;
	font-size: 24px;
	line-height: 18px;
	position: absolute;
	top: 0;
	transform: translateY(50%);

	/* font-weight: 500; */
	/* display: flex; */
	/* align-items: center; */
	/* justify-content: center; */
	/* width: 100%; */
	/* min-height: 100%;  */
}
li.overflow {
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--color-dark-4);
	margin: 0 5px;
	padding: 0 8px;
	/* font-size: 20px; */
}

li.overflow:hover {
	color: var(--color-blue-2);
}

li.overflow {
	position: relative;
	height: 100%;
	display: none;
	/* overflow: hidden; */
}

.linkbox {
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	flex-direction: column;
	align-items: center;
	height: max-content;
	position: absolute;
	right: 0;
	z-index: 1000;
	overflow: hidden;
	border-radius: 4px;
	border: 1px solid var(--color-grey-light-10);
	box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
	color: var(--color-dark-3);
	background-color: var(--main-white-color);
	transform: translateY(1px);
}

.linkbox li a {
	cursor: pointer;
	box-sizing: border-box;
	display: block;
	color: var(--color-dark-4);
	fill: var(--color-dark-4);
	padding: 10px 16px;
}

.linkbox li {
	width: 100%;
}

.linkbox li:hover {
	background-color: #e5f1fa;
	color: var(--color-dark-3);
	fill: var(--color-dark-3);
}

.linkbox {
	/* display: none; */
}

@media (max-width: 1000px) {
	li.overflow {
		display: flex;
	}
}

@media (min-width: 1000px) {
	.linkbox {
		display: none;
	}
}
</style>
