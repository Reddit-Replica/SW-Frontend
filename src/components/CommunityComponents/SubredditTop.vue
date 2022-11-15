<template>
	<div>
		<div class="blue-top">
			<router-link to="/subreddit"
				><div class="link" id="link-top-subreddit-page"></div
			></router-link>
		</div>
		<div class="white-top">
			<div class="flex-start">
				<div class="top flex-start">
					<img :src="subredditImageUrl" alt="subredditImage" />
					<div class="top-title-button">
						<div class="top-title">
							<h1 class="title-1">{{ subredditName }}</h1>
							<h2 class="title-2">r/{{ subredditName }}</h2>
						</div>
						<div>
							<base-button
								class="button blue-button"
								@click="toogleJoin"
								v-if="!isJoined"
								id="join-button"
								>Join</base-button
							>
							<base-button
								class="button white-button"
								@click="toogleJoin"
								@mouseover="hoverJoin('Leave')"
								@mouseleave="hoverJoin('Joined')"
								v-if="isJoined"
								id="leave-button"
								>{{ hoverButtonText }}</base-button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		//@vuese
		//Subreddit name
		subredditName: {
			type: String,
			default: '',
		},
		//@vuese
		//Subreddit Image URL
		subredditImageUrl: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			isJoined: false,
			hoverButtonText: 'Joined',
		};
	},
	methods: {
		//@vuese
		//Toogle Joining and leaving a subreddit button
		//@arg no argument
		toogleJoin() {
			this.isJoined = !this.isJoined;
		},
		//@vuese
		//Change button text from Joined to Leave when hovering on button
		//@arg text to be written inside button
		hoverJoin(text) {
			this.hoverButtonText = text;
		},
	},
};
</script>

<style scoped>
.blue-top {
	background: var(--color-blue-light-3);
	height: 8rem;
	width: 100%;
	margin-top: 5rem;
}
.link {
	height: 100%;
	width: 100%;
	cursor: pointer;
}
.white-top {
	background: var(--color-white-1);
	width: 100%;
	height: 8rem;
}
.top {
	margin-bottom: 1.2rem;
	margin-top: -1.4rem;
	margin-left: 25rem;
}
.flex-start {
	display: flex;
	align-items: flex-start;
}
img {
	border-radius: 100%;
	border: 0.4rem solid var(--color-white-1);
	display: inline-block;
	height: 7.2rem;
	width: 7.2rem;
	background: var(--color-white-1);
	box-sizing: border-box;
}
.top-title-button {
	box-sizing: border-box;
	align-items: flex-start;
	display: inline-flex;
	flex: 1;
	padding-left: 1.6rem;
	margin-top: 2.4rem;
	justify-content: space-between;
	/* width: calc(100% - 80px); */
}
.top-title {
	display: inline-block;
	/* max-width: calc(100% - 96px); */
	padding-right: 2.4rem;
}
.title-1 {
	color: var(--color-dark-3);
	display: inline-block;
	flex: 1;
	font-size: 2.8rem;
	font-weight: 700;
	line-height: 3.2rem;
	padding: 0 0.2rem 0.4rem 0;
	width: 100%;
}
.title-2 {
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	color: var(--color-grey-light-5);
}
.button {
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.7rem;
	padding: 0.4rem 1.6rem;
	width: 9.6rem;
	height: 3.2rem;
}
.blue-button {
	background-color: var(--color-blue-2);
	border: none;
	color: var(--color-white-1);
}
.white-button {
	background-color: var(--color-white-1);
	border: var(--line-5);
	color: var(--color-blue-2);
}
.white-button:hover {
	opacity: 0.92;
}

@media screen and (max-width: 60rem) {
	.top {
		margin-left: 0.8rem;
	}
	.button {
		max-width: 9.6rem;
		min-height: 3.2rem;
		max-height: 3.2rem;
		min-width: 3.2rem;
	}
}
</style>
