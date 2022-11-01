<template>
	<div class="comments">
		<div class="container">
			<div class="row title align-items-center">
				<div class="col-9 d-flex">
					<div class="vote-box">
						<div class="upvote" @click="upvote">
							<svg class="icon icon-arrow-down p-1 up-clicked" v-if="upClicked">
								<use xlink:href="../../img/vote.svg#icon-arrow-up"></use>
							</svg>
							<svg class="icon icon-shift" v-else>
								<use xlink:href="../../img/shift.svg#icon-shift"></use>
							</svg>
						</div>
						<div
							class="p-2 vote-count"
							:class="
								upClicked ? 'up-clicked' : downClicked ? 'down-clicked' : ''
							"
						>
							{{ counter }}
						</div>
						<div class="downvote" @click="downvote">
							<svg
								class="icon icon-arrow-down p-1"
								:class="downClicked ? 'down-clicked' : ''"
								v-if="downClicked"
							>
								<use xlink:href="../../img/vote.svg#icon-arrow-down"></use>
							</svg>
							<svg class="icon icon-shift" v-else>
								<use xlink:href="../../img/shift.svg#icon-shift"></use>
							</svg>
						</div>
					</div>
					<div class="post-title">
						<h4>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-card-text"
								viewBox="0 0 16 16"
							>
								<path
									d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
								/>
								<path
									d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
								/>
							</svg>
							{{ postName }}
						</h4>
					</div>
				</div>
				<div class="col-3 close">
					<button>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-x"
							viewBox="0 0 16 16"
						>
							<path
								d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
							/>
						</svg>
						<span>close</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			upClicked: false,
			downClicked: false,
			counter: 22,
			postName:
				'Can you guys help me finish my code or at least help me find the solution, I really tried to google it but I just can not find it and as I said I am still new.',
		};
	},
	methods: {
		upvote() {
			if (this.upClicked == false) {
				this.upClicked = true;
				this.counter++;
			} else {
				this.upClicked = false;
				this.counter--;
			}
			if (this.downClicked) {
				this.downClicked = false;
				this.counter++;
			}
		},
		downvote() {
			if (this.downClicked == false) {
				this.downClicked = true;
				this.counter--;
			} else {
				this.downClicked = false;
				this.counter++;
			}
			if (this.upClicked) {
				this.upClicked = false;
				this.counter--;
			}
		},
	},
};
</script>
<style scoped>
.comments {
	background-color: black;
	margin: 0px 249px;
}
.title {
	margin: 0px 152px;
}
.vote-box {
	text-align: center;
	display: flex;
	justify-content: center;
	border-left: 0.2px solid var(--color-grey-light-6);
	border-right: 0.2px solid var(--color-grey-light-6);
	width: 122px;
	height: 27.5px;
	padding: 0px 12px;
}
.vote-box svg {
	height: 27.5px;
	width: 27.5px;
	fill: var(--color-grey-light-6);
}
.downvote:has(.icon-arrow-down),
.upvote:has(.icon-arrow-down) {
	background-color: var(--color-grey-dark-6);
}
.downvote .icon-shift {
	transform: rotate(180deg);
}
.downvote .icon-shift:hover,
.downvote .icon-arrow-down {
	fill: var(--color-blue);
}
.upvote .icon-shift:hover,
.upvote .icon-arrow-down {
	fill: var(--color-orange);
}
.vote-count {
	color: white;
	font-size: 12px;
	font-weight: 700;
	line-height: 18px;
	margin: 0 1px;
	text-align: center;
	width: 32px;
}
.post-title {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	vertical-align: middle;
	line-height: 27.5px;
}
.post-title svg {
	width: 16.67px;
	height: 16.67px;
	fill: var(--color-grey-light-7);
	margin: 0px 5px;
}
.post-title h4 {
	display: inline;
	color: var(--color-grey-light-7);
}
.close button {
	display: block;
	margin-left: auto;
	background-color: black;
	color: var(--color-grey-light-7);
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 15px;
	font-weight: 700;
	letter-spacing: unset;
	line-height: 16px;
	text-transform: unset;
	min-height: 24px;
	min-width: 24px;
}
.close svg {
	display: inline-block;
	height: 44px;
	width: 44px;
	font-size: 44px;
	line-height: 44px;
	padding: 0 4px 0 0;
}
.close span {
	margin-left: -5px;
}
</style>
