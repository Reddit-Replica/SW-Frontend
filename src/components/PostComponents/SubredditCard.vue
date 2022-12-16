<template>
	<div class="main">
		<div class="header"></div>
		<div class="content">
			<div class="image-name">
				<div class="image" v-if="subreddit.picture != undefined">
					<img :src="subreddit.picture" alt="" />
				</div>
				<div class="image">
					<img src="../../../img/default_subreddit_image.png" alt="" />
				</div>
				<div class="name">r/{{ subreddit.title }}</div>
			</div>
			<p class="para-bold">{{ subreddit.description }}</p>
			<div class="birth">
				<font-awesome-icon icon="fa-solid fa-cake-candles" class="icon" />
				Created {{ calculateTime }}
			</div>
			<div class="numbers">
				<div class="members">
					<p class="para-bold">{{ numFormatter(subreddit.members) }}</p>
					<p>Members</p>
				</div>
				<!-- <div class="online">
					<p class="para-bold">
						<font-awesome-icon icon="fa-solid fa-circle" class="green-dot" />{{
							subreddit.online
						}}
					</p>
					<p>Online</p>
				</div> -->
			</div>
			<base-button
				class="join-button pink-button"
				@click="joinSubreddit"
				v-if="!isJoined"
				id="join-button"
				>Join</base-button
			>
			<base-button
				class="join-button white-button"
				@click="leaveSubreddit"
				@mouseover="hoverJoin('Leave')"
				@mouseleave="hoverJoin('Joined')"
				v-if="isJoined"
				id="leave-button"
				>{{ hoverButtonText }}</base-button
			>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		subreddit: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			isJoined: this.subreddit.isMember,
			hoverButtonText: 'Join',
		};
	},
	methods: {
		async joinSubreddit() {
			if (localStorage.getItem('accessToken') != null) {
				await this.$store.dispatch('community/joinSubreddit', {
					subredditId: this.subreddit.subredditId,
					baseurl: this.$baseurl,
				});

				this.isJoined = true;
			} else {
				this.$router.replace('/login');
			}
		},
		async leaveSubreddit() {
			if (localStorage.getItem('accessToken') != null) {
				await this.$store.dispatch('community/leaveSubreddit', {
					subredditName: this.subreddit.title,
					baseurl: this.$baseurl,
				});

				this.isJoined = false;
			} else {
				this.$router.replace('/login');
			}
		},
		click() {
			console.log(this.subreddit);
		},
		// @vuese
		//load Rules list from the store
		// @arg no argument
		numFormatter(num) {
			if (num > 999 && num < 1000000) {
				return parseFloat((num / 1000).toFixed(1)) + 'K'; // convert to K for number from > 1000 < 1 million
			} else if (num > 1000000) {
				return parseFloat((num / 1000000).toFixed(1)) + 'M'; // convert to M for number from > 1 million
			} else {
				return num; // if value < 1000, nothing to do
			}
		},
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
	computed: {
		calculateTime() {
			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.subreddit.dateOfCreation);
			if (currentDate.getFullYear() != myTime.getFullYear()) {
				returnValue = myTime.toJSON().slice(0, 10).replace(/-/g, '/');
			} else if (currentDate.getMonth() != myTime.getMonth()) {
				returnValue = currentDate.getMonth() - myTime.getMonth() + ' Month ago';
			} else if (currentDate.getDate() != myTime.getDate()) {
				returnValue = currentDate.getDate() - myTime.getDate() + ' Days ago';
			} else if (currentDate.getHours() != myTime.getHours()) {
				returnValue = currentDate.getHours() - myTime.getHours() + ' Hours ago';
			} else if (currentDate.getMinutes() != myTime.getMinutes()) {
				returnValue =
					currentDate.getMinutes() - myTime.getMinutes() + ' Minutes ago';
			} else {
				returnValue = 'Just now';
			}
			return returnValue;
		},
	},
};
</script>
<style scoped>
.main {
	background-color: white;
	border-radius: 5px;
}
.header {
	background-color: var(--color-green-2);
	height: 34px;
	border-radius: 5px 5px 0 0;
}
.image-name {
	display: flex;
	align-items: center;
}
.image img {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 5px;
}
.name {
	font-weight: bold;
	color: black;
	font-size: 12px;
	line-height: 65px;
}
.content {
	padding: 10px;
}
.para-bold {
	color: black;
	font-size: 12px;
}
.birth {
	font-size: 12px;
	border-bottom: 1px solid var(--color-grey-light-8);
	padding: 5px 0;
}
.birth .icon {
	margin-right: 5px;
}
.numbers {
	display: flex;
	border-bottom: 1px solid var(--color-grey-light-8);
	padding: 10px 0;
}
.members {
	margin-right: 60px;
}
.green-dot {
	border-radius: 50%;
	color: var(--color-green-2);
	font-size: 5px;
	margin-right: 2px;
}
p {
	margin: 0;
}
.join-button {
	width: 100%;
	height: 32px;
	margin: 10px 0;
	border: 1px solid var(--color-pink);
	color: var(--color-pink);
	font-weight: bold;
	font-size: 14px;
	background-color: white;
}
.pink-button {
	background-color: var(--color-pink);
	color: white;
}
.white-button:hover {
	background-color: var(--color-pink-2);
}
.white-button:focus {
	background-color: var(--color-pink-3);
}
</style>
