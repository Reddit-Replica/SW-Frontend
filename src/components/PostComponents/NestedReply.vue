<template>
	<div>
		<div class="comment">
			<div class="left">
				<div class="image">
					<router-link
						:to="{ name: 'user', params: { userName: comment.userName } }"
						><img src="../../../img/user-image.jpg" alt="" id="user"
					/></router-link>
				</div>
				<div class="vertical-line"></div>
			</div>
			<div class="right">
				<div class="user-name">
					<router-link
						:to="{ name: 'user', params: { userName: comment.userName } }"
						id="userName"
						>{{ comment.userName }}</router-link
					>
					<span>. {{ comment.duration }} . ago</span>
				</div>
				<div class="content">
					<p>{{ comment.content }}</p>
				</div>
				<div class="services">
					<ul>
						<li :class="upClicked ? 'clicked' : ''">
							<svg
								class="icon icon-shift vote"
								v-if="!upClicked"
								@click="upClick"
								id="upvote"
							>
								<use xlink:href="../../../img/shift.svg#icon-shift"></use>
							</svg>
							<svg
								class="icon icon-arrow-up p-1 vote"
								v-else
								@click="upClick"
								id="cancel-upvote"
							>
								<use xlink:href="../../../img/vote.svg#icon-arrow-up"></use>
							</svg>
						</li>
						<li :class="upClicked ? 'up' : downClicked ? 'down' : ''">
							{{ voteCounter }}
						</li>
						<li :class="downClicked ? 'clicked' : ''">
							<svg
								class="icon icon-shift vote"
								v-if="!downClicked"
								@click="downClick"
								id="downvote"
							>
								<use xlink:href="../../../img/shift.svg#icon-shift"></use>
							</svg>
							<svg
								class="icon icon-arrow-down p-1 vote"
								v-else
								@click="downClick"
								id="cancel-downvote"
							>
								<use xlink:href="../../../img/vote.svg#icon-arrow-down"></use>
							</svg>
						</li>
						<li><font-awesome-icon icon="fa-regular fa-message" /> Reply</li>
						<li>Give Award</li>
						<li>Share</li>
						<li>Report</li>
						<li>Save</li>
						<li>Follow</li>
					</ul>
				</div>
				<div class="replies">
					<nested-reply
						v-for="reply in comment.replies"
						:key="reply.userName + reply.duration"
						:comment="reply"
					></nested-reply>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'NestedReply',
	props: {
		//@vuese
		//reply data object to get display in that component
		comment: {
			type: Object,
			required: true,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			upClicked: false,
			downClicked: false,
			voteCounter: 0,
		};
	},
	methods: {
		//@vuese
		//called when upvote is clicked to change the style of upvote icon and increment vote counter
		upClick() {
			if (this.downClicked) this.downClick();
			this.upClicked = !this.upClicked;
			if (this.upClicked) this.voteCounter++;
			else this.voteCounter--;
		},
		//@vuese
		//called when downvote is clicked to change the style of downvote icon and decrement vote counter
		downClick() {
			if (this.upClicked) this.upClick();
			this.downClicked = !this.downClicked;
			if (this.downClicked) this.voteCounter--;
			else this.voteCounter++;
		},
	},
};
</script>
<style scoped>
.comment {
	display: flex;
	margin: 2px 2px 0 2px;
}
.left {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.right {
	margin: 7px 7px 0 7px;
}
.image img {
	width: 28px;
	height: 28px;
	border-radius: 50%;
	margin: 6px 0 6px 0;
}
.vertical-line {
	width: 2.2px;
	background-color: var(--color-grey-light-8);
	height: fill-available;
}
.vertical-line:hover {
	background-color: var(--color-pink);
}
.user-name a {
	color: black;
	font-weight: 500;
	text-decoration: none;
	font-size: 12px;
	line-height: 33px;
}
.user-name a:hover {
	text-decoration: underline;
}
.user-name span {
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	color: var(--color-grey-light-5);
	margin-left: 2px;
}
.content p {
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	word-break: break-word;
	color: black;
}
.services ul {
	margin: 0;
	padding: 0;
}
.services li {
	list-style: none;
	display: inline-block;
	height: 24px;
	padding: 0 4px;
	border-radius: 2px;
	text-align: center;
	font-size: 12.2px;
	font-weight: 700;
	margin: 0 4px;
	line-height: 24px;
}
.services li svg.vote {
	font-weight: 400;
	height: 20px;
	line-height: 20px;
	width: 20px;
	fill: var(--color-grey-dark-9);
}
.services li:first-of-type:hover svg,
.services li:first-of-type svg.icon-arrow-up {
	fill: var(--color-red-dark-2);
}
.services li:nth-of-type(3):hover svg,
.services li:nth-of-type(3) svg.icon-arrow-down {
	fill: var(--color-blue);
}
.services li:not(:nth-of-type(2)):hover,
.services li.clicked {
	background-color: #e8e8e8;
}
.services li:not(:nth-of-type(2)) {
	cursor: pointer;
}
.services li:nth-of-type(3) .icon-shift {
	transform: rotate(180deg);
}
.services li:nth-of-type(2) {
	color: black;
}
.services li:nth-of-type(2).up {
	color: var(--color-red-dark-2);
}
.services li:nth-of-type(2).down {
	color: var(--color-blue);
}
</style>
