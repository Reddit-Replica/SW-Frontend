<template>
	<li
		:id="'ntf-msg-' + index"
		class="ntf-msg-li"
		:class="{ 'not-read': !notification.isRead }"
	>
		<a
			:href="notification.link"
			class="ntf-msg-routerlink"
			@click="readNotification"
			:id="'ntf-msg-link-' + index"
		>
			<span class="ntf-msg-1" id="ntf-msg-1">
				<img
					v-if="notification.photo"
					:src="$baseurl + '/' + notification.photo"
					alt="image"
					:id="'ntf-msg-2-photo-' + index"
				/>
				<img
					v-else
					src="../../../img/default_inbox_avatar.png"
					alt="image"
					:id="'ntf-msg-2-' + index"
				/>
				<span class="circle" :id="'ntf-msg-3-' + index"
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
			<span class="ntf-msg-2 text" :id="'ntf-msg-4-' + index">
				<div class="ntf-msg-2-1" :id="'ntf-msg-5-' + index">
					<span :id="'ntf-msg-6-' + index"
						><span class="text-title" :id="'ntf-msg-7-' + index">{{
							notification.title
						}}</span>
						<span class="text-dot" :id="'ntf-msg-8-' + index">.</span>
						<span :id="'ntf-msg-9-' + index">{{
							calcDuration(notification.sendAt)
						}}</span>
					</span>
					<span class="dots-icon" :id="'ntf-msg-10-' + index">
						<svg
							:id="'ntf-msg-11-' + index"
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
						<button
							v-if="buttonShown"
							@click.prevent="clickDotsButton"
							:id="'ntf-msg-12-' + index"
						>
							{{ textHide }}
						</button>
					</span>
				</div>
				<div :id="'ntf-msg-13-' + index">
					<div :id="'ntf-msg-14-' + index">{{ content }}</div>
					<div class="ntf-msg-2-2" :id="'ntf-msg-15-' + index">
						<a
							class="reply-back"
							v-if="replyBack"
							:href="notification.link"
							:id="'ntf-msg-16-' + index"
						>
							<svg
								:id="'ntf-msg-17-' + index"
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-arrow-90deg-left"
								viewBox="0 0 16 16"
							>
								<path
									fill-rule="evenodd"
									d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
								/>
							</svg>
							<span :id="'ntf-msg-18-' + index">Reply Back</span>
						</a>
					</div>
				</div>
			</span>
		</a>
	</li>
</template>

<script>
export default {
	emits: ['reload', 'showpop'],

	props: {
		//@vuese
		//index of notification
		index: {
			type: Number,
			default: 0,
		},
		//@vuese
		//object of notification details
		notification: {
			type: Object,
			default: () => {},
		},
	},
	data() {
		return {
			duration: '21h',
			buttonShown: false,
			// textNoUpdates: "Don't get updates on that",
			textHide: 'Hide this notification',
			doneHide: false,
		};
	},
	computed: {
		//@vuese
		//text shown in notification dots button
		dotsButtonText() {
			if (this.notification.title.includes('replied')) {
				return this.textNoUpdates;
			} else {
				return this.textHide;
			}
		},
		//@vuese
		//check if notification can be hidden
		toHide() {
			return !this.notification.title.includes('replied');
		},
		//@vuese
		//check if notification can be replied back
		replyBack() {
			return this.notification.title.includes('replied');
		},
		//@vuese
		//get username of who send the notification
		content() {
			return (
				'u/' +
				this.notification.title.substring(
					0,
					this.notification.title.indexOf(' ')
				)
			);
		},
	},

	methods: {
		//@vuese
		//show/hide hide notification button
		//@arg no argument
		toggleButton() {
			this.buttonShown = !this.buttonShown;
		},
		//@vuese
		//calculate duration from a specific date until now
		//@arg date
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

		//@vuese
		//hide a notification
		//@arg no argument
		async clickDotsButton() {
			// if (this.toHide) {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('notifications/hideNotification', {
				baseurl: this.$baseurl,
				token: accessToken,
				notificationId: this.notification.id,
			});
			// }

			//@vuese
			//emit fires to show pop up message
			this.$emit('showpop');
			//@vuese
			//emit fires to reload the component to get the new data
			this.$emit('reload');
		},

		//@vuese
		//read a notification
		//@arg no argument
		async readNotification() {
			const accessToken = localStorage.getItem('accessToken');
			await this.$store.dispatch('notifications/readNotification', {
				baseurl: this.$baseurl,
				token: accessToken,
				notificationId: this.notification.id,
			});
			//@vuese
			//emit fires to reload the component to get the new data
			this.$emit('reload');
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
	padding: 1.6rem;
}
.ntf-msg-1 {
	padding-right: 0.8rem;
	position: relative;
}
.ntf-msg-2 {
	flex: 1 0;
}
img {
	border-radius: 50%;
	height: 3.2rem;
	width: 3.2rem;
	background-color: var(--color-grey-dark-4);
	display: block;
	object-fit: cover;
}
.circle {
	background-color: var(--main-white-color);
	box-shadow: var(--shadow-light);
	border: var(--line-10);
	border-radius: 50%;
	height: 2rem;
	width: 2rem;
	left: 1.2rem;
	top: 1.8rem;
	position: absolute;
}
.bi-bell-fill {
	fill: var(--color-blue-7);
	font-size: 1.2rem;
	height: 1.2rem;
	width: 1.2rem;
	left: 0.3rem;
	top: 0.3rem;
	position: absolute;
}
.ntf-msg-2-1 {
	align-items: center;
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.4rem;
}
.text {
	font-family: Noto Sans, Arial, sans-serif;
	font-weight: 400;
	font-size: 1.6rem;
	line-height: 2rem;
	color: var(--color-grey-dark-10);
}
.text-title {
	color: var(--color-dark-3);
	overflow-wrap: anywhere;
}
.text-dot {
	margin: 0 0.4rem;
}
.dots-icon {
	align-items: center;
	border-radius: 0.4rem;
	display: flex;
	justify-content: center;
	width: 3.2rem;
	margin-left: 1rem;
	flex: 0 0 3.2rem;

	position: relative;
}
.dots-icon:hover {
	background-color: var(--color-grey-light-3);
}
button {
	background-color: var(--main-white-color);
	color: var(--color-dark-3);
	box-shadow: var(--shadow-menu);
	border-radius: 0.4rem;
	border: none;
	font-size: 1.4rem;
	font-weight: 500;
	line-height: 1.8rem;
	display: block;
	padding: 0.8rem;
	text-align: left;
	width: max-content;
	top: 2rem;
	right: 2rem;

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

.reply-back {
	background-color: var(--color-grey-light-2);
	color: var(--color-blue-2);
	fill: var(--color-blue-2);
	margin-top: 0.8rem;
	padding: 0.4rem 1.6rem;
	height: 3.6rem;
	width: fit-content;
	display: block;
	border-radius: 999rem;
}
.reply-back:hover {
	background-color: var(--color-baby-blue);
}
.bi-arrow-90deg-left {
	margin-right: 0.8rem;
}
</style>
