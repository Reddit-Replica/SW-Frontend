<template>
	<li class="item" v-if="show">
		<div class="image" id="moderator">
			<img
				src="../../../img/user-img-2.png"
				alt="img"
				class="img"
				id="moderator-img"
			/>
			<h5 class="heading-5" id="moderator-name">{{ moderator.username }}</h5>
		</div>
		<div class="time">
			<span>{{ moderator.dateOfModeration }}</span>
		</div>
		<div class="permissions">
			<span v-for="permission in moderator.permissions" :key="permission">{{
				permission
			}}</span>
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
				permissions: '',
			}),
		},
		// @vuese
		//seacrhing value
		search: {
			type: String,
			default: '',
		},
	},
	computed: {
		// @vuese
		//at searching check if it is the value of seacrhing or not
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
.permissions {
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
.permissions {
	margin-right: 2rem;
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
