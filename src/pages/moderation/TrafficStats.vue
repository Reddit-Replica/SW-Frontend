<template>
	<div class="content">
		<div class="text">
			Traffic Stats <span class="small-text">updating every hour</span>
		</div>
		<div class="main-box">
			<div class="main-bar">
				<button
					class="button-bar"
					:class="choosenTitle == 'Pageviews' ? 'clicked' : ''"
					id="pageviews-button"
					@click="chooseTitle('pageviews')"
				>
					Pageviews
				</button>
				<button
					class="button-bar"
					:class="choosenTitle == 'Uniques' ? 'clicked' : ''"
					id="uniques-button"
					@click="chooseTitle('uniques')"
				>
					Uniques
				</button>
				<button
					class="button-bar"
					:class="choosenTitle == 'Members' ? 'clicked' : ''"
					id="members-button"
					@click="chooseTitle('members')"
				>
					Members
				</button>
			</div>
			<div class="numbers-box">
				<span class="number">
					<div class="div-number">
						<div class="num">0</div>
						<div class="desc">Total - Last 24 hours</div>
					</div>
				</span>
				<span class="number">
					<div class="div-number">
						<div class="num">389</div>
						<div class="desc">Total - Last 7 days</div>
					</div>
				</span>
				<span class="number">
					<div class="div-number">
						<div class="num">464</div>
						<div class="desc">Total - Last month</div>
					</div>
				</span>
			</div>
			<div class="chart-box">
				<span class="chart-title">{{ choosenTitle }}</span>
				<div class="chart">
					<div class="inner-box-chart">
						<div class="box-1">
							<canvas class="canvas"></canvas>
						</div>
						<div class="box-color">
							<div class="buttons">
								<button class="button">
									<div class="color">
										<div class="color-box-blue"></div>
										<div class="span">
											<span class="span-text" id="joined-button">Joined</span>
										</div>
									</div>
								</button>
								<button class="button">
									<div class="color">
										<div class="color-box-yellow"></div>
										<div class="span">
											<span class="span-text" id="left-button"> Left</span>
										</div>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="main-box">
			<div class="main-bar">
				<button
					class="button-bar"
					:class="choosenSecondTitle == 'Day' ? 'clicked' : ''"
					@click="chooseSecondTitle('day')"
					id="day-button"
				>
					Day
				</button>
				<button
					class="button-bar"
					:class="choosenSecondTitle == 'Day of week' ? 'clicked' : ''"
					@click="chooseSecondTitle('day of week')"
					id="day-of-week-button"
				>
					Day of week
				</button>
				<button
					class="button-bar"
					:class="choosenSecondTitle == 'Month' ? 'clicked' : ''"
					@click="chooseSecondTitle('month')"
					id="month-button"
				>
					Month
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			choosenTitle: 'Pageviews',
			choosenSecondTitle: 'Day',
		};
	},
	methods: {
		// @vuese
		//handle choose title
		// @arg The argument is a string value representing chosen value
		chooseTitle(title) {
			if (title == 'pageviews') {
				this.choosenTitle = 'Pageviews';
			} else if (title == 'uniques') {
				this.choosenTitle = 'Uniques';
			} else if (title == 'members') {
				this.choosenTitle = 'Members';
			}
		},
		// @vuese
		//handle choose second title
		// @arg The argument is a string value representing chosen value
		chooseSecondTitle(title) {
			if (title == 'day') {
				this.choosenSecondTitle = 'Day';
			} else if (title == 'day of week') {
				this.choosenSecondTitle = 'Day of week';
			} else if (title == 'month') {
				this.choosenSecondTitle = 'Month';
			}
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
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
	color: var(--color-dark-2);
	margin-bottom: 1.6rem;
}
.small-text {
	font-family: Noto Sans, Arial, sans-serif;
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
	margin-bottom: 1.2rem;
	padding-left: 0.4rem;
}
.main-box {
	background-color: var(--main-white-color);
	border-radius: 0.4rem;
	margin-bottom: 1.6rem;
	max-width: 112.4rem;
	overflow: auto;
}
.main-bar {
	height: 4.9rem;
}
.button-bar {
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.8rem;
	color: var(--color-dark-3) !important;
	margin: 0.8rem 0 0 1.6rem;
	padding-bottom: 0.5rem !important;
	background: transparent;
	border: none;
	color: inherit;
	cursor: pointer;
	padding: initial;
}
.clicked {
	color: #0079d3 !important;
	border-bottom: 4px solid #0079d3;
}
.numbers-box {
	display: -ms-flexbox;
	display: flex;
	padding-top: 1.6rem;
	flex-direction: row;
	justify-content: space-around;
}
.number {
	background-color: var(--main-white-color);
	border: 1px solid rgba(26, 26, 27, 0.1);
	border-radius: 0.4rem;
	height: 9.2rem;
}
.div-number {
	line-height: 4.4rem;
	padding: 1.6rem;
}
.num {
	font-size: 3.2rem;
	font-weight: 400;
	color: var(--color-dark-3);
}
.desc {
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.5px;
	line-height: 1.2rem;
	text-transform: uppercase;
	color: var(--color-grey-dark-8);
}
.chart-box {
	display: flex;
	max-height: 52.5rem;
}
.chart-title {
	font-size: 1.4rem;
	font-weight: 700;
	line-height: 1.8rem;
	transform: rotate(-90deg);
	width: 5.4rem;
	height: 1.9rem;
	line-height: 1.2rem;
	margin-top: 13.5rem;
}
.chart {
	padding: 1.6rem 0 0.8rem;
}
.inner-box-chart {
	display: -ms-flexbox;
	display: flex;
	-ms-flex-direction: row;
	flex-direction: row;
}
.box-1 {
	color: var(--color-dark-3);
	-ms-flex: 1 1 100%;
	flex: 1 1 100%;
	width: 100%;
}
.canvas {
	display: block;
	box-sizing: border-box;
	height: 30rem;
	/* width: 94rem; */
}
.box-color {
	flex: 0 0;
}
.buttons {
	width: 12rem;
}
.button {
	padding: 6px;
	background: transparent;
	border: none;
	color: inherit;
	cursor: pointer;
	padding: initia;
}
.color {
	align-items: center;
	display: flex;
}
.color-box-blue {
	background-color: rgb(0, 121, 211);
	border: 2px solid rgb(0, 121, 211);
	border-radius: 2px;
	height: 1.2rem;
	margin-right: 5px;
	width: 1.2rem;
}
.color-box-yellow {
	background-color: rgb(255, 176, 0);
	border: 2px solid rgb(255, 176, 0);
	border-radius: 2px;
	height: 1.2rem;
	margin-right: 5px;
	width: 1.2rem;
}
.span {
	flex: 1 1 100%;
	overflow: hidden;
	width: 100%;
}
.span-text {
	font-size: 1.4rem;
	font-weight: 400;
	line-height: 2.1rem;
	color: var(--color-dark-3);
	font-family: IBMPlexSans, Arial, sans-serif;
}
</style>
