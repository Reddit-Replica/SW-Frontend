<template>
	<div class="content">
		<!-- <img src="../../../img/reddit-white-grey.png" alt="reddit" /> -->
		<img
			v-if="!getUserData.picture"
			src="../../../img/default_inbox_avatar.png"
			alt="img"
			class="img header-user-nav-user-photo"
			:id="'header-user-img-' + index"
		/>
		<img
			v-else
			:src="$baseurl + '/' + getUserData.picture"
			alt="img"
			class="img header-user-nav-user-photo"
			:id="'header-user-img-' + index"
		/>
		<form action="#" class="post">
			<input
				type="text"
				class="search-post"
				placeholder="Create Post"
				@click="changeRouter"
				id="create-post"
			/>
			<button class="post-button" id="post-button" />
		</form>
		<div class="box">
			<div class="post-icon-box" id="image-icon">
				<svg class="post-icon">
					<use xlink:href="../../../img/sprite.svg#icon-image-inverted" />
				</svg>
			</div>
			<div class="post-icon-box" id="link-icon">
				<svg class="post-icon">
					<use xlink:href="../../../img/sprite.svg#icon-link" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			getUserData: {},
		};
	},
	computed: {
		// // @vuese
		// //return user data
		// // @type object
		// getUserData() {
		// 	// console.log(this.$store.getters['user/getUserData']);
		// 	return this.$store.getters['user/getUserData'];
		// },
		// @vuese
		// Get usename
		// @type string
		userName() {
			// return this.$store.getters.getUserName;
			return localStorage.getItem('userName');
		},
	},
	async beforeMount() {
		if (localStorage.getItem('accessToken')) await this.RequestUserData();
	},
	methods: {
		// @vuese
		// Used to change router to submit page
		// @arg no argument
		changeRouter() {
			this.$router.push('/submit');
		},
		/**
		 * @vuese
		 * this function send  call an action function from the store to make a get request to get user data
		 * @arg no arg
		 */
		async RequestUserData() {
			let responseData = null;
			try {
				responseData = await this.$store.dispatch('user/getUserTempData', {
					baseurl: this.$baseurl,
					userName: this.userName,
				});
			} catch (error) {
				this.error = error.message || 'Something went wrong';
			}
			if (responseData != null) this.getUserData = responseData;
			console.log(this.getUserData);
		},
	},
};
</script>

<style scoped>
.content {
	margin-top: 1.5rem;
	font-size: 1.4rem;
	height: 5.5rem;
	background-color: #fff;
	border-bottom: var(--line);
	border-radius: 0.5rem;

	display: flex;
	justify-content: left;
	align-items: center;
}
.content img {
	height: 5rem;
	cursor: pointer;
}
button {
	display: none;
}
.post {
	width: 78%;
}
.box {
	margin: 0;

	display: flex;
	align-items: center;
}
.box > * {
	padding: 0 0.2rem;
	cursor: pointer;
	height: 100%;
	display: flex;
	align-items: center;
	border-radius: 0.3rem;
}

.box > *:hover {
	background-color: var(--color-grey-light-2);
}
.post-icon {
	height: 2rem;
	width: 2rem;
	margin: 0.6rem;
	fill: var(--color-grey-dark-3);
}

.search-post {
	font-family: inherit;
	font-size: inherit;
	background-color: var(--color-grey-light-2);
	color: inherit;
	border: none;
	padding: 0.7rem 2rem;
	border-radius: 5px;
	width: 98%;
	/* transition: all 0.2s; */
	margin-right: -3.25rem;
	border: var(--line-3);
}
.search-post:focus {
	outline: navajowhite;
	border: var(--line-2);
	background-color: var(--color-white-1);
}
.search-post:hover {
	border: var(--line-2);
	background-color: var(--color-white-1);
}
.header-user-nav-user-photo {
	width: 3rem;
	height: 3rem !important;
	/* border-radius: 50%; */
	border-radius: 10%;
	margin-right: 0.3rem;
	margin-left: 0.9rem;
}
@media only screen and (max-width: 60em) {
	.post {
		width: 87%;
	}
}
</style>
