<template>
	<div class="submit-footer">
		<div class="footer-item">
			<div class="item item-1">
				<input type="checkbox" id="reply" name="reply" v-model="sendReplies" />
				<span class="label">Send me post reply notifications</span>
			</div>
		</div>
		<div class="footer-item">
			<div class="item item-2">
				<router-link to="/settings/account" target="_blank"
					>Connect accounts to share your post
				</router-link>

				<div class="info-1">
					<div class="info-2">
						<div class="info-box" v-if="infoShown">
							Connect a Twitter account in your User Settings. With a connected
							account you can choose to share new posts you make directly to
							Twitter.
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							class="bi bi-info-circle"
							viewBox="0 0 16 16"
							@mouseover="showInfo"
						>
							<path
								d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
							/>
							<path
								d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			infoShown: false,
			sendReplies: null,
		};
	},
	methods: {
		// @vuese
		// toggle infoshow
		showInfo() {
			this.infoShown = !this.infoShown;
		},
		// @vuese
		// dispatch sendreplies
		// arg boolean value to check if we will send replies or not
		setsendReplies(value) {
			this.$store.commit('posts/setsendReplies', {
				sendReplies: value,
			});
		},
	},
	watch: {
		// @vuese
		// watch  send replies if it changes it's value
		// arg boolean value to check if we will send replies or not
		sendReplies(value) {
			this.sendReplies = value;
			this.setsendReplies(value);
		},
	},
};
</script>
<style scoped>
.submit-footer {
	background-color: var(--color-grey-light-3);
	border-radius: 0 0 6px 6px;
	border-top: 1px solid var(--color-grey-light-3);
	display: flex;
	flex-flow: column;
	padding: 8px 16px 21px;
	position: relative;

	width: 100%;
	margin-top: 8px;

	flex-flow: column;
	margin-right: auto;
	align-self: flex-start;
}
.footer-item {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.item-1 {
	fill: var(--color-blue-2);
	margin-bottom: 8px;

	color: var(--color-grey-dark-1);
	cursor: pointer;
}
.item-2 {
	margin-right: 4px;
	color: var(--color-blue-2);
	display: flex;
	flex-flow: row;
}
a:hover {
	text-decoration: underline;
}
.item {
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
}
.label {
	margin-left: 8px;
	margin-right: 4px;
}
.bi-info-circle {
	color: var(--color-grey-dark-2);
	margin-left: 4px;
}
.info-box {
	box-shadow: 0 2px 4px 0 var(--newCommunityTheme-actionIcon);
	color: var(--color-grey-dark-2);
	padding: 15px;
	text-align: left;
	white-space: pre-line;

	top: 100%px;
	margin-bottom: 5px;
	position: absolute;
	left: 50%;
	position: absolute;
	width: 320px;
	height: 80px;
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	background-color: white;
	border-radius: 5px;
	pointer-events: none;
	transform: translateX(-44%);
	z-index: 2;
	box-shadow: 1px 1px 4px 0 var(--color-grey-dark-2);
	border: 1px solid var(--color-grey-dark-2);
	opacity: 0;
	visibility: hidden;
}
.info-box::before {
	background-color: white;
	content: '';
	height: 10px;
	left: 48%;
	margin-left: -6px;
	margin-top: -9px;
	position: absolute;
	top: 105%;
	transform: rotate(-45deg);
	width: 10px;
	z-index: 1;
}
.info-1:hover .info-box {
	top: -90px;
	visibility: visible;
	opacity: 1;
}
.info-1 {
	position: relative;
}
.info-2 {
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;
}
</style>
