<template>
	<div
		class="grow-box"
		id="grow-comm"
		v-if="shownFirst || shownThird || shownSecond || shownForth"
	>
		<div class="grow-header" @click="toggleGrowBody">
			<span>Grow your community</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-chevron-up"
				viewBox="0 0 16 16"
				v-if="growBodyShown"
				id="show-up-grow"
			>
				<path
					fill-rule="evenodd"
					d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
				/>
			</svg>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				fill="currentColor"
				class="bi bi-chevron-down"
				viewBox="0 0 16 16"
				v-else
				id="show-down-grow"
			>
				<path
					fill-rule="evenodd"
					d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
				/>
			</svg>
		</div>
		<div class="grow-body" v-if="growBodyShown">
			<grow-component
				:index="0"
				:is-shown="shownFirst"
				:color="blue"
				title="Add 5 more posts today"
				content="Make your community lively and welcoming, by adding posts for your
				visitors to interact with."
				link="/submit"
				button="Make a Post"
				@exit="hideFirst"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-plus-lg"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
					/>
				</svg>
			</grow-component>

			<grow-component
				:index="1"
				:is-shown="shownSecond"
				:color="orange"
				title="Share your community"
				content="Spread the word about your community by sharing it on different social
				platforms."
				link="/submit"
				button="Start Sharing"
				@exit="hideSecond"
			>
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
			</grow-component>

			<grow-component
				:index="2"
				:is-shown="shownThird"
				:color="red"
				title="Crosspost your best posts"
				content="Build your community and attract more visitors by crossposting posts to
				other communities."
				link="/submit"
				button="Learn More"
				@exit="hideThird"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-shuffle"
					viewBox="0 0 16 16"
				>
					<path
						fill-rule="evenodd"
						d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
					/>
					<path
						d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"
					/>
				</svg>
			</grow-component>

			<grow-component
				:index="3"
				:is-shown="shownForth && (!shownFirst || !shownSecond || !shownThird)"
				:color="green"
				title="Recruit more members"
				content="Learn how to use invitations to bring more members and moderators to
				your community."
				link="/submit"
				button="Learn More"
				@exit="hideForth"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					class="bi bi-reddit"
					viewBox="0 0 16 16"
				>
					<path
						d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"
					/>
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"
					/>
				</svg>
			</grow-component>
		</div>
	</div>
</template>

<script>
import GrowComponent from './GrowComponent.vue';
export default {
	components: {
		GrowComponent,
	},
	data() {
		return {
			growBodyShown: true,
			blue: '#7193ff',
			orange: '#ffae00',
			red: '#ff585b',
			green: '#0dd3bb',
			shownFirst: true,
			shownSecond: true,
			shownThird: true,
			shownForth: true,
		};
	},
	methods: {
		//@vuese
		//Show/Hide grow your community part
		//@arg no argument
		toggleGrowBody() {
			this.growBodyShown = !this.growBodyShown;
		},
		//@vuese
		//Show/Hide first grow your community option
		//@arg no argument
		hideFirst() {
			this.shownFirst = !this.shownFirst;
		},
		//@vuese
		//Show/Hide second grow your community option
		//@arg no argument
		hideSecond() {
			this.shownSecond = !this.shownSecond;
		},
		//@vuese
		//Show/Hide third grow your community option
		//@arg no argument
		hideThird() {
			this.shownThird = !this.shownThird;
		},
		//@vuese
		//Show/Hide third grow your community option
		//@arg no argument
		hideForth() {
			this.shownForth = !this.shownForth;
		},
	},
};
</script>

<style scoped>
.grow-box {
	padding: 1.6rem;
	background-color: var(--color-white-1);
	border: var(--line-10);
	border-radius: 0.4rem;
	/* max-width: 64rem; */
	margin-bottom: 1.2rem;
	margin-top: 1.2rem;
}

.grow-header {
	color: var(--color-dark-4);
	cursor: pointer;
	display: flex;
	font-weight: 500;
	font-size: 2.2rem;
	line-height: 2.6rem;
	outline: none;
	position: relative;
}
span {
	flex: auto;
}
svg {
	flex: none;
	height: 2.4rem;
	width: 2.4rem;
}
</style>
