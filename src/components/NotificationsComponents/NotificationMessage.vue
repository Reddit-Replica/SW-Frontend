<template>
	<li id="'ntf-msg-'+index" class="ntf-msg-li" :class="{ 'not-read': !isRead }">
		<router-link to="link" class="ntf-msg-routerlink">
			<span class="ntf-msg-1">
				<img
					src="https://www.redditstatic.com/notifications/default_inbox_avatar.png"
					alt="image"
				/>
				<span class="circle"
					><svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-bell-fill"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
						/>
					</svg>
				</span>
			</span>
			<span class="ntf-msg-2 text">
				<div class="ntf-msg-2-1">
					<span
						><span class="text-title">{{ title }}</span>
						<span class="text-dot">.</span>
						<span>{{ calcDuration(sendAt) }}</span>
					</span>
					<span class="dots-icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-three-dots"
							viewBox="0 0 16 16"
							@click.prevent="toggleButton"
						>
							<path
								d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
							/>
						</svg>
						<button v-if="buttonShown">{{ dotsButtonText }}</button>
					</span>
				</div>
				<div>{{ content }}</div>
			</span>
		</router-link>
	</li>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			default: 0,
		},
		title: {
			type: String,
			default: '',
		},
		link: {
			type: String,
			default: '',
		},
		sendAt: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
		isRead: {
			type: Boolean,
			default: true,
		},
		smallIcon: {
			type: String,
			default: '',
		},
		senderID: {
			type: String,
			default: '',
		},
		data: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			duration: '21h',
			buttonShown: false,
			textNoUpdates: "Don't get updates on that",
			textHide: 'Hide this notification',
		};
	},
	computed: {
		dotsButtonText() {
			if (this.title.includes('replied')) {
				return this.textNoUpdates;
			} else {
				return this.textHide;
			}
		},
	},

	methods: {
		toggleButton() {
			this.buttonShown = !this.buttonShown;
			this.calcDuration(this.sendAt);
		},
		calcDuration(date) {
			let currDate = Date.parse(new Date());
			let ourDate = Date.parse(date);

			let secs = Math.floor(Math.abs(currDate) / 1000);
			let mins = Math.floor(secs / 60);
			let hours = Math.floor(mins / 60);
			let days = Math.floor(hours / 24);

			let secs2 = Math.floor(Math.abs(ourDate) / 1000);
			let mins2 = Math.floor(secs2 / 60);
			let hours2 = Math.floor(mins2 / 60);
			let days2 = Math.floor(hours2 / 24);

			let secsDiff = secs - secs2;
			let minsDiff = mins - mins2;
			let hoursDiff = hours - hours2;
			let daysDiff = days - days2;

			let duration = { durationNumber: 0, durationText: '' };
			let month;
			let day;

			if (daysDiff > 15) {
				month = date.substring(5, 7);
				day = date.substring(8, 10);

				if (day[0] == '0') day = day[1];

				if (month == '01') month = 'Jan';
				else if (month == '02') month = 'Feb';
				else if (month == '03') month = 'Mar';
				else if (month == '04') month = 'Apr';
				else if (month == '05') month = 'May';
				else if (month == '06') month = 'Jan';
				else if (month == '07') month = 'Jul';
				else if (month == '08') month = 'Aug';
				else if (month == '09') month = 'Sep';
				else if (month == '10') month = 'Oct';
				else if (month == '11') month = 'Nov';
				else if (month == '12') month = 'Dec';

				return month + ' ' + day;
			} else if (daysDiff > 0 && daysDiff <= 15) {
				duration.durationNumber = daysDiff;
				duration.durationText = 'd';
			} else if (hoursDiff > 0) {
				duration.durationNumber = hoursDiff;
				duration.durationText = 'h';
			} else if (minsDiff > 0) {
				duration.durationNumber = minsDiff;
				duration.durationText = 'm';
			} else if (secsDiff > 0) {
				duration.durationNumber = secsDiff;
				duration.durationText = 's';
			}
			return duration.durationNumber + ' ' + duration.durationText;
		},
	},
};
</script>

<style scoped>
.ntf-msg-li {
	border-bottom: var(--line-11);
	background-color: var(--main-white-color);
}
.ntf-msg-routerlink {
	display: flex;
	padding: 16px;
}
.ntf-msg-1 {
	padding-right: 8px;
	position: relative;
}
.ntf-msg-2 {
	flex: 1 0;
}
img {
	border-radius: 50%;
	height: 32px;
	width: 32px;
	background-color: var(--color-grey-dark-4);
	display: block;
	object-fit: cover;
}
.circle {
	background-color: var(--main-white-color);
	box-shadow: var(--shadow-light);
	border: var(--line-10);
	border-radius: 50%;
	height: 20px;
	width: 20px;
	left: 12px;
	top: 18px;
	position: absolute;
}
.bi-bell-fill {
	fill: var(--color-blue-7);
	font-size: 12px;
	height: 12px;
	width: 12px;
	left: 3px;
	top: 3px;
	position: absolute;
}
.ntf-msg-2-1 {
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 4px;
}
.text {
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 20px;
	color: var(--color-grey-dark-10);
}
.text-title {
	color: var(--color-dark-3);
	overflow-wrap: anywhere;
}
.text-dot {
	margin: 0 4px;
}
.dots-icon {
	align-items: center;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	width: 32px;
	margin-left: 10px;
	flex: 0 0 32px;

	position: relative;
}
.dots-icon:hover {
	background-color: var(--color-grey-light-3);
}
button {
	background-color: var(--main-white-color);
	color: var(--color-dark-3);
	box-shadow: var(--shadow-menu);
	border-radius: 4px;
	border: none;
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
	display: block;
	padding: 8px;
	text-align: left;
	width: max-content;
	top: 20px;
	right: 20px;

	position: absolute;
	z-index: 10;
}
button:hover {
	color: var(--color-grey-dark-10);
}
.not-read {
	color: red;
	background-color: var(--color-baby-blue);
}
</style>
