<template>
	<div class="grow-link" v-if="shownAlone" :id="'grow-link-' + index">
		<svg
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			class="tri-1 tri"
			:style="styleFill"
		>
			<polygon points="0 0, 100 100, 0 100" />
		</svg>
		<svg
			viewBox="0 0 100 100"
			xmlns="http://www.w3.org/2000/svg"
			class="tri"
			:style="styleFill"
		>
			<polygon points="0 0, 100 100, 0 100" />
		</svg>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			class="bi bi-x-lg"
			viewBox="0 0 16 16"
			@click="hideAlone"
			:id="'exit-grow-option-' + index"
		>
			<path
				d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
			/>
		</svg>
		<div class="circle" :style="styleBack">
			<div class="icon-circle"><slot></slot></div>
		</div>
		<router-link
			to="link"
			class="grow-content"
			:id="'link-grow-option-' + index"
		>
			<h2>{{ title }}</h2>
			<p>
				{{ content }}
			</p>
			<base-button
				class="button"
				link
				:to="link"
				:button-text="button"
				:style="styleBack"
				:id="'button-grow-option-' + index"
			></base-button>
		</router-link>
	</div>
</template>

<script>
export default {
	props: {
		//@vuese
		//Index of grow your community element
		index: {
			type: Number,
			default: 0,
		},
		//@vuese
		//Color of grow your community element
		color: {
			type: String,
			default: '',
		},
		//@vuese
		//Main title of grow your community element
		title: {
			type: String,
			default: '',
		},
		//@vuese
		//Description of grow your community element
		content: {
			type: String,
			default: '',
		},
		//@vuese
		//Link to where of grow your community element should go
		link: {
			type: String,
			default: '',
		},
		//@vuese
		//Button text of grow your community element
		button: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			shown: [true, true, true, true, true],
			shownAlone: true,
		};
	},
	computed: {
		//@vuese
		//Set background color with chosen color
		styleBack() {
			return 'background-color:' + this.color;
		},
		//@vuese
		//Set filling color with chosen color
		styleFill() {
			return 'fill:' + this.color;
		},
	},
	methods: {
		//@vuese
		//Hide element when clicking on exit icon
		//@arg no argument
		hideAlone() {
			this.shownAlone = !this.shownAlone;
		},
	},
};
</script>

<style scoped>
.tri-1 {
	transform: rotate(90deg);
}
.tri {
	border-bottom-left-radius: 0.4rem;
	border-top-left-radius: 0.4rem;
	bottom: 0;
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	opacity: 0.2;
}
.grow-link {
	background-color: var(--color-white-1);
	border: var(--line-8);
	border-radius: 0.4rem;
	cursor: pointer;
	display: block;
	margin-top: 1.2rem;
	/* max-width: 64rem; */
	padding: 1.6rem 1.6rem 1.6rem 7.2rem;
	position: relative;
}
.bi-x-lg {
	outline: none;
	margin-top: 1.2rem;
	position: absolute;
	right: 0;
	text-decoration: none;
	top: 0;
	margin-right: 1.2rem;
	color: var(--color-grey-light-5);
}
.grow-content {
	padding-right: 1.6rem;
	width: 100%;
}
h2 {
	color: var(--color-dark-4);
	font-weight: 500;
	font-size: 2.2rem;
	line-height: 2.6rem;
}
p {
	color: var(--color-grey-light-5);
	font-size: 1.4rem;
	line-height: 1.8rem;
	margin-top: 0.8rem;
}
.button {
	color: var(--color-white-1);
	margin-right: 0.4rem;
	margin-left: 5rem;
	margin-top: 0.8rem;
	padding: 0.6rem 1.2rem;
	font-size: 1.4rem;
	border: none;
}
.button:hover {
	opacity: 0.92;
}
.circle {
	fill: var(--color-white-1);
	color: var(--color-white-1);
	border-radius: 50%;
	height: 2.4rem;
	width: 2.4rem;
	left: 1.6rem;
	top: 1.2rem;
	padding: 1rem;
	position: absolute;
	text-align: center;
	box-sizing: content-box;
}
.icon-circle {
	font-size: 2.4rem;
	height: 2.4rem;
	width: 2.4rem;
	line-height: 2.4rem;
}
</style>
