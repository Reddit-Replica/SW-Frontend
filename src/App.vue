<template>
	<!-- router view for display pages -->
	<router-view v-slot="slotProps">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
/* import fonts */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Noto+Sans:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Work+Sans:ital,wght@0,200;0,500;0,700;1,800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@600&family=Noto+Sans:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Work+Sans:ital,wght@0,200;0,500;0,700;1,800&display=swap');
:root {
	/* orange color (primary) */
	--color-primary: #ff2c00;
	--color-Primary-light: #ff5213;
	--color-Primary-dark: rgb(217, 58, 0);

	/* white colors */
	--color-white-1: white;
	--main-white-color: #ffffff;

	/* light grey colors */
	--color-grey-light-1: #faf9f9;
	--color-grey-light-2: #f4f2f2;
	--color-grey-light-3: #f0eeee;
	--color-grey-light-4: #ccc;
	--color-grey-light-5: #7c7c7c;
	--color-grey-light-6: #808486;
	--color-grey-light-7: #cacdcf;

	/* dark grey colors */
	--color-grey-dark-1: #333;
	--color-grey-dark-2: #777;
	--color-grey-dark-3: #999;
	--color-grey-dark-4: rgb(177, 176, 176);
	--color-grey-dark-5: #edeff1;
	--color-grey-dark-6: #343536;

	/* black colors */
	--color-dark-1: #000;
	--color-dark-2: #222222;
	--color-dark-3: #1c1c1c;
	--color-dark-4: #1a1a1b;

	--color-orange: #ff2c00;

	--color-red-dark-1: #ea0027;

	/* blue colors */
	--color-blue: #6094fe;
	--color-blue-2: #0079d3;
	--color-blue-3: #3293db;
	--color-blue-light: rgb(67, 198, 249);
	--color-blue-light-2: #e5f5fd;

	/* green colors */
	--color-green: rgb(62, 231, 62);

	/* shadow variables */
	--shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
	--shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);

	/* border variables */
	--line: 1px solid var(--color-grey-light-2);
	--line-2: 1px solid rgb(2, 2, 206);
	--line-3: 1px solid var(--color-white-1);
	--line-4: 2px solid var(--color-white-1);
	--line-5: 1px solid var(--color-blue-2);
	--line-6: 1px solid var(--color-dark-1);
	--line-7: 1px solid var(--color-grey-dark-3);
	--line-8: 1px solid var(--color-grey-light-3);
	--line-dashed: 1px dashed var(--color-grey-light-2);
	--line-dashed-2: 1px dashed var(--color-grey-dark-2);

	/* screen sizes variables */
	/* 2000px */
	--bp-largest-1: 125em;
	/* 1200px */
	--bp-largest: 75em;
	/* 1100px */
	--bp-large: 68.75em;
	/* 960 */
	--bp-meduim-1: 60em;
	/* 900px */
	--bp-medium: 56.25em;
	/* 788 */
	--bg-medium-2: 49.25em;
	/* 635 */
	--bg-medium-3: 40em;
	/* 600px */
	--bp-small: 37.5em;
	/* 520 */
	--bg-small-2: 32.5em;
	/* 500px */
	--bp-smallest: 31.25em;
	/* 400 */
	--bg-smallest-2: 25em;

	/* profile page colors */
	--back-color: #1a1a1b;
	--main-blue-color: #277e98;
	--main-black-color: #1f2021;
	--main-grey-color: #353235;
	--main-white-color: #ffffff;
	--main-transparent-color: rgb(15 116 143 / 70%);
	--gray-color: #777;
	--main-duration: 0.5s;
	/*/////////////////////////////////*/
	/* forget colors*/
	--button-color: rgb(217, 58, 0);
}
* {
	margin: 0;
	padding: 0;
}
*,
*::after,
*::before {
	box-sizing: inherit;
}

html {
	box-sizing: border-box;
	font-size: 62.5%;
}

body {
	font-family: 'Open sans', sans-serif;
	font-weight: 400;
	line-height: 1.6;
	color: var(--color-grey-dark-2);
	background-image: linear-gradient(
		to right bottom,
		var(--color-grey-light-2),
		var(--color-grey-light-4)
	);
	background-size: cover;
	background-repeat: no-repeat;

	min-height: 100vh;
}

/* router animation */
.route-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}

.route-leave-to {
	opacity: 0;
	transform: translateY(30px);
}

.route-enter-active {
	transition: all 0.3s ease-out;
}

.route-leave-active {
	transition: all 0.3s ease-in;
}

.route-enter-toو .route-leave-from {
	opacity: 1;
	transform: translateY(0);
}

/* media queries */
@media (max-width: 68.75em) {
	html {
		font-size: 50%;
	}
}
</style>
