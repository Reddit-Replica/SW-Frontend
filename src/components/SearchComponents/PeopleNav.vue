<template>
	<div class="people-nav">
		<h4 class="people-word">People</h4>
		<div>
			<div v-if="!(SearchedUsers && SearchedUsers.length == 0)">
				<div v-for="value in SearchedUsers" :key="value.username">
					<a class="people-status"
						><div class="people-status-release">
							<div class="img-release">
								<div class="img-holder">
									<div class="img-div">
										<img
											v-if="!value.avatar"
											src="../../../img/default_inbox_avatar.png"
											alt="img"
											class="people-img"
											:id="'user-avatar-' + value.id"
										/>
										<img
											v-else
											:src="$baseurl + '/' + value.avatar"
											alt="img"
											class="people-img"
											:id="'user-avatar-' + value.id"
										/>
									</div>
								</div>
							</div>
							<div class="people-content">
								<div class="people-content-release">
									<h6 class="people-name">u/{{ name }}&nbsp;</h6>
									<p class="karma-number">{{ karma }} Karma&nbsp;</p>
								</div>
							</div>
							<div class="follow" v-if="value.following" @click="toggle">
								<base-button
									button-text="Follow"
									class="follow-button"
								></base-button>
							</div>
							<div class="follow" v-if="!value.following" @click="toggle">
								<base-button
									button-text="Unfollow"
									class="follow-button"
								></base-button>
							</div></div
					></a>
				</div>
			</div>
			<div v-else>
				<div class="no-res">No Results</div>
			</div>
		</div>
	</div>
</template>

<script>
import BaseButton from '../BaseComponents/BaseButton.vue';
export default {
	data() {
		return {
			name: 'Salah',
			karma: '124k',
			notFollowed: true,
		};
	},
	components: {
		BaseButton,
	},
	computed: {
		SearchedUsers() {
			console.log(this.$store.getters['search/Getusers']);
			return this.$store.getters['search/Getusers'];
		},
	},
	methods: {
		toggle() {},
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
	margin-block-end: 1em;
	margin-inline-start: 0px;
	margin-inline-end: 0px;
}
.people-nav {
	background: #fff;
	border: thin solid var(--newCommunityTheme-postLine);
	border-radius: 4px;
	box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
	margin-bottom: 16px;
	max-width: 100%;
}
.people-word {
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
	color: rgb(39, 32, 32);
	padding: 16px 16px 0;
}
.people-status {
	display: flex;
	flex-direction: column;
	margin-top: 0px;
	padding: 16px;
	border-radius: 4px 4px 0 0;
	border-bottom: thin solid #ccc;
}
.people-status-release {
	align-items: center;
	display: flex;
	justify-content: space-between;
}
.img-release {
	font-size: 36px;
	max-height: 36px;
	max-width: 36px;
	overflow: hidden;
	width: 36px;
	line-height: normal;
	flex-shrink: 0;
}
.people-img {
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
.people-content {
	flex-grow: 1;
	padding: 0 8px;
	overflow: hidden;
	overflow-wrap: break-word;
}
.people-content-release {
	display: flex;
	align-items: baseline;
	flex-direction: column;
}
.people-name {
	max-width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 12px;
	line-height: 16px;
	color: rgb(58, 49, 49);
	font-weight: 700;
}
.karma-number {
	font-size: 12px;
	font-weight: 400;
	line-height: 16px;
	color: lightgray;
}
.follow {
	flex-shrink: 0;
	width: 88px;
}
.follow-button {
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
.no-res {
	color: #1c1c1c;
	padding: 16px;
	font-size: 16px;
}
</style>
