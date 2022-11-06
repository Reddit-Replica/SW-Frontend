<template>
	<div>
		<div class="blue-top">
			<router-link to="/subreddit"><div class="link"></div></router-link>
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
								class="button blue-button join-button"
								@click="toogleJoin"
								v-if="!isJoined"
								>Join</base-button
							>
							<base-button
								class="button white-button join-button"
								@click="toogleJoin"
								@mouseover="hoverJoin('Leave')"
								@mouseleave="hoverJoin('Joined')"
								v-if="isJoined"
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
		subredditName: {
			type: String,
			default: '',
		},
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
		toogleJoin() {
			this.isJoined = !this.isJoined;
		},
		hoverJoin(text) {
			this.hoverButtonText = text;
		},
	},
};
</script>

<style scoped>
.blue-top {
	background: var(--color-blue-light-3);
	/* height: 10rem; */
	height: 64px;
}
.link {
	height: 100%;
	width: 100%;
	cursor: pointer;
}
.white-top {
	background: var(--color-white-1);
	height: 80px;
	/* height: 10rem; */
}
.top {
	margin-bottom: 12px;
	margin-top: -14px;
	padding-left: 24px;
}
.flex-start {
	display: flex;
	align-items: flex-start;
}
img {
	border-radius: 100%;
	border: 4px solid var(--color-white-1);
	display: inline-block;
	height: 72px;
	width: 72px;
	background: var(--color-white-1);
	box-sizing: border-box;
}
.top-title-button {
	box-sizing: border-box;
	align-items: flex-start;
	display: inline-flex;
	flex: 1;
	padding-left: 16px;
	margin-top: 24px;
	justify-content: space-between;
	width: calc(100% - 80px);
}
.top-title {
	display: inline-block;
	max-width: calc(100% - 96px);
	padding-right: 24px;
}
.title-1 {
	color: var(--color-dark-3);
	display: inline-block;
	flex: 1;
	font-size: 28px;
	font-weight: 700;
	line-height: 32px;
	padding: 0 2px 4px 0;
	width: 100%;
}
.title-2 {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: var(--color-grey-light-5);
}
.button {
	font-size: 14px;
	font-weight: 700;
	line-height: 17px;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
.blue-button {
	background-color: var(--color-blue-2);
	border: none;
	color: var(--color-white-1);
}
.white-button {
	background-color: var(--color-white-1);
	border: 1px solid var(--color-blue-2);
	color: var(--color-blue-2);
}
.white-button:hover {
	opacity: 0.92;
}
.join-button {
	width: 96px;
}
</style>
