<template>
	<li class="topCommunity">
		<a href="link" class="topCommunityLink">
			<div class="topCommunityBlock">
				<span class="topCommunityIndex">{{ index + 1 }}</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					fill="currentColor"
					class="bi bi-chevron-up"
					viewBox="0 0 16 16"
					style="color: #46d160"
				>
					<path
						fill-rule="evenodd"
						d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
					/>
				</svg>
				<img class="topCommunityImage" :src="image" alt="community image" />
				<a class="topCommunityName" href="link">{{ name }}</a>
			</div>
		</a>

		<div class="joinBlock">
			<base-button button-text="Join" class="join"></base-button>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			default: 0,
		},
		image: {
			type: String,
			default: '',
		},
		name: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: '',
		},
		link: {
			type: String,
			default: '',
		},
	},
};
</script>

<style scoped>
.topCommunity {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	position: relative;
	background-color: var(--main-white-color);
	/* width: 310px; */
	height: 48px;
}
.topCommunity:not(:last-of-type) {
	border-bottom: thin solid var(--color-grey-light-4);
}
.topCommunityLink {
	padding: 0;
	margin: 0 12px;
	overflow: hidden;
	text-overflow: ellipsis;
	height: 48px;
	align-items: center;
	display: flex;
}
.topCommunityBlock {
	overflow: hidden;
	align-items: center;
	display: flex;
}
.topCommunityIndex {
	color: var(--color-dark-1);
	text-align: right;
	min-width: 20px;
	font-size: 14px;
	font-weight: 500;
}
.topCommunityImage {
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: 100%;
	border-radius: 24px;
	font-size: 32px;
	height: 32px;
	margin: 0 8px;
	width: 32px;
}

.bi-chevron-up {
	color: var(--color-green);
	font-size: 20px;
	font-weight: 400;
	height: 20px;
	vertical-align: middle;
	width: 20px;
	margin-left: 8px;
}
.topCommunityName {
	max-width: 125px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	display: inline-block;
	text-decoration: none;
	color: var(--color-dark-1);
	font-size: 14px;
	font-weight: 500;
}
.joinBlock {
	margin-right: 12px;
	white-space: nowrap;
}
.join {
	position: relative;
	background-color: var(--color-blue-2);
	border: none;
	color: var(--main-white-color);
	fill: var(--main-white-color);
	font-size: 12px;
	font-weight: 700;
	min-height: 24px;
	min-width: 24px;
	padding: 4px 16px;
}
.join:hover {
	opacity: 0.92;
}
</style>
