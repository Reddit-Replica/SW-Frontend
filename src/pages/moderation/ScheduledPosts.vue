<template>
	<div class="content">
		<div class="text">Scheduled posts</div>
		<div class="main-box">
			<div class="left-box">
				<div class="left-box-content">
					<div class="left-box-text">
						No scheduled posts in r/{{ subredditName }}
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-clock time-icon"
						viewBox="0 0 16 16"
						id="time-icon"
					>
						<path
							d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"
						/>
						<path
							d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
						/>
					</svg>
					<a href="#" class="left-box-link" id="schedule-post-link"
						>Schedule post</a
					>
				</div>
			</div>
			<div class="right-box">
				<div class="head-right-box">
					Recurring posts
					<div class="empty"></div>
				</div>
				<div class="right-box-content">
					<div class="right-box-text">No recurring posts</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-arrow-clockwise reload-icon"
						viewBox="0 0 16 16"
						id="reload-icon"
					>
						<path
							fill-rule="evenodd"
							d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
						/>
						<path
							d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
						/>
					</svg>
					<a href="#" class="right-box-link" id="schedule-recurring-post"
						>Schedule recurring post</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		// @vuese
		//return subreddit name
		// @type string
		subredditName() {
			return this.$store.state.subredditName;
		},
	},
};
</script>

<style scoped>
.content {
	padding-top: 6.4rem;
	border-radius: 0 0 0.4rem 0.4rem;
	overflow: hidden;
}
.text {
	display: -ms-flexbox;
	display: flex;
	align-items: center;
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-3);
	margin-bottom: 1.6rem;
}
.main-box {
	align-items: flex-start;
	display: -ms-flexbox;
	display: flex;
}
.left-box {
	display: -ms-inline-flexbox;
	display: inline-flex;
	-ms-flex-positive: 1;
	flex-grow: 1;
	margin-right: 1rem;
}
.left-box-content {
	-ms-flex-positive: 1;
	flex-grow: 1;
	padding: 3rem;
	-ms-flex-align: center;
	align-items: center;
	background-color: var(--main-white-color);
	border-radius: 4px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	padding: 9rem 0;
}
.left-box-text {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	padding-top: 3rem;
	color: var(--color-grey-dark-8);
}
.time-icon,
.reload-icon {
	color: var(--color-grey-dark-8);
	font-size: 3rem;
	height: 3rem;
	margin-top: 2.6rem;
	margin-bottom: 2.6rem;
	width: 3rem;
	font-size: 2rem;
	font-weight: 400;
	height: 2rem;
	line-height: 2rem;
	vertical-align: middle;
	width: 2rem;
}
.left-box-link,
.right-box-link {
	font-size: 1.2rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	line-height: 2.4rem;
	color: var(--color-blue-2);
	text-decoration: inherit;
}
.right-box {
	max-width: 33.2rem;
	margin-bottom: 1.2rem;
	display: inline-block;
	-ms-flex-positive: 1;
	flex-grow: 1;
	border: 1px solid var(--color-grey-light-4);
	background-color: rgba(255, 255, 255, 0.8);
}
.head-right-box {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.2rem;
	text-transform: uppercase;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-align: center;
	align-items: center;
	border-bottom: 1px solid var(--color-grey-light-4);
	padding: 1.2rem;
}
.empty {
	display: -ms-inline-flexbox;
	display: inline-flex;
	-ms-flex-align: end;
	align-items: flex-end;
	-ms-flex-pack: end;
	justify-content: flex-end;
	-ms-flex-positive: 1;
	flex-grow: 1;
	height: 2rem;
	min-width: 2rem;
}
.right-box-content {
	padding: 3rem;
	align-items: center;
	background-color: var(--main-white-color);
	border-radius: 4px;
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: column;
	flex-direction: column;
	padding: 9rem 0;
}
.right-box-text {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	padding-top: 3rem;
	color: #878a8c;
	justify-content: center;
	align-items: center;
}
@media (max-width: 50rem) {
	.main-box {
		-ms-flex-direction: column-reverse;
		flex-direction: column-reverse;
	}
}
</style>
