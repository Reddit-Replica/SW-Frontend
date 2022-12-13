<template>
	<div class="communities-nav">
		<h4 class="communities-word">Communities</h4>
		<div v-if="commcontents.length >= 4">
			<div v-for="value in commcontents" :key="value.id">
				<div>
					<a class="communities-status"
						><div class="communities-status-release">
							<img style="background-color: #0266b3" class="communities-img" />
							<div class="communities-content">
								<div class="communities-content-release">
									<h6 class="communities-name">r/{{ value.community }}</h6>
									<p class="community-members">{{ value.members }} Members</p>
								</div>
							</div>
							<div class="join" v-if="value.notjoined">
								<base-button
									button-text="Join"
									class="join-button"
									@click="clickedFunction(false)"
								></base-button>
							</div>
							<div class="join" v-if="!value.notjoined">
								<base-button
									button-text="Leave"
									class="join-button"
									@click="clickedFunction(true)"
								></base-button>
							</div></div
					></a>
				</div>
			</div>
		</div>
		<a><p class="communities-go" @click="doFunc">See more communities</p></a>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	props: {
		commcontents: {
			type: Object,
			required: true,
		},
		// index: {
		// 	type: Number,
		// 	required: true,
		// },
	},
	data() {
		return {
			// community: 'Salah',
			// members: '124k',
			// notjoined: true,
		};
	},
	components: {
		BaseButton,
	},
	emits: ['change-joining'],
	methods: {
		clickedFunction(boolVal) {
			this.$emit('change-joining', boolVal);
			// this.$emit('change-joining');
		},
		doFunc() {
			this.$router.replace({
				name: 'searchcm',
				query: { q: this.$route.query.q },
			});
		},
	},
};
</script>

<style scoped>
h4 h6 div {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
a {
	color: inherit;
	text-decoration: inherit;
	cursor: pointer;
}
p {
	display: block;
	margin-block-start: 0em;
	margin-block-end: 0em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.communities-nav {
	background: #fff;
	border: thin solid var(--newCommunityTheme-postLine);
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
	margin-bottom: 16px;
	max-width: 100%;
}
.communities-word {
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: rgb(39, 32, 32);
	padding: 16px 16px 0;
}
.communities-status {
	margin-bottom: 0;
	border-radius: 4px 4px 0 0;
	border-bottom: thin solid #ccc;
	display: flex;
	flex-direction: column;
	margin-top: -1px;
	padding: 16px;
	cursor: pointer;
}
.communities-status-release {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.communities-img {
	font-size: 36px;
	height: 36px;
	max-height: 36px;
	max-width: 36px;
	overflow: hidden;
	width: 36px;
	line-height: normal;
	flex-shrink: 0;
	border-radius: 100%;
	vertical-align: middle;
}
.communities-content {
	flex-grow: 1;
	padding: 0 8px;
	overflow: hidden;
	overflow-wrap: break-word;
}
.communities-content-release {
	display: flex;
	align-items: baseline;
	flex-direction: column;
}
.communities-name {
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 12px;
	line-height: 16px;
	color: rgb(58, 49, 49);
	font-weight: 700;
}
.community-members {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: #bbb;
}
.join {
	flex-shrink: 0;
	width: 88px;
}
.join-button {
	width: 100%;
	color: rgb(98, 98, 252);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 17px;
	text-transform: unset;
	min-height: 32px;
	min-width: 32px;
	padding: 4px 16px;
}
.communities-go {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	color: rgb(98, 98, 252);
	padding: 16px;
}
</style>
