<template>
	<li class="item" v-if="show">
		<div class="image" id="moderator">
			<img
				src="../../../img/user-img-2.png"
				alt="img"
				class="img"
				:id="'moderator-img-' + index"
			/>
			<h5 class="heading-5" :id="'moderator-name-' + index">
				{{ moderator.username }}
			</h5>
		</div>
		<div class="time">
			<span>{{ moderator.dateOfModeration }}</span>
		</div>
		<div class="remove">
			<base-button class="button-remove">Remove</base-button>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		// @vuese
		//details of moderator
		moderator: {
			type: Object,
			required: true,
			default: () => ({
				username: '',
				nickname: '',
				dateOfModeration: '',
				permissions: [],
			}),
		},
		// @vuese
		//seacrhing value
		search: {
			type: String,
			default: '',
		},
		// @vuese
		//index to handle unique ids
		index: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	computed: {
		// @vuese
		//at searching check if it is the value of seacrhing or not
		// @type boolean
		show() {
			if (this.search != '') {
				if (this.search == this.moderator.username) {
					return true;
				} else return false;
			}
			return true;
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
