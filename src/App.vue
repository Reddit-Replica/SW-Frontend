<template>
	<!-- router view for display pages -->
	<!-- <router-view v-slot="slotProps" :key="$route.fullPath">
		<transition name="route" mode="out-in">
			<component :is="slotProps.Component"></component>
		</transition>
	</router-view> -->
	<router-view></router-view>
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
	--color-Primary-light-2: #f79470;
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
	--color-grey-light-8: #eceff1;
	--color-grey-light-9: #edeff1;
	--color-grey-light-10: #edeff1;
	--color-grey-light-11: #ececf4;
	--color-grey-light-12: #e8e8e8;
	--color-grey-light-13: #e0dfdf;
	--color-grey-light-14: #ededed;
	--color-grey-light-15: #efefef;
	--color-grey-light-16: #898989;

	/* dark grey colors */
	--color-grey-dark-1: #333;
	--color-grey-dark-2: #777;
	--color-grey-dark-3: #999;
	--color-grey-dark-4: rgb(177, 176, 176);
	--color-grey-dark-5: #edeff1;
	--color-grey-dark-6: #343536;
	--color-grey-dark-7: #9c9c9c;
	--color-grey-dark-8: #878a8c;
	--color-grey-dark-9: #909495;
	--color-grey-dark-10: #868a8c;
	--color-grey-dark-11: #bdbfc0;

	/* black colors */
	--color-dark-1: #000;
	--color-dark-2: #222222;
	--color-dark-3: #1c1c1c;
	--color-dark-4: #1a1a1b;

	--color-orange: #ff2c00;

	--color-red-dark-1: #ea0027;
	--color-red-dark-2: #cc3700;
	--color-red-dark-3: #ff4500;

	--color-pink: #ff64ae;
	--color-pink-2: #fff9fb;
	--color-pink-3: #fcbcdc;
	--color-pink-4: #f7f1f4;
	--color-pink-5: #fbdeeb;

	/* blue colors */
	--color-blue: #6094fe;
	--color-blue-2: #0079d3;
	--color-blue-3: #3293db;
	--color-blue-4: #336699;
	--color-blue-5: #83afdc;
	--color-blue-6: #0079f3;
	--color-blue-7: #24a0ed;
	--color-blue-light: #43c6f9;
	--color-blue-light-2: #e5f5fd;
	--color-blue-light-3: #33a8ff;
	--color-blue-light-4: #f6f7f8;
	--color-blue-light-5: #e5effa;
	--color-baby-blue: #24a0ed1a;

	/* green colors */
	--color-green: rgb(62, 231, 62);
	--color-green-2: #00a050;

	--color-background: #dae0e6;

	/* shadow variables */
	--shadow-dark: 0 2rem 6rem rgba(0, 0, 0, 0.3);
	--shadow-light: 0 2rem 5rem rgba(0, 0, 0, 0.06);
	--shadow-menu: 0 2px 4px 0 rgba(28, 28, 28, 0.2);

	/* border variables */
	--line: 1px solid var(--color-grey-light-2);
	--line-2: 1px solid rgb(2, 2, 206);
	--line-3: 1px solid var(--color-white-1);
	--line-4: 2px solid var(--color-white-1);
	--line-5: 1px solid var(--color-blue-2);
	--line-6: 1px solid var(--color-dark-1);
	--line-7: 1px solid var(--color-grey-dark-3);
	--line-8: 1px solid var(--color-grey-light-3);
	--line-9: 1px solid var(--color-blue-4);
	--line-10: 1px solid var(--color-grey-light-4);
	--line-11: 1px solid var(--color-blue-light-5);
	--line-dashed: 1px dashed var(--color-grey-light-2);
	--line-dashed-2: 1px dashed var(--color-grey-dark-2);
	--line-dashed-3: 2px dashed var(--color-grey-light-12);

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
		var(--color-background),
		var(--color-background)
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
