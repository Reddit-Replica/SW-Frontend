<template>
	<div class="card">
		<div class="header">
			<div class="post-subreddit-icon">
				<span style="width: 100%; height: 100%">
					<img
						v-if="subreddit.picture != null"
						:src="$baseurl + '/' + subreddit.picture"
						alt=""
					/>
					<img
						v-else
						src="../../../../../img/default_subreddit_image.png"
						alt=""
					/>
				</span>
			</div>
			<div class="post-user-name">
				<router-link
					id="base-user-post-content-post-user-name"
					:to="`/r/${subredditName}`"
					>{{ `r/${subredditName}` }}</router-link
				>
			</div>
		</div>

		<div class="information">
			<span>
				<h3>{{ getAbbreviationsOfNumber(subreddit.members) }}</h3>
				<p>Members</p>
			</span>
			<span>
				<h3>20</h3>
				<p>Online</p>
			</span>
		</div>
		<div class="discription">
			<p>{{ subreddit.description }}</p>
		</div>
		<base-button
			button-text="View Community"
			class="go-home-button"
			id="go-home-button-button"
			@click="$router.push(`/r/${subredditName}`)"
		></base-button>
	</div>
</template>

<script>
export default {
	props: {
		// @vuese
		// object contains subreddit description and number of members
		subreddit: {
			type: Object,
			required: true,
		},
		// @vuese
		// string contains subreddit name
		subredditName: {
			type: String,
			required: true,
		},
	},
	methods: {
		/**
		 * @vuese
		 * get abbreviation of the number (convert to K,M)
		 * @arg num the number to be converted
		 */
		getAbbreviationsOfNumber(num) {
			var abbreviate = require('number-abbreviate');
			console.log(num);
			return abbreviate(num, 2); // => 1k
		},
	},
};
</script>
<style scoped>
.card {
	background: #ffffff;

	position: absolute;
	left: 0;
	top: 16px;
	padding: 8px;
	z-index: 8;
	max-width: 350px;
}
.post-subreddit-icon {
	margin-right: 5px;
	width: 25px;
	height: 25px;
}
.post-subreddit-icon img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.header {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	font-size: 16px;
	font-weight: 500;
	margin-right: 10px;
}
.header a {
	color: #1c1c1c;
}
.header a:hover {
	text-decoration: underline;
}
.information {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
}
.information span {
	min-width: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px;
}
.information span h3 {
	font-weight: 500;
	font-size: 24px;
}
.information span p {
	font-weight: 500;
	font-size: 12px;
}

.information span:last-child {
	/* flex-basis: 2; */
	flex-grow: 1.5;
}
.discription {
	font-weight: 500;
	font-size: 12px;
}
.discription p {
	word-wrap: wrap;
}

.go-home-button {
	/* border: 1px solid #ccc; */
	overflow: visible;
	word-wrap: break-word;
	background-color: var(--color-blue-2);
	color: var(--main-white-color);
	padding: 12px;
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	/* min-width: 32px; */
	padding: 4px 16px;
	align-items: center;
	border-radius: 9999px;
	display: flex;
	justify-content: center;
	text-align: center;
	/* width: 402px; */
	position: relative;
	margin-top: 5px;
}

.go-home-button::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 9999px;
	background-color: var(--main-white-color);
	z-index: 55;
	opacity: 0;
}
.go-home-button:hover::before {
	opacity: 0.08;
}
</style>
