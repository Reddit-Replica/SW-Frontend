<template>
	<div class="post-card" id="initial-post">
		<div class="votes-box">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				fill="currentColor"
				class="bi bi-caret-up-fill"
				viewBox="0 0 16 16"
				@mouseover="setHover1(true)"
				@mouseleave="setHover1(false)"
				@click="voteUp"
				:class="{ 'hover-fill-up': isHover1 }"
				id="initial-post-up"
			>
				<path
					d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"
				/>
			</svg>
			<div class="text-bold" v-if="votesUpShown">{{ votesUpCount }}</div>
			<div class="text-bold" v-else>{{ votesDownCount }}</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				fill="currentColor"
				class="bi bi-caret-down-fill"
				viewBox="0 0 16 16"
				@mouseover="setHover2(true)"
				@mouseleave="setHover2(false)"
				@click="voteDown"
				:class="{ 'hover-fill-down': isHover2 }"
				id="initial-post-down"
			>
				<path
					d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
				/>
			</svg>
		</div>
		<div class="post-box">
			<div class="flex-center div-margin div-1">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-pin-angle-fill green-icon"
					viewBox="0 0 16 16"
					id="pin-icon"
				>
					<path
						d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"
					/>
				</svg>
				<span class="text-bold" id="pin-by">PINNED BY MODERATORS</span>
			</div>

			<div class="div-margin text-small">
				Posted by u/<span id="initial-post-by">HodaGamal</span>
				<span id="initial-post-from">11 days</span> ago
			</div>

			<div class="div-margin text-big" id="initial-post-sub-name">r/Vue</div>

			<div class="div-margin flex-center">
				<span class="text-bold text-red" id="live">LIVE</span>
				<span class="text-small" id="join-now">join now</span>
			</div>

			<div class="flex-icons text-bold">
				<div class="icons" id="initial-post-icon-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-chat-square"
						viewBox="0 0 16 16"
					>
						<path
							d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
						/>
					</svg>
					<span class="icon-text icon-text-1">0</span>
				</div>
				<div class="icons" id="initial-post-icon-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-arrow-90deg-right"
						viewBox="0 0 16 16"
					>
						<path
							fill-rule="evenodd"
							d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
						/>
					</svg>
					<span class="icon-text icon-text-1">Share</span>
				</div>
				<div class="icons" id="initial-post-icon-3">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-check-circle"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
						/>
						<path
							d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"
						/>
					</svg>
					<span class="icon-text icon-text-1">Approve</span>
				</div>
				<div class="icons" id="initial-post-icon-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-slash-circle"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
						/>
						<path
							d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"
						/>
					</svg>
					<span class="icon-text icon-text-1">Remove</span>
				</div>
				<div class="icons" id="initial-post-icon-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-shield"
						viewBox="0 0 16 16"
					>
						<path
							d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"
						/>
					</svg>
				</div>
				<div class="icons" @click="toggleIconsList" id="initial-post-icon-15">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-three-dots"
						viewBox="0 0 16 16"
					>
						<path
							d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
						/>
					</svg>
				</div>
				<div
					class="icons-list"
					v-if="iconsListShown"
					id="initial-post-icon-list"
				>
					<button class="icon-button" id="initial-post-icon-6">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-pen"
								viewBox="0 0 16 16"
							>
								<path
									d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
								/>
							</svg>
							<span class="icon-text text-bold">Edit Post</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-7">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-bookmark"
								viewBox="0 0 16 16"
							>
								<path
									d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
								/>
							</svg>
							<span class="icon-text text-bold">Save</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-8">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-eye-slash"
								viewBox="0 0 16 16"
							>
								<path
									d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"
								/>
								<path
									d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"
								/>
								<path
									d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"
								/>
							</svg>
							<span class="icon-text text-bold">Hide</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-9">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-calendar4"
								viewBox="0 0 16 16"
							>
								<path
									d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"
								/>
							</svg>
							<span class="icon-text text-bold">Add Event Start Time</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-10">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-collection"
								viewBox="0 0 16 16"
							>
								<path
									d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"
								/>
							</svg>
							<span class="icon-text text-bold">Add To Collection</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-11">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-trash2"
								viewBox="0 0 16 16"
							>
								<path
									d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z"
								/>
							</svg>
							<span class="icon-text text-bold">Delete</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-12">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-square"
								viewBox="0 0 16 16"
							>
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
								/>
							</svg>
							<span class="icon-text text-bold">Mark As Spoiler</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-13">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-square"
								viewBox="0 0 16 16"
							>
								<path
									d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
								/>
							</svg>
							<span class="icon-text text-bold">Mark As NSFW</span>
						</div>
					</button>
					<button class="icon-button" id="initial-post-icon-14">
						<div class="icons icons-hover">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								class="bi bi-check-square-fill"
								viewBox="0 0 16 16"
							>
								<path
									d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"
								/>
							</svg>
							<span class="icon-text text-bold"
								>Send Me Replay Notification</span
							>
						</div>
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
			isHover1: false,
			isHover2: false,
			votesUpCount: 0,
			votesDownCount: 0,
			votesUpShown: true,
			iconsListShown: false,
		};
	},
	methods: {
		//@vuese
		//Check hovering on up vote icon
		//@arg boolen to check if hovering/clickig or not
		setHover1(shown) {
			this.isHover1 = shown;
		},
		//@vuese
		//Check hovering on down vote icon
		//@arg boolen to check if hovering/clickig or not
		setHover2(shown) {
			this.isHover2 = shown;
		},
		//@vuese
		//Show/Hide votes up count
		//@arg boolen to choose showing or hiding up votes
		toggleVotesUp(shown) {
			this.votesUpShown = shown;
		},
		//@vuese
		//Show/Hide icons list
		//@arg no argument
		toggleIconsList() {
			this.iconsListShown = !this.iconsListShown;
		},

		//@vuese
		//Increase votes up count
		//@arg no argument
		voteUp() {
			this.setHover1(true);
			this.setHover2(false);
			this.votesUpCount++;
			this.toggleVotesUp(true);
		},
		//@vuese
		//Increase votes down count
		//@arg no argument
		voteDown() {
			this.setHover2(true);
			this.setHover1(false);
			this.votesDownCount++;
			this.toggleVotesUp(false);
		},
	},
};
</script>

