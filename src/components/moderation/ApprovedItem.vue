<template>
	<li class="item" v-if="show">
		<div class="image" id="moderator">
			<img
				v-if="!approve.avatar"
				src="../../../img/default_inbox_avatar.png"
				alt="img"
				class="img"
				:id="'moderator-img-' + index"
			/>
			<img
				v-else
				:src="$baseurl + '/' + approve.avatar"
				alt="img"
				class="img"
				:id="'moderator-img-' + index"
			/>
			<h5 class="heading-5" :id="'moderator-name-' + index">
				{{ approve.username }}
			</h5>
		</div>
		<div class="time">
			<span>{{ handleTime }}</span>
		</div>
		<div class="remove">
			<base-button class="button-remove" :id="'button-remove-' + index"
				>Remove</base-button
			>
		</div>
	</li>
</template>

<script>
export default {
	beforeMount() {
		this.calculateTime();
	},
	props: {
		// @vuese
		//details of approve
		// @type object
		approve: {
			type: Object,
			required: true,
			default: () => ({
				username: '',
				avatar: '',
				dateOfApprove: '',
			}),
		},
		// @vuese
		//seacrhing value
		// @type string
		search: {
			type: String,
			default: '',
		},
		// @vuese
		//index to handle unique ids
		// @type number
		index: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	data() {
		return {
			handleTime: '',
		};
	},
	computed: {
		// @vuese
		//at searching check if it is the value of seacrhing or not
		// @type boolean
		show() {
			if (this.search != '') {
				if (this.search == this.approve.username) {
					return true;
				} else return false;
			}
			return true;
		},
		// @vuese
		//return handled time after calculated it
		// @type object
		// handleTime() {
		// 	return this.$store.getters['moderation/handleTime'];
		// },
	},
	methods: {
		// @vuese
		//calculate time
		// @type object
		calculateTime() {
			// this.$store.dispatch('moderation/handleTime', {
			// 	time: this.moderator.dateOfModeration,
			// });

			var currentDate = new Date();
			var returnValue = '';
			var myTime = new Date(this.approve.dateOfApprove);
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
			this.handleTime = returnValue;
		},
	},
};
</script>

<style scoped>
.item {
	display: flex;
	align-items: center;
	height: 5rem;
	justify-content: space-between;
	border-bottom: var(--line);
}
.image {
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 1rem;
	margin-left: 1.5rem;
	border-radius: 0.5rem;
	margin-right: 4.5rem;
}
.image:hover {
	background-color: var(--color-grey-light-10);
}
.img {
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 0.3rem;
	margin-right: 0.6rem;
}
.time,
.remove {
	align-items: center;
	font-size: 1.2rem;
}
.time {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	flex: 1 0 100px;
	line-height: normal;
}
.remove {
	margin-right: 2rem;
}
.button-remove {
	position: relative;
	border: 1px solid transparent;
	color: var(--color-blue-2);
	fill: var(--color-blue-2);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 1.7rem;
	text-transform: unset;
	min-height: 3.2rem;
	min-width: 3.2rem;
	padding: 0.4 1.6rem;
	background-color: var(--color-white-1);
}
.heading-5 {
	color: var(--color-dark-1);
}
/* 340px */
@media only screen and (max-width: 21.25em) {
	.permissions {
		display: none;
	}
}
</style>