<style scoped>
.post-card {
	background: var(--color-white-1);
	display: flex;
	flex-direction: row;
	margin-bottom: 1.2rem;
	border-radius: 0.4rem;
}
.post-card:hover {
	border: var(--line-7);
	outline: none;
}
.votes-box {
	width: 4rem;
	left: 0;
	top: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	padding: 0.8rem 0 0.8rem 0;
	background: var(--color-grey-light-3);
}
.post-box {
	background: var(--color-white-1);
	position: relative;
}
.div-1 {
	padding-top: 0.8rem;
}
.div-margin {
	margin: 0 0.8rem 0.8rem;
}
.flex-center {
	display: flex;
	align-items: center;
}

.green-icon {
	fill: var(--color-green);
}
.text-bold {
	font-size: 1rem;
	font-weight: 700;
	line-height: 1.2rem;
	letter-spacing: 0.05rem;
	text-transform: uppercase;
}
.text-small {
	font-size: 1.2rem;
	font-weight: 400;
	line-height: 1.6rem;
}
.text-big {
	font-size: 1.8rem;
	font-weight: 500;
	line-height: 2.2rem;
}
.text-red {
	color: var(--color-white-1);
	background: var(--color-primary);
	padding: 0.4rem 0.4rem;
	border-radius: 1.4rem;
	margin-right: 0.4rem;
}
.hover-fill-up {
	fill: #ff5213;
}
.hover-fill-down {
	fill: #7193ff;
}
.flex-icons {
	display: flex;
	flex-grow: 1;
	flex-direction: row;
	align-items: stretch;
	overflow: hidden;
	padding: 0 0.8rem 0 0.4rem;
	/* position: relative; */
}
.icons {
	margin-right: 0.4rem;
	margin-bottom: 0.2rem;
	padding: 0.8rem;
	display: flex;
	align-items: center;
	word-break: normal;
}
.icons:hover {
	background-color: var(--color-grey-light-3);
	border-radius: 0.4rem;
}
.icon-text {
	margin-left: 0.6rem;
}
.icons-list {
	border: var(--line-8);
	box-shadow: var(--shadow-menu);
	border-radius: 0.4rem;
	color: var(--color-dark-4);
	background-color: var(--color-white-1);
	display: flex;
	flex-direction: column;
	overflow: hidden;
	position: absolute;
	z-index: 10;
	left: 40%;
	top: 100%;
}
button {
	border: none;
	text-align: left;
}
.icon-button {
	background-color: var(--color-white-1);
	color: var(--color-grey-dark-2);
	fill: var(--color-grey-dark-2);
}
.icons-hover:hover {
	background-color: var(--color-blue-light-2);
	color: var(--color-dark-4);
	fill: var(--color-dark-4);
	margin: 0;
}
@media only screen and (max-width: 30rem) {
	.icon-text-1 {
		display: none;
	}
}
</style>
